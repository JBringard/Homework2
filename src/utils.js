module.exports = {

  async checkValidation(error) {
    if (error.code === 11000
        || error.stack.includes('ValidationError')
        || (error.reason !== undefined && error.reason.code === 'ERR_ASSERTION')) {
      return 400;
    }
    return 500;
  },

  async doActionThatMightFailValidation(request, response, action) {
    try {
      await response.json(action());
    } catch (e) {
      await response.sendStatus(this.checkValidation(e));
    }
  },

  async deleteValidation(request, response, action) {
    try {
      if (await action() > 0) {
        response.sendStatus(200);
      } else {
        response.sendStatus(404);
      }
    } catch (e) {
      await response.sendStatus(this.checkValidation(e));
    }
  },

  async checkIfResultIsNullValidation(request, response, action) {
    try {
      const result = await action();
      if (result != null) {
        response.json(result);
      } else {
        response.sendStatus(404);
      }
    } catch (e) {
      await response.sendStatus(this.checkValidation(e));
    }
  },

  async createEntityValidation(request, response, action) {
    try {
      await action();
      response.sendStatus(201);
    } catch (e) {
      await response.sendStatus(this.checkValidation(e));
    }
  },

  async replaceEntityValidation(request, response, action) {
    try {
      await action();
      response.sendStatus(200);
    } catch (e) {
      await response.sendStatus(this.checkValidation(e));
    }
  },
};

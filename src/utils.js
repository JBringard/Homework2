module.exports = {

  checkError(e) {
    if (e.code === 11000 || e.stack.includes('ValidationError')
      || (e.reason !== undefined && e.reason.code === 'ERR_ASSERTION')) {
      return 400;
    }
    return 500;
  },

  async doActionThatMightFailValidation(request, response, action) {
    try {
      response.json(await action());
    } catch (e) {
      response.sendStatus(this.checkError(e));
    }
  },

  async deleteValidation(request, response, action) {
    try {
      const result = await action();
      if (result > 0) {
        response.sendStatus(200);
      } else {
        response.sendStatus(404);
      }
    } catch (e) {
      response.sendStatus(this.checkError(e));
    }
  },

  async checkIfResultIsNull(request, response, action) {
    try {
      const result = await action();
      if (result != null) {
        response.json(result);
      } else {
        response.sendStatus(404);
      }
    } catch (e) {
      response.sendStatus(this.checkError(e));
    }
  },

  async createEntityValidation(request, response, action) {
    try {
      await action();
      response.sendStatus(201);
    } catch (e) {
      response.sendStatus(this.checkError(e));
    }
  },

  async replaceEntityValidation(request, response, action) {
    try {
      await action();
      response.sendStatus(200);
    } catch (e) {
      response.sendStatus(this.checkError(e));
    }
  },
};

import uuid from "uuid";

module.exports = {
  // Create new user
  async signin() {},

  // Sign in with a user that already exists
  async login() {
    console.log(uuid.v4());
  },
};

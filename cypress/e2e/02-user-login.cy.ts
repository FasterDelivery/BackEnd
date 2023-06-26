let token;
let userId;
export { token, userId };

describe("User Login", () => {
  it("should login a user and generate a token", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3001/api/user/login",
      body: {
        email: "example@example.com",
        password: "password123"
      }
    }).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body).to.have.property("token");
      expect(response.body).to.have.property("user");
      token = response.body.token;
      userId = response.body.user.id;
    });
  });
});

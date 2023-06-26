describe("User Registration", () => {
  it("should register a new user", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3001/api/user/register",
      body: {
        email: "example@example.com",
        name: "example",
        lastname: "example",
        address: "example",
        phone: 12347890,
        password: "password123"
      }
    }).then((response) => {
      expect(response.status).to.equal(201);
    });
  });
});

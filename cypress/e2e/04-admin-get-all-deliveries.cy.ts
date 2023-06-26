let adminToken;
export { adminToken };

describe("Get All Deliveries", () => {
  beforeEach(() => {
    cy.request({
      method: "POST",
      url: "http://localhost:3001/api/user/login",
      body: {
        email: "admin@example.com",
        password: "admin"
      }
    }).then((response) => {
      adminToken = response.body.token;
      Cypress.env("adminToken", adminToken);
    });
  });

  it("should get all deliveries", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3001/api/admin/deliveries",
      headers: {
        Authorization: `Bearer ${adminToken}`,
        "Content-Type": "application/json"
      }
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});

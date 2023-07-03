import { adminToken } from "./04-admin-get-all-deliveries.cy";

describe("Get All Active Deliveries", () => {
  it("should get all active deliveries", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3001/api/user/deliveries/active",
      headers: {
        Authorization: `Bearer ${adminToken}`,
        "Content-Type": "application/json"
      }
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});

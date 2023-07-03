import { adminToken } from "./04-admin-get-all-deliveries.cy";

describe("Get All Packages", () => {
  it("should get all packages", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3001/api/packages/",
      headers: {
        Authorization: `Bearer ${adminToken}`,
        "Content-Type": "application/json"
      }
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});

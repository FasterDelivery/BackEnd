import { token, userId } from "./02-user-login.cy";

describe("User Editing", () => {
  it("should edit a user using the exported token", () => {
    cy.log("Response body:", token, userId);
    cy.request({
      method: "PUT",
      url: `http://localhost:3001/api/user/edit/${userId}`,
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: {
        name: "example user",
        age: 30
      }
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});

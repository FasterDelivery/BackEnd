import { token, userId } from "./02-user-login.cy";

describe("User Deletion", () => {
  it("should delete a user using the token", () => {
    cy.request({
      method: "DELETE",
      url: `http://localhost:3001/api/user/delete/${userId}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});

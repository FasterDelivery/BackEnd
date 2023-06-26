import { newPackage } from "./06-admin-create-package.cy";
import { adminToken } from "./04-admin-get-all-deliveries.cy";

describe("Delete Package", () => {
  it("should delete a package", () => {
    const packageId = newPackage.id;

    cy.request({
      method: "DELETE",
      url: `http://localhost:3001/api/admin/delete/package/${packageId}`,
      headers: {
        Authorization: `Bearer ${adminToken}`
      }
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});

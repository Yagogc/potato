describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("loads", () => {});

  it("load list", () => {
    cy.get("article");
  });

  it("click first photo", () => {
    cy
      .get("article")
      .first()
      .click();
  });

  it("click first photo and go back home", () => {
    cy
      .get("article")
      .first()
      .click();
    cy.get("header a").click();
    cy.location().should(loc => {
      expect(loc.origin).to.eq("http://localhost:3000");
    });
  });
});

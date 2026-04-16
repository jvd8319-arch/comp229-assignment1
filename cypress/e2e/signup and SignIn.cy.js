describe("Sign Up and Login Flow", () => {
  const firstname = "javed";
  const lastname = "khan";
  const email = "javed.khan@gmail.com";

  it("should sign up and then login successfully", () => {

    // Visit home page
    cy.visit("http://localhost:5173");

    // Go to Sign Up page
    cy.contains("Sign Up").click({ force: true });

    // Fill Sign Up form
    cy.get('input[name="firstname"]').type(firstname);
    cy.get('input[name="lastname"]').type(lastname);
    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type("123456");

    // Submit Sign Up form
    cy.get("form").submit();

    // Expect success alert
    cy.on("window:alert", (txt) => {
      expect(txt.toLowerCase()).to.include("success");
    });

    // Redirect to login page
    cy.url().should("include", "/login");

    // SIGN-IN FLOW (from your recording)
    cy.get("input[type='email']").click();
    cy.get("input[type='email']").type(email);
    cy.get("input[type='password']").type("123456");

    // Submit login using ENTER (your recording)
    cy.get("input[type='password']").type("{enter}");

    // Expect login success alert
    cy.on("window:alert", (txt) => {
      expect(txt.toLowerCase()).to.include("success");
    });

    // Redirect to users page
    cy.url().should("include", "/users");
  });
});

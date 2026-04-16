describe("Add Project", () => {
  it("should login and add a new project", () => {
    cy.viewport(760, 650);

    // Step 1: Login
    cy.visit("http://localhost:5173/login");

    cy.get("input[type='email']")
      .clear()
      .type("admin@example.com");

    cy.get("input[type='password']")
      .clear()
      .type("123456");

    cy.contains("button", "Login").click();

    // Verify login success
    cy.url().should("include", "/users");

    // Step 2: Navigate to Projects List
    cy.visit("http://localhost:5173/projects-list");

    // Step 3: Click + Add New Project
    cy.contains("+ Add New Project").click();

    // Verify navigation to Add Project page
    cy.url().should("include", "/add-project");

    // Step 4: Enter Project Title
    cy.get("input[type='text']")
      .first()
      .clear()
      .type("Healthcare Appointment Tracker");

    // Step 5: Enter Description
    cy.get("textarea")
      .clear()
      .type("Healthcare Appointment Tracker");

    // Step 6: Enter Date
    // Your UI uses <input type='date'> but Cypress must type directly
    cy.get("input[type='date']")
      .clear()
      .type("2026-04-30");

    // Step 7: Click Add Project button
    cy.contains("button", "Add Project").click();

    // Step 8: Verify redirect back to Projects List
    cy.url().should("include", "/projects");

    // Step 9: Verify project appears in list
    cy.contains("Healthcare Appointment Tracker").should("exist");
  });
});

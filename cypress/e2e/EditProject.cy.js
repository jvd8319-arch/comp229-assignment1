describe("Edit Project", () => {
  it("should login and edit an existing project", () => {
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

    // Step 3: Click Edit on the first project
    // Adjust selector if your Edit button text is different
    cy.contains("Edit").first().click();

    // Step 4: Verify Edit Project page
    cy.url().should("include", "/edit-project");

    // Step 5: Update Project Title
    cy.get("input[type='text']")
      .first()
      .clear()
      .type("Healthcare Appointment Tracker - Updated");

    // Step 6: Update Description
    cy.get("textarea")
      .clear()
      .type("Updated description for testing.");

    // Step 7: Update Date
    // Your date field accepts typed text
    cy.get("input[type='date']")
      .clear()
      .type("2026-07-15");

    // Step 8: Click Update Project button
    cy.contains("button", "Update Project").click();

    // Step 9: Verify redirect back to Projects List
    cy.url().should("include", "/projects");

    // Step 10: Verify updated project appears in list
    cy.contains("Healthcare Appointment Tracker - Updated").should("exist");
  });
});

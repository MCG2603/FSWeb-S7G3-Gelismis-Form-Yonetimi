


describe('startTest', function(){

beforeEach(()=>{
    cy.visit('http://localhost:3000/');
});
it('inputTest',function(){

    cy.get("[data-cy=input-mail]").type("mirac@gmail.com");
    cy.get("[data-cy=input-mail]").should("have.value","mirac@gmail.com");
});
it('submit-test-pasive',function(){

    cy.get("[data-cy=input-mail]").type("mirac@gmail.com");
    cy.get("[data-cy=input-pass]").type("1111111");
    cy.get("[data-cy=input-button]").should("be.disabled");
});

it('submit-test-active',function(){

    cy.get("[data-cy=input-mail]").type("mirac@gmail.com");
    cy.get("[data-cy=input-pass]").type("1111111");
    cy.get("[data-cy=input-check]").click();
    cy.get("[data-cy=input-button]").should("not.be.disabled");
   
});

it('submit-test-nopassword',function(){

    cy.get("[data-cy=input-mail]").type("mirac@gmail.com");
    cy.get("[data-cy=input-pass]").type(" ");
    cy.get("[data-cy=input-check]").click();
    cy.get("[data-cy=input-button]").should("be.disabled");
   
})

}
)
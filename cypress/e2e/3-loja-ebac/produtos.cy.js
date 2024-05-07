/// <reference types="cypress"/>

describe('Funcionalidade Produtos', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
  });

  it('Deve selecionar um produto da lista', () => {
    cy.get('.product-block')
    //.first().last()
    //.eq(3) 0 = primeiro item
    .contains('Abominable Hoodie')
    .click()
    cy.get('#tab-title-description > a').should('exist')
  });
  
});
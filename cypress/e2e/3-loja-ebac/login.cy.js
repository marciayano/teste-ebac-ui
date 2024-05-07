/// <reference types="cypress"/>

describe('Funcionalidade Login', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });

  afterEach(() => {
    cy.screenshot()
  });

  it('Deve fazer login com sucesso',() => {
    cy.get('#username').type('marcia@teste.com.br')
    cy.get('#password').type('teste@123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, marcia (não é marcia? Sair)')
  })

  it('Deve exibir mensagem de erro com usuário invalido', () => {
    cy.get('#username').type('invalido')
    cy.get('#password').type('teste@123')
    cy.get('.woocommerce-form > .button').click()
    //cy.get('.woocommerce-error').should('contain','Erro: O usuário invalido não está registrado neste site.')
    cy.get('.woocommerce-error').should('exist')
  });

  it('Deve exibir mensagem de erro com senha invalida', () => {
    cy.get('#username').type('marcia@teste.com.br')
    cy.get('#password').type('invalido')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('exist')
  });

})
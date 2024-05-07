/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')


describe('Funcionalidade Login', () => {

  beforeEach(() => {
    cy.visit('minha-conta')
  });

  //afterEach(() => {cy.screenshot()});

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

  it('Deve fazer login com sucesso usando massa de dados', () => {
    cy.get('#username').type(perfil.usuario)
    cy.get('#password').type(perfil.senha)
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, marcia (não é marcia? Sair)')
  });

  it.only('Deve fazer login com sucesso usando Fixture', () => {
    cy.fixture('perfil').then(dados => {
        cy.get('#username').type(dados.usuario, {log: false})
        cy.get('#password').type(dados.senha, {log: false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, marcia (não é marcia? Sair)')
      
    })
  });

})
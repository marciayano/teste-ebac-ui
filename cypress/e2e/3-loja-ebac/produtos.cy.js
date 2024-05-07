/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page"


describe('Funcionalidade Produtos', () => {

  beforeEach(() => {
    produtosPage.visitarUrl()
  });

  it('Deve selecionar um produto da lista', () => {
    //cy.get('.product-block')
    //.first().last()
    //.eq(3) 0 = primeiro item
    //.contains('Abominable Hoodie')
    //.click()
    //cy.get('#tab-title-description > a').should('exist')
    produtosPage.buscarProdutoLista('Ajax Full-Zip Sweatshirt')
  });

  it('Deve buscar um produto com sucesso', () => {
    let produto = 'Aero Daily Fitness Tee'
    produtosPage.buscarProduto(produto)
    cy.get('.product_title').should('contain',produto)
  });

  it('Deve visitar a pagina do produto', () => {
    produtosPage.visitarProduto('aero-daily-fitness-tee')
    cy.get('.product_title').should('contain','Aero Daily Fitness Tee')
  });

  it('Deve adicionar um produto ao carrinho', () => {
    let qtd = 7
    produtosPage.buscarProduto('Aether Gym Pant')
    produtosPage.addProdutoCarrinho('33','Brown',qtd)
    cy.get('.woocommerce-message').should('contain', qtd + ' × “Aether Gym Pant” foram adicionados no seu carrinho.')
  });

  it.only('Deve adicionar um produto ao carrinho buscando da massa de dados', () => {
    cy.fixture('produtos').then(dados => {
      produtosPage.buscarProduto(dados[1].nomeProduto)
      produtosPage.addProdutoCarrinho(dados[1].tamanho, dados[1].cor,dados[1].quantidade)
      cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
    })
    
    
  });
  
});
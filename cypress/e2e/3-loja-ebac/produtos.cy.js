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
    
  });

  it('Deve adicionar um produto ao carrinho', () => {
    
  });
  
});
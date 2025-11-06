describe('Automaçao do Front-End do Serverest', () => {
  it('Realiza o cadastro de Usuario',()=>{
      cy.fixture("usuario").then(function(usuario){
        const user = usuario.criar
        cy.visit('https://front.serverest.dev/login')
        cy.contains('Cadastre-se').click()
        cy.get('#nome').type(user.nome)
        cy.get('#email').type(user.email)
        cy.get('#password').type(user.password)
        cy.get('#administrador').check()
        cy.get('[data-testid="cadastrar"]').click()
      })
    })
})
describe('Automaçao do Front-End do Serverest', () => {    
  beforeEach(()=>{
       cy.session('usuario',()=>{ 
        cy.fixture("usuario").then(function(usuario){
            const user = usuario.criar
           cy.Login(user)
        })  
       }) 
  })
    it('Listar usuarios',()=>{
        cy.visit('https://front.serverest.dev/admin/home')
        cy.contains('Listar Usuários').click()
    })
    it('Cadastro de Produto',()=>{
       cy.fixture("produto").then(function(produto){
        const prod = produto.criar
        cy.visit('https://front.serverest.dev/admin/home')
        cy.contains('Cadastrar Produtos').click()
        cy.get('#nome').type(prod.nome)
        cy.get('#price').type(prod.preco)
        cy.get('#description').type(prod.descricao)
        cy.get('#quantity').type(prod.quantidade)
        cy.get('#imagem').as('fileInput').attachFile('star.jpeg')
        cy.contains("button",'Cadastrar').click()
      })
    })
    it('Listar Produto',()=>{
        cy.visit('https://front.serverest.dev/admin/home')
        cy.contains('Listar Produtos').click()
        cy.contains('Lista dos Produtos').should('be.visible')
        cy.contains('Cafe').should('be.visible')
        cy.contains('Cafe frapucchino').should('exist')
    })
    it('Listar Produto - Teste via Intercept', () => {
        cy.visit('https://front.serverest.dev/admin/home')
        cy.intercept('GET', 'https://serverest.dev/produtos', {
            statusCode: 200,
            body: {
                produtos: [
                    { nome: 'Cafe', preco: 10, descricao: 'Cafe preto', quantidade: 5 },
                    { nome: 'Cafe frapucchino', preco: 15, descricao: 'Cafe gelado', quantidade: 3 }
                ]
            }
        }).as('ListaProd')
        cy.contains('Listar Produtos').click()
        cy.wait('@ListaProd')
        cy.contains('Cafe').should('be.visible')
        cy.contains('Cafe frapucchino').should('exist')
    })
})
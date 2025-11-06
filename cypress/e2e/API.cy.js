describe('Automaçao do Back-End do Serverest', () => {
  it('Criar Usuario',()=>{
      cy.fixture('usuario').then(function(usuario){
          const user = usuario.criar
          cy.Cria_Usuario(user)
      }).then((response)=>{
        expect(response.status).to.eq(201)
        expect(response.body.message).to.eq('Cadastro realizado com sucesso')
        Cypress.env('id',response.body._id)})
  })
  it('Login Usuario',()=>{
      cy.fixture('usuario').then(function(usuario){
          const email = usuario.criar.email
          const senha = usuario.criar.password
          cy.Login_Usuario(email,senha)
      }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.message).to.eq('Login realizado com sucesso')
        Cypress.env('token',response.body.authorization)})
  })
  it('Listar Usuário com ID válido',()=>{  
      cy.fixture('usuario').then(function(usuario){
          const id = Cypress.env('id')
          cy.Listar_Usuario(id)
      }).then((response)=>{
        expect(response.status).to.eq(200)})    
  })
  it('Teste Negativo - Lista Usuario com ID inválido',()=>{  
      cy.fixture('usuario').then(function(usuario){
          const id = 123
          cy.Listar_Usuario(id)
      }).then((response)=>{
        expect(response.status).to.eq(400)})    
  })
  it('Cria Produto',()=>{  
      cy.fixture('produto').then(function(produto){
          const prod = produto.criar
          cy.Criar_Produto(prod)
      }).then((response)=>{
        expect(response.status).to.eq(201)
        expect(response.body.message).to.eq('Cadastro realizado com sucesso')
        Cypress.env('idp',response.body._id)})   
  })
  it('Exclui Produto',()=>{  
       cy.Excluir_Produto()
        .then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.message).to.eq('Registro excluído com sucesso')})
  })
  it('Exclui Usuário',()=>{  
       cy.Excluir_Usuario()
        .then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.message).to.eq('Registro excluído com sucesso')})
  })
})

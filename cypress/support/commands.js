Cypress.Commands.add('Login',(user)=>{
    cy.visit('https://front.serverest.dev/login')
    cy.get('#email').type(user.email)
    cy.get('#password').type(user.password)
    cy.contains('Entrar').click()
    cy.contains('Este é seu sistema para administrar seu ecommerce.').should('be.visible')
    cy.contains('Home').should('be.visible')
})
Cypress.Commands.add('Cria_Usuario',(user)=>{
    cy.api({
        method:'POST',
        url:'https://serverest.dev/usuarios',
        body:user
    }).then((response)=>{return response})
})
Cypress.Commands.add('Login_Usuario',(email,senha)=>{
    cy.api({
        method:'POST',
        url:'https://serverest.dev/login',
        body:{email: email,password: senha}
    }).then((response)=>{return response})
})
Cypress.Commands.add('Listar_Usuario',(id)=>{
    cy.api({
        method:'GET',
        url: 'https://serverest.dev/usuarios/'+ id,
        failOnStatusCode: false
    }).then((response)=>{return response})
})
Cypress.Commands.add('Criar_Produto',(prod)=>{
    cy.api({
        method:'POST',
        url:'https://serverest.dev/produtos',
        headers: {authorization: Cypress.env('token')},
        body:prod
    }).then((response)=>{return response})
})
Cypress.Commands.add('Excluir_Produto',()=>{
    cy.api({
        method:'DELETE',
        url:`https://serverest.dev/produtos/${Cypress.env('idp')}`,
        headers: {authorization: Cypress.env('token')}
    }).then((response)=>{return response})
})
Cypress.Commands.add('Excluir_Usuario',()=>{
    cy.api({
        method:'DELETE',
        url:`https://serverest.dev/usuarios/${Cypress.env('id')}`
    }).then((response)=>{return response})
})
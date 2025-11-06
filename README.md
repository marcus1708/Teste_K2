# 🤖 Teste de Automação Serverest

## 📜 Descrição do Projeto

Este repositório contém um conjunto de testes de automação de API e WEB do Serverest, desenvolvidos para validar fluxos e funcionalidades específicas. O projeto utiliza o **Cypress**, uma das ferramentas mais populares e eficientes para testes End-to-End (E2E) e de integração, garantindo a qualidade e estabilidade do software.

O foco principal é fornecer uma base de testes robusta, rápida e fácil de manter.

## ⚙️ Tecnologias Utilizadas

| Ferramenta | Descrição |
| :--- | :--- |
| **Cypress** | Framework de testes End-to-End. |
| **JavaScript** | Linguagem de programação principal. |
| **npm** | Gerenciador de pacotes para dependências. |

## 🚀 Pré-requisitos

Para rodar este projeto localmente, você precisará ter o Node.js e o npm instalados em sua máquina.

  * **Node.js**: Recomenda-se a versão LTS.
  * **npm**: Instalado juntamente com o Node.js.

## 💾 Instalação

Siga os passos abaixo para clonar o repositório e instalar as dependências:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/marcus1708/Teste_K2.git
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd Teste_K2
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    ```

## ▶️ Como Executar os Testes

Você pode executar os testes de duas maneiras: via interface gráfica (modo interativo) ou via linha de comando (modo *headless*).

### 1\. Execução no Modo Interativo (Interface Gráfica)

Use este comando para abrir o *Cypress Test Runner*, onde você pode visualizar e selecionar os testes a serem executados em tempo real:

```bash
npx cypress open
```

### 2\. Execução no Modo Headless (Terminal)

Para rodar os testes em segundo plano e gerar relatórios no terminal, use o comando:

```bash
npx cypress run
```

### 3\. Execução de um Arquivo Específico

Se quiser rodar apenas um arquivo de especificação (spec) específico:

```bash
npx cypress run --spec "cypress/e2e/seu_arquivo.cy.js"
```

## 📂 Estrutura do Projeto

O projeto segue a estrutura padrão do Cypress, organizada para facilitar a manutenção e o desenvolvimento dos testes:

```
Teste_K2/
├── cypress/
│   ├── e2e/               # Onde ficam os arquivos de teste (.cy.js)
│   ├── fixtures/          # Arquivos de dados mockados (JSON, etc.)
│   └── support/           # Arquivos de comandos customizados e configs globais
├── node_modules/          # Dependências do projeto
├── cypress.config.js      # Configurações globais do Cypress
├── package.json           # Dependências do projeto e scripts
└── README.md              # Este arquivo!
```

## ✒️ Autor

Este projeto foi desenvolvido por:

  * **Marcus Vinicius B de Souza** ([GitHub](https://www.google.com/search?q=https://github.com/marcus1708))

## 🤝 Contribuições

Sinta-se à vontade para contribuir\! Se encontrar bugs ou tiver sugestões de melhoria:

1.  Faça um Fork do projeto.
2.  Crie uma nova branch (`git checkout -b feature/melhoria-x`).
3.  Faça suas alterações e commit (`git commit -m 'feat: Adiciona feature x'`).
4.  Envie para o seu Fork (`git push origin feature/melhoria-x`).
5.  Abra um Pull Request.

-----

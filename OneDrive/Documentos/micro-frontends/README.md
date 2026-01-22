# Micro-Frontends Project

Este projeto é uma aplicação de micro-frontends usando Next.js e Module Federation. Consiste em três aplicações independentes: cardapio, carrinho e container-app.

## Estrutura do Projeto

- **cardapio**: Aplicação que exibe o menu de hambúrgueres, sorvetes e bebidas.
- **carrinho**: Aplicação que gerencia o carrinho de compras.
- **container-app**: Aplicação principal que integra os outros módulos via Module Federation.

## Como Rodar Cada Micro

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Passos para Rodar

1. **Instalar dependências em cada aplicação**:
   ```bash
   cd cardapio
   npm install

   cd ../carrinho
   npm install

   cd ../container-app
   npm install
   ```

2. **Rodar cada aplicação em terminais separados**:

   - **Cardapio** (porta 3002):
     ```bash
     cd cardapio
     npm run dev
     ```

   - **Carrinho** (porta 3001):
     ```bash
     cd carrinho
     npm run dev
     ```

   - **Container-app** (porta 3000):
     ```bash
     cd container-app
     npm run dev
     ```

3. **Acessar as aplicações**:
   - Container-app: http://localhost:3000
   - Cardapio: http://localhost:3002
   - Carrinho: http://localhost:3001

## Como Rodar em um Único Terminal

Para facilitar o desenvolvimento, você pode rodar todas as aplicações simultaneamente em um único terminal usando o script configurado na raiz do projeto.

### Pré-requisitos
- Instalar dependências na raiz: `npm install`

### Comando para Rodar
```bash
npm run dev
```

Isso executará todas as aplicações em paralelo usando `concurrently`:
- cardapio em http://localhost:3002
- carrinho em http://localhost:3001
- container-app em http://localhost:3000

### Outros Comandos Disponíveis
- `npm run build`: Build de todas as aplicações
- `npm run start`: Start de todas as aplicações (após build)

## Como Funciona a Comunicação Entre Eles

A comunicação entre os micro-frontends é feita através de eventos customizados do navegador, utilizando `window.dispatchEvent` e `window.addEventListener`. Isso permite que as aplicações se comuniquem sem dependências diretas.

### Exemplo de Comunicação

- No **cardapio**, ao clicar no botão "ADICIONAR" de um item, é disparado um evento customizado:
  ```javascript
  window.dispatchEvent(new CustomEvent("adicionarCarrinho", { detail: item }));
  ```

- No **carrinho**, há um listener que escuta esse evento e adiciona o item ao estado:
  ```javascript
  window.addEventListener("adicionarCarrinho", (e) => {
      // Lógica para adicionar item
  });
  ```

### Integração via Module Federation

O **container-app** utiliza Module Federation para carregar remotamente os componentes `Cardapio` e `Carrinho` das outras aplicações. Isso permite que os componentes sejam compartilhados e renderizados na aplicação principal sem duplicação de código.

- No `next.config.mjs` do container-app, são definidos os remotes:
  ```javascript
  remotes: {
      cardapio: 'cardapio@http://localhost:3002/_next/static/chunks/remoteEntry.js',
      carrinho: 'carrinho@http://localhost:3001/_next/static/chunks/remoteEntry.js',
  }
  ```

- Os componentes são importados dinamicamente:
  ```javascript
  const Cardapio = dynamic(() => import('cardapio/Cardapio'), { ssr: false });
  ```

Essa arquitetura permite desenvolvimento independente, deploy separado e comunicação loosely coupled entre os micro-frontends.
# 💻 Portal de Gestão e Monitoramento de Máquinas Virtuais

Este projeto é uma aplicação web fullstack para cadastro, listagem e monitoramento de máquinas virtuais (VMs). Ele foi desenvolvido utilizando **Angular 17** no frontend e **Spring Boot** no backend.

---

## 🚀 Funcionalidades

### 🔐 Tela de Login
- Login com e-mail e senha.
- Validação de credenciais.
- Redirecionamento para o dashboard em caso de sucesso.

### 📊 Dashboard
- Gráfico de barras com quantidade de VMs por status.
- Gráfico de pizza com total de VMs x limite.
- Mensagem de boas-vindas com resumo do sistema.

### 📋 Listagem de Máquinas Virtuais
- Visualização em tabela com nome, CPU, memória, status e ações.
- Ações disponíveis: iniciar, pausar, parar, excluir.
- Transições de status permitidas conforme regras de negócio.
- Botão para redirecionamento ao cadastro de VM.

### 🆕 Cadastro de Máquina Virtual
- Cadastro com validações (nome, CPU, memória).
- Limite máximo de 5 VMs cadastradas.
- Nova VM inicia com status **RUNNING**.

---

## 🧰 Tecnologias Utilizadas

### Frontend
- Angular 17
- TypeScript
- SCSS/CSS
- Chart.js

### Backend
- Java 17+
- Spring Boot
- Spring Data JPA
- MySQL
- REST API

---

## ⚙️ Como Executar o Projeto

### 📌 Pré-requisitos

- Node.js (versão 17)
- Angular CLI 17:
  ```bash
  npm install -g @angular/cli@17


# 🖥️ Backend (Spring Boot)

git clone https://github.com/seu-usuario/seu-repo.git
```markdown
<br>
cd seu-repo


# Configure o banco de dados
Abra o arquivo:

api/src/main/resources/application.properties

### E edite com os seus dados de conexão do MySQL:

```markdown
spring.datasource.url=jdbc:mysql://localhost:3306/projeto_desafio  
<br>
spring.datasource.username=root  
<br>
spring.datasource.password=root  
<br>
spring.jpa.hibernate.ddl-auto=update 

## Execute a aplicação principal do backend:
No VS Code, IntelliJ ou Eclipse, execute o arquivo:

api/src/main/java/br/com/projeto/api/ApiApplication.java

# 🌐 Frontend (Angular)

cd api-front

## Instale as dependências:
npm install

## Inicie a aplicação:
npm start

### Acessando no navegador:
[local](http://localhost:4200)
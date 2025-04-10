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
- Chart.js (para gráficos)

### Backend
- Java 17+
- Spring Boot
- Spring Data JPA
- MySQL
- REST API

---

## ⚙️ Como Executar o Projeto

### 📌 Pré-requisitos
- Node.js (versão 18 ou superior)
- Angular CLI (`npm install -g @angular/cli`)
- Java JDK 17+
- MySQL 8+
- Maven

---

### 🖥️ Backend (Spring Boot)

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git
   cd seu-repo/api


### Executando Banco de dados

Caso esteja usando o vs code utilize a extensão mysql : https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-mysql-client2
configure a conexão com os dados no caminho src/main/resources/application.properties

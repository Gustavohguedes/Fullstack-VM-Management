<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Portal de Gestão e Monitoramento de Máquinas Virtuais</title>
</head>
<body>
  <h1>💻 Portal de Gestão e Monitoramento de Máquinas Virtuais</h1>

  <p>Este projeto é uma aplicação web fullstack para cadastro, listagem e monitoramento de máquinas virtuais (VMs). Ele foi desenvolvido utilizando <strong>Angular 17</strong> no frontend e <strong>Spring Boot</strong> no backend.</p>

  <hr>

  <h2>🚀 Funcionalidades</h2>

  <h3>🔐 Tela de Login</h3>
  <ul>
    <li>Login com e-mail e senha.</li>
    <li>Validação de credenciais.</li>
    <li>Redirecionamento para o dashboard em caso de sucesso.</li>
  </ul>

  <h3>📊 Dashboard</h3>
  <ul>
    <li>Gráfico de barras com quantidade de VMs por status.</li>
    <li>Gráfico de pizza com total de VMs x limite.</li>
    <li>Mensagem de boas-vindas com resumo do sistema.</li>
  </ul>

  <h3>📋 Listagem de Máquinas Virtuais</h3>
  <ul>
    <li>Visualização em tabela com nome, CPU, memória, status e ações.</li>
    <li>Ações disponíveis: iniciar, pausar, parar, excluir.</li>
    <li>Transições de status permitidas conforme regras de negócio.</li>
    <li>Botão para redirecionamento ao cadastro de VM.</li>
  </ul>

  <h3>🆕 Cadastro de Máquina Virtual</h3>
  <ul>
    <li>Cadastro com validações (nome, CPU, memória).</li>
    <li>Limite máximo de 5 VMs cadastradas.</li>
    <li>Nova VM inicia com status <strong>RUNNING</strong>.</li>
  </ul>

  <hr>

  <h2>🧰 Tecnologias Utilizadas</h2>

  <h3>Frontend</h3>
  <ul>
    <li>Angular 17</li>
    <li>TypeScript</li>
    <li>SCSS/CSS</li>
    <li>Chart.js</li>
  </ul>

  <h3>Backend</h3>
  <ul>
    <li>Java 17+</li>
    <li>Spring Boot</li>
    <li>Spring Data JPA</li>
    <li>MySQL</li>
    <li>REST API</li>
  </ul>

  <hr>

  <h2>⚙️ Como Executar o Projeto</h2>

  <h3>📌 Pré-requisitos</h3>
  <ul>
    <li>Node.js (versão 17)</li>
    <li>Angular CLI 17:</li>
  </ul>

  <pre><code>npm install -g @angular/cli@17</code></pre>

  <h2>🖥️ Backend (Spring Boot)</h2>

  <pre><code>git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
</code></pre>

  <h3>Configure o banco de dados</h3>
  <p>Abra o arquivo:</p>
  <p><code>api/src/main/resources/application.properties</code></p>

  <p>E edite com os seus dados de conexão do MySQL:</p>

  <pre><code>
spring.datasource.url=jdbc:mysql://localhost:3306/projeto_desafio  
spring.datasource.username=root  
spring.datasource.password=root  
spring.jpa.hibernate.ddl-auto=update  
  </code></pre>

  <h3>Execute a aplicação principal do backend:</h3>
  <p>No VS Code, IntelliJ ou Eclipse, execute o arquivo:</p>
  <p><code>api/src/main/java/br/com/projeto/api/ApiApplication.java</code></p>

  <h2>🌐 Frontend (Angular)</h2>

  <pre><code>cd api-front</code></pre>

  <h3>Instale as dependências:</h3>
  <pre><code>npm install</code></pre>

  <h3>Inicie a aplicação:</h3>
  <pre><code>npm start</code></pre>

  <h3>Acessando no navegador:</h3>
  <p><a href="http://localhost:4200" target="_blank">http://localhost:4200</a></p>
</body>
</html>

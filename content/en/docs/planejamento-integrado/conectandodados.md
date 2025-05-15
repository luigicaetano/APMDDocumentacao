---
title: Conectando Dados ao Seu Aplicativo
date: 2025-05-14 
description: >
  Guia passo a passo para conectar sua base de dados ao aplicativo usando o PowerApps
weight: 1
---

# 🔄 Conectando Seus Dados ao PowerApps

Neste guia, você aprenderá como conectar facilmente suas listas do SharePoint ao seu aplicativo no PowerApps. Seguindo esses passos simples, você conseguirá acessar todas as informações necessárias para o seu aplicativo funcionar corretamente.

## O Que Você Vai Aprender

- Como adicionar uma nova fonte de dados
- Como conectar sua conta do SharePoint
- Como selecionar e vincular listas específicas
- Como verificar se os dados estão disponíveis no seu aplicativo

## Passo a Passo

<div class="flow-steps">
  <div class="step">
    <h3>📌 Passo 1: Iniciando a conexão</h3>
    <p>Na parte superior da tela do PowerApps, clique no botão <strong>"Adicionar Dados"</strong>. Uma lista de opções vai aparecer - escolha <strong>"SharePoint"</strong> para começar.</p>
    {{< figure src="/assets/images/AddDados.png" alt="Botão Adicionar Dados no PowerApps" >}}
  </div>

  <div class="step">
    <h3>📌 Passo 2: Conectando sua conta</h3>
    <p>O sistema pedirá para você conectar sua conta do SharePoint. Clique em <strong>"Adicionar uma conexão"</strong> e entre com as mesmas credenciais que você usa para acessar o SharePoint normalmente.</p>
    {{< figure src="/assets/images/AddNovaConexão.png" alt="Tela de conexão de conta" >}}
  </div>

  <div class="step">
    <h3>📌 Passo 3: Informando o endereço do site</h3>
    <p>Digite o endereço completo (URL) do site do SharePoint onde estão armazenadas suas listas. Este é o mesmo endereço que você usa para acessar o site no navegador.</p>
    {{< figure src="/assets/images/URL.png" alt="Campo para inserir URL do site" >}}
  </div>

  <div class="step">
    <h3>📌 Passo 4: Selecionando as listas</h3>
    <p>Aparecerá uma lista com todas as listas disponíveis no site. Marque as caixas ao lado das listas que você deseja usar no seu aplicativo e clique em <strong>"Conectar"</strong>.</p>
    {{< figure src="/assets/images/Listas.png" alt="Seleção de listas disponíveis" >}}
  </div>

  <div class="step">
    <h3>📌 Passo 5: Confirmando a conexão</h3>
    <p>Pronto! Suas listas agora estão conectadas. Você pode vê-las no painel lateral esquerdo, na seção "Fontes de dados". A partir de agora, você pode usar essas informações no seu aplicativo.</p>
    {{< figure src="/assets/images/DadosApp.png" alt="Listas conectadas no painel lateral" >}}
  </div>
</div>

## 💡 Dicas Úteis

<div class="tips">
  <div class="tip">
    <h3>🔍 Não encontrou sua lista?</h3>
    <p>Verifique se você digitou corretamente o endereço do site. Às vezes, pequenos erros de digitação podem impedir que as listas apareçam.</p>
  </div>
  
  <div class="tip">
    <h3>🔄 Atualizando dados</h3>
    <p>Se você fizer alterações nas listas do SharePoint depois de conectá-las, clique no ícone de atualização no painel de dados para ver as informações mais recentes.</p>
  </div>
  
  <div class="tip">
    <h3>🔒 Problemas de permissão?</h3>
    <p>Se não conseguir visualizar alguma lista, verifique com o administrador se você tem as permissões necessárias para acessá-la no SharePoint.</p>
  </div>
</div>

## O Que Vem a Seguir?

Agora que você conectou com sucesso seus dados, está pronto para começar a usá-los no seu aplicativo! No próximo tutorial, você aprenderá como exibir essas informações em formulários e telas.

<div class="navigation-links">
  <a href="../../planejamento-integrado/" class="prev-link">← Passo anterior: Introdução</a>
  <a href="../fluxopowerautomate/" class="next-link">Próximo passo: Criando os fluxos necessários no Power Automate →</a>
</div>

<style>
/* Estilo geral da página */
body {
  font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: #333;
}

h1, h2, h3 {
  font-weight: 600;
  color:rgb(0, 0, 0);
  margin-top: 1.5em;
}

h1 {
  font-size: 2.2em;
  margin-bottom: 0.8em;
  border-bottom: 2px solid #eaeaea;
  padding-bottom: 0.3em;
}

/* Estilo dos passos */
.flow-steps {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 30px 0;
}

.step {
  background-color: #f8f9fa;
  border-left: 5px solid #0078d4;
  padding: 20px;
  border-radius: 0 8px 8px 0;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease;
}

.step:hover {
  transform: translateX(5px);
}

.step h3 {
  margin-top: 0;
  color: #0078d4;
  font-size: 1.3em;
}

/* Estilo das imagens */
img {
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  margin: 15px 0;
  border: 1px solid #e0e0e0;
  transition: transform 0.3s ease;
}

img:hover {
  transform: scale(1.02);
}

/* Estilo das dicas */
.tips {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin: 30px 0;
}

.tip {
  background-color: #f0f7ff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 3px 15px rgba(0,0,0,0.08);
  border: 1px solid #e6f0ff;
  transition: all 0.3s ease;
}

.tip:hover {
  box-shadow: 0 5px 20px rgba(0,0,0,0.12);
  transform: translateY(-5px);
}

.tip h3 {
  margin-top: 0;
  color: #0078d4;
  font-size: 1.2em;
}

/* Links de navegação */
.navigation-links {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  padding-top: 20px;
  border-top: 1px solid #eaeaea;
}

.navigation-links a {
  text-decoration: none;
  color: #0078d4;
  padding: 10px 15px;
  border-radius: 6px;
  background-color: #f0f7ff;
  transition: all 0.2s ease;
}

.navigation-links a:hover {
  background-color: #0078d4;
  color: white;
}

/* Responsividade */
@media (max-width: 768px) {
  .tips {
    grid-template-columns: 1fr;
  }
  
  .navigation-links {
    flex-direction: column;
    gap: 15px;
  }
  
  h1 {
    font-size: 1.8em;
  }
  
  .step {
    padding: 15px;
  }
}
</style>
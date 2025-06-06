---
title: Configurando e Gerenciando Permissões de Usuários
date: 2025-06-06 
description: >
  Guia completo para configurar e gerenciar permissões de usuários no sistema de Planejamento Integrado
weight: 3
---

# 🔐 Gerenciamento de Permissões de Usuários

Neste guia, você aprenderá como configurar e gerenciar as permissões de usuários no seu sistema de Planejamento Integrado. Com essas funcionalidades, você poderá controlar quem tem acesso a cada parte do sistema e definir diferentes níveis de permissão.

## O Que Você Vai Aprender

- Como navegar pela tela principal de permissões
- Como adicionar novas permissões para usuários
- Como editar permissões existentes
- Como desativar usuários do sistema
- Como configurar usuários como gestores

## Funcionalidades das Telas

<div class="flow-steps">
  <div class="step">
    <h3>📋 Tela Principal de Permissões</h3>
    <p>Esta é a tela central onde você visualiza todos os usuários e suas respectivas permissões. A partir daqui, você pode realizar todas as operações de gerenciamento.</p>
    
    <div class="feature-list">
      <div class="feature">
        <h4>🆕 Nova Permissão</h4>
        <p><strong>Função:</strong> <code>Navigate(Screen_Permissoes_Adicionar)</code></p>
        <p>Direciona o usuário para a tela onde poderá adicionar uma nova permissão ao sistema, configurando um novo usuário com seus respectivos acessos.</p>
      </div>
      
      <div class="feature">
        <h4>✏️ Editar Permissão</h4>
        <p><strong>Código:</strong></p>
        <pre><code>Select(Parent);
Set(currUsuario; ThisItem);
Navigate(Screen_Permissoes_Editar)</code></pre>
        <p>Este botão executa três ações em sequência: primeiro seleciona o item pai da galeria para garantir o foco correto, depois define o usuário atual como uma variável global (<code>currUsuario</code>) para ser usado na tela de edição, e por fim navega para a tela de edição de permissões.</p>
      </div>
      
      <div class="feature">
        <h4>🚫 Desativar Usuário</h4>
        <p><strong>Função:</strong> <code>Remove(PlanejamentoIntegrado_Usuarios; ThisItem)</code></p>
        <p>Remove permanentemente o usuário selecionado da base de dados, desativando completamente seu acesso ao sistema.</p>
      </div>
    </div>
  </div>

  <div class="step">
    <h3>✏️ Tela de Edição de Permissões</h3>
    <p>Nesta tela, você pode modificar as permissões de um usuário já existente no sistema.</p>
    
    <div class="feature-list">
      <div class="feature">
        <h4>🔍 Localizar Usuários</h4>
        <p><strong>Função:</strong> Listagem de usuários disponíveis</p>
        <p>Este código é usado em um ComboBox para listar todas as opções do campo Usuario da fonte de dados <code>PlanejamentoIntegrado_Usuarios</code>, permitindo selecionar um usuário válido existente.</p>
      </div>
    </div>
  </div>

  <div class="step">
    <h3>➕ Tela de Adição de Permissões</h3>
    <p>Interface dedicada para cadastrar novos usuários no sistema e definir suas permissões iniciais.</p>
  </div>
</div>

## 💾 Função Principal: Salvar Permissões

<div class="code-explanation">
  <h3>🔧 Como Funciona o Salvamento</h3>
  
  <div class="code-block">
    <h4>Estrutura Principal</h4>
    <pre><code>If(Checkbox3_1.Value;
  // Se for gestor
  Patch(PlanejamentoIntegrado_Usuarios; currUsuario; {
    Título: "Sim";
    Gestor: true;
    Programas: Blank();
    Acoes: Blank()
  });
  // Se não for gestor  
  Patch(PlanejamentoIntegrado_Usuarios; currUsuario; {
    Título: "Sim";
    Usuario: ComboBox1_2.Selected;
    Programas: Concat(Distinct(Filter(Gallery1_1.AllItems; Checkbox1_1.Value = true); Programa); Value; "; ");
    Acoes: Concat(Filter(Gallery1_1.AllItems; Checkbox1_1.Value = true); Left(Acao; 4); "; ")
  })
);
Navigate(Screen_Permissoes_Gestao)</code></pre>
  </div>

  <div class="explanation-steps">
    <div class="explanation-step">
      <h4>🎯 Verificação de Tipo de Usuário</h4>
      <p>O sistema primeiro verifica se o <code>Checkbox3_1</code> está marcado para determinar se o usuário será um gestor ou um usuário comum.</p>
    </div>
    
    <div class="explanation-step">
      <h4>👑 Configuração para Gestores</h4>
      <p>Se for um gestor, o sistema define:</p>
      <ul>
        <li><strong>Título:</strong> "Sim" (usuário ativo)</li>
        <li><strong>Gestor:</strong> true (permissão de gestor)</li>
        <li><strong>Programas e Ações:</strong> Blank() (gestores têm acesso total)</li>
      </ul>
    </div>
    
    <div class="explanation-step">
      <h4>👤 Configuração para Usuários Comuns</h4>
      <p>Para usuários comuns, o sistema:</p>
      <ul>
        <li>Define o usuário selecionado no ComboBox</li>
        <li>Coleta os <strong>Programas</strong> marcados na galeria, removendo duplicatas</li>
        <li>Coleta as <strong>Ações</strong> marcadas, usando apenas os 4 primeiros caracteres</li>
        <li>Separa os itens com ponto e vírgula</li>
      </ul>
    </div>
    
    <div class="explanation-step">
      <h4>🔄 Finalização</h4>
      <p>Após salvar as configurações, o sistema retorna automaticamente para a tela principal de gestão de permissões.</p>
    </div>
  </div>
</div>

## 💡 Dicas Importantes

<div class="tips">
  <div class="tip">
    <h3>⚠️ Cuidado com Remoções</h3>
    <p>A função "Desativar" remove permanentemente o usuário da base de dados. Certifique-se de que realmente deseja fazer essa ação, pois ela não pode ser desfeita facilmente.</p>
  </div>
  
  <div class="tip">
    <h3>👑 Gestores vs Usuários Comuns</h3>
    <p>Gestores têm acesso total ao sistema e não precisam de permissões específicas. Usuários comuns têm acesso limitado apenas aos programas e ações que foram selecionados.</p>
  </div>
  
  <div class="tip">
    <h3>🔄 Edição de Permissões</h3>
    <p>Ao editar um usuário, suas permissões atuais são substituídas pelas novas configurações. Verifique cuidadosamente antes de salvar as alterações.</p>
  </div>
  
  <div class="tip">
    <h3>📝 Códigos de Ação</h3>
    <p>O sistema salva apenas os 4 primeiros caracteres das ações para otimizar o armazenamento. Certifique-se de que esses caracteres sejam únicos para cada ação.</p>
  </div>
</div>

## 🚀 Fluxo de Trabalho Recomendado

<div class="workflow">
  <div class="workflow-step">
    <span class="step-number">1</span>
    <div class="step-content">
      <h4>Planejamento</h4>
      <p>Antes de adicionar um usuário, defina claramente quais programas e ações ele precisa acessar.</p>
    </div>
  </div>
  
  <div class="workflow-step">
    <span class="step-number">2</span>
    <div class="step-content">
      <h4>Adição</h4>
      <p>Use a tela de "Nova Permissão" para cadastrar o usuário com as permissões adequadas.</p>
    </div>
  </div>
  
  <div class="workflow-step">
    <span class="step-number">3</span>
    <div class="step-content">
      <h4>Verificação</h4>
      <p>Confirme na tela principal se as permissões foram salvas corretamente.</p>
    </div>
  </div>
  
  <div class="workflow-step">
    <span class="step-number">4</span>
    <div class="step-content">
      <h4>Manutenção</h4>
      <p>Use a função "Editar" sempre que precisar ajustar as permissões de um usuário existente.</p>
    </div>
  </div>
</div>

## O Que Vem a Seguir?

Com o sistema de permissões configurado, você pode controlar efetivamente o acesso dos usuários às diferentes funcionalidades do sistema. No próximo tutorial, você aprenderá sobre outras funcionalidades avançadas do aplicativo.

<div class="navigation-links">
  <a href="../dados/" class="prev-link">← Passo anterior: Conectando Dados</a>
  <a href="../proxima-funcionalidade/" class="next-link">Próximo passo: Outras Funcionalidades →</a>
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
  color: rgb(0, 0, 0);
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

/* Estilo das funcionalidades */
.feature-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 15px;
}

.feature {
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.feature h4 {
  margin-top: 0;
  color: #106ebe;
  font-size: 1.1em;
}

.feature pre {
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 10px;
  overflow-x: auto;
  font-size: 0.9em;
}

.feature code {
  background-color: #f5f5f5;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 0.9em;
}

/* Estilo da explicação de código */
.code-explanation {
  background-color: #f0f8ff;
  border-radius: 12px;
  padding: 25px;
  margin: 30px 0;
  border: 1px solid #b3d9ff;
}

.code-explanation h3 {
  margin-top: 0;
  color: #0066cc;
}

.code-block {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  border: 1px solid #d0d0d0;
}

.code-block h4 {
  margin-top: 0;
  color: #333;
}

.code-block pre {
  background-color: #f8f8f8;
  border-radius: 6px;
  padding: 15px;
  overflow-x: auto;
  font-size: 0.9em;
  line-height: 1.4;
}

.explanation-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.explanation-step {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #d0d0d0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.explanation-step h4 {
  margin-top: 0;
  color: #0066cc;
  font-size: 1.1em;
}

.explanation-step ul {
  margin: 10px 0;
  padding-left: 20px;
}

.explanation-step li {
  margin-bottom: 5px;
}

/* Estilo das dicas */
.tips {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin: 30px 0;
}

.tip {
  background-color: #fff3cd;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 3px 15px rgba(0,0,0,0.08);
  border: 1px solid #ffeaa7;
  transition: all 0.3s ease;
}

.tip:hover {
  box-shadow: 0 5px 20px rgba(0,0,0,0.12);
  transform: translateY(-5px);
}

.tip h3 {
  margin-top: 0;
  color: #856404;
  font-size: 1.2em;
}

/* Estilo do fluxo de trabalho */
.workflow {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 30px 0;
}

.workflow-step {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease;
}

.workflow-step:hover {
  transform: translateX(10px);
}

.step-number {
  background-color: #0078d4;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2em;
  flex-shrink: 0;
}

.step-content h4 {
  margin-top: 0;
  color: #0078d4;
  font-size: 1.2em;
}

.step-content p {
  margin-bottom: 0;
  color: #555;
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
  
  .explanation-steps {
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
  
  .workflow-step {
    flex-direction: column;
    text-align: center;
  }
  
  .workflow-step:hover {
    transform: translateY(-5px);
  }
}
</style>
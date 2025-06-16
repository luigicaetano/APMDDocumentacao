---
title: Configurando e Gerenciando Permissões de Usuários
date: 2025-06-06
description: Guia completo para configurar e gerenciar permissões de usuários no sistema de Planejamento Integrado
weight: 3
---

# 🔐 Configurando e Gerenciando Permissões de Usuários

Neste guia, você aprenderá como configurar e gerenciar as permissões de usuários no seu sistema de Planejamento Integrado. Com essas funcionalidades, você poderá controlar quem tem acesso a cada parte do sistema e definir diferentes níveis de permissão para otimizar a segurança e organização do seu ambiente.

## O Que Você Vai Aprender

- Como navegar pela tela principal de permissões
- Como adicionar novas permissões para usuários
- Como editar permissões existentes de forma segura
- Como desativar usuários do sistema quando necessário
- Como configurar usuários como gestores com acesso total
- Melhores práticas para gerenciamento de permissões

## Visão Geral do Sistema de Permissões

O sistema de permissões do Planejamento Integrado 2026 oferece controle granular sobre o acesso dos usuários, permitindo que você defina exatamente quais programas e ações cada pessoa pode visualizar e modificar. Esta funcionalidade garante que informações sensíveis permaneçam protegidas enquanto facilita a colaboração entre equipes.

```mermaid
graph TD
    A[Tela Principal de Permissões] --> B[Nova Permissão]
    A --> C[Editar Permissão]
    A --> D[Desativar Usuário]
    B --> E[Configurar Tipo: Gestor ou Usuário]
    C --> F[Modificar Permissões Existentes]
    E --> G[Selecionar Programas e Ações]
    F --> H[Atualizar Configurações]
    G --> I[Salvar no Sistema]
    H --> I
    I --> A
```

## Passo a Passo

<div class="permission-steps">
  <div class="step">
    <h3>📋 Passo 1: Tela Principal de Permissões</h3>
    <p>Esta é a tela central onde você visualiza todos os usuários e suas respectivas permissões. A partir daqui, você pode realizar todas as operações de gerenciamento de forma centralizada e organizada.</p>
    <p><strong>🆕 Nova Permissão</strong></p>
    <p><code>Navigate(Screen_Permissoes_Adicionar)</code></p>
    <p>Direciona o usuário para a tela onde poderá adicionar uma nova permissão ao sistema, configurando um novo usuário com seus respectivos acessos.</p>
  </div>

  <div class="step">
    <h3>✏️ Passo 2: Editando Permissões Existentes</h3>
    <p>Para modificar as permissões de um usuário já cadastrado, utilize o botão "Editar" que executa uma sequência de ações para garantir a integridade dos dados.</p>
    <div class="code-sample">
      {{< highlight powerapps >}}
      Select(Parent);
      Set(currUsuario; ThisItem);
      Navigate(Screen_Permissoes_Editar)
      {{< /highlight >}}
    </div>
    <p><strong>Este código executa três ações em sequência:</strong></p>
    <ul>
      <li><code>Select(Parent)</code> - Seleciona o item pai da galeria para garantir o foco correto</li>
      <li><code>Set(currUsuario; ThisItem)</code> - Define o usuário atual como variável global para uso na tela de edição</li>
      <li><code>Navigate(Screen_Permissoes_Editar)</code> - Navega para a tela de edição de permissões</li>
    </ul>
    {{< figure src="../assets/images/permissoesEditar.png" alt="Tela de edição de permissões de usuário" >}}
  </div>

  <div class="step">
    <h3>🚫 Passo 3: Desativando Usuários</h3>
    <p>Quando necessário remover completamente o acesso de um usuário ao sistema, utilize a função de desativação com cuidado, pois esta ação é permanente.</p>
    <div class="code-sample">
      {{< highlight csharp>}}
      Remove(PlanejamentoIntegrado_Usuarios; ThisItem)
      {{< /highlight >}}
    </div>
    <p><strong>⚠️ Atenção:</strong> Esta função remove permanentemente o usuário da base de dados, desativando completamente seu acesso ao sistema. Esta ação não pode ser facilmente desfeita.</p>
  </div>

  <div class="step">
    <h3>🔍 Passo 4: Localizando Usuários no Sistema</h3>
    <p>O sistema oferece uma funcionalidade de busca que permite localizar usuários existentes na base de dados através de um ComboBox inteligente.</p>
    <div class="code-sample">
      {{< highlight powerapps >}}
      // Código usado no ComboBox para listar usuários
      PlanejamentoIntegrado_Usuarios.Usuario
      {{< /highlight >}}
    </div>
    <p>Este código lista todas as opções do campo Usuario da fonte de dados, permitindo selecionar um usuário válido existente para edição.</p>
  </div>

  <div class="step">
    <h3>💾 Passo 5: Salvando Configurações de Permissões</h3>
    <p>O sistema de salvamento é inteligente e diferencia automaticamente entre gestores e usuários comuns, aplicando as configurações apropriadas para cada tipo.</p>
    <div class="code-sample">
      {{< highlight powerapps >}}
      If(Checkbox3_1.Value;
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
      Navigate(Screen_Permissoes_Gestao)
      {{< /highlight >}}
    </div>
  </div>

  <div class="step">
    <h3>🎯 Passo 6: Como o Sistema Funciona Internamente</h3>
    <p>O processo de salvamento segue uma lógica estruturada que garante a integridade e consistência dos dados.</p>
    <p><strong>1. Verificação de Tipo de Usuário</strong></p>
    <p>O sistema verifica se o Checkbox3_1 está marcado para determinar se o usuário será um gestor ou usuário comum.</p>
    <p><strong>2. Configuração para Gestores 👑</strong></p>
    <p>Se for um gestor, o sistema define:</p>
    <ul>
      <li><strong>Título:</strong> "Sim" (usuário ativo)</li>
      <li><strong>Gestor:</strong> true (permissão de gestor)</li>
      <li><strong>Programas e Ações:</strong> Blank() (gestores têm acesso total)</li>
    </ul>
    <p><strong>3. Configuração para Usuários Comuns 👤</strong></p>
    <p>Para usuários comuns, o sistema:</p>
    <ul>
      <li>Define o usuário selecionado no ComboBox</li>
      <li>Coleta os Programas marcados na galeria, removendo duplicatas com Distinct()</li>
      <li>Coleta as Ações marcadas, usando apenas os 4 primeiros caracteres</li>
      <li>Separa os itens com ponto e vírgula usando Concat()</li>
    </ul>
  </div>

  <div class="step">
    <h3>🔧 Passo 7: Detalhamento das Funções Utilizadas</h3>
    <p>Compreenda as funções principais que tornam o sistema de permissões robusto e confiável:</p>
    <p><strong>Concat()</strong> - Concatena (junta) valores em uma string separada por delimitador</p>
    <p><strong>Distinct()</strong> - Remove valores duplicados de uma lista</p>
    <p><strong>Filter()</strong> - Filtra itens com base em uma condição (checkbox marcado)</p>
    <p><strong>Left(Acao; 4)</strong> - Extrai apenas os 4 primeiros caracteres do campo Acao</p>
    <p><strong>Gallery1_1.AllItems</strong> - Referência a todos os itens da galeria</p>
    <p><strong>Checkbox1_1.Value = true</strong> - Condição para filtrar apenas itens marcados</p>
  </div>

  <div class="step">
    <h3>➕ Passo 8: Adicionando Novas Permissões</h3>
    <p>A tela de adição oferece uma interface limpa e intuitiva para cadastrar novos usuários no sistema e definir suas permissões iniciais.</p>
    {{< figure src="../assets/images/permissoesAdicionar .png" alt="Interface para adicionar novas permissões de usuário" >}}
    <p>Esta interface utiliza a mesma lógica de salvamento explicada anteriormente, mas para criação de novos registros ao invés de edição de existentes.</p>
  </div>

  <div class="step">
    <h3>🔄 Passo 9: Finalização e Navegação</h3>
    <p>Após salvar as configurações, o sistema retorna automaticamente para a tela principal de gestão de permissões, permitindo verificar imediatamente se as alterações foram aplicadas corretamente.</p>
    <div class="code-sample">
      {{< highlight csharp >}}
      Navigate(Screen_Permissoes_Gestao)
      {{< /highlight >}}
    </div>
  </div>
</div>

## 💡 Dicas e Melhores Práticas

<div class="tips">
  <div class="tip">
    <h3>⚠️ Cuidado com Remoções</h3>
    <p>A função "Desativar" remove permanentemente o usuário da base de dados. Sempre confirme se realmente deseja fazer essa ação, pois ela não pode ser desfeita facilmente. Considere criar um processo de backup antes de remoções em massa.</p>
  </div>
  
  <div class="tip">
    <h3>👑 Gestores vs Usuários Comuns</h3>
    <p>Gestores têm acesso total ao sistema e não precisam de permissões específicas. Usuários comuns têm acesso limitado apenas aos programas e ações selecionados. Use essa diferenciação para manter a segurança do sistema.</p>
  </div>
  
  <div class="tip">
    <h3>🔄 Edição de Permissões</h3>
    <p>Ao editar um usuário, suas permissões atuais são substituídas pelas novas configurações. Sempre verifique cuidadosamente as seleções antes de salvar as alterações para evitar perda de acesso não intencional.</p>
  </div>
  
  <div class="tip">
    <h3>📝 Códigos de Ação</h3>
    <p>O sistema salva apenas os 4 primeiros caracteres das ações para otimizar o armazenamento. Certifique-se de que esses caracteres sejam únicos para cada ação para evitar conflitos de permissão.</p>
  </div>
  
  <div class="tip">
    <h3>🚀 Fluxo de Trabalho Recomendado</h3>
    <p>Siga sempre a sequência: Planejamento → Adição → Verificação → Manutenção. Isso garante que as permissões sejam configuradas de forma consistente e eficiente.</p>
  </div>
</div>

## 📊 Resumo das Funcionalidades

| Funcionalidade | Tela | Descrição |
|---|---|---|
| **Nova Permissão** | Principal | Adiciona novo usuário ao sistema com permissões personalizadas |
| **Editar** | Principal → Edição | Modifica permissões de usuário existente mantendo histórico |
| **Desativar** | Principal | Remove usuário permanentemente do sistema |
| **Localizar** | Edição | Busca usuários na base de dados para edição |
| **Salvar** | Edição/Adição | Confirma alterações nas permissões com validação |

## O Que Vem a Seguir?

Com o sistema de permissões configurado corretamente, você possui controle total sobre o acesso dos usuários às diferentes funcionalidades do sistema. Esta base sólida de segurança permite que você expanda o sistema com confiança, sabendo que as informações estão protegidas adequadamente.

<div class="navigation-links">
  <a href="../funcionalidadesdoAPP/" class="prev-link">← Passo anterior: Funcionalidades do aplicativo</a>
  <a href="../fluxoPowerAutomate/" class="next-link">Próximo passo: Criar fluxos no Power Automate →</a>
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

/* Estilo dos passos de permissões */
.permission-steps {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 30px 0;
}

.step {
  background-color: #f8f9fa;
  border-left: 5px solid #28a745;
  padding: 25px;
  border-radius: 0 12px 12px 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.step:hover {
  transform: translateX(8px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}

.step h3 {
  margin-top: 0;
  color: #28a745;
  font-size: 1.4em;
  display: flex;
  align-items: center;
  gap: 10px;
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

/* Caixas de funcionalidade */
.functionality-box {
  background-color: #e8f5e8;
  border: 1px solid #28a745;
  border-radius: 8px;
  padding: 20px;
  margin: 15px 0;
}

.functionality-box h4 {
  margin-top: 0;
  color: #28a745;
  font-size: 1.2em;
}

/* Caixa de aviso */
.warning-box {
  background-color: #fff3cd;
  border: 1px solid #ffc107;
  border-radius: 8px;
  padding: 15px;
  margin: 15px 0;
}

.warning-box p {
  margin: 0;
  color: #856404;
}

/* Quebra de ações */
.action-breakdown {
  background-color: #f0f7ff;
  border-left: 4px solid #0078d4;
  padding: 15px;
  margin: 15px 0;
  border-radius: 0 8px 8px 0;
}

.action-breakdown ul {
  margin: 10px 0 0 0;
  padding-left: 20px;
}

.action-breakdown li {
  margin: 8px 0;
}

/* Fluxo de processo */
.process-flow {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
}

.process-item {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 20px;
  transition: all 0.2s ease;
}

.process-item:hover {
  border-color: #28a745;
  box-shadow: 0 2px 8px rgba(40, 167, 69, 0.1);
}

.process-item h4 {
  margin-top: 0;
  color: #28a745;
  font-size: 1.1em;
}

.process-item ul {
  margin: 10px 0 0 0;
  padding-left: 20px;
}

/* Grid de funções */
.functions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.function-item {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 20px;
  transition: all 0.2s ease;
}

.function-item:hover {
  border-color: #28a745;
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(40, 167, 69, 0.1);
}

.function-item h4 {
  margin-top: 0;
  color: #28a745;
  font-size: 1.1em;
  font-family: 'Courier New', monospace;
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin: 30px 0;
}

.tip {
  background-color: #f0f7ff;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  border: 1px solid #e6f0ff;
  transition: all 0.3s ease;
}

.tip:hover {
  box-shadow: 0 6px 20px rgba(0,0,0,0.12);
  transform: translateY(-8px);
}

.tip h3 {
  margin-top: 0;
  color: #0078d4;
  font-size: 1.2em;
}

/* Tabela de funcionalidades */
.functionality-table {
  display: grid;
  gap: 1px;
  background-color: #dee2e6;
  border-radius: 8px;
  overflow: hidden;
  margin: 20px 0;
}

.table-header {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  background-color: #28a745;
  color: white;
  font-weight: 600;
  padding: 15px;
}

.table-header div {
  padding: 0 10px;
}

.table-row {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  background-color: white;
  padding: 15px;
}

.table-row div {
  padding: 0 10px;
  display: flex;
  align-items: center;
}

.table-row:nth-child(even) {
  background-color: #f8f9fa;
}

.table-row:hover {
  background-color: #e8f5e8;
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
  color: #28a745;
  padding: 12px 20px;
  border-radius: 8px;
  background-color: #f0f7ff;
  transition: all 0.3s ease;
  font-weight: 500;
}

.navigation-links a:hover {
  background-color: #28a745;
  color: white;
  transform: translateY(-2px);
}

/* Mermaid diagrams */
.mermaid {
  background-color: white;
  padding: 1.5em;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin: 2em 0;
  text-align: center;
}

/* Estilo para blocos de código */
.code-sample {
  margin: 20px 0;
  padding: 0;
}

.code-sample pre {
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  border-left: 5px solid #28a745;
  margin: 0;
  background-color: #f8f9fa;
}

/* Responsividade */
@media (max-width: 768px) {
  .tips {
    grid-template-columns: 1fr;
  }
  
  .functions-grid {
    grid-template-columns: 1fr;
  }
  
  .navigation-links {
    flex-direction: column;
    gap: 15px;
  }
  
  .table-header,
  .table-row {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  
  .table-header div,
  .table-row div {
    padding: 5px 0;
  }
  
  h1 {
    font-size: 1.8em;
  }
  
  .step {
    padding: 20px;
  }
  
  .functionality-box,
  .warning-box,
  .action-breakdown {
    padding: 15px;
  }
}

/* Animações suaves */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.step {
  animation: fadeIn 0.6s ease forwards;
}

.step:nth-child(even) {
  animation-delay: 0.1s;
}

.step:nth-child(odd) {
  animation-delay: 0.2s;
}
</style>
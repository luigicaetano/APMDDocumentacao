---
title: Tutorial Completo - Aplicativo de Planejamento Integrado
date: 2025-06-09
description: >
  Guia completo apresentando todas as funcionalidades do aplicativo de planejamento integrado, incluindo fluxos de uso, funcionalidades principais e detalhamento dos planejamentos
weight: 1
---

# 📋 Tutorial Completo - Aplicativo de Planejamento Integrado

Este guia completo apresenta todas as funcionalidades do aplicativo de planejamento integrado, incluindo fluxos de uso, funcionalidades principais e detalhamento dos planejamentos. Siga este tutorial para dominar completamente o sistema.

## O Que Você Vai Aprender

- Como navegar pela tela inicial e suas funcionalidades
- Como gerenciar iniciativas e seus componentes
- Como trabalhar com itens de custo e cenários
- Como utilizar os relatórios automatizados
- Como funciona a integração com Power Automate
- Como gerenciar permissões de usuários

## Visão Geral do Sistema

O Aplicativo de Planejamento Integrado é uma solução completa que conecta PowerApps, SharePoint, Power BI e Teams para oferecer um ambiente integrado de planejamento organizacional. Este sistema permite desde o cadastro de iniciativas até a geração automatizada de relatórios analíticos.

```mermaid
graph TD
    A--> B[Iniciativas]
    B--> C[Itens de Custo]
    C --> D[Cenários]
    D--> E[Relatórios]
    E --> F[Power BI Dataset]
    F --> G[Excel + SharePoint]
    G --> H[Notificação Teams]
    I --> A[Tela Inicial]
```


## 🏠 Tela Inicial

<div class="screen-overview">
  <h3>📱 Visão Geral da Interface Principal</h3>
  <p>A tela inicial é o ponto de partida do seu trabalho. Aqui você encontra todos os recursos necessários para começar.</p>
</div>

### Principais Elementos da Tela Inicial

<div class="element-grid">
  <div class="element-card">
    <h4>✨ Tutorial Interativo</h4>
    <p>Guia dinâmico que ensina você a utilizar o aplicativo passo a passo, ideal para novos usuários. Oferece orientação contextual e exemplos práticos para facilitar o aprendizado.</p>
  </div>
  
  <div class="element-card">
    <h4>📋 Fluxo de Registro de Informação</h4>
    <p>Redireciona para documento no SharePoint em nova aba, mantendo o aplicativo aberto para consulta. Permite acesso rápido à documentação oficial sem perder o contexto de trabalho.</p>
  </div>
  
  <div class="element-card">
    <h4>▶️ Iniciar Preenchimento</h4>
    <p>Direciona você diretamente para a tela de iniciativas onde o trabalho efetivo começa. Este é o caminho mais rápido para usuários experientes iniciarem suas atividades.</p>
  </div>
</div>

---

## 📋 Tela de Iniciativas

<div class="screen-overview">
  <h3>🎯 Centro de Controle das Suas Iniciativas</h3>
  <p>Esta é a tela mais importante do sistema, onde você gerencia todas as suas iniciativas de planejamento.</p>
</div>

### 🎛️ Controles de Seleção Inteligentes

<div class="flow-steps">
  <div class="step">
    <h4>🔄 Seletor de Programa</h4>
    <p><strong>Funcionalidade:</strong> Filtro baseado no perfil do usuário</p>
    <div class="code-sample">
      <p><strong>💡 Como funciona:</strong></p>
      <p>O sistema verifica automaticamente se você é um gestor. Se for, você vê todos os programas disponíveis. Caso contrário, apenas os programas autorizados para seu perfil são exibidos, garantindo segurança e organização.</p>
    </div>
  </div>

  <div class="step">
    <h4>🔄 Seletor de Ação</h4>
    <p><strong>Funcionalidade:</strong> Filtragem de ações baseada no programa selecionado</p>
    <div class="code-sample">
      <p><strong>💡 Como funciona:</strong></p>
      <p>Após selecionar um programa, o sistema filtra automaticamente as ações disponíveis, mostrando apenas aquelas relacionadas ao programa escolhido. Isso mantém a interface limpa e focada.</p>
    </div>
  </div>
</div>

### ⚡ Ações Principais

<div class="flow-steps">
  <div class="step">
    <h4>➕ Adicionar Nova Iniciativa</h4>
    <p><strong>O que faz:</strong> Cria uma nova iniciativa vinculada ao programa e ação selecionados</p>
    <div class="code-sample">
      <p><strong>🔧 Processo:</strong></p>
      <ul>
        <li>Registra automaticamente seu e-mail como responsável</li>
        <li>Vincula ao programa e ação selecionados</li>
        <li>Atualiza a lista de iniciativas instantaneamente</li>
      </ul>
    </div>
  </div>

  <div class="step">
    <h4>📊 Propor Programa</h4>
    <p><strong>O que faz:</strong> Permite sugerir novos programas quando não encontra o que precisa</p>
    <div class="code-sample">
      <p><strong>🔧 Processo:</strong></p>
      <ul>
        <li>Cria uma proposta baseada em suas permissões</li>
        <li>Registra a sugestão para análise posterior</li>
        <li>Mantém histórico de propostas</li>
      </ul>
    </div>
  </div>

  <div class="step">
    <h4>📝 Propor Ação</h4>
    <p><strong>O que faz:</strong> Sugere novas ações para programas existentes ou cria propostas completas</p>
    <div class="code-sample">
      <p><strong>🔧 Processo:</strong></p>
      <ul>
        <li>Verifica se deve vincular a programa existente ou criar proposta</li>
        <li>Numera automaticamente as propostas</li>
        <li>Organiza sugestões para aprovação</li>
      </ul>
    </div>
  </div>
</div>

### 🛠️ Ferramentas de Gestão por Iniciativa

<div class="element-grid">
  <div class="element-card">
    <h4>📊 Detalhar Resultados</h4>
    <p>Abre uma visão detalhada da iniciativa selecionada com todas as informações relevantes, incluindo métricas de desempenho e status atual.</p>
  </div>

  <div class="element-card">
    <h4>💰 Itens de Custo</h4>
    <p>Navega para a tela especializada em gerenciamento de custos da iniciativa, onde você pode detalhar todos os aspectos financeiros.</p>
  </div>

  <div class="element-card">
    <h4>🔄 Cenários</h4>
    <p>Acessa o módulo de criação e comparação de diferentes cenários, permitindo análise estratégica e tomada de decisões informadas.</p>
  </div>

  <div class="element-card">
    <h4>🗑️ Excluir Iniciativa</h4>
    <p>Remove a iniciativa após confirmação, com sistema de segurança integrado para evitar exclusões acidentais.</p>
  </div>
</div>

---

## 💰 Tela Itens de Custo

<div class="screen-overview">
  <h3>💼 Gestão Financeira Detalhada</h3>
  <p>Aqui você controla todos os aspectos financeiros da sua iniciativa, desde custos unitários até premissas de cálculo.</p>
</div>

### 🎯 Funcionalidades Principais

<div class="flow-steps">
  <div class="step">
    <h4>➕ Adicionar Novo Item de Custo</h4>
    <div class="code-sample">
      <p><strong>Processo automático:</strong></p>
      <ul>
        <li>Cria novo item vinculado à iniciativa atual</li>
        <li>Atualiza dados em tempo real</li>
        <li>Mantém histórico de alterações</li>
      </ul>
    </div>
  </div>

  <div class="step">
    <h4>📝 Detalhamento Completo</h4>
    <div class="code-sample">
      <p><strong>Campos gerenciados:</strong></p>
      <ul>
        <li>Forma de contratação e quantitativo</li>
        <li>Valores unitários e frequência</li>
        <li>Códigos de elementos e grupos</li>
        <li>Premissas de volume e preço</li>
        <li>Fontes de financiamento e instrumentos</li>
      </ul>
    </div>
  </div>
</div>

### 🧮 Sistema de Cálculo Automático

<div class="calculation-box">
  <h4>📊 Cálculo do Valor Total</h4>
  <p>O sistema calcula automaticamente o valor total usando a fórmula:</p>
  <div class="formula">
    <strong>Valor Total = Valor Unitário × Quantitativo × Frequência</strong>
  </div>
  <p>O resultado é arredondado para 2 casas decimais e salvo automaticamente.</p>
</div>

---

## 📊 Tela Cenários

<div class="screen-overview">
  <h3>🎭 Planejamento com Múltiplas Perspectivas</h3>
  <p>Esta tela permite criar e comparar diferentes cenários para sua iniciativa, facilitando a tomada de decisões estratégicas.</p>
</div>

### 🔧 Ferramentas de Cenário

<div class="flow-steps">
  <div class="step">
    <h4>👁️ Ver Itens de Custo</h4>
    <p>Retorna rapidamente à tela de custos para consultas ou ajustes, mantendo o contexto da iniciativa atual.</p>
  </div>

  <div class="step">
    <h4>➕ Adicionar Cenário</h4>
    <div class="code-sample">
      <p><strong>Sistema inteligente de numeração:</strong></p>
      <ul>
        <li>Identifica o maior número de cenário existente</li>
        <li>Adiciona automaticamente o próximo número na sequência</li>
        <li>Vincula o cenário à iniciativa atual</li>
      </ul>
    </div>
  </div>
</div>

---

## 🔄 Fluxo Power Automate

<div class="automation-overview">
  <h3>🌟 Automação Inteligente de Relatórios</h3>
  <p>O sistema inclui um fluxo automatizado que gera relatórios personalizados integrando PowerApps, Power BI, SharePoint e Teams.</p>
</div>

### 🎯 Objetivo Principal

<div class="objective-box">
  <p>Automatizar completamente o processo de extração, processamento e distribuição de relatórios analíticos com dados sempre atualizados das iniciativas de planejamento.</p>
</div>

### 📋 Fluxo Detalhado de Automação

<div class="flow-steps">
  <div class="step">
    <h4>1️⃣ Acionamento do Fluxo</h4>
    <p>O processo inicia quando você clica no botão "Gerar Relatório OBZ" no PowerApps. O sistema captura automaticamente suas ações selecionadas e seu e-mail para personalização.</p>
  </div>

  <div class="step">
    <h4>2️⃣ Consulta ao Power BI</h4>
    <p>Uma consulta DAX é executada no dataset "TesteOBZ" do Power BI, filtrando os dados conforme suas seleções e extraindo apenas informações relevantes.</p>
  </div>

  <div class="step">
    <h4>3️⃣ Processamento Inteligente</h4>
    <p>Os dados brutos são extraídos e processados, convertendo-os em formato estruturado através de Parse JSON para garantir organização e consistência.</p>
    <div class="code-sample">
      {{< highlight csharp >}}
        // Código utilizado no "Inputs" da ação:
        outputs('Gerar_uma_consulta_no_dataset_do_PowerBI')?['body']?['results']?[0]?['tables']?[0]?['rows']
      {{< /highlight >}}
    </div>
  </div>

  <div class="step">
    <h4>4️⃣ Personalização dos Dados</h4>
    <p>As informações são reformatadas especificamente para seu relatório, incluindo identificadores, descrições, valores orçamentários e métricas de desempenho.</p>
  </div>

  <div class="step">
    <h4>5️⃣ Criação do Excel</h4>
    <p>Um arquivo Excel é criado automaticamente no SharePoint com nome padronizado incluindo data e hora.</p>
    <div class="code-sample">
      {{< highlight csharp >}}
        // Código utilizado no "File Name" da ação, para garantir um nome único para cada arquivo:
        formatDateTime(utcNow(), 'dd-MM-yyyy HH:mm:ss')
      {{< /highlight >}}
    </div>
  </div>

  <div class="step">
    <h4>6️⃣ Estruturação da Tabela</h4>
    <p>Uma tabela estruturada é criada no Excel com cabeçalhos predefinidos e os dados processados são inseridos através de requisição HTTP otimizada.</p>
    <div class="code-sample">
      {{< highlight csharp >}}
        // Para acessarmos a biblioteca de cada usuário, é necessário passar o identificador obtido na etapa anterior:
        split(outputs('Recuperar_informações')?['body/Id'],'.')?[0]
      {{< /highlight >}}
    </div>
  </div>

  <div class="step">
    <h4>7️⃣ Compartilhamento Automático</h4>
    <p>O sistema cria um link de compartilhamento do arquivo e envia uma notificação personalizada via Teams diretamente para você, incluindo acesso direto ao relatório.</p>
  </div>
</div>

---

## 🔐 Gerenciamento de Permissões de Usuários

<div class="screen-overview">
  <h3>👥 Controle de Acesso Inteligente</h3>
  <p>Sistema completo para gerenciar permissões e controlar o acesso dos usuários às diferentes funcionalidades do aplicativo.</p>
</div>

### 📋 Tela Principal de Permissões

<div class="flow-steps">
  <div class="step">
    <h4>🆕 Nova Permissão</h4>
    <p><strong>Função:</strong> Navigate(Screen_Permissoes_Adicionar)</p>
    <p>Direciona o usuário para a tela onde poderá adicionar uma nova permissão ao sistema, configurando um novo usuário com seus respectivos acessos.</p>
  </div>

  <div class="step">
    <h4>✏️ Editar Permissão</h4>
    <div class="code-sample">
      {{< highlight powerapps >}}
      Select(Parent);
      Set(currUsuario; ThisItem);
      Navigate(Screen_Permissoes_Editar)
      {{< /highlight >}}
    </div>
    <p>Este botão executa três ações em sequência para garantir a edição correta das permissões do usuário selecionado.</p>
  </div>

  <div class="step">
    <h4>🚫 Desativar Usuário</h4>
    <p><strong>Função:</strong> Remove(PlanejamentoIntegrado_Usuarios; ThisItem)</p>
    <p>Remove permanentemente o usuário selecionado da base de dados, desativando completamente seu acesso ao sistema.</p>
  </div>
</div>

### 💾 Sistema de Salvamento de Permissões

<div class="flow-steps">
  <div class="step">
    <h4>🔧 Como Funciona o Salvamento</h4>
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
    <h4>🎯 Processo de Verificação</h4>
    <div class="code-sample">
      <p><strong>Sistema inteligente que:</strong></p>
      <ul>
        <li>Verifica se o usuário será gestor ou comum</li>
        <li>Para gestores: define acesso total (Programas e Ações em branco)</li>
        <li>Para usuários comuns: coleta permissões específicas marcadas</li>
        <li>Utiliza Distinct() para remover duplicatas</li>
        <li>Usa Left(Acao; 4) para otimizar armazenamento</li>
      </ul>
    </div>
  </div>
</div>

---

## 💡 Dicas e Boas Práticas

<div class="tips-grid">
  <div class="tip-card">
    <h4>🎯 Planejamento Eficiente</h4>
    <ul>
      <li>Sempre defina claramente programa e ação antes de criar iniciativas</li>
      <li>Use nomes descritivos para suas iniciativas</li>
      <li>Mantenha informações atualizadas regularmente</li>
    </ul>
  </div>

  <div class="tip-card">
    <h4>💰 Gestão de Custos</h4>
    <ul>
      <li>Preencha todas as premissas de cálculo</li>
      <li>Verifique regularmente os valores totais calculados</li>
      <li>Documente fontes de informação para auditoria</li>
    </ul>
  </div>

  <div class="tip-card">
    <h4>📊 Cenários Estratégicos</h4>
    <ul>
      <li>Crie cenários realistas e fundamentados</li>
      <li>Compare regularmente diferentes alternativas</li>
      <li>Documente premissas de cada cenário</li>
    </ul>
  </div>

  <div class="tip-card">
    <h4>🔄 Automação e Relatórios</h4>
    <ul>
      <li>Gere relatórios periodicamente para acompanhamento</li>
      <li>Verifique dados antes de gerar relatórios finais</li>
      <li>Mantenha histórico de versões importantes</li>
    </ul>
  </div>

  <div class="tip-card">
    <h4>👥 Gerenciamento de Usuários</h4>
    <ul>
      <li>Revise permissões regularmente</li>
      <li>Gestores têm acesso total automaticamente</li>
      <li>Cuidado ao desativar usuários - ação irreversível</li>
    </ul>
  </div>

  <div class="tip-card">
    <h4>🔒 Segurança do Sistema</h4>
    <ul>
      <li>Verifique permissões antes de compartilhar dados</li>
      <li>Mantenha backup regular das configurações</li>
      <li>Monitore acessos e atividades dos usuários</li>
    </ul>
  </div>
</div>

---

## ⚙️ Considerações Técnicas

<div class="technical-notes">
  <div class="note-card">
    <h4>👤 Sistema de Permissões</h4>
    <p>O aplicativo controla automaticamente o acesso baseado no seu perfil (gestor/não gestor), garantindo que você veja apenas as informações apropriadas ao seu nível de acesso.</p>
  </div>

  <div class="note-card">
    <h4>💾 Integração de Dados</h4>
    <p>Todos os dados são integrados com SharePoint para garantir persistência, backup automático e acesso controlado às informações do seu planejamento.</p>
  </div>

  <div class="note-card">
    <h4>📈 Relatórios Dinâmicos</h4>
    <p>O sistema de relatórios se conecta ao Power BI em tempo real, garantindo que você sempre trabalhe com as informações mais atualizadas disponíveis.</p>
  </div>

  <div class="note-card">
    <h4>🔔 Notificações Inteligentes</h4>
    <p>As notificações via Teams são enviadas automaticamente, mantendo você informado sobre o status dos seus relatórios e processos em andamento.</p>
  </div>
</div>

---

## 🚀 Fluxo de Trabalho Recomendado

<div class="workflow-steps">
  <div class="workflow-card">
    <h4>1️⃣ Configuração Inicial</h4>
    <p>Configure permissões de usuários e defina programas e ações disponíveis no sistema.</p>
  </div>

  <div class="workflow-card">
    <h4>2️⃣ Criação de Iniciativas</h4>
    <p>Utilize os controles inteligentes para criar iniciativas vinculadas aos programas apropriados.</p>
  </div>

  <div class="workflow-card">
    <h4>3️⃣ Detalhamento Financeiro</h4>
    <p>Acesse a tela de itens de custo para detalhar todos os aspectos financeiros da iniciativa.</p>
  </div>

  <div class="workflow-card">
    <h4>4️⃣ Análise de Cenários</h4>
    <p>Crie diferentes cenários para análise comparativa e tomada de decisões estratégicas.</p>
  </div>

  <div class="workflow-card">
    <h4>5️⃣ Geração de Relatórios</h4>
    <p>Utilize o fluxo automatizado para gerar relatórios personalizados e compartilhá-los via Teams.</p>
  </div>

  <div class="workflow-card">
    <h4>6️⃣ Monitoramento</h4>
    <p>Acompanhe regularmente o progresso através dos relatórios e ajuste as iniciativas conforme necessário.</p>
  </div>
</div>

## Resumo das Funcionalidades

| Tela | Funcionalidade Principal | Descrição |
|---|---|---|
| **Inicial** | Portal de entrada | Acesso a tutoriais, documentação e início do trabalho |
| **Iniciativas** | Gestão central | Criação, edição e organização de todas as iniciativas |
| **Itens de Custo** | Controle financeiro | Detalhamento completo de custos com cálculos automáticos |
| **Cenários** | Análise estratégica | Criação e comparação de diferentes cenários de planejamento |
| **Permissões** | Controle de acesso | Gerenciamento completo de usuários e suas permissões |
| **Automação** | Relatórios inteligentes | Geração e distribuição automatizada de relatórios via Teams |

## 🚀 Próximos Passos

Agora que você domina todas as funcionalidades do aplicativo, está pronto para:

1. **Criar suas primeiras iniciativas** usando os controles inteligentes
2. **Gerenciar custos detalhadamente** com cálculos automáticos
3. **Desenvolver cenários estratégicos** para melhor tomada de decisão
4. **Gerar relatórios automatizados** para acompanhamento e análise

## 🎉 Conclusão

<div class="success-message">
  <h3>🎉 Parabéns!</h3>
  <p>Você agora possui conhecimento completo para utilizar eficientemente o Aplicativo de Planejamento Integrado. Use este tutorial como referência sempre que precisar relembrar alguma funcionalidade.</p>
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

/* Visão geral das telas */
.screen-overview {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 25px;
  border-radius: 12px;
  margin: 30px 0;
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.screen-overview h3 {
  color: white;
  margin-top: 0;
  font-size: 1.5em;
}

/* Visão geral da automação */
.automation-overview {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  padding: 30px;
  border-radius: 15px;
  margin: 30px 0;
}

.automation-overview h3 {
  margin-top: 0;
  font-size: 1.6em;
  color: #2d3748;
}

/* Grid de elementos */
.element-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.element-card {
  background-color: #f8f9fa;
  border-left: 5px solid #0078d4;
  padding: 20px;
  border-radius: 0 8px 8px 0;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease;
}

.element-card:hover {
  transform: translateX(5px);
}

.element-card h4 {
  margin-top: 0;
  color: #0078d4;
  font-size: 1.3em;
}

/* Estilo dos passos do fluxo */
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

.step h4 {
  margin-top: 0;
  color: #0078d4;
  font-size: 1.3em;
}

/* Caixa de objetivo */
.objective-box {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  margin: 20px 0;
  text-align: center;
  font-weight: 500;
  font-size: 1.1em;
  color: #2d3748;
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

</style>
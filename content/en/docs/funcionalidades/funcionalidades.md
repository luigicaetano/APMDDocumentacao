---
title: 🔄 Configuração do Fluxo Power Automate - Guia Completo
date: 2025-06-10 
description: >
  Este guia detalhado apresenta o processo completo de configuração do fluxo Power Automate para integração entre PowerApps, Power BI e SharePoint. Siga este tutorial para configurar corretamente a automação de relatórios do seu sistema de Planejamento Integrado.

weight: 1
--- 


## O Que Você Vai Aprender

- Como criar variáveis para o fluxo Power Automate
- Como configurar tabelas no Power BI para consultas
- Como usar o Performance Analyzer para extrair queries
- Como configurar Parse JSON com schema correto
- Como estruturar dados com Select e Create Table

---

## 🎯 Visão Geral do Processo

<div class="overview-section">
  <h3>📋 Fluxo de Configuração Completo</h3>
  <p>Este processo integra PowerApps, Power BI e SharePoint através de um fluxo automatizado que extrai dados, processa informações e gera relatórios estruturados.</p>
</div>

---

## 🔧 Passo 1: Criação de Variáveis

<div class="step-section">
  <h3>📝 Configuração Inicial de Variáveis</h3>
  <p>O primeiro passo é criar uma variável que será utilizada posteriormente no fluxo para filtrar e processar os dados.</p>
  {{< figure src="../assets/images/acionamentoFluxo.png" alt="Configuração do gatilho no PowerApps" >}}
</div>


### 🎛️ Processo de Criação

<div class="process-card">
  <h4>🔄 Definição da Variável</h4>
  <div class="process-details">
    <p><strong>Objetivo:</strong> Criar uma variável que armazenará os dados de ações selecionadas pelo usuário</p>
    <ul>
      <li>A variável será passada do PowerApps para o Power Automate</li>
      <li>Servirá como filtro para as consultas no Power BI</li>
      <li>Permitirá personalização dinâmica dos relatórios</li>
    </ul>
  </div>
</div>

---

## 📊 Passo 2: Configuração no Power BI

<div class="step-section">
  <h3>📈 Preparação da Tabela de Dados</h3>
  <p>No Power BI, os dados devem ser organizados em formato de tabela para facilitar as consultas automatizadas.</p>
  {{< figure src="../assets/images/PowerBI_tabelas.png" alt="Configuração da tabela no PowerBi" >}}
</div>
</div>

### 🏗️ Estruturação da Tabela

<div class="bi-config">
  <div class="config-item">
    <h4>📋 Configuração como Tabela</h4>
    <div class="config-details">
      <p><strong>Processo:</strong></p>
      <ul>
        <li>Selecione os dados que serão utilizados no relatório</li>
        <li>Configure-os como uma tabela estruturada</li>
        <li>Defina nomes claros para as colunas</li>
        <li>Verifique a integridade dos dados</li>
      </ul>
    </div>
  </div>

  <div class="config-item">
    <h4>🎯 Seleção de Colunas</h4>
    <div class="config-details">
      <p><strong>Critérios de Seleção:</strong></p>
      <ul>
        <li>Inclua todas as colunas necessárias para o relatório</li>
        <li>Mantenha apenas dados relevantes para otimizar performance</li>
        <li>Verifique tipos de dados corretos</li>
        <li>Confirme que não há valores nulos críticos</li>
      </ul>
    </div>
  </div>
</div>

---

## 🔍 Passo 3: Performance Analyzer

<div class="step-section">
  <h3>⚡ Extração de Consultas Otimizadas</h3>
  <p>O Performance Analyzer é a ferramenta chave para capturar as consultas DAX que serão utilizadas no fluxo.</p>
  {{< figure src="../assets/images/performance_analyzer.png" alt="Performance Analyzer" >}}
</div>

### 📊 Processo no Performance Analyzer

<div class="analyzer-steps">
  <div class="analyzer-step">
    <h4>1️⃣ Ativação do Performance Analyzer</h4>
    <div class="step-details">
      <p><strong>Localização:</strong> Painel Exibição → Performance Analyzer</p>
      <ul>
        <li>Abra o painel de Performance Analyzer</li>
        <li>Prepare a visualização que contém os dados</li>
        <li>Certifique-se de que a tabela está carregada</li>
      </ul>
    </div>
  </div>

  <div class="analyzer-step">
    <h4>2️⃣ Gravação e Captura</h4>
    <div class="step-details">
      <p><strong>Sequência de Ações:</strong></p>
      <ul>
        <li><strong>Iniciar Gravação:</strong> Clique em "Start recording"</li>
        <li><strong>Atualizar Visuais:</strong> Force a atualização dos dados</li>
        <li><strong>Copiar Consulta:</strong> Selecione "Copy query" para capturar o DAX</li>
      </ul>
    </div>
  </div>
</div>

### 💡 Dica Importante

<div class="tip-box">
  <p><strong>⚡ Performance:</strong> O Performance Analyzer captura a consulta DAX otimizada que o Power BI usa internamente, garantindo máxima eficiência na extração de dados.</p>
</div>

---

## 🔧 Passo 4: Configuração da Consulta no Power Automate

<div class="step-section">
  <h3>🔗 Integração da Consulta DAX</h3>
  <p>Agora configuramos o Power Automate para usar a consulta capturada, personalizando-a com nossas variáveis.</p>
   {{< figure src="../assets/images/dataset.PowerBI.png" alt="Consulta ao dataset do Power BI" >}}
</div>

### ⚙️ Configuração do Query Text

<div class="query-config">
  <div class="config-step">
    <h4>📝 Inserção do Código DAX</h4>
    <div class="config-details">
      <p><strong>Processo de Configuração:</strong></p>
      <ul>
        <li>Cole o código copiado do Performance Analyzer no campo "query text"</li>
        <li>Localize a função TREATAS() na consulta</li>
        <li>Substitua o valor fixo pela variável "Ações" criada anteriormente</li>
        <li>Modifique o valor TOPN() para 5000 para garantir todos os registros</li>
      </ul>
    </div>
  </div>
</div>

### 🔧 Exemplo de Modificação

<div class="code-example">
  <h4>💻 Estrutura da Consulta</h4>
  <div class="code-block">
    <p><strong>Antes:</strong> TREATAS({"valor_fixo"}, Tabela[Coluna])</p>
    <p><strong>Depois:</strong> TREATAS({@{variables('Acoes')}}, Tabela[Coluna])</p>
    <br>
    <p><strong>Antes:</strong> TOPN(100, ...)</p>
    <p><strong>Depois:</strong> TOPN(5000, ...)</p>
  </div>
</div>

---

## 📋 Passo 5: Configuração do Parse JSON

<div class="step-section">
  <h3>🔄 Estruturação dos Dados Recebidos</h3>
  <p>O Parse JSON é essencial para converter os dados do Power BI em um formato estruturado que o Power Automate pode processar.</p>
  {{< figure src="../assets/images/Estruturação.png" alt="Estruturação via Parse JSON" >}}
</div>

### 📊 Definição do Schema

<div class="json-config">
  <div class="schema-section">
    <h4>🏗️ Estrutura do Schema</h4>
    <div class="schema-details">
      <p><strong>Componentes Essenciais:</strong></p>
      <ul>
        <li><strong>Colunas:</strong> Defina todas as colunas presentes na tabela</li>
        <li><strong>Tipos de Dados:</strong> Especifique o tipo correto para cada coluna</li>
        <li><strong>Estrutura JSON:</strong> Mantenha hierarquia adequada</li>
        <li><strong>Validação:</strong> Teste com dados reais</li>
      </ul>
    </div>
  </div>
</div>

### 🎯 Tipos de Dados Comuns

<div class="data-types">
  <div class="type-grid">
    <div class="type-card">
      <h4>📝 String</h4>
      <p>Para textos, nomes, descrições</p>
    </div>
    
    <div class="type-card">
      <h4>🔢 Number</h4>
      <p>Para valores numéricos, quantidades</p>
    </div>
    
    <div class="type-card">
      <h4>📅 Date</h4>
      <p>Para datas e timestamps</p>
    </div>
    
    <div class="type-card">
      <h4>✅ Boolean</h4>
      <p>Para valores verdadeiro/falso</p>
    </div>
  </div>
</div>

---

## 🔄 Passo 6: Configuração do Select

<div class="step-section">
  <h3>🎯 Seleção e Mapeamento de Dados</h3>
  <p>O componente Select permite mapear e transformar os dados recebidos do Parse JSON.</p>
  {{< figure src="../assets/images/Personalizar.png" alt="Personalização do formato de dados" >}}
  </div>
</div>

### 📋 Configuração das Colunas

<div class="select-config">
  <div class="mapping-section">
    <h4>🔗 Mapeamento de Campos</h4>
    <div class="mapping-details">
      <p><strong>Processo de Mapeamento:</strong></p>
      <ul>
        <li>Liste todas as colunas que devem aparecer no relatório final</li>
        <li>Mapeie cada campo do JSON para o nome desejado na saída</li>
        <li>Aplique transformações se necessário (formatação, cálculos)</li>
        <li>Mantenha consistência com o schema definido</li>
      </ul>
    </div>
  </div>
</div>

### 💡 Boas Práticas para Select

<div class="best-practices-select">
  <div class="practice-item">
    <h4>🏷️ Nomenclatura</h4>
    <p>Use nomes claros e consistentes para as colunas de saída</p>
  </div>
  
  <div class="practice-item">
    <h4>🎯 Seletividade</h4>
    <p>Inclua apenas os campos necessários para otimizar performance</p>
  </div>
  
  <div class="practice-item">
    <h4>🔄 Transformações</h4>
    <p>Aplique formatações e cálculos simples quando apropriado</p>
  </div>
</div>

---

## 📊 Passo 7: Create Table (Criar Tabela)

<div class="step-section">
  <h3>🏗️ Estruturação Final da Tabela</h3>
  <p>O último passo é definir a estrutura final da tabela que será criada no Excel no SharePoint.</p>
  {{< figure src="../assets/images/Excel_Tabela.png" alt="Criação da tabela no Excel" >}}
</div>

### 📋 Definição das Colunas

<div class="table-config">
  <div class="column-section">
    <h4>📝 Especificação de Colunas</h4>
    <div class="column-details">
      <p><strong>Elementos a Definir:</strong></p>
      <ul>
        <li><strong>Nome das Colunas:</strong> Títulos que aparecerão no Excel</li>
        <li><strong>Ordem das Colunas:</strong> Sequência lógica para o usuário</li>
        <li><strong>Tipos de Dados:</strong> Formato adequado para cada coluna</li>
        <li><strong>Largura das Colunas:</strong> Otimização visual (opcional)</li>
      </ul>
    </div>
  </div>
</div>

### 🎨 Formatação da Tabela

<div class="formatting-options">
  <div class="format-grid">
    <div class="format-card">
      <h4>📊 Cabeçalhos</h4>
      <p>Defina cabeçalhos claros e informativos</p>
    </div>
    
    <div class="format-card">
      <h4>🎯 Ordenação</h4>
      <p>Organize colunas por importância</p>
    </div>
    
    <div class="format-card">
      <h4>💫 Estilo</h4>
      <p>Aplique formatação consistente</p>
    </div>
  </div>
</div>

---

## ✅ Checklist de Configuração

<div class="checklist-section">
  <h3>📋 Verificação Final</h3>
  <p>Use este checklist para garantir que todos os componentes estão configurados corretamente.</p>
</div>

<div class="checklist">
  <div class="check-category">
    <h4>🔧 Configurações Básicas</h4>
    <ul class="task-list">
      <li>✅ Variável criada e nomeada corretamente</li>
      <li>✅ Tabela do Power BI estruturada</li>
      <li>✅ Colunas selecionadas adequadamente</li>
      <li>✅ Performance Analyzer configurado</li>
    </ul>
  </div>

  <div class="check-category">
    <h4>📊 Consultas e Dados</h4>
    <ul class="task-list">
      <li>✅ Query DAX capturada corretamente</li>
      <li>✅ Variável inserida na TREATAS()</li>
      <li>✅ TOPN() ajustado para 5000</li>
      <li>✅ Parse JSON com schema completo</li>
    </ul>
  </div>

  <div class="check-category">
    <h4>🔄 Processamento</h4>
    <ul class="task-list">
      <li>✅ Select configurado com todas as colunas</li>
      <li>✅ Mapeamento de campos correto</li>
      <li>✅ Create Table com estrutura final</li>
      <li>✅ Testes realizados com dados reais</li>
    </ul>
  </div>
</div>

---

## 🚨 Solução de Problemas Comuns

<div class="troubleshooting">
  <div class="problem-section">
    <h4>❌ Erro no Parse JSON</h4>
    <div class="solution">
      <p><strong>Causa:</strong> Schema incorreto ou dados não compatíveis</p>
      <p><strong>Solução:</strong> Valide o schema com dados de exemplo e ajuste tipos de dados</p>
    </div>
  </div>

  <div class="problem-section">
    <h4>❌ Consulta DAX falha</h4>
    <div class="solution">
      <p><strong>Causa:</strong> Sintaxe incorreta na modificação da query</p>
      <p><strong>Solução:</strong> Verifique se a variável foi inserida corretamente na TREATAS()</p>
    </div>
  </div>

  <div class="problem-section">
    <h4>❌ Tabela não criada</h4>
    <div class="solution">
      <p><strong>Causa:</strong> Permissões incorretas ou estrutura mal definida</p>
      <p><strong>Solução:</strong> Verifique permissões do SharePoint e configuração do Create Table</p>
    </div>
  </div>
</div>

---

## 🎯 Próximos Passos

<div class="next-steps">
  <h3>🚀 Depois da Configuração</h3>
  <p>Com o fluxo configurado, você poderá:</p>
  
  <div class="steps-grid">
    <div class="next-step-card">
      <h4>🔄 Testar o Fluxo</h4>
      <p>Execute testes com diferentes cenários de dados</p>
    </div>
    
    <div class="next-step-card">
      <h4>📊 Monitorar Performance</h4>
      <p>Acompanhe tempo de execução e otimize se necessário</p>
    </div>
    
    <div class="next-step-card">
      <h4>🛠️ Ajustar Configurações</h4>
      <p>Refine o fluxo baseado no feedback dos usuários</p>
    </div>
    
    <div class="next-step-card">
      <h4>📈 Expandir Funcionalidades</h4>
      <p>Adicione novos recursos conforme necessário</p>
    </div>
  </div>
</div>

---

## 💡 Dicas Finais

<div class="final-tips">
  <div class="tip-card">
    <h4>⚡ Performance</h4>
    <p>Mantenha as consultas otimizadas e limite a quantidade de dados processados quando possível</p>
  </div>
  
  <div class="tip-card">
    <h4>🔒 Segurança</h4>
    <p>Certifique-se de que apenas usuários autorizados têm acesso ao fluxo e aos dados</p>
  </div>
  
  <div class="tip-card">
    <h4>📝 Documentação</h4>
    <p>Mantenha registros das configurações para facilitar manutenções futuras</p>
  </div>
  
  <div class="tip-card">
    <h4>🔄 Versionamento</h4>
    <p>Crie backups das configurações antes de fazer alterações significativas</p>
  </div>
</div>

<div class="success-message">
  <h3>🎉 Configuração Concluída!</h3>
  <p>Você agora possui um fluxo Power Automate completamente configurado e otimizado para gerar relatórios automatizados do seu sistema de Planejamento Integrado.</p>
</div>

<style>
/* Estilos Gerais */
body {
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  line-height: 1.6;
  color: #2d3748;
}

h1 {
  color: #1a202c;
  border-bottom: 3px solid #0078d4;
  padding-bottom: 10px;
  font-size: 2.5em;
}

h2 {
  color: #0078d4;
  margin-top: 2em;
  font-size: 1.8em;
}

h3 {
  color: #2d3748;
  font-size: 1.4em;
}

/* Seção de Visão Geral */
.overview-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 25px;
  border-radius: 12px;
  margin: 30px 0;
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.overview-section h3 {
  color: white;
  margin-top: 0;
  font-size: 1.5em;
}

/* Seções de Passos */
.step-section {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  padding: 25px;
  border-radius: 12px;
  margin: 30px 0;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
}

.step-section h3 {
  margin-top: 0;
  color: #2d3748;
  font-size: 1.5em;
}

/* Cards de Processo */
.process-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
}

.process-card h4 {
  color: #0078d4;
  margin-top: 0;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 8px;
}

.process-details ul {
  margin: 10px 0;
  padding-left: 20px;
}

/* Configuração BI */
.bi-config {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.config-item {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  transition: transform 0.3s ease;
}

.config-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.config-item h4 {
  color: #48bb78;
  margin-top: 0;
  margin-bottom: 15px;
}

/* Passos do Analyzer */
.analyzer-steps {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 25px 0;
}

.analyzer-step {
  background: white;
  border-left: 5px solid #ed8936;
  padding: 20px;
  border-radius: 0 10px 10px 0;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
}

.analyzer-step h4 {
  color: #ed8936;
  margin-top: 0;
  margin-bottom: 12px;
}

.step-details ul {
  margin: 10px 0;
  padding-left: 20px;
}

/* Caixa de Dica */
.tip-box {
  background: #e6fffa;
  border: 1px solid #81e6d9;
  border-radius: 8px;
  padding: 15px;
  margin: 20px 0;
  border-left: 4px solid #38b2ac;
}

/* Configuração de Query */
.query-config {
  background: #f7fafc;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.config-step {
  margin-bottom: 20px;
}

.config-step h4 {
  color: #4299e1;
  margin-bottom: 10px;
}

/* Exemplo de Código */
.code-example {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
}

.code-block {
  background: #2d3748;
  color: #e2e8f0;
  padding: 15px;
  border-radius: 8px;
  font-family: 'Consolas', monospace;
  margin: 10px 0;
}

/* Configuração JSON */
.json-config {
  margin: 25px 0;
}

.schema-section {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
}

.schema-section h4 {
  color: #805ad5;
  margin-top: 0;
}

/* Grid de Tipos de Dados */
.type-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.type-card {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  transition: background-color 0.3s ease;
}

.type-card:hover {
  background: #edf2f7;
}

.type-card h4 {
  color: #4a5568;
  margin: 0 0 8px 0;
  font-size: 1.1em;
}

/* Configuração Select */
.select-config {
  margin: 25px 0;
}

.mapping-section {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
}

.mapping-section h4 {
  color: #e53e3e;
  margin-top: 0;
}

/* Boas Práticas Select */
.best-practices-select {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.practice-item {
  background: #f0fff4;
  border: 1px solid #9ae6b4;
  border-radius: 8px;
  padding: 15px;
  border-left: 4px solid #48bb78;
}

.practice-item h4 {
  color: #48bb78;
  margin: 0 0 8px 0;
}

/* Configuração de Tabela */
.table-config {
  margin: 25px 0;
}

.column-section {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
}

/* Opções de Formatação */
.format-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.format-card {
  background: #fef5e7;
  border: 1px solid #f6ad55;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
}

.format-card h4 {
  color: #ed8936;
  margin: 0 0 8px 0;
}

/* Checklist */
.checklist-section {
  background: linear-gradient(135deg, #d299c2 0%, #fef9d3 100%);
  padding: 25px;
  border-radius: 12px;
  margin: 30px 0;
}

.checklist {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.check-category {
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
}

.check-category h4 {
  color: #553c9a;
  margin-top: 0;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 8px;
}

.task-list {
  list-style: none;
  padding: 0;
}

.task-list li {
  padding: 5px 0;
  border-bottom: 1px solid #f7fafc;
}

/* Solução de Problemas */
.troubleshooting {
  margin: 30px 0;
}

.problem-section {
  background: #fed7d7;
  border: 1px solid #fc8181;
  border-radius: 10px;
  padding: 20px;
  margin: 15px 0;
  border-left: 5px solid #e53e3e;
}

.problem-section h4 {
  color: #e53e3e;
  margin-top: 0;
}

.solution {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-top: 10px;
}

/* Próximos Passos */
.next-steps {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  padding: 30px;
  border-radius: 15px;
  margin: 30px 0;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.next-step-card {
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.next-step-card:hover {
  transform: translateY(-5px);
}

.next-step-card h4 {
  color: #38b2ac;
  margin-top: 0;
}

/* Dicas Finais */
.final-tips {
  display: gri
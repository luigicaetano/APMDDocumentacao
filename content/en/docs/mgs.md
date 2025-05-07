---
title: 📊 Fluxo de Execução Orçamentária MGS
date: 2025-05-05
description: >
  Documentação detalhada do processo de execução orçamentária mensal das despesas da MGS, incluindo procedimentos manuais e automatizados.
categories: [Processos, Automação]
tags: [MGS, Power Automate, Excel, Orçamento]
---


## 📋 Informações do Projeto

<div class="project-info-card">

| **Informação** | **Detalhes** |
|:---------------|:-------------|
| **👨‍💻 Desenvolvedor** | Luigi Caetano da Silva |
| **📧 E-mail** | luigi.silva@social.mg.gov.br |
| **🤖 Ferramenta** | Power Automate Desktop |
| **📑 Requisito Excel** | 2016 ou superior |
| **🔄 Última atualização** | 05/05/2025 |

</div>

---

## 🎯 Visão Geral

<div class="overview-section">

### Objetivo
> Automatizar e documentar o processo de execução orçamentária mensal referente às despesas da MGS, simplificando o fluxo de trabalho e garantindo precisão nos resultados.

### Escopo
Este fluxo abrange todo o processo desde o acesso ao portal da MGS, extração de dados de **24 centros de custo**, até o tratamento de dados no Excel com foco em três categorias específicas de despesa:

- **Postos de Serviço**
- **Gratificação de Função**
- **Vale Alimentação**

</div>

---

## 💾 Copiar Código para a Área de Transferência

{{< copy-button filepath="/assets/cods/cod_mgs.txt" >}}

---

## 🔄 Fluxo do Processo

```mermaid
graph TD
    A[Acesso ao Portal MGS] --> B[Login no Sistema]
    B --> C[Configuração dos Parâmetros]
    C --> D[Extração de Dados]
    D --> E[Exportação para Excel]
    E --> F[Processamento dos Dados]
    F --> G[Cálculo dos Valores]
    G --> H[Resultados Finais]
```

---

## 💻 1. Processo: Portal MGS

### 1.1 Acesso ao Portal Cliente

<div class="step-box">
<div class="step-content">

1. Abra o navegador Chrome e acesse o Portal Cliente MGS

   <div class="image-container">
   
   ![Acesso ao Chrome](../assets/images/Chrome.png)
   
   </div>

2. Na tela de login, insira suas credenciais de acesso

   <div class="image-container">
   
   ![Tela de Login](../assets/images/Login_Corrigido.png)
   
   </div>

</div>
</div>

### 1.2 Navegação até Relatórios de Faturamento

<div class="step-box">
<div class="step-content">

1. Após autenticação, navegue até a página de Relatórios de Faturamento
2. Configure os parâmetros iniciais:
   - Selecione o Tipo de Contrato: `00502021`
   - Selecione o Tipo de Acesso: `Gestor`
   - Clique em "Carregar Unidades"

   <div class="image-container">
   
   ![Página de Relatório](../assets/images/Pag_Relatorio.png)
   
   </div>

</div>
</div>

### 1.3 Extração de Dados dos Centros de Custo

<div class="step-box">
<div class="step-content">

1. A automação cria uma tabela de dados (DataTable) contendo informações dos 24 Centros de Custo

   <div class="image-container">
   
   ![Tabela de Dados](../assets/images/Data_Table.png)
   
   </div>

2. Para cada Centro de Custo na tabela:
   - O sistema filtra automaticamente o item na barra de pesquisa
   - Aguarda o carregamento das informações correspondentes

   <div class="image-container">
   
   ![Preenchimento do Campo de Pesquisa](../assets/images/Preencher_Campo.png)
   
   </div>

3. Para cada resultado filtrado:
   - Selecione "Detalhamento de Custo"
   - Clique em "Exportar para Excel"

   <div class="image-container">
   
   ![Detalhamento de Custos](../assets/images/Detalhamento_Custos.png)
   
   </div>

4. Os arquivos exportados são renomeados automaticamente para facilitar a identificação

   <div class="image-container">
   
   ![Renomeação de Arquivos](../assets/images/Renomear.png)
   
   </div>

</div>
</div>

---

## 📊 2. Processo: Tratamento de Dados no Excel

### 2.1 Inicialização do Excel

<div class="step-box excel-section">
<div class="step-content">

1. A automação inicia duas instâncias do Excel:
   - Uma planilha em branco para processamento
   - Outra para anexar o documento de detalhamento (ex: "03.2025_Detalhamento_SUBBPG")

   <div class="image-container">
   
   ![Inicialização do Excel](../assets/images/Excel.png)
   
   </div>

</div>
</div>

### 2.2 Processamento dos Postos de Serviço

<div class="step-box excel-section">
<div class="step-content">

<div class="process-highlight">

#### Etapa 1: Inicialização
1. Inicialização da variável "ValorPosto" com valor 0

   <div class="image-container">
   
   ![Inicialização da Variável](../assets/images/Variavel.png)
   
   </div>

#### Etapa 2: Filtragem
2. Filtragem dos dados na coluna B utilizando o critério "Eq 134 POSTOS DE SERVIÇOS"

   <div class="image-container">
   
   ![Filtragem dos Dados](../assets/images/Filtrar.png)
   
   </div>

#### Etapa 3: Seleção
3. Seleção dos dados relevantes na coluna F (a partir da linha 2)
   - Utiliza-se `FirstFreeRowOnColumn - 1` para excluir o cabeçalho da tabela

   <div class="image-container">
   
   ![Seleção de Dados](../assets/images/Selecionar.png)
   
   </div>

#### Etapa 4: Processamento
4. Processamento dos valores financeiros:
   - Seleção da coluna P (Valor) a partir da linha 2
   - Cópia dos valores para a planilha de processamento

   <div class="image-container">
   
   ![Processamento da Coluna P](../assets/images/ColunaP.png)
   
   </div>

#### Etapa 5: Agregação
5. Agregação dos valores:
   - Leitura dos valores da coluna A
   - Incremento da variável "ValorPosto" com cada valor lido
   - Identificação da primeira linha livre na coluna A para inserção de novos dados
   - Gravação dos valores específicos nas colunas A e B

     ![Processamento da Coluna A](../assets/images/Etapa5.png)
   
   


#### Etapa 6: Organização
6. Organização e Estruturação dos Dados

<div class="image-container">
   
   ![Organização](../assets/images/Organização.png)
   
   </div>

#### Etapa 7: ValorGratificação
7. Repetir o processo para a variável "ValorGraticifcação":

<div class="image-container">
   
   ![Repetição](../assets/images/Gratificação.png)
   
   </div>
<div class="image-container">
   
   ![Repetição](../assets/images/GratificaçãoFinal.png)
   
   </div>

#### Etapa 8: ValorAlimentação
8. Repetir o processo para a variável "ValorAlimentação":

![Repetição](../assets/images/Alimentação.png)
   
   </div>

#### Etapa 9: Viagem 
9. Repetir o mesmo processo dos demais para a variável "ValorViagem"

![Repetição](../assets/images/Viagem.png)
   
   </div>

![Repetição](../assets/images/Viagem2.png)
   
   </div>

  </div>

### 2.3 Processamento de Outras Categorias

<div class="step-box excel-section">
<div class="step-content">

<div class="flex-container">

<div class="flex-item">

#### 🏆 Gratificações

1. Filtro aplicado: "Eq 140 GRATIFICACAO DE FUNCAO"
2. Variável utilizada: "ValorGratificacao"
3. Mesmo processo de extração e agregação

</div>

<div class="flex-item">

#### 🍽️ Vale Alimentação

1. Filtro aplicado: "Eq 23 VALE ALIMENTAÇÃO"
2. Variável utilizada: "ValorAlimentacao"
3. Mesmo processo de extração e agregação

</div>

</div>

</div>
</div>

---

## 📈 3. Resultados e Saídas

<div class="results-section">

Ao final do processamento, a planilha Excel conterá:

<div class="results-grid">

<div class="result-card">
<div class="card-header">Postos de Serviço</div>
<div class="card-body">
Valor total consolidado para todos os centros de custo
</div>
</div>

<div class="result-card">
<div class="card-header">Gratificações</div>
<div class="card-body">
Valor total consolidado para todos os centros de custo
</div>
</div>

<div class="result-card">
<div class="card-header">Vale Alimentação</div>
<div class="card-body">
Valor total consolidado para todos os centros de custo
</div>
</div>

</div>

Os dados são organizados de forma estruturada para análise orçamentária mensal, permitindo:
- Comparativos entre períodos
- Análises por centro de custo
- Projeções orçamentárias

</div>

---

## ⚠️ 4. Solução de Problemas Comuns

<div class="troubleshooting-section">

| **Problema** | **Possível Causa** | **Solução** |
|:-------------|:-------------------|:------------|
| 🔒 **Falha no login do Portal** | Credenciais inválidas ou expiradas | Verificar credenciais ou solicitar renovação |
| 📊 **Erro na extração dos dados** | Mudança na estrutura do portal | Atualizar os seletores de elementos na automação |
| 📑 **Erro no Excel** | Versão incompatível | Verificar se está usando Excel 2016 ou superior |
| 🔍 **Dados não filtrados corretamente** | Alteração nas descrições dos itens | Verificar e atualizar os critérios de filtro |
| ⏱️ **Timeout durante o processo** | Conexão lenta ou sobrecarga do servidor | Ajustar os tempos de espera na automação |

</div>

---

## 📞 5. Contato para Suporte

<div class="contact-card">

Em caso de dúvidas ou problemas com a automação, entre em contato com:

| | |
|:--:|:--|
| 👨‍💻 | **Luigi Caetano da Silva** |
| 📧 | **luigi.silva@social.mg.gov.br** |
| 🕙 | **Horário de atendimento:** Segunda a Sexta, 08:00 às 17:00 |

</div>

---

<div class="footer-section">
<p>Documentação gerada em 05/05/2025 | MGS - Execução Orçamentária</p>
</div>

<style>
/* Estilos gerais */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  margin: 0;
  padding: 0;
}

h1, h2, h3, h4 {
  color: #2c3e50;
  margin-top: 1.5em;
}

h1 {
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 1em;
  color: #1a365d;
}

h2 {
  border-bottom: 2px solid #eaeaea;
  padding-bottom: 0.5em;
  font-size: 1.8em;
  color: #2a4365;
}

/* Seção de informações do projeto */
.project-info-card {
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1em;
  margin: 1em 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.project-info-card table {
  width: 100%;
}

.project-info-card td:first-child {
  font-weight: bold;
  width: 200px;
}

/* Visão geral */
.overview-section {
  background-color: #ebf8ff;
  border-left: 4px solid #3182ce;
  padding: 1em 1.5em;
  border-radius: 0 8px 8px 0;
  margin: 1.5em 0;
}

.overview-section blockquote {
  background-color: white;
  border-left: 3px solid #3182ce;
  padding: 0.8em;
  margin: 1em 0;
  border-radius: 4px;
  font-style: italic;
}

/* Etapas do processo */
.step-box {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  margin: 1.5em 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  overflow: hidden;
}

.step-content {
  padding: 1.5em;
}

.excel-section {
  border-left: 4px solid #2c7a7b;
}

/* Imagens */
.image-container {
  display: flex;
  justify-content: center;
  margin: 1em 0;
  padding: 0.5em;
  background-color: #f7fafc;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.image-container img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

/* Process highlight */
.process-highlight {
  background-color: #f0fff4;
  border-radius: 6px;
  padding: 1em;
}

/* Flex container */
.flex-container {
  display: flex;
  gap: 1.5em;
  flex-wrap: wrap;
}

.flex-item {
  flex: 1;
  min-width: 300px;
  background-color: #f0f9ff;
  padding: 1em;
  border-radius: 6px;
  border-left: 3px solid #3182ce;
}

/* Results section */
.results-section {
  background-color: #f0fff4;
  padding: 1.5em;
  border-radius: 8px;
  margin: 1.5em 0;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1em;
  margin: 1.5em 0;
}

.result-card {
  background-color: white;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #4299e1;
  color: white;
  padding: 0.8em;
  font-weight: bold;
  text-align: center;
}

.card-body {
  padding: 1em;
  text-align: center;
}

/* Troubleshooting */
.troubleshooting-section {
  background-color: #fff5f5;
  padding: 1em;
  border-radius: 8px;
  margin: 1.5em 0;
}

.troubleshooting-section table {
  width: 100%;
  border-collapse: collapse;
}

.troubleshooting-section th,
.troubleshooting-section td {
  padding: 0.8em;
  border-bottom: 1px solid #e2e8f0;
}

.troubleshooting-section tr:last-child td {
  border-bottom: none;
}

/* Contact card */
.contact-card {
  background-color: #ebf8ff;
  border-radius: 8px;
  padding: 1.5em;
  text-align: center;
  margin: 1.5em 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.contact-card table {
  width: 80%;
  margin: 0 auto;
}

.contact-card td:first-child {
  font-size: 1.5em;
  width: 60px;
}

/* Footer */
.footer-section {
  text-align: center;
  margin-top: 3em;
  padding: 1em;
  background-color: #f7fafc;
  color: #718096;
  font-size: 0.9em;
  border-top: 1px solid #e2e8f0;
}

/* Mermaid diagrams */
.mermaid {
  background-color: white;
  padding: 1em;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  margin: 1.5em 0;
  text-align: center;
}

.copy-container {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    text-align: center;
}

.copy-button {
    display: inline-block;
    background-color: #3182ce;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    font-weight: bold;
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.copy-button:hover {
    background-color: #2c5282;
}

.copy-button:active {
    background-color: #2a4365;
}

.file-path {
    font-family: monospace;
    background-color: #edf2f7;
    padding: 6px 10px;
    border-radius: 4px;
    margin-top: 15px;
    font-size: 14px;
    display: inline-block;
}

.success-message {
    color: #2f855a;
    margin-top: 10px;
    font-weight: bold;
    display: none;
}
</style>
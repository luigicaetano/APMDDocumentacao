---
title: Fluxo de Execução Orçamentária MGS
date: 2025-05-05
description: >
  Documentação detalhada do processo de execução orçamentária mensal das despesas da MGS, incluindo procedimentos manuais e automatizados.
categories: [Processos, Automação]
tags: [MGS, Power Automate, Excel, Orçamento]
---

# Fluxo de Execução Orçamentária MGS

## Informações do Projeto

| **Informação** | **Detalhes** |
|:---------------|:-------------|
| **Desenvolvedor** | Luigi Caetano da Silva |
| **E-mail** | luigi.silva@social.mg.gov.br |
| **Ferramenta** | Power Automate Desktop |
| **Requisito Excel** | 2016 ou superior |
| **Última atualização** | 05/05/2025 |

## 1. Visão Geral

### 1.1 Objetivo
Automatizar e documentar o processo de execução orçamentária mensal referente às despesas da MGS, detalhando as etapas operacionais e procedimentos de automação envolvidos.

### 1.2 Escopo
Este fluxo abrange todo o processo desde o acesso ao portal da MGS, extração de dados de 24 centros de custo, até o tratamento de dados no Excel com foco em categorias específicas de despesa (Postos de Serviço, Gratificação de Função e Vale Alimentação).

## 2. Processo: Portal MGS

### 2.1 Acesso ao Portal Cliente

1. Abra o navegador Chrome e acesse o Portal Cliente MGS

   ![Acesso ao Chrome](../assets/images/Chrome.png)

2. Na tela de login, insira suas credenciais de acesso

   ![Tela de Login](../assets/images/Login.png)

### 2.2 Navegação até Relatórios de Faturamento

1. Após autenticação, navegue até a página de Relatórios de Faturamento
2. Configure os parâmetros iniciais:
   - Selecione o Tipo de Contrato: `00502021`
   - Selecione o Tipo de Acesso: `Gestor`
   - Clique em "Carregar Unidades"

   ![Página de Relatório](../assets/images/Pag_Relatorio.png)

### 2.3 Extração de Dados dos Centros de Custo

1. A automação cria uma tabela de dados (DataTable) contendo informações dos 24 Centros de Custo

   ![Tabela de Dados](../assets/images/Data_Table.png)

2. Para cada Centro de Custo na tabela:
   - O sistema filtra automaticamente o item na barra de pesquisa
   - Aguarda o carregamento das informações correspondentes

   ![Preenchimento do Campo de Pesquisa](../assets/images/Preencher_Campo.png)

3. Para cada resultado filtrado:
   - Selecione "Detalhamento de Custo"
   - Clique em "Exportar para Excel"

   ![Detalhamento de Custos](../assets/images/Detalhamento_Custos.png)

4. Os arquivos exportados são renomeados automaticamente para facilitar a identificação

   ![Renomeação de Arquivos](../assets/images/Renomear.png)

## 3. Processo: Tratamento de Dados no Excel

### 3.1 Inicialização do Excel

1. A automação inicia duas instâncias do Excel:
   - Uma planilha em branco para processamento
   - Outra para anexar o documento de detalhamento (ex: "03.2025_Detalhamento_SUBBPG")

   ![Inicialização do Excel](../assets/images/Excel.png)

### 3.2 Processamento dos Postos de Serviço

1. Inicialização da variável "ValorPosto" com valor 0

   ![Inicialização da Variável](../assets/images/Variavel.png)

2. Filtragem dos dados na coluna B utilizando o critério "Eq 134 POSTOS DE SERVIÇOS"

   ![Filtragem dos Dados](../assets/images/Filtrar.png)

3. Seleção dos dados relevantes na coluna F (a partir da linha 2)
   - Utiliza-se `FirstFreeRowOnColumn - 1` para excluir o cabeçalho da tabela

   ![Seleção de Dados](../assets/images/Selecionar.png)

4. Processamento dos valores financeiros:
   - Seleção da coluna P (Valor) a partir da linha 2
   - Cópia dos valores para a planilha de processamento

   ![Processamento da Coluna P](../assets/images/ColunaP.png)

5. Agregação dos valores:
   - Leitura dos valores da coluna A
   - Incremento da variável "ValorPosto" com cada valor lido
   - Identificação da primeira linha livre na coluna A para inserção de novos dados
   - Gravação dos valores específicos nas colunas A e B

### 3.3 Processamento de Gratificações

1. O fluxo se repete para a variável "ValorGratificacao"
2. Filtro aplicado na coluna B: "Eq 140 GRATIFICACAO DE FUNCAO"
3. Mesmo processo de extração e agregação de valores

### 3.4 Processamento de Vale Alimentação

1. O fluxo se repete para a variável "ValorAlimentacao"
2. Filtro aplicado na coluna B: "Eq 23 VALE ALIMENTAÇÃO"
3. Mesmo processo de extração e agregação de valores

## 4. Resultados e Saídas

Ao final do processamento, a planilha Excel conterá:

1. Valores consolidados para cada categoria:
   - Total de Postos de Serviço
   - Total de Gratificações de Função
   - Total de Vale Alimentação

2. Os dados são organizados de forma estruturada para análise orçamentária mensal

## 5. Solução de Problemas Comuns

| **Problema** | **Possível Causa** | **Solução** |
|:-------------|:-------------------|:------------|
| Falha no login do Portal | Credenciais inválidas ou expiradas | Verificar credenciais ou solicitar renovação |
| Erro na extração dos dados | Mudança na estrutura do portal | Atualizar os seletores de elementos na automação |
| Erro no Excel | Versão incompatível | Verificar se está usando Excel 2016 ou superior |

## 6. Contato para Suporte

Em caso de dúvidas ou problemas com a automação, entre em contato com:

- **Desenvolvedor**: Luigi Caetano da Silva
- **E-mail**: luigi.silva@social.mg.gov.br
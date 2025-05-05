---
title: Fluxo MGS
date: 2017-01-05
description: >
  A short lead description about this content page. It can be **bold** or _italic_ and can be split over multiple paragraphs.
categories: [Examples]
tags: [test, sample, docs]
---

{{% pageinfo %}}
This is a placeholder page. Replace it with your own content.
{{% /pageinfo %}}

| Desenvolvedor     | Luigi Caetano da Silva         |
|-----------|-----------------|
| E-mail   | luigi.silva@social.mg.gov.br    |
| Ferramenta   | Power Automate Desktop   |
| Versão Excel  |    2016 ou superior|
  ----------------
* Objetivo: 
Descrever o processo de execução orçamentária mensal referente às despesas da MGS, detalhando as etapas operacionais e de automação envolvidas. 
* Escopo:
Este fluxo cobre desde o acesso ao portal da MGS até o tratamento de dados no Excel com foco em centros de custo e categorias de despesa. 

1. Etapas do Processo Fluxo Site MGS  
  1.1 Acessar o Portal Cliente MGS

![](../assets/images/Chrome.png)

  1.2 Preencher as informações de login e entrar 

  1.3 Acessar a página dos Relatórios de Faturamento; selecionar Tipo de Contrato (00502021) e Tipo de Acesso (Gestor) e Carregar Unidades
  1.4 Criação de uma tabela de dados (DataTable) com as informações dos 24 Centros de Custo 
  1.5 Filtrar na barra de pesquisa cada item que está no DataTable e aguardar o carregamento das informações  
  1.6 Selecionar Detalhamento de Custo e Exportar para Excel  
  1.7 Renomear arquivos 
2. Fluxo Excel 
  2.1 Esses comandos são usados para iniciar e manipular documentos no Excel utilizando a mesma instância (ExcelInstance3) para todas as operações, desse modo ele inicia duas páginas do Excel em branco e anexa o documento (03.2025_Detalhamento_SUBBPG) a uma instancia já em execução 
  2.2 Atribuir a variável ”ValorPosto” o valor 0, isso garante que a variável tenha um valor definido antes de ser usada nas próximas operaçõ
  2.3 Filtrar a planilha na coluna B os ’Eq 134 POSTOS DE SERVIÇOS’
  2.4 Selecionar na coluna ‘F’ todas as informações a partir da linha 2 e usamos o ‘FirstFreeRowOnColumn - 1 para excluir uma linha da tabela, já que nossa primeira linha da planilha são as descrições 
  2.5 Para filtrar as linhas da coluna P (Valor), selecionamos as variáveis da coluna ’P’ a partir da linha 2 e retiramos a primeira coluna da tabela usando o FirstFreeRowOnColum –1; copiar as variáveis selecionadas e colar no Excel aberto  
  2.6 Ler os valores das variáveis da coluna ’A’ e armazenar em ExcelData2, desse modo, cada variável vai aumentar o valor em ’ValorPosto’
  2.7 
  2.8
  2.9
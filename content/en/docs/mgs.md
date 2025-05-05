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
  
  ![](../assets/images/Login.png)

  1.3 Acessar a página dos Relatórios de Faturamento; selecionar Tipo de Contrato (00502021) e Tipo de Acesso (Gestor) e Carregar Unidades
  
  ![](../assets/images/Pag_Relatorio.png)

  1.4 Criação de uma tabela de dados (DataTable) com as informações dos 24 Centros de Custo 

![](../assets/images/Data_Table.png)

  1.5 Filtrar na barra de pesquisa cada item que está no DataTable e aguardar o carregamento das informações  
  ![](../assets/images/Preencher_Campo.png)

  1.6 Selecionar Detalhamento de Custo e Exportar para Excel  
  
  ![](../assets/images/Detalhamento_Custos.png)

  1.7 Renomear arquivos 
  ![](../assets/images/Renomear.png)

2. Fluxo Excel 
  2.1 Esses comandos são usados para iniciar e manipular documentos no Excel utilizando a mesma instância (ExcelInstance3) para todas as operações, desse modo ele inicia duas páginas do Excel em branco e anexa o documento (03.2025_Detalhamento_SUBBPG) a uma instancia já em execução 

![](../assets/images/Excel.png)

  2.2 Atribuir a variável ”ValorPosto” o valor 0, isso garante que a variável tenha um valor definido antes de ser usada nas próximas operaçõ

  ![](../assets/images/Variavel.png)

  2.3 Filtrar a planilha na coluna B os ’Eq 134 POSTOS DE SERVIÇOS’

  ![](../assets/images/Filtrar.png)

  2.4 Selecionar na coluna ‘F’ todas as informações a partir da linha 2 e usamos o ‘FirstFreeRowOnColumn - 1 para excluir uma linha da tabela, já que nossa primeira linha da planilha são as descrições 

  ![](../assets/images/Selecionar.png)

  2.5 Para filtrar as linhas da coluna P (Valor), selecionamos as variáveis da coluna ’P’ a partir da linha 2 e retiramos a primeira coluna da tabela usando o FirstFreeRowOnColum –1; copiar as variáveis selecionadas e colar no Excel aberto  
  
  2.6 Ler os valores das variáveis da coluna ’A’ e armazenar em ExcelData2, desse modo, cada variável vai aumentar o valor em ’ValorPosto’
  2.7 Identifica a primeira linha livre na coluna ’A‘ da planilha, garantindo que novos dados sejam inseridos corretamente; grava os valores específicos das colunas ’A’ e ‘B’, organizando e registrando dados de forma estruturada. Defini e inicializa a variável (ValorPosto), que pode ser usada em operações futuras dentro do fluxo. 
  2.8 O fluxo se repete para a variável (Valor gratificação), mudando apenas a coluna, que agora vai ser a coluna ‘B’ com o filtro (Eq 140 GRATIFICACAO DE FUNCAO).  
  2.9 O mesmo se repete para a variável Alimentação, também será a coluna ‘B’ mas aplicando o filtro (Eq 23 VALE ALIMENTAÇÃO) 
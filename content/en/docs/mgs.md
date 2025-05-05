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

![](assets/images/Chrome.png)

  1.2 Preencher as informações de login e entrar 

  1.3 Acessar a página dos Relatórios de Faturamento; selecionar Tipo de Contrato (00502021) e Tipo de Acesso (Gestor) e Carregar Unidades
  1.4 Criação de uma tabela de dados (DataTable) com as informações dos 24 Centros de Custo 
  1.5 Filtrar na barra de pesquisa cada item que está no DataTable e aguardar o carregamento das informações  
  1.6 Selecionar Detalhamento de Custo e Exportar para Excel  
  1.7 Renomear arquivos 

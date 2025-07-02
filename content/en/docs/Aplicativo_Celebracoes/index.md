---
title: Aplicativo Celebrações
date: 2025-07-02
description: >
  Documentação completa do aplicativo de gestão de celebrações e emendas da APMD.
categories: [Tecnologia, Power Platform]
tags: [PowerApps, Funcionalidades, Componentes Reutilizáveis]
---


<div class="lead">

Este site apresenta a documentação técnica e funcional do **App Celebrações**, desenvolvido para aprimorar a gestão de convênios, emendas  e programas celebrados via SIGCON-MG no âmbito da APMD.

</div>

## 🚀 Visão Geral

O App Celebrações centraliza as etapas de análise técnica, emissão de minutas, controle de prazos e acompanhamento dos processos de celebração vinculados às emendas parlamentares e programas executados.

## 🧭 O que é o App Celebrações?

Trata-se de um aplicativo construído no **Power Apps**, com base de dados no **SharePoint**, voltado para acompanhamento, registro e análise de convênios e emendas. O app auxilia técnicos, analistas e gestores no controle de prazos, geração de minutas, rastreabilidade de informações e registros essenciais como proposta, plano de trabalho e SEI.

A plataforma foi desenvolvida no **Power Apps** e integra recursos como:

- Filtros avançados por status, técnico, município, proposta e plano de trabalho;
- Painéis dedicados a analistas, técnicos e gestores;
- Registro e atualização de informações em tempo real com uso de `Patch`;
- Geração automática de minutas com conversão numérica por extenso;
- Navegação segmentada por tipo de celebração: **Emenda** ou **Programa**.

## 🗂 Estrutura da Documentação

A documentação está organizada nas seguintes seções:

- [📋 Tela Celebrações (Geral)](./celebracoes/)
- [🧾 Emendas ](./emendas/)
- [📚 Programas Celebrados](./programas/)
- [🛠 Funcionalidades Técnicas](./tecnico/)
- [📑 Geração de Minuta](./minuta/)
- [📈 Painel de Gestão](./gestao/)

## 🧑‍💻 Tecnologias Utilizadas

- **Power Apps**
- **SharePoint / Dataverse**
- **Power Automate**
- **Expressões lógicas com If, Filter, Patch e Lookup**
- **Integração com Office 365 e SIGCON-MG**

## 🤝 Contribuições

Contribuições são bem-vindas! Para sugerir melhorias ou relatar erros, acesse o [repositório GitHub](https://github.com/luigicaetano/APMDDocumentacao).

---

> 📌 *Esta documentação é mantida pelo time da APMD em parceria com a equipe técnica da SEDESE.*

<style>
/* Estilo da página inicial da documentação */

.lead {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: #333;
  background-color: #f9f9f9;
  padding: 1rem 1.5rem;
  border-left: 4px solid #007bff;
  border-radius: 6px;
}

h2 {
  margin-top: 2rem;
  color: #2b4b6f;
}

h3 {
  margin-top: 1.5rem;
  color: #3d5a80;
}

ul li {
  margin-bottom: 0.5rem;
}

a {
  color: #0069d9;
  font-weight: 500;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

blockquote {
  background-color: #f1f5f9;
  border-left: 4px solid #3d5a80;
  padding: 1rem;
  font-style: italic;
  color: #444;
  margin-top: 2rem;
  border-radius: 4px;
}
</style>


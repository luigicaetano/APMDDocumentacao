---
title: Planejamento Integrado 2026
date: 2025-05-09
description: >
  Documentação detalhada do processo do aplicativo de planejamento integrado, incluindo fluxos de uso, funcionalidades principais e procedimentos operacionais básicos.


categories: [Gestão, Planejamento Estratégico]  
tags: [Planejamento Integrado, Indicadores, Monitoramento, Gestão Pública]

---
## 📋 Informações do Projeto

<div class="project-info-card">

| **Informação** | **Detalhes** |
|:---------------|:-------------|
| **👨‍💻 Desenvolvedor** | Luigi Caetano da Silva |
| **📧 E-mail** | luigi.silva@social.mg.gov.br |
| **🤖 Ferramenta** | PowerApps |
| **🔄 Última atualização** | 09/05/2025 |

</div>

---
## 🎯 Visão Geral

<div class="overview-section">

### Objetivo
> Facilitar o registro, organização e análise das iniciativas vinculadas ao planejamento orçamentário da SEDESE, promovendo mais controle, rastreabilidade e integração entre programas, ações e cenários financeiros.

### Escopo
Este aplicativo abrange todo o processo de estruturação das iniciativas de planejamento, desde a seleção de programas e ações governamentais até a definição de objetivos, status, valor total e detalhamento financeiro. O sistema também permite:

Adicionar novas iniciativas vinculadas a ações e responsáveis;

- **Salvar alterações e gerar relatórios personalizados, com envio automático via Teams**
- **Visualizar cenários e custos associados às iniciativas cadastradas**
- **Consultar o fluxo de registro de informações, garantindo conformidade e padronização**
- **Filtrar dados com base no usuário responsável (controle por e-mail institucional)**

As informações são integradas a bases como BaseProgramasAcoes, BaseFormularioOBZ e BaseProgramas, com suporte à navegação por meio de Comboboxes e botões interativos.


```csharp
UpdateContext({visLoading:true});;

Set(varLink;Gerar_Relatorio_OBZ_Relatorio.Run(
    """" & Concat(
        Filter(
            BaseProgramasAcoes;
            userMail in Responsavel
        );
        Left(
            Acao;
            4
        );
        ""","""
    ) & """";
    userMail
));;

Launch(varLink.filelink);;

UpdateContext({visLoading:false});;

Notify(
    "O seu relatório também foi enviado no seu Teams!";
    NotificationType.Success;5000
)

```

</div>

</div>

---
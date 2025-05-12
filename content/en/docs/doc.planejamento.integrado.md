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

<<<<<<< HEAD

## Tela Inicial

![Tela Inicial do Aplicativo](imagem-tela-inicial.png)

### Principais Elementos
- **Tutorial Interativo**: Guia dinâmico que ensina o usuário a utilizar o aplicativo
- **Fluxo de Registro de Informação**: Redireciona para documento no SharePoint em nova aba, mantendo o aplicativo aberto
- **Iniciar Preenchimento**: Direciona o usuário para a tela de iniciativas

## Tela de Iniciativas

![Tela de Iniciativas](imagem-tela-iniciativas.png)

### Elementos de Interface

#### Botão Programa
```
If(
    varGestor;
    Distinct(
        BaseProgramasAcoes;
        Programa
    );
    Distinct(
        Filter(
            BaseProgramasAcoes;
            Programa in programasPermitidos
        );
        Programa
    )
)
```
Este código gera uma lista única de programas, eliminando duplicatas que possam existir na tabela BaseProgramasAcoes.

#### Botão Ação
```
If(
    varGestor;
    Distinct(
        Filter(
            BaseProgramasAcoes;
            Programa = ComboboxCanvas1.Selected.Value
        );
        Acao
    );
    Distinct(
        Filter(
            BaseProgramasAcoes;
            Programa = ComboboxCanvas1.Selected.Value;
            Acao in acoesPermitidas
        );
        Acao
    )
)
```

Retorna uma lista filtrada de ações sem repetições, relacionadas ao programa selecionado.

#### Adicionar Nova Iniciativa
```
Patch(
    PlanejamentoIntegrado_Iniciativas,
    Defaults(PlanejamentoIntegrado_Iniciativas),
    {
        Título: UsuáriosdoOffice365.MyProfileV2().mail,
        Programa: ComboboxCanvas1_2.Selected.Value,
        Acao: ComboboxCanvas1_3.Selected.Value
    }
);;
Refresh(PlanejamentoIntegrado_Iniciativas)
```

Cria um novo registro de iniciativa no sistema, com os valores selecionados para Programa e Ação.

#### Salvar Alterações
```
Gerar_Relatorio_OBZ_PowerApps.Run(
    """" & Concat(
        Filter(
            BaseProgramasAcoes,
            userMail in Responsavel
        ),
        Left(
            Acao,
            4
        ),
        ""","""
    ) & """",
    userMail
);;
Notify(
    "O seu relatório será enviado em alguns minutos no Teams!",
    NotificationType.Success
)
```

Salva as modificações e gera um relatório que será enviado posteriormente para o usuário via Teams.

#### Botão Visão Geral Cenários
```
Clear(colVisaoGeral);;
ForAll(
    SortByColumns(
        Filter(
            BaseFormularioOBZ_Cenarios,
            Título in Filter(
                BaseFormularioOBZ,
                Acao = varAcao
            ).ProdutoID
        ),
        "Title"
    ),
    Collect(
        colVisaoGeral,
        {
            ID1: Max(
                colVisaoGeral,
                ID1
            ) + 1,
            ProdutoID: ThisRecord.Título,
            Descricao: ThisRecord.Descricao,
            TipoCenario: ThisRecord.TipoCenario,
            ObjetosDeGasto: ThisRecord.ObjetosDeGasto,
            Cenario: ThisRecord.Cenario,
            ID: ThisRecord.ID
        }
    )
);;
UpdateContext({visVisaoGeral: true})
```

Exibe todos os cenários relacionados à ação selecionada de forma organizada. Limpa dados anteriores, busca cenários vinculados à ação, organiza por título e armazena na coleção para apresentação.

#### Botão Detalhar Resultado
```
Select(Parent);;
Patch(BaseFormularioOBZ;ThisItem;{
    Projeto: TextInputCanvas1.Value,
    Status: Dropdown1.Selected.Value,
    Produto: TextInputCanvas1_1.Value
});;
UpdateContext({visDetalhar:true})
```

Permite selecionar e atualizar informações de um item específico, salvando as edições e exibindo uma visão detalhada.

#### Botão Itens de Custo
```
Select(Parent);;
Set(currIniciativa;ThisItem);;
Patch(
    BaseFormularioOBZ,
    ThisItem,
    {
        Projeto: TextInputCanvas1.Value,
        Status: Dropdown1.Selected.Value,
        Produto: TextInputCanvas1_1.Value
    }
);;
Navigate(
    Screen_ItensDeCusto,
    ScreenTransition.UnCover
)
```

Seleciona uma iniciativa e navega para a tela de detalhamento de custos, atualizando os dados do item selecionado.

#### Botão Definir Cenários
```
Set(
    currIniciativa,
    ThisItem
);;
Select(Parent);;
Navigate(
    Screen_Cenarios,
    ScreenTransition.UnCover
)
```

Seleciona uma iniciativa para configurar seus cenários e navega para a tela específica.

#### Excluir Iniciativa
```
Set(visConfirmacao;true);;
Set(varNotificacao;"ExcluirIniciativa")
```

Prepara a exclusão de uma iniciativa, exibindo uma mensagem de confirmação antes de proceder com a exclusão.

## Tela Itens de Custo

![Tela de Itens de Custo](imagem-tela-custo.png)

### Elementos de Interface

#### Adicionar Novo Item de Custo
Permite incluir um novo item de custo associado à iniciativa selecionada.

#### Salvar Alterações
Grava todas as modificações realizadas nas iniciativas e dados relacionados.

#### Botão Programa
```
If(
    varGestor,
    Distinct(
        BaseProgramasAcoes,
        Programa
    ),
    Distinct(
        Filter(
            BaseProgramasAcoes,
            Programa in programasPermitidos
        ),
        Programa
    )
)
```

Exibe uma lista única de programas disponíveis.

#### Botão Ação
```
If(
    varGestor,
    Distinct(
        Filter(
            BaseProgramasAcoes,
            Programa = ComboboxCanvas1.Selected.Value
        ),
        Acao
    ),
    Distinct(
        Filter(
            BaseProgramasAcoes,
            Programa = ComboboxCanvas1.Selected.Value,
            Acao in acoesPermitidas
        ),
        Acao
    )
)
```

Exibe uma lista filtrada de ações relacionadas ao programa selecionado.

## Tela de Cenários

![Tela de Cenários](imagem-tela-cenarios.png)

### Elementos de Interface

#### Ver Itens de Custo
```
UpdateContext({visLoading:true});;
Clear(colVisaoGeral);;
ForAll(
    SortByColumns(
        Filter(
            BaseFormularioOBZ_Cenarios,
            Título in Filter(
                BaseFormularioOBZ,
                Acao = ComboboxCanvas1_1.Selected.Value
            ).ProdutoID
        ),
        "Title"
    ),
    Collect(
        colVisaoGeral,
        {
            ID1: Max(
                colVisaoGeral,
                ID1
            ) + 1,
            ProdutoID: ThisRecord.Título,
            Descricao: ThisRecord.Descricao,
            TipoCenario: ThisRecord.TipoCenario,
            ObjetosDeGasto: ThisRecord.ObjetosDeGasto,
            Cenario: ThisRecord.Cenario,
            ID: ThisRecord.ID
        }
    )
);;
UpdateContext({visVisaoGeral: true});;
UpdateContext({visLoading:false})
```

Exibe os itens de custo relacionados ao cenário selecionado, organizando os dados para visualização.

#### Adicionar Cenário
```
Patch(
    PlanejamentoIntegrado_Cenarios,
    Defaults(PlanejamentoIntegrado_Cenarios),
    {ID_Iniciativa: currIniciativa.ID}
);;
Refresh(PlanejamentoIntegrado_Cenarios)
```

Cria um novo cenário vinculado à iniciativa atual.

## Fluxo Power Automate

O fluxo Power Automate integrado ao aplicativo segue as seguintes etapas:

1. Chamada do fluxo pelo PowerApps com as variáveis de Ações e Usuários
2. Execução de query no banco de dados
3. Parse JSON para estruturação dos dados para o relatório

![Diagrama do fluxo Power Automate](imagem-fluxo.png)

### Etapas do Fluxo:
- **Início**: Chamada via PowerApps com parâmetros de Ações e Usuários
- **Consulta de Dados**: Execução de query para obtenção das informações necessárias
- **Processamento**: Estruturação dos dados via Parse JSON 
- **Geração de Relatório**: Criação do relatório OBZ
- **Entrega**: Envio do relatório para o usuário via Teams

## Considerações de Uso

- O aplicativo foi desenvolvido para simplificar o processo de planejamento integrado
- As permissões são controladas por perfil de usuário (gestor/não gestor)
- Os dados são integrados com SharePoint para persistência
- O sistema oferece funcionalidades de relatórios automatizados
=======

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

>>>>>>> 5743fa6dfb87ecfa8a3f3648cc8d9f112cc657e2
</div>

</div>

---
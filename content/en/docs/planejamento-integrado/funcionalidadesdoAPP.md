---
title: Funcionalidades do Aplicativo
date: 2025-05-05
description: >
  Nessa etapa, demonstramos como fizemos toda a interface do aplicativo e como o mesmo funciona.
weight: 2
---

# 🚀 Funcionalidades do Aplicativo

Nessa seção, demonstramos como fizemos toda a interface do aplicativo e como o mesmo funciona.

## 🏠 Tela Inicial

![Tela Inicial do Aplicativo](../assets/images/TelaInicial.png)

### Principais Elementos

| Elemento | Descrição |
|---------|-----------|
| ✨ **Tutorial Interativo** | Guia dinâmico que ensina o usuário a utilizar o aplicativo passo a passo |
| 📋 **Fluxo de Registro de Informação** | Redireciona para documento no SharePoint em nova aba, mantendo o aplicativo aberto |
| ▶️ **Iniciar Preenchimento** | Direciona o usuário para a tela de iniciativas |

## 📋 Tela de Iniciativas

![Tela Iniciativas](../assets/images/Iniciativas.png)

### Elementos de Interface

### 🎛️ Controles de Seleção

![Botão Programa e Ação](../assets/images/ProgramaeAcao.png)

#### 🔄 Seletor de Programa

**Funcionalidade:** Filtro baseado no perfil do usuário

```powerapps
If(
    varGestor; 
    Distinct( 
        PlanejamentoIntegrado_ProgramasAcoes; 
        Programa 
    ); 
    Distinct( 
        Filter( 
            PlanejamentoIntegrado_ProgramasAcoes; 
            Programa in programasPermitidos 
        ); 
        Programa 
    ) 
)
```

> 💡 **Como funciona:** Essa função verifica se a variável varGestor está ativada. Se estiver, ela retorna todos os programas distintos registrados na fonte de dados PlanejamentoIntegrado_ProgramasAcoes, sem nenhuma restrição. Caso contrário, ela filtra essa fonte para retornar apenas os programas que estão na lista de programasPermitidos e, então, retorna os programas distintos dessa seleção. Assim, dependendo do valor de varGestor, o usuário verá ou todos os programas disponíveis ou apenas um subconjunto filtrado de programas autorizados, garantindo controle de acesso ou visibilidade conforme o perfil do usuário.

#### 🔄 Seletor de Ação

**Funcionalidade:** Filtragem de ações baseada no programa selecionado

```powerapps
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

> 💡 **Como funciona:** Essa função é igual à anterior, porém filtra as Ações baseadas no programa selecionado e nas permissões do usuário.

#### ➕ Adicionar Nova Iniciativa

![AdicionarNovaIniciativa](../assets/images/AddNovaIniciativa.png)

**Funcionalidade:** Criação de nova iniciativa com dados básicos

```powerapps
Patch(
    PlanejamentoIntegrado_Iniciativas;
    Defaults(PlanejamentoIntegrado_Iniciativas);
    {
        Título: UsuáriosdoOffice365.MyProfileV2().mail;
        Programa: ComboboxCanvas1_2.Selected.Value;
        Acao: ComboboxCanvas1_3.Selected.Value
    }
);;
Refresh(PlanejamentoIntegrado_Iniciativas)
```

> 💡 **Como funciona:** Essa função cria um novo registro na fonte de dados chamada PlanejamentoIntegrado_Iniciativas. Para isso, ela usa a função Patch com o parâmetro Defaults(PlanejamentoIntegrado_Iniciativas), que indica que será criado um novo registro com valores padrão. No novo registro criado, são atribuídos três campos: Título, Programa e Ação. Depois de criar esse novo registro, a função executa um Refresh na fonte de dados PlanejamentoIntegrado_Iniciativas para garantir que os dados locais no aplicativo estejam atualizados e sincronizados com o banco ou serviço externo onde a fonte está armazenada.

#### 📝 Botão Propor Programa

![ProporPrograma](../assets/images/ProporPrograma.png)

```powerapps
Patch( 
    PlanejamentoIntegrado_ProgramasAcoes; 
    Defaults(PlanejamentoIntegrado_ProgramasAcoes); 
    { 
        Título: LookUp( 
            PlanejamentoIntegrado_ProgramasAcoes; 
            Acao = Left( 
                acoesPermitidas; 
                4 
            ); 
            Título 
        ); 
        Programa: TextInputCanvas1.Value 
    } 
);; 
UpdateContext({visPropor1: false})
```

> 💡 **Como funciona:** Esse código faz o seguinte: ele cria um novo registro na fonte de dados "PlanejamentoIntegrado_ProgramasAcoes" usando a função Patch com Defaults, ou seja, um registro em branco para preenchimento. Nesse novo registro, ele define o campo Título buscando "(LookUp)" um registro existente na mesma fonte onde o campo Ação é igual aos primeiros 4 caracteres da variável ou texto "acoesPermitidas". O valor do campo Título desse registro encontrado é usado para preencher o novo registro. Além disso, ele define o campo Programa com o valor que o usuário digitou no componente de texto "TextInputCanvas1". Por fim, ele atualiza o contexto para definir "visPropor1" como falso, provavelmente para ocultar alguma parte da interface após a operação.

#### ⚡ Botão Propor Ação

![ProporAcao](../assets/images/ProporAcao.png)

```powerapps
If( 
    Toggle1.Checked; 
    Patch( 
        PlanejamentoIntegrado_ProgramasAcoes; 
        Defaults(PlanejamentoIntegrado_ProgramasAcoes); 
        { 
            Título: LookUp( 
                PlanejamentoIntegrado_ProgramasAcoes; 
                Acao = Left( 
                    acoesPermitidas; 
                    4 
                ); 
                Título 
            ); 
            Programa: ComboboxCanvas1_10.Selected.Value; 
            Acao: TextInputCanvas1_6.Value 
        } 
    ); 
    Patch( 
        PlanejamentoIntegrado_ProgramasAcoes; 
        Defaults(PlanejamentoIntegrado_ProgramasAcoes); 
        { 
            Título: LookUp( 
                PlanejamentoIntegrado_ProgramasAcoes; 
                Acao = Left( 
                    acoesPermitidas; 
                    4 
                ); 
                Título 
            ); 
            Programa: "Proposta " & CountRows( 
                Filter( 
                    PlanejamentoIntegrado_ProgramasAcoes; 
                    "Proposta" in Programa 
                ) 
            ) + 1; 
            Acao: TextInputCanvas1_6.Value 
        } 
    ) 
);; 
UpdateContext({visPropor2:false})
```

> 💡 **Como funciona:** Esse código verifica se o controle "Toggle1" está marcado (Checked). Se estiver, ele cria um novo registro na fonte "PlanejamentoIntegrado_ProgramasAcoes" usando "Patch" com os seguintes dados: o campo Título é preenchido com o valor encontrado ao buscar (LookUp) um registro onde o campo Ação é igual aos primeiros 4 caracteres da variável "acoesPermitidas"; o campo Programa recebe o valor selecionado pelo usuário no componente "ComboboxCanvas1_10"; e o campo Ação é definido com o valor do componente de texto "TextInputCanvas1_6". Se o toggle não estiver marcado, ele também cria um novo registro similar, mas define o campo Programa como uma string que começa com "Proposta " seguida do número de registros existentes em "PlanejamentoIntegrado_ProgramasAcoes" que já tenham a palavra "Proposta" no campo Programa, somado de 1 (ou seja, criando uma numeração sequencial para propostas).

#### 🔧 Botões Laterais

![BotoesLaterais](../assets/images/botoesLateraisAtual.png)

##### 📊 Gerar Relatório (1)

```powerapps
UpdateContext({visLoading: true});;
Set(
    varLink;
    Gerar_Relatorio_Planejamento_Integrado_2026.Run(
        """" & Concat(
            If(
                varGestor;
                PlanejamentoIntegrado_ProgramasAcoes;
                Filter(
                    PlanejamentoIntegrado_ProgramasAcoes;
                    Left(
                        Acao;
                        4
                    ) in acoesPermitidas
                )
            );
            Acao;
            ""","""
        ) & """";
        userMail
    )
);;
Launch(varLink.filelink);;
UpdateContext({visLoading: false});;
Notify(
    "O seu relatório também foi enviado no seu Teams!";
    NotificationType.Success;
    5000
)
```

> 💡 **Como funciona:** Essa função ativa um indicador de carregamento, executa um fluxo do Power Automate para gerar um relatório baseado nas ações permitidas do usuário, abre o relatório gerado e notifica o usuário que o relatório também foi enviado via Teams.

##### 📊 Botão Visão Geral Cenários (2)

```powerapps
UpdateContext({visLoading:true});;
Clear(colVisaoGeral);;
ForAll(
    SortByColumns(
        Filter(
            PlanejamentoIntegrado_Cenarios;
            ID_Iniciativa in Filter(
                PlanejamentoIntegrado_Iniciativas;
                Acao = ComboboxCanvas1_3.Selected.Value
            ).ID
        );
        "Title"
    );
    Collect(
        colVisaoGeral;
        {
            ID1: Max(
                colVisaoGeral;
                ID1
            ) + 1;
            ID_Iniciativa: ThisRecord.ID_Iniciativa;
            Descricao: ThisRecord.Descricao;
            TipoCenario: ThisRecord.Título;
            Cenario: ThisRecord.NumeroCenario;
            ID: ThisRecord.ID
        }
    )
);;
Set(visVisaoGeral;true);;
UpdateContext({visLoading:false})
```

> 💡 **Como funciona:** Esse trecho de código do PowerApps realiza uma sequência de ações para carregar e exibir dados relacionados a cenários de planejamento integrados. Primeiramente, ele ativa um indicador visual de carregamento, atualizando o contexto com visLoading: true. Em seguida, limpa a coleção local colVisaoGeral, removendo qualquer dado anterior. Depois disso, ele percorre todos os registros da fonte de dados PlanejamentoIntegrado_Cenarios que estejam relacionados à iniciativa selecionada pelo usuário (por meio do valor escolhido no componente ComboboxCanvas1_3). Esses registros são filtrados para incluir apenas aqueles cujo ID_Iniciativa corresponde ao de iniciativas com a ação selecionada, e são ordenados pelo campo "Title". Para cada item resultante, é adicionada uma nova entrada à coleção colVisaoGeral, com um identificador incremental (ID1), além de outros campos como Descricao, TipoCenario, Cenario e o próprio ID_Iniciativa.

##### Botão Tutorial do Sistems

```powerapps
ClearCollect(
    colTutorialBaseProgramas;
    {
        Acao: "01";
        Programa: "001"
    };
    {
        Acao: "02";
        Programa: "001"
    }
);;
ClearCollect(
    colTutorialBase;
    {
        Programa: "testecontroladocollection";
        Acao: "testecontroladocollection";
        Iniciativa: "testecontroladocollection";
        Status: "testecontroladocollection";
        Resultado: "testecontroladocollection";
        AtividadesNaoOrcamentarias: "testecontroladocollection";
        Escopo: "testecontroladocollection";
        ID_Iniciativa:"testecontroladocollection"
    
    }
);;
ClearCollect(
    colTutorialItensDeCusto;
    {
        ID_Iniciativa: "testecontroladocollection";
        Titulo: "testecontroladocollection";
        ValorTotal: "testecontroladocollection";
        ID_Cenario: "testecontroladocollection";
        Forma: "testecontroladocollection";
        Volume: "testecontroladocollection";
        PremissaVolume: "testecontroladocollection";
        ValorUnitario: "testecontroladocollection";
        PremissadePreco: "testecontroladocollection";
        ElementoItem: "testecontroladocollection";
        ElementoItemCodigo: "testecontroladocollection";
        Fonte: "testecontroladocollection";
        Grupo: "testecontroladocollection";
        Unidade: "testecontroladocollection";
        Instrumento: "testecontroladocollection";
        Frequencia: "testecontroladocollection"

    }
);;
ClearCollect(
    ColTutorialCenarios;
    {
        NumeroCenario: "testecontroladocollection";
        ID_Iniciativa: "testecontroladocollection";
        Descricao: "testecontroladocollection";
        Risco: "testecontroladocollection";
        Beneficio: "testecontroladocollection"
    }
);;
Reset(ComboboxCanvas1_11);;
Reset(ComboboxCanvas1_12);;
Navigate('Tutorial 1')
```
> 💡 **Como funciona:** Esse código cria quatro coleções (colTutorialBaseProgramas, colTutorialBase, colTutorialItensDeCusto e ColTutorialCenarios) com dados fictícios de teste usando ClearCollect, e reseta dois campos de seleção (ComboboxCanvas1_11 e ComboboxCanvas1_12). Ele prepara um ambiente simulado para testes ou tutoriais no app, com dados controlados e limpos, antes de prosseguir para outra tela.



##### Painel Resumido
```powerapps
Navigate(
    Screen_PainelResumido;
    ScreenTransition.UnCover
)
``` 
> 💡 **Como funciona:** Esse comando faz uma navegação entre telas no Power Apps, direcionando o usuário para a tela chamada Screen_PainelResumido.


#### 🎯 Botões de Ação por Iniciativa

![BotoesIniciativa](../assets/images/BotoesIniciativa2.png)

##### 📊 Botão Detalhar Iniciativa (1)

```powerapps
Set( 
    currIniciativa; 
    ThisItem 
);; 
UpdateContext({visDetalhar: true})
```

> 💡 **Como funciona:** Essa função realiza duas ações consecutivas: primeiro, ela define a variável global "currIniciativa" para o registro atual representado por "ThisItem", ou seja, ela armazena o item selecionado ou em foco para uso posterior no aplicativo. Em seguida, ela atualiza uma variável de contexto local chamada "visDetalhar", definindo seu valor como "true", o que provavelmente serve para controlar a visibilidade de uma tela, painel ou componente que exibe detalhes dessa iniciativa selecionada.

##### 💰 Botão Itens de Custo (2)

```powerapps
Set(currIniciativa;ThisItem);; 
Navigate( 
    Screen_ItensDeCusto; 
    ScreenTransition.UnCover 
)
```

> 💡 **Como funciona:** Esse código executa duas ações principais: primeiro, define a variável global "currIniciativa" com o registro atual representado por "ThisItem", armazenando assim o item selecionado para ser usado em outras partes do aplicativo. Em seguida, a função "Navigate" é chamada para direcionar o usuário para a tela chamada "Screen_ItensDeCusto", utilizando a transição visual do tipo "UnCover", que faz a nova tela deslizar para cima ou aparecer cobrindo a anterior.

##### 📈 Botão Cenários (3)

```powerapps
Set( 
    currIniciativa; 
    ThisItem 
);; 
Navigate( 
    Screen_Cenarios; 
    ScreenTransition.UnCover 
)
```

> 💡 **Como funciona:** Esse código faz duas coisas: primeiro, ele define a variável global "currIniciativa" com o registro atual selecionado (ThisItem), armazenando essa informação para uso posterior no app. Em seguida, ele navega para a tela chamada "Screen_Cenarios" usando a transição visual "UnCover", que faz a nova tela aparecer deslizando ou cobrindo a tela anterior.

##### 🗑️ Excluir Iniciativa (4)

```powerapps
Set(visConfirmacao;true);;
Set(currIniciativa;ThisItem);;
Set(varNotificacao;"ExcluirIniciativa")
```

> 💡 **Como funciona:** Ele não apaga a iniciativa imediatamente, mas ativa um aviso de confirmação ao definir a variável "visConfirmacao" como verdadeira e registra que a ação pretendida é a exclusão, por meio da variável "varNotificacao" com o valor "ExcluirIniciativa". Isso prepara a interface para exibir uma mensagem de confirmação antes de realizar a exclusão de fato.

## 📝 Detalhar Iniciativa

![DetalhesIniciativa](../assets/images/DetalharIniciativa.png)

> Essa tela serve para detalhar mais sobre a iniciativa selecionada.

```powerapps
Patch(
    PlanejamentoIntegrado_Iniciativas;
    currIniciativa;
    {
        Escopo: TextInputCanvas5_4.Value;
        AtividadesNaoOrcamentarias: TextInputCanvas5_5.Value
    }
)
```

> 💡 **Como funciona:** Atualiza um registro específico (representado por currIniciativa) na fonte de dados "PlanejamentoIntegrado_Iniciativas", atribuindo novos valores aos campos "Escopo" e "AtividadesNaoOrcamentarias", com base nos textos digitados nos campos de entrada "TextInputCanvas5_4" e "TextInputCanvas5_5".

## 💰 Tela Itens de Custo

![Tela Itens de Custo](../assets/images/itensdecusto.png)

### Elementos de Interface

#### ➕ Adicionar Novo Item de Custo

```powerapps
Patch(
    PlanejamentoIntegrado_ItensDeCusto;
    Defaults(PlanejamentoIntegrado_ItensDeCusto);
    {ID_Iniciativa: currIniciativa.ID}
);;
Refresh(PlanejamentoIntegrado_ItensDeCusto)
```

> 💡 **Como funciona:** Essa função cria um novo registro na fonte de dados chamada "PlanejamentoIntegrado_ItensDeCusto", usando os valores padrão dessa fonte, e atribui ao campo "ID_Iniciativa" o valor contido em "currIniciativa.ID", que provavelmente representa o identificador de uma iniciativa atual selecionada ou em contexto. Após criar esse novo registro, a função executa um comando para atualizar "(refresh)" a fonte de dados, garantindo que a aplicação tenha a versão mais recente dos dados, refletindo imediatamente a inclusão do novo item.

#### 🔄 Detalhar Resultados (Itens de Custo)

```powerapps
UpdateContext({visSalvando: true});;
IfError(Patch(
    PlanejamentoIntegrado_ItensDeCusto;
    ThisItem;
    {Título: TextInputCanvas1_2.Value}
);"");;
UpdateContext({visSalvando: false});;
Set(
    currItemDeCusto;
    ThisItem
);;
UpdateContext({visDetalhar: true});;
Reset(DropdownCanvas1);;
Reset(DropdownCanvas1_1);;
Reset(DropdownCanvas1_3);;
Reset(ComboboxCanvas1);;
Reset(DropdownCanvas1_6);;
```

> 💡 **Como funciona:** Essa função ativa um indicador de salvamento, tenta atualizar o título do item de custo selecionado usando tratamento de erro, define o item atual como variável global, ativa a visualização de detalhes e reinicia vários controles de interface para limpar seleções anteriores.

## 📊 Tela Cenários

![Tela Cenarios](../assets/images/TelaCenarios.png)

### Elementos de Interface

#### 👁️ Ver Itens de Custo

```powerapps
Navigate(
    Screen_ItensDeCusto;
    ScreenTransition.UnCover
)
```

> 💡 **Como funciona:** Volta para a tela de Itens de Custo usando a transição UnCover.

#### ➕ Adicionar Cenário

```powerapps
Patch(
    PlanejamentoIntegrado_Cenarios;
    Defaults(PlanejamentoIntegrado_Cenarios);
    {
        ID_Iniciativa: currIniciativa.ID;
        NumeroCenario: Max(
            Filter(
                PlanejamentoIntegrado_Cenarios;
                ID_Iniciativa = currIniciativa.ID
            );
            NumeroCenario
        ) + 1
    }
);;
Refresh(PlanejamentoIntegrado_Cenarios)
```

> 💡 **Como funciona:** Esse código cria um novo registro na fonte de dados "PlanejamentoIntegrado_Cenarios" vinculando-o à iniciativa atualmente selecionada "(currIniciativa.ID)". Para o campo "NumeroCenario", ele calcula o maior número de cenário já existente para essa mesma iniciativa e adiciona 1, garantindo que o novo cenário tenha um número sequencial único. Depois de criar esse registro, ele atualiza a fonte de dados para que as mudanças sejam refletidas imediatamente no aplicativo.

#### 🔄 Detalhar Resultados (Cenários)

```powerapps
Set(currCenarioTutorial;ThisItem);;
```

> 💡 **Como funciona:** Define a variável global "currCenarioTutorial" com o cenário atual selecionado para uso posterior no aplicativo.

---

## 💡 Resumo das Funcionalidades

O aplicativo oferece um fluxo completo de gestão de iniciativas organizacionais:

- **Controle de acesso** baseado em perfis de usuário
- **Gestão de programas e ações** com possibilidade de propor novos itens
- **Detalhamento completo** de iniciativas com escopo e atividades
- **Controle financeiro** através de itens de custo
- **Planejamento de cenários** com numeração sequencial automática
- **Geração de relatórios** automatizada com integração ao Teams
- **Interface intuitiva** com confirmações de segurança para ações críticas

<div class="navigation-links">
  <a href="../conectandodados/" class="prev-link">← Passo anterior: Conectando os dados no aplicativo</a>
  <a href="../permissoes/" class="next-link">Próximo passo: Gerenciar permissões no aplicativo →</a>
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

h2 {
  font-size: 1.8em;
  color: #0078d4;
  margin-top: 2em;
  margin-bottom: 1em;
}

h3 {
  font-size: 1.4em;
  color: #0078d4;
  margin-bottom: 0.8em;
}

/* Links de navegação */
.navigation-links {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  padding-top: 20px;
  border-top: 1px solid #eaeaea;
}

.navigation-links a {
  text-decoration: none;
  color: #0078d4;
  padding: 10px 15px;
  border-radius: 6px;
  background-color: #f0f7ff;
  transition: all 0.2s ease;
}

.navigation-links a:hover {
  background-color: #0078d4;
  color: white;
}

/* Estilo das seções */
.screen-section {
  background-color: #f8f9fa;
  border-left: 5px solid #0078d4;
  padding: 20px;
  border-radius: 0 8px 8px 0;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  margin: 30px 0;
  transition: transform 0.2s ease;
}

.screen-section:hover {
  transform: translateX(5px);
}

/* Estilo das imagens */
img {
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  margin: 15px 0;
  border: 1px solid #e0e0e0;
  transition: transform 0.3s ease;
}

img:hover {
  transform: scale(1.02);
}

/* Estilo das tabelas */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

th, td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
}

th {
  background-color: #0078d4;
  color: white;
  font-weight: 600;
}

tr:hover {
  background-color: #f5f5f5;
}

/* Estilo dos blocos de código */
pre {
  background-color:rgb(4, 4, 4);
  color:rgb(0, 0, 0);
  padding: 20px;
  border-radius: 8px;
  overflow-x: auto;
  margin: 15px 0;
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 0.9em;
  border-left: 4px solid #0078d4;
}

/* Estilo das citações (explicações) */
blockquote {
  background-color: #f0f7ff;
  border-left: 4px solid #28a745;
  padding: 15px;
  margin: 15px 0;
  border-radius: 0 8px 8px 0;
  font-style: normal;
}

blockquote p {
  margin: 0;
}

/* Responsividade */
@media (max-width: 768px) {
  h1 {
    font-size: 1.8em;
  }
  
  .screen-section {
    padding: 15px;
  }
  
  table {
    font-size: 0.9em;
  }
  
  th, td {
    padding: 8px 10px;
  }
  
  pre {
    font-size: 0.8em;
    padding: 15px;
  }
}
</style>
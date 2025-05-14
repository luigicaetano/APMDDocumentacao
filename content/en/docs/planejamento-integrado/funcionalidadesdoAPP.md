## 🏠 Tela Inicial

![Tela Inicial do Aplicativo](../assets/images/TelaInicial.png)

### Principais Elementos

| Elemento | Descrição |
|---------|-----------|
| ✨ **Tutorial Interativo** | Guia dinâmico que ensina o usuário a utilizar o aplicativo passo a passo |
| 📋 **Fluxo de Registro de Informação** | Redireciona para documento no SharePoint em nova aba, mantendo o aplicativo aberto |
| ▶️ **Iniciar Preenchimento** | Direciona o usuário para a tela de iniciativas |

## 📋 Tela de Iniciativas

![Tela Iniciativas](../assets/images/TelaIniciativas.png)

### Elementos de Interface

#### 🔄 Botão Programa
```powerapps
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

> Este código gera uma lista única de programas, eliminando duplicatas que possam existir na tabela BaseProgramasAcoes.

#### 🔄 Botão Ação
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

> Retorna uma lista filtrada de ações sem repetições, relacionadas ao programa selecionado.

#### ➕ Adicionar Nova Iniciativa
```powerapps
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

> Cria um novo registro de iniciativa no sistema, com os valores selecionados para Programa e Ação.

#### 💾 Salvar Alterações

> Salva as modificações e gera um relatório que será enviado posteriormente para o usuário via Teams.

#### 📊 Botão Visão Geral Cenários
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
UpdateContext({visVisaoGeral: true});;
UpdateContext({visLoading:false})
```

> Exibe todos os cenários relacionados à ação selecionada de forma organizada. Limpa dados anteriores, busca cenários vinculados à ação, organiza por título e armazena na coleção para apresentação.


#### 💰 Botão Editar Itens de Custo
```powerapps
Set(currIniciativa;ThisItem);;
Navigate(
    Screen_ItensDeCusto;
    ScreenTransition.UnCover
)
```

> Esse botão leva para a tela de Itens de Custo

#### 🔄 Botão Editar Cenários
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

> Esse botão te leva para a tela de Cenários

#### 🗑️ Excluir Iniciativa
```powerapps
Set(visConfirmacao;true);;
Set(currIniciativa;ThisItem);;
Set(varNotificacao;"ExcluirIniciativa")
```

> Prepara a exclusão de uma iniciativa, exibindo uma mensagem de confirmação antes de proceder com a exclusão.

## 💰 Tela Itens de Custo

![Tela Itens de Custo](../assets/images/TelaItensdeCusto.png)

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
> Permite incluir um novo item de custo associado à iniciativa selecionada.

#### 💾 Salvar Alterações
> Grava todas as modificações realizadas nas iniciativas e dados relacionados.

#### 🔄 Editar
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
UpdateContext({visDetalhar: true})
```

> Edita o item de custo selecionado.


## 📊 Tela Cenarios

![Tela Cenarios](..assets/images/TeladeCenarios.png) 

### Elementos de Interface

#### 👁️ Ver Itens de Custo
```powerapps
UpdateContext({visLoading:true});;
Clear(colVisaoGeral);;
ForAll(
    SortByColumns(
        Filter(
            BaseFormularioOBZ_Cenarios;
            Título in Filter(
                BaseFormularioOBZ;
                Acao = ComboboxCanvas1_1.Selected.Value
            ).ProdutoID
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
            ProdutoID: ThisRecord.Título;
            Descricao: ThisRecord.Descricao;
            TipoCenario: ThisRecord.TipoCenario;
            ObjetosDeGasto: ThisRecord.ObjetosDeGasto;
            Cenario: ThisRecord.Cenario;
            ID: ThisRecord.ID
        }
    )
);;
UpdateContext({visVisaoGeral: true});;
UpdateContext({visLoading:false})
```

> Exibe os itens de custo relacionados ao cenário selecionado, organizando os dados para visualização.

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

> Cria um novo cenário vinculado à iniciativa atual.
<style>
.flow-steps {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
}

.step {
  background-color: #f8f9fa;
  border-left: 4px solid #0078d4;
  padding: 10px 15px;
  border-radius: 0 5px 5px 0;
}

.step h3 {
  margin-top: 0;
  color: #0078d4;
}

.tips {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.tip {
  background-color: #f0f7ff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.tip h3 {
  margin-top: 0;
  color: #0078d4;
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

@media (max-width: 768px) {
  .tips {
    grid-template-columns: 1fr;
  }
}
</style>
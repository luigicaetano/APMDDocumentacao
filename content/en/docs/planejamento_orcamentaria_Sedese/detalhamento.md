---
title: 📋 Página Detalhamento
date: 2025-06-02
description: > 
categories: 
tags: 
---
![PagInicial](../assets/images_PlanejamentoOrç/Pag_Detalhamento.png)

## 1. 📊 Listagem de Unidades Administrativas

![UA](../assets/images_PlanejamentoOrç/UA.png)

```powerapps
Distinct(PlanejamentoGeral2025;'U.A')
```

**Descrição:** Retorna uma lista única de Unidades Administrativas (U.A) presentes na tabela PlanejamentoGeral2025.

---

## 2. 🔍 Filtro de Classificações por Título

![Classif](../assets/images_PlanejamentoOrç/Classificacao.png)

```powerapps
Distinct(Filter(AcompanhamentoClassificacao;Título = DropdownCanvas10_28.Selected.Value);Classificacao)
```

**Descrição:** Filtra a tabela AcompanhamentoClassificacao pelo título selecionado no dropdown (DropdownCanvas10_28) e retorna uma lista única de classificações associadas.

---

## 3. 📈 Listagem de Ações Ordenadas

![PagInicial](../assets/images_PlanejamentoOrç/Ação.png)

```powerapps
Sort(Distinct(PlanejamentoGeral2025;Ação);"Ação";SortOrder.Ascending)
```

**Descrição:** Retorna todas as ações únicas da tabela PlanejamentoGeral2025, ordenadas de forma crescente (A-Z).

---

## 4. 🎯 Filtro de Empenhos por Objeto Corrente

```powerapps
Distinct(
    Filter(
        BaseEmpenhosUnicos;
        UE = currObjeto.'U.E' && 
        Acao = Value(Left(currObjeto.Ação;4)) && 
        G = currObjeto.G && 
        F = currObjeto.F && 
        P = currObjeto.P && 
        I = currObjeto.I && 
        EI = currObjeto.'E.I.'
    );
    Empenho
)
```

**Descrição:** Filtra a tabela BaseEmpenhosUnicos usando como critérios os atributos do objeto corrente (currObjeto). Retorna a lista única de empenhos.

---

## 5. ⚙️ Processamento Completo de Empenhos (Versão 1)

```powerapps
UpdateContext({visLoading:true});;
ClearCollect(
    colEmpenhos;
    ForAll(
        Filter(galEmpenhos.AllItems; Checkbox1_2.Value = true);
        {
            Título: currObjeto.ID;
            Empenho: ThisRecord.Value;
            conector: (currObjeto.'U.E' & Left(currObjeto.Ação;4) & currObjeto.G & "." & currObjeto.I & "." & currObjeto.F & "." & currObjeto.P & currObjeto.'E.I.');
            conector2: (currObjeto.'U.E' & Left(currObjeto.Ação;4) & currObjeto.G & "." & currObjeto.I & "." & currObjeto.F & "." & currObjeto.P & currObjeto.'E.I.' & ThisRecord.Value)
        }
    )
);;
IfError(
    RemoveIf(BaseEmpenhos2025; Value(Título) = currObjeto.ID);
    ""
);;
IfError(
    RemoveIf(BaseEmpenhosUnicos2; conector in colEmpenhos.conector);
    ""
);;
ForAll(
    colEmpenhos;
    Patch(
        BaseEmpenhos2025;
        Defaults(BaseEmpenhos2025);
        {
            Título: Título;
            Empenho: Empenho;
            conector: conector;
            conector2: conector2
        }
    )
);;
UpdateContext({visEmpenhos: false});;
UpdateContext({visLoading:false})
```

**Descrição:** 
- Cria uma coleção temporária `colEmpenhos` com os empenhos selecionados (checkbox marcado)
- Cada registro recebe um **conector**, que é uma chave composta por diversos campos (U.E, Ação abreviada, G, I, F, P, E.I.), e o **conector2**, que acrescenta também o número do empenho
- Remove registros antigos que possuam o mesmo título ou conector, para evitar duplicidades
- Para cada registro na coleção colEmpenhos, insere um novo item na tabela BaseEmpenhos2025

---

## 6. ☁️ Processamento de Empenhos com Azure (Versão 2)

```powerapps
ClearCollect(
    colEmpenhos;
    ForAll(
        Filter(galEmpenhos.AllItems; Checkbox1_2.Value = true);
        {
            Título: currObjeto.ID;
            Empenho: ThisRecord.Value;
            conector: (currObjeto.'U.E' & Left(currObjeto.Ação;4) & currObjeto.G & "." & currObjeto.I & "." & currObjeto.F & "." & currObjeto.P & currObjeto.'E.I.');
            conector2: (currObjeto.'U.E' & Left(currObjeto.Ação;4) & currObjeto.G & "." & currObjeto.I & "." & currObjeto.F & "." & currObjeto.P & currObjeto.'E.I.' & ThisRecord.Value)
        }
    )
);;
IfError(
    RemoveIf(BaseEmpenhos2025; Value(Título) = currObjeto.ID);
    ""
);;
IfError(
    RemoveIf(BaseEmpenhosUnicos2; conector in colEmpenhos.conector);
    ""
);;
Set(JSONEmpenhos; JSON(colEmpenhos));;
EmpenhosPedidosGrandes.Run(JSONEmpenhos);;
//ForAll(colEmpenhos;Patch(BaseEmpenhos2025;Defaults(BaseEmpenhos2025);{Título:Título;Empenho:Empenho;conector:conector}));;
UpdateContext({visEmpenhos: false})
```

**Descrição:**
- Converte a coleção `colEmpenhos` em JSON
- Envia para uma função externa (`EmpenhosPedidosGrandes`), provavelmente hospedada no Azure, que executa o processamento em lote

---

## 7. ✏️ Atualização de Registro do Planejamento

```powerapps
Patch(
    PlanejamentoGeral2025;
    currObjeto;
    {
        Acompanhamento: DropdownCanvas10_28.Selected.Value;
        Classificação: DropdownCanvas10_30.Selected.Value;
        'SIAFI entrada': TextInputCanvas5_97.Value;
        'SIAFI saida': TextInputCanvas5_99.Value;
        'Processo SEI': TextInputCanvas5_101.Value;
        Ação: DropdownCanvas10_29.Selected.Value;
        'E.I.': Value(TextInputCanvas5_95.Value);
        Objeto: TextInputCanvas5_94.Value;
        'Valor PLOA': Value(TextInputCanvas5_98.Value);
        'U.E': Value(TextInputCanvas5_100.Value);
        'U.A': DropdownCanvas10_27.Selected.Value;
        F: Value(TextInputCanvas5_96.Value);
        Limite: Value(TextInputCanvas5_104.Value);
        Cota_Aprovada: Value(TextInputCanvas5_105.Value)
    }
);;
Notify("Alterações salvas com sucesso.";NotificationType.Success;2000)
```

**Descrição:** Atualiza o registro selecionado (currObjeto) na tabela PlanejamentoGeral2025 com os novos dados informados nos campos e dropdowns da interface.

---

## 8. 🗑️ Preparação para Exclusão

```powerapps
Set(visExcluirProgramacao;true);;
Set(varExcluir; "ExcluirObjeto")
```

**Descrição:** Ativa variáveis de contexto para permitir a visualização de botões ou caixas de confirmação de exclusão.

---

## Estrutura dos Conectores

Os **conectores** são chaves compostas utilizadas para identificar unicamente registros de empenhos:

- **conector**: `U.E + Ação(4 primeiros dígitos) + G + "." + I + "." + F + "." + P + E.I.`
- **conector2**: `conector + número do empenho`

Essa estrutura permite relacionar empenhos com seus respectivos objetos de planejamento de forma consistente.
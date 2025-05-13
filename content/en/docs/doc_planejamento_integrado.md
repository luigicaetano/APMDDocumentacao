---
title: 📱 Planejamento Integrado 2026 — SEDESE
date: 2025-05-13
description: >
  Documentação do aplicativo de planejamento integrado, incluindo fluxos de uso, funcionalidades principais e detalhamento dos planejamentos.
categories: [Gestão, Planejamneto]
tags: [Planejamnto Integrado, Monitoramento, Gestão Pública]
---



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

## 🔄 Fluxo Power Automate

🌟 Visão Geral do Fluxo
O fluxo de automação do Planejamento Integrado 2026 foi desenvolvido para automatizar a geração de relatórios analíticos a partir dos dados cadastrados no aplicativo PowerApps. Este fluxo integra múltiplas tecnologias Microsoft (PowerApps, Power BI, SharePoint e Teams) para entregar relatórios personalizados com base nas ações selecionadas pelo usuário.


💡 Objetivo Principal: Automatizar a extração, processamento e distribuição de relatórios analíticos com dados atualizados das iniciativas de planejamento.

```mermaid
graph TD
    A[Chamar o fluxo no PowerApps] --> B[Gerar uma consulta no dataset do PowerBI]
    B --> C[Armazenar os dados]
    C --> D[Estruturação dos dados em JSON]
    D --> E[Personalizar os dados]
    E --> F[Extrair dados do SharePoint]
    F --> G[Criar um Excel em branco]
    G --> H[Recuperar informações]
    H --> I[Criar uma tabela]
    I --> J[Requisição em HTTP]
    J --> K[Link de compartilhamento]
    K --> L[Mensagem]
```

---

O fluxo Power Automate integrado ao aplicativo segue as seguintes etapas:

## 📋 Detalhamento das Etapas
    
1️⃣ Acionamento do Fluxo
O fluxo é acionado a partir do PowerApps quando o usuário clica no botão "Gerar Relatório OBZ".

Configuração do Gatilho:
Origem: Botão PowerApps

Parâmetros de Entrada:
Ações: Código(s) das ações selecionadas para o relatório
Usuário: E-mail do usuário solicitante

 ![Fluxo PowerApps](../assets/images/acionamentoFluxo.png)

2️⃣ Consulta ao Power BI
O fluxo executa uma consulta DAX no conjunto de dados "TesteOBZ" do Power BI para extrair as informações filtradas.

Detalhes da Configuração:
Dataset: TesteOBZ
Tipo de Consulta: DAX (Direct Query)
Filtros Aplicados: Com base no parâmetro Ações recebido do PowerApps
 
 ![Dataset PowerBI](../assets/images/datasetPowerBI.png)
    
3️⃣ Extração e Processamento dos Dados
Após a execução da consulta, o fluxo extrai as linhas de resultado e as processa para uso posterior.

Configuração:
Run_a_query_against_a_dataset')['body']['results'][0]['tables'][0]['rows']
Esta etapa é fundamental para extrair apenas os dados relevantes do resultado da consulta, preparando-os para o próximo passo.

  ![Processamento](../assets/images/Processamento.png)   

4️⃣ Estruturação via Parse JSON
Os dados são estruturados através da ação Parse JSON, que converte o formato bruto em uma estrutura de dados organizada.

Configuração do Parse JSON:
Conteúdo: Resultado da etapa anterior
Esquema: Definição estruturada dos campos esperados

 ![Estruturação](../assets/images/Estruturação.png)

5️⃣ Personalização dos Dados
Esta etapa reformata os dados extraídos para uma estrutura mais adequada ao relatório final.

Campos Mapeados:
Identificadores de ações
Descrições
Valores orçamentários
Métricas de desempenho
Informações temporais

 ![Personalizar](../assets/images/Personalizar.png)

6️⃣ Criação do Arquivo Excel

O fluxo cria um novo arquivo Excel no SharePoint com um nome padronizado que inclui data e hora.

Configuração:
Localização: /SEDESE
Nome do Arquivo: Relatorio_Planejamento_Integrado_[DATA]_[HORA].xlsx
Formato de Data: formatDateTime(utcNow(), 'dd-MM-yyyy HH:mm:ss')

 ![Arquivo](../assets/images/7.png)

7️⃣ Recuperação de Metadados

O fluxo obtém os metadados do arquivo recém-criado para uso nas etapas seguintes.

Informações Coletadas:
ID do arquivo
URI do arquivo
Permissões
Última modificação

![Informações](../assets/images/Informações.png)

8️⃣ Criação da Tabela Excel

Esta etapa cria uma tabela estruturada no arquivo Excel, com cabeçalhos predefinidos.

Configuração:
Nome da Tabela: "Relatorio"
Extração do ID: split(outputs('Get_file_metadata')?['body/Id'],'.')?[0]

![Excel](../assets/images/Excel_Tabela.png)

9️⃣ Inserção de Dados

O fluxo insere os dados processados na tabela Excel através de uma requisição HTTP.

Configuração da Requisição:
Método: POST
URI: Construída com base no ID extraído do arquivo
Corpo da Requisição: Dados estruturados no formato esperado pela API do Excel

![HTTP](../assets/images/HTTP.png)

🔗 Criação de Link de Compartilhamento
O fluxo cria um link de compartilhamento para o arquivo Excel criado.

Parâmetros de Configuração:
Tipo de Link: Visualização
Escopo: Organização
Expiração: Não definida

![Link](../assets/images/Link.png)

📱 Envio de Notificação no Teams
A última etapa envia uma notificação ao usuário no Microsoft Teams, incluindo o link para o relatório.

Configuração:
Destinatário: Usuário que solicitou o relatório (parâmetro Usuário)
Conteúdo: Mensagem informativa + Link do relatório
Formatação: Cartão adaptativo com botão de acesso

![Mensagem](../assets/images/Mensagem.png)

## 📝 Considerações de Uso

<div class="tips">
  <div class="tip">
    <h3>🎯 Objetivo</h3>
    <p>O aplicativo foi desenvolvido para simplificar o processo de planejamento integrado</p>
  </div>
  <div class="tip">
    <h3>👤 Perfis</h3>
    <p>As permissões são controladas por perfil de usuário (gestor/não gestor)</p>
  </div>
  <div class="tip">
    <h3>💾 Armazenamento</h3>
    <p>Os dados são integrados com SharePoint para persistência</p>
  </div>
  <div class="tip">
    <h3>📊 Relatórios</h3>
    <p>O sistema oferece funcionalidades de relatórios automatizados</p>
  </div>
</div>

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

@media (max-width: 768px) {
  .tips {
    grid-template-columns: 1fr;
  }
}
</style>
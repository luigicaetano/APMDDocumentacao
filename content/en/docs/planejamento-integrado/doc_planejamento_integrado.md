---
title: Tutorial completo
date: 2025-05-13
description: >
  Documentação do aplicativo de planejamento integrado, incluindo fluxos de uso, funcionalidades principais e detalhamento dos planejamentos.
weight: 4
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

### 🎛️ Controles de Seleção

![Botão Programa e Ação](../assets/images/ProgramaeAcao.png)

#### 🔄Seletor de Programa

Funcionalidade: Filtro baseado no perfil do usuário

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
```
> 💡 **Como funciona:** Essa função verifica se a variável varGestor está ativada. Se estiver, ela retorna todos os programas distintos registrados na fonte de dados PlanejamentoIntegrado_ProgramasAcoes, sem nenhuma restrição. Caso contrário, ela filtra essa fonte para retornar apenas os programas que estão na lista de programasPermitidos e, então, retorna os programas distintos dessa seleção. Assim, dependendo do valor de varGestor, o usuário verá ou todos os programas disponíveis ou apenas um subconjunto filtrado de programas autorizados, garantindo controle de acesso ou visibilidade conforme o perfil do usuário. 

#### 🔄 Seletor de Ação

Funcionalidade: Filtragem de ações baseada no programa selecionado

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

> 💡 **Como funciona:** Essa função é igual a anterior, porém filtra as Ações

#### ➕ Adicionar Nova Iniciativa

![AdicionarNovaInciativa](../assets/images/AddNovaIniciativa.png)

Funcionalidade: Criação de nova iniciativa com dados básicos

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
> 💡 **Como funciona:** Essa função cria um novo registro na fonte de dados chamada PlanejamentoIntegrado_Iniciativas. Para isso, ela usa a função Patch com o parâmetro Defaults(PlanejamentoIntegrado_Iniciativas), que indica que será criado um novo registro com valores padrão.  
No novo registro criado, são atribuídos três campos: Título, Programa e Ação. 
Depois de criar esse novo registro, a função executa um Refresh na fonte de dados PlanejamentoIntegrado_Iniciativas para garantir que os dados locais no aplicativo estejam atualizados e sincronizados com o banco ou serviço externo onde a fonte está armazenada. 

#### Botão Propor Programa
![ProporPrograma](../assets/image/ProporPrograma.png)

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
> 💡 **Como funciona:** Esse código faz o seguinte: ele cria um novo registro na fonte de dados “PlanejamentoIntegrado_ProgramasAcoes” usando a função Patch com Defaults, ou seja, um registro em branco para preenchimento. Nesse novo registro, ele define o campo Título buscando “(LookUp)” um registro existente na mesma fonte onde o campo Ação é igual aos primeiros 4 caracteres da variável ou texto “acoesPermitidas”. O valor do campo Título desse registro encontrado é usado para preencher o novo registro. Além disso, ele define o campo Programa com o valor que o usuário digitou no componente de texto “TextInputCanvas1”. Por fim, ele atualiza o contexto para definir “visPropor1” como falso, provavelmente para ocultar alguma parte da interface após a operação. 

#### Botão Propor Ação

![ProporAcao](../assets/image/ProporAcao.png)


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
> 💡 **Como funciona:** Esse código verifica se o controle “Toggle1” está marcado (Checked). Se estiver, ele cria um novo registro na fonte “PlanejamentoIntegrado_ProgramasAcoes” usando “Patch” com os seguintes dados: o campo Título é preenchido com o valor encontrado ao buscar (LookUp) um registro onde o campo Ação é igual aos primeiros 4 caracteres da variável “acoesPermitidas”; o campo Programa recebe o valor selecionado pelo usuário no componente “ComboboxCanvas1_10”; e o campo Ação é definido com o valor do componente de texto “TextInputCanvas1_6" 
Se o toggle não estiver marcado, ele também cria um novo registro similar, mas define o campo Programa como uma string que começa com "Proposta " seguida do número de registros existentes em “PlanejamentoIntegrado_ProgramasAcoes “que já tenham a palavra "Proposta" no campo Programa, somado de 1 (ou seja, criando uma numeração sequencial para propostas). O campo Ação é definido da mesma forma, com o valor do texto do componente “TextInputCanvas1_6”. 


#### 📊 Botão Detalhar Resultados

![DetalharResultados](../assets/images/DetalharResultado.png)

```powerapps
Set( 

    currIniciativa; 

    ThisItem 
);; 
UpdateContext({visDetalhar: true}) 
```
> 💡 **Como funciona:** Essa função realiza duas ações consecutivas: primeiro, ela define a variável global “currIniciativa” para o registro atual representado por “ThisItem”,ou seja, ela armazena o item selecionado ou em foco para uso posterior no aplicativo. Em seguida, ela atualiza uma variável de contexto local chamada “visDetalhar”, definindo seu valor como “true”, o que provavelmente serve para controlar a visibilidade de uma tela, painel ou componente que exibe detalhes dessa iniciativa selecionada.  

 
#### 💰 Botão Itens de Custo

![ItensdeCusto](../assets/images/ItensdeCusto.png)

```powerapps
Set(currIniciativa;ThisItem);; 
Navigate( 

    Screen_ItensDeCusto; 

    ScreenTransition.UnCover 

) 
UpdateContext({visVisaoGeral: true});; 
UpdateContext({visLoading:false}) 
```

> 💡 **Como funciona:** Esse código executa duas ações principais: primeiro, define a variável global “currIniciativa” com o registro atual representado por “ThisItem”, armazenando assim o item selecionado para ser usado em outras partes do aplicativo. Em seguida, a função “Navigate” é chamada para direcionar o usuário para a tela chamada “Screen_ItensDeCusto”, utilizando a transição visual do tipo “UnCover”, que faz a nova tela deslizar para cima ou aparecer cobrindo a anterior.  

#### 🔄 Botão Cenários

![Cenarios](../assets/images/Cenarios.png)

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

> 💡 **Como funciona:** Esse código faz duas coisas: primeiro, ele define a variável global “currIniciativa” com o registro atual selecionado (ThisItem), armazenando essa informação para uso posterior no app. Em seguida, ele navega para a tela chamada “Screen_Cenarios” usando a transição visual “UnCover”, que faz a nova tela aparecer deslizando ou cobrindo a tela anterior. Ou seja, ele salva o item selecionado e direciona o usuário para a tela de cenários com uma animação suave. 

#### 🗑️ Excluir Iniciativa
```powerapps
Set(visConfirmacao;true);;
Set(currIniciativa;ThisItem);;
Set(varNotificacao;"ExcluirIniciativa")
```

> 💡 **Como funciona:** Ele não apaga a iniciativa imediatamente, mas ativa um aviso de confirmação ao definir a variável “visConfirmacao” como verdadeira e registra que a ação pretendida é a exclusão, por meio da variável “varNotificacao” com o valor "ExcluirIniciativa". Isso prepara a interface para exibir uma mensagem de confirmação antes de realizar a exclusão de fato. 

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
> 💡 **Como funciona:** Essa função cria um novo registro na fonte de dados chamada “PlanejamentoIntegrado_ItensDeCusto”, usando os valores padrão dessa fonte, e atribui ao campo “ID_Iniciativa” o valor contido em “currIniciativa.ID”, que provavelmente representa o identificador de uma iniciativa atual selecionada ou em contexto. Após criar esse novo registro, a função executa um comando para atualizar “(refresh)” a fonte de dados, garantindo que a aplicação tenha a versão mais recente dos dados, refletindo imediatamente a inclusão do novo item. Dessa forma, a função adiciona um novo item vinculado a uma iniciativa específica e mantém os dados sincronizados no aplicativo para que qualquer controle ou galeria que utilize essa fonte mostre as informações atualizadas. 

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
> 💡 **Como funciona:** Esse código salva a edição de um item de custo, atualiza a interface e limpa os campos. Ele ativa o indicador de salvamento, tenta atualizar o campo "Título" do item atual com o valor digitado, desativa o indicador, armazena o item em uma variável, exibe a tela de detalhamento e reseta os campos de seleção para deixá-los em branco.

![DetalharResultado](../assets/images/DetItensdeCusto.png)

```powerapps
Patch(
    PlanejamentoIntegrado_ItensDeCusto;
    currItemDeCusto;
    {
        Forma: DropdownCanvas1.Selected.Value;
        Quantitativo: Value(TextInputCanvas2_3.Value);
        ValorUnitario: Value(TextInputCanvas2_4.Value);
        Frequencia: TextInputCanvas2_5.Value;
        ElementoItemCodigo: ComboboxCanvas1.Selected.Value;
        ValorTotal: Round(
            TextInputCanvas2_4.Value * TextInputCanvas2_3.Value * TextInputCanvas2_5.Value;
            2
        );
        Título: TextInputCanvas2_1.Value;
        Unidade: DropdownCanvas1_3.Selected.Value;
        PremissaVolume: TextInputCanvas2_10.Value;
        PremissaPreco: TextInputCanvas2_11.Value;
        Grupo: DropdownCanvas1_1.Selected.Value;
        ElementoItem: TextInputCanvas2_13.Value;
        Fonte: DropdownCanvas1_6.Selected.Value;
        Instrumento: DropdownCanvas1_5.Selected.Value
    }
);;
Notify(
    "Alterações salvas com sucesso!";
    NotificationType.Success;
    4000
)
```
>💡 **Como funciona:** Esse código atualiza os dados do item de custo atual (currItemDeCusto) na fonte "PlanejamentoIntegrado_ItensDeCusto" com os valores preenchidos em vários campos da interface. Ele salva informações como forma, quantitativo, valor unitário, frequência, código do item, valor total (calculado e arredondado), título, unidade, premissas, grupo, elemento, fonte e instrumento. Após salvar, exibe uma notificação de sucesso informando que as alterações foram salvas com sucesso, por 4 segundos.

## 📊 Tela Cenarios

![Tela Cenarios](../assets/images/TelaCenarios.png) 

### Elementos de Interface

#### 👁️ Ver Itens de Custo
```powerapps
Navigate(
    Screen_ItensDeCusto;
    ScreenTransition.UnCover
)
```

> Volta para a tela de Itens de Custo

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

> Esse código cria um novo registro na fonte de dados "PlanejamentoIntegrado_Cenarios" vinculando-o à iniciativa atualmente selecionada "(currIniciativa.ID)". Para o campo "NumeroCenario", ele calcula o maior número de cenário já existente para essa mesma iniciativa e adiciona 1, garantindo que o novo cenário tenha um número sequencial único. Depois de criar esse registro, ele atualiza a fonte de dados para que as mudanças sejam refletidas imediatamente no aplicativo.

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
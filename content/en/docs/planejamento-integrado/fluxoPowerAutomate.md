---
title: Fluxo do Power Automate
date: 2025-05-05
description: >
  Essa etapa demonostra como fazemos o fluxo para os relorios chegarem no chat do Teams 
weight: 2
---

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
---
title: Criando Fluxos no Power Automate
date: 2025-05-14
description: >
  Guia detalhado sobre como configurar o fluxo de automação para enviar relatórios para o Teams
weight: 4
---

# 🔄 Criando Fluxos no Power Automate

Neste guia, você aprenderá como configurar um fluxo de automação no Power Automate que conecta seu aplicativo PowerApps com relatórios do Power BI e envia os resultados diretamente para o Microsoft Teams. Este processo automatizado economiza tempo e garante que todos recebam informações atualizadas.

## O Que Você Vai Aprender

- Como criar um fluxo acionado pelo PowerApps
- Como consultar dados do Power BI através do fluxo
- Como processar dados e criar relatórios em Excel
- Como compartilhar automaticamente os resultados no Teams

## Visão Geral do Fluxo

O fluxo de automação do Planejamento Integrado 2026 foi desenvolvido para gerar relatórios analíticos a partir dos dados cadastrados no PowerApps. Este fluxo integra múltiplas tecnologias Microsoft para entregar relatórios personalizados com base nas ações selecionadas pelo usuário.

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
    K --> L[Mensagem no Teams]
```

## Passo a Passo

<div class="flow-steps">
  <div class="step">
    <h3>📌 Passo 1: Acionando o fluxo pelo PowerApps</h3>
    <p>O fluxo é iniciado quando o usuário clica no botão "Gerar Relatório OBZ" no aplicativo PowerApps. Este botão envia dois parâmetros importantes: os códigos das ações selecionadas e o e-mail do usuário solicitante.</p>
    {{< figure src="../assets/images/acionamentoFluxo.png" alt="Configuração do gatilho no PowerApps" >}}
  </div>

  <div class="step">
    <h3>📌 Passo 2: Consultando dados no Power BI</h3>
    <p>O fluxo executa uma consulta DAX no conjunto de dados "PlanejamentoIntegrado2026" do Power BI. Esta consulta filtra as informações com base nas ações selecionadas pelo usuário no PowerApps. Para personalizar o relatório, veja a sessão <a href="../funcionalidades/RelatoriosExcel/" class="prev-link">Relatórios excel a partir do Power BI e Power Automate</a>.</p>
    {{< figure src="../assets/images/dataset.PowerBI.png" alt="Consulta ao dataset do Power BI" >}}
  </div>

  <div class="step">
    <h3>📌 Passo 3: Extraindo e processando dados</h3>
    <p>Após a consulta, o sistema extrai apenas as linhas de resultado relevantes e as processa para uso nas próximas etapas. Esta etapa transforma dados brutos em informações utilizáveis.</p>
    <div class="code-sample">
      {{< highlight csharp >}}
        // Código utilizado no "Inputs" da ação:
        outputs('Gerar_uma_consulta_no_dataset_do_PowerBI')?['body']?['results']?[0]?['tables']?[0]?['rows']
      {{< /highlight >}}
    </div>
    {{< figure src="../assets/images/Processamento.png" alt="Processamento dos dados extraídos" >}}
  </div>

  <div class="step">
    <h3>📌 Passo 4: Estruturando dados com Parse JSON</h3>
    <p>Os dados são organizados através da ação Parse JSON, que converte o formato bruto em uma estrutura de dados bem definida e fácil de manipular nas etapas seguintes.</p>
    <p>É importante lembrar que o esquema JSON configurado no nosso arquivo é para a forma como nós estruturamos o nosso relatório. Caso queiram personalizar, terão que alterar os nomes de cada campo no "Schema".
    {{< figure src="../assets/images/Estruturação.png" alt="Estruturação via Parse JSON" >}}
  </div>

  <div class="step">
    <h3>📌 Passo 5: Personalizando o formato dos dados</h3>
    <p>Esta etapa reformata os dados extraídos para uma estrutura mais adequada ao relatório final, mapeando campos como identificadores de ações, descrições, valores orçamentários e métricas de desempenho.</p>
    {{< figure src="../assets/images/Personalizar.png" alt="Personalização do formato de dados" >}}
  </div>

  <div class="step">
    <h3>📌 Passo 6: Criando o arquivo Excel</h3>
    <p>O fluxo cria um novo arquivo Excel no SharePoint com um nome padronizado que inclui data e hora atual, facilitando a organização e busca dos relatórios gerados.</p>
    <div class="code-sample">
      {{< highlight csharp >}}
        // Código utilizado no "File Name" da ação, para garantir um nome único para cada arquivo:
        formatDateTime(utcNow(), 'dd-MM-yyyy HH:mm:ss')
      {{< /highlight >}}
    </div>
    {{< figure src="../assets/images/7.png" alt="Criação do arquivo Excel" >}}
  </div>

  <div class="step">
    <h3>📌 Passo 7: Recuperando metadados do arquivo</h3>
    <p>O sistema obtém os metadados do arquivo recém-criado para uso nas etapas seguintes.</p>
    {{< figure src="../assets/images/Informações.png" alt="Recuperação de metadados do arquivo" >}}
  </div>

  <div class="step">
    <h3>📌 Passo 8: Criando a tabela no Excel</h3>
    <p>Esta etapa cria uma tabela estruturada no arquivo Excel, com cabeçalhos predefinidos que facilitam a leitura e análise dos dados do relatório.</p>
    <div class="code-sample">
      {{< highlight csharp >}}
        // Para acessarmos a biblioteca de cada usuário, é necessário passar o identificador obtido na etapa anterior:
        split(outputs('Recuperar_informações')?['body/Id'],'.')?[0]
      {{< /highlight >}}
    </div>
    {{< figure src="../assets/images/Excel_Tabela.png" alt="Criação da tabela no Excel" >}}
  </div>

  <div class="step">
    <h3>📌 Passo 9: Inserindo dados na tabela</h3>
    <p>O fluxo insere os dados processados na tabela Excel através de uma requisição HTTP, utilizando o ID extraído do arquivo para garantir que os dados sejam inseridos no local correto.</p>
    <div class="code-sample">
      {{< highlight csharp >}}
        // Fique atento as "/", a função está entre duas:
        split(outputs('Recuperar_informações')?['body/Id'],'.')?[1]
      {{< /highlight >}}
    </div>
    {{< figure src="../assets/images/HTTP.png" alt="Inserção de dados via HTTP" >}}
  </div>

  <div class="step">
    <h3>📌 Passo 10: Gerando link de compartilhamento</h3>
    <p>O sistema cria um link de compartilhamento para o arquivo Excel, permitindo que o usuário acesse o relatório diretamente sem precisar navegar pelo SharePoint.</p>
    {{< figure src="../assets/images/Link.png" alt="Criação do link de compartilhamento" >}}
  </div>

  <div class="step">
    <h3>📌 Passo 11: Enviando notificação no Teams</h3>
    <p>A etapa final envia uma notificação ao usuário no Microsoft Teams, incluindo uma mensagem informativa e o link para acessar o relatório com apenas um clique.</p>
    {{< figure src="../assets/images/Mensagem.png" alt="Envio de notificação no Teams" >}}
  </div>
</div>


<div class="step">
    <h3>📌 Passo 12: Conexões usadas</h3>
    <p> Essa etapa integra diferentes serviços da Microsoft (Power BI, SharePoint, Teams, Excel, Office 365 e OneDrive). Algumas conexões já estão prontas e são compartilhadas pelo dono do fluxo (Power BI, SharePoint e Teams).Outras conexões exigem que o usuário que for executar o fluxo insira suas próprias credenciais (Excel, Office 365 e OneDrive).</p>
    {{< figure src="../assets/images/Fluxo.Power.png" alt="Envio de notificação no Teams" >}}
  </div>
</div>

## 💡 Dicas Úteis

<div class="tips">
  <div class="tip">
    <h3>🎯 Objetivo do fluxo</h3>
    <p>Lembre-se que o principal objetivo é automatizar a geração e distribuição de relatórios, economizando tempo e garantindo consistência nas informações.</p>
  </div>
  
  <div class="tip">
    <h3>🔄 Testando seu fluxo</h3>
    <p>Antes de implementar em produção, teste o fluxo com um conjunto pequeno de dados para verificar se todas as etapas estão funcionando corretamente.</p>
  </div>
  
  <div class="tip">
    <h3>👤 Permissões necessárias</h3>
    <p>Certifique-se que os usuários têm as permissões corretas no SharePoint, Power BI e Teams para que o fluxo funcione sem interrupções.</p>
  </div>
  
  <div class="tip">
    <h3>📊 Personalização de relatórios</h3>
    <p>Você pode personalizar os campos e formato do relatório Excel modificando as etapas de estruturação e criação da tabela conforme suas necessidades específicas.</p>
  </div>
</div>

## O Que Vem a Seguir?

Agora que você configurou com sucesso o fluxo de automação no Power Automate, está pronto para implementar soluções completas de relatórios automatizados! No próximo tutorial, você aprenderá como personalizar ainda mais os relatórios e adicionar visualizações avançadas.

<div class="navigation-links">
  <a href="../permissoes/" class="prev-link">← Passo anterior: Configurando as permissões</a>
  <a href="../doc_planejamento_integrado/" class="next-link">Próximo passo: Tutorial Completo →</a>
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
  color:rgb(0, 0, 0);
  margin-top: 1.5em;
}

h1 {
  font-size: 2.2em;
  margin-bottom: 0.8em;
  border-bottom: 2px solid #eaeaea;
  padding-bottom: 0.3em;
}

/* Estilo dos passos */
.flow-steps {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 30px 0;
}

.step {
  background-color: #f8f9fa;
  border-left: 5px solid #0078d4;
  padding: 20px;
  border-radius: 0 8px 8px 0;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease;
}

.step:hover {
  transform: translateX(5px);
}

.step h3 {
  margin-top: 0;
  color: #0078d4;
  font-size: 1.3em;
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

/* Estilo das dicas */
.tips {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin: 30px 0;
}

.tip {
  background-color: #f0f7ff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 3px 15px rgba(0,0,0,0.08);
  border: 1px solid #e6f0ff;
  transition: all 0.3s ease;
}

.tip:hover {
  box-shadow: 0 5px 20px rgba(0,0,0,0.12);
  transform: translateY(-5px);
}

.tip h3 {
  margin-top: 0;
  color: #0078d4;
  font-size: 1.2em;
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

/* Mermaid diagrams */
.mermaid {
  background-color: white;
  padding: 1em;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  margin: 1.5em 0;
  text-align: center;
}

/* Estilo para blocos de código */
.code-sample {
  margin: 20px 0;
  padding: 0;
}

.code-sample pre {
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  border-left: 5px solid #0078d4;
  margin: 0;
}

/* Responsividade */
@media (max-width: 768px) {
  .tips {
    grid-template-columns: 1fr;
  }
  
  .navigation-links {
    flex-direction: column;
    gap: 15px;
  }
  
  h1 {
    font-size: 1.8em;
  }
  
  .step {
    padding: 15px;
  }
}
</style>
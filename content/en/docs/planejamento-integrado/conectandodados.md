---
title: 1. Vinculando os dados ao Aplicativo
date: 2025-05-14 
description: >
  Essa etapa demonostra como vinculamos a base de dados ao aplicativo, via PowerApps
weight: 6
---

🔗 Vinculando uma base de dados no PowerApps:

1. 1️⃣ No cabeçalho do PowerApps, clique em "Adicionar Dados", depois você escolhe a fonte desejada (por exemplo: SharePoint)
![Dados](../assets/images/AddDados.png)
2. 2️⃣ Conecte a conta do SharePoint
![Conectar](../assets/images/AddNovaConexão.png)
3. 3️⃣ Insira a URL do site onde estão as listas
![Dados](../assets/images/URL.png)
4. 4️⃣ Selecione as listas desejadas e clique em conectar 
![Dados](../assets/images/Listas.png)

Essas listas agora vão aparecer como gonte de dados no painel lateral e podem ser usadas no aplicativo: 
![Dados](../assets/images/DadosApp.png)



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
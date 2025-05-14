---
title: 1. Vinculando os dados ao Aplicativo
date: 2025-05-05
description: >
  Essa etapa demonostra como vinculamos a base de dados ao aplicativo, via PowerApps
weight: 6
---

Vinculando uma base de dados no PowerApps:

1. No cabeçalho do PowerApps, clique em "Adicionar Dados", depois você escolhe a fonte desejada (por exemplo: SharePoint)
![Dados](../assets/images/AddDados.png)
2. Conecte a conta do SharePoint
![Conectar](../assets/images/AddNovaConexão.png)
3. Insira a URL do site onde estão as listas
![Dados](../assets/images/URL.png)
4. Selecione as listas desejadas e clique em conectar 
![Dados](../assets/images/Listas.png)

Essas listas agora vão aparecer como gonte de dados no painel lateral e podem ser usadas no aplicativo: 
![Dados](../assets/images/DadosApp.png)

Preencher Gallery: 
```powerapps
Filter(BaseFormularioOBZ_Atividades)
```´
Dropdowns e comboxes:
Registros: 
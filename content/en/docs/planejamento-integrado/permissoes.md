# 🔐 Gerenciamento de Permissões de Usuários

Neste guia, você aprenderá como configurar e gerenciar as permissões de usuários no seu sistema de Planejamento Integrado. Com essas funcionalidades, você poderá controlar quem tem acesso a cada parte do sistema e definir diferentes níveis de permissão.

## O Que Você Vai Aprender

- Como navegar pela tela principal de permissões
- Como adicionar novas permissões para usuários
- Como editar permissões existentes
- Como desativar usuários do sistema
- Como configurar usuários como gestores

## 📋 Tela Principal de Permissões

![Tela Permissoes](../assets/images/permissoes.png)

Esta é a tela central onde você visualiza todos os usuários e suas respectivas permissões. A partir daqui, você pode realizar todas as operações de gerenciamento.

### 🆕 Nova Permissão

**Função:** `Navigate(Screen_Permissoes_Adicionar)`

Direciona o usuário para a tela onde poderá adicionar uma nova permissão ao sistema, configurando um novo usuário com seus respectivos acessos.

### ✏️ Editar Permissão

**Código:**
```
Select(Parent);
Set(currUsuario; ThisItem);
Navigate(Screen_Permissoes_Editar)
```

Este botão executa três ações em sequência:
1. **Select(Parent)** - Seleciona o item pai da galeria para garantir o foco correto
2. **Set(currUsuario; ThisItem)** - Define o usuário atual como uma variável global para ser usado na tela de edição
3. **Navigate(Screen_Permissoes_Editar)** - Navega para a tela de edição de permissões

### 🚫 Desativar Usuário

**Função:** `Remove(PlanejamentoIntegrado_Usuarios; ThisItem)`

Remove permanentemente o usuário selecionado da base de dados, desativando completamente seu acesso ao sistema.

## ✏️ Tela de Edição de Permissões 

![Editar Permissoes](../assets/images/permissoesEditar.png)

Nesta tela, você pode modificar as permissões de um usuário já existente no sistema.

### 🔍 Localizar Usuários

Este código é usado em um ComboBox para listar todas as opções do campo Usuario da fonte de dados `PlanejamentoIntegrado_Usuarios`, permitindo selecionar um usuário válido existente.

### 💾 Salvar Permissões

### 🔧 Como Funciona o Salvamento

```powerapps
If(Checkbox3_1.Value;
  // Se for gestor
  Patch(PlanejamentoIntegrado_Usuarios; currUsuario; {
    Título: "Sim";
    Gestor: true;
    Programas: Blank();
    Acoes: Blank()
  });
  // Se não for gestor  
  Patch(PlanejamentoIntegrado_Usuarios; currUsuario; {
    Título: "Sim";
    Usuario: ComboBox1_2.Selected;
    Programas: Concat(Distinct(Filter(Gallery1_1.AllItems; Checkbox1_1.Value = true); Programa); Value; "; ");
    Acoes: Concat(Filter(Gallery1_1.AllItems; Checkbox1_1.Value = true); Left(Acao; 4); "; ")
  })
);
Navigate(Screen_Permissoes_Gestao)
```
### 🎯 Como o Sistema Funciona: 
1. Verificação de Tipo de Usuário
O sistema primeiro verifica se o Checkbox3_1 está marcado para determinar se o usuário será um gestor ou um usuário comum.
2. Configuração para Gestores 👑
Se for um gestor, o sistema define:

Título: "Sim" (usuário ativo)
Gestor: true (permissão de gestor)
Programas e Ações: Blank() (gestores têm acesso total)

3. Configuração para Usuários Comuns 👤
Para usuários comuns, o sistema:

Define o usuário selecionado no ComboBox
Coleta os Programas marcados na galeria, removendo duplicatas com Distinct()
Coleta as Ações marcadas, usando apenas os 4 primeiros caracteres com Left(Acao; 4)
Separa os itens com ponto e vírgula usando Concat()

4. Detalhamento das Funções Utilizadas

Concat() - Concatena (junta) valores em uma string separada por delimitador
Distinct() - Remove valores duplicados de uma lista
Filter() - Filtra itens com base em uma condição (checkbox marcado)
Left(Acao; 4) - Extrai apenas os 4 primeiros caracteres do campo Acao
Gallery1_1.AllItems - Referência a todos os itens da galeria
Checkbox1_1.Value = true - Condição para filtrar apenas itens marcados

5. Finalização 🔄
Após salvar as configurações, o sistema retorna automaticamente para a tela principal de gestão de permissões com Navigate(Screen_Permissoes_Gestao).

## ➕ Tela de Adição de Permissões

![Adicionar permissoes](../assets/images/permissoesAdicionar.png)

Interface dedicada para cadastrar novos usuários no sistema e definir suas permissões iniciais.

## 💾 Função Principal: Salvar Permissões

### 🔧 Como Funciona o Salvamento

```powerapps
If(Checkbox3_1.Value;
  // Se for gestor
  Patch(PlanejamentoIntegrado_Usuarios; currUsuario; {
    Título: "Sim";
    Gestor: true;
    Programas: Blank();
    Acoes: Blank()
  });
  // Se não for gestor  
  Patch(PlanejamentoIntegrado_Usuarios; currUsuario; {
    Título: "Sim";
    Usuario: ComboBox1_2.Selected;
    Programas: Concat(Distinct(Filter(Gallery1_1.AllItems; Checkbox1_1.Value = true); Programa); Value; "; ");
    Acoes: Concat(Filter(Gallery1_1.AllItems; Checkbox1_1.Value = true); Left(Acao; 4); "; ")
  })
);
Navigate(Screen_Permissoes_Gestao)
```

### 🎯 Como o Sistema Funciona:
 
1. Verificação de Tipo de Usuário
O sistema primeiro verifica se o Checkbox3_1 está marcado para determinar se o usuário será um gestor ou um usuário comum.
2. Configuração para Gestores 👑
Se for um gestor, o sistema define:

Título: "Sim" (usuário ativo)
Gestor: true (permissão de gestor)
Programas e Ações: Blank() (gestores têm acesso total)

3. Configuração para Usuários Comuns 👤
Para usuários comuns, o sistema:

Define o usuário selecionado no ComboBox
Coleta os Programas marcados na galeria, removendo duplicatas com Distinct()
Coleta as Ações marcadas, usando apenas os 4 primeiros caracteres com Left(Acao; 4)
Separa os itens com ponto e vírgula usando Concat()

4. Detalhamento das Funções Utilizadas

Concat() - Concatena (junta) valores em uma string separada por delimitador
Distinct() - Remove valores duplicados de uma lista
Filter() - Filtra itens com base em uma condição (checkbox marcado)
Left(Acao; 4) - Extrai apenas os 4 primeiros caracteres do campo Acao
Gallery1_1.AllItems - Referência a todos os itens da galeria
Checkbox1_1.Value = true - Condição para filtrar apenas itens marcados

5. Finalização 🔄
Após salvar as configurações, o sistema retorna automaticamente para a tela principal de gestão de permissões com Navigate(Screen_Permissoes_Gestao).

## 💡 Dicas Importantes

### ⚠️ Cuidado com Remoções
A função "Desativar" remove permanentemente o usuário da base de dados. Certifique-se de que realmente deseja fazer essa ação, pois ela não pode ser desfeita facilmente.

### 👑 Gestores vs Usuários Comuns
Gestores têm acesso total ao sistema e não precisam de permissões específicas. Usuários comuns têm acesso limitado apenas aos programas e ações que foram selecionados.

### 🔄 Edição de Permissões
Ao editar um usuário, suas permissões atuais são substituídas pelas novas configurações. Verifique cuidadosamente antes de salvar as alterações.

### 📝 Códigos de Ação
O sistema salva apenas os 4 primeiros caracteres das ações para otimizar o armazenamento. Certifique-se de que esses caracteres sejam únicos para cada ação.

## 🚀 Fluxo de Trabalho Recomendado

**1. Planejamento**
Antes de adicionar um usuário, defina claramente quais programas e ações ele precisa acessar.

**2. Adição**
Use a tela de "Nova Permissão" para cadastrar o usuário com as permissões adequadas.

**3. Verificação**
Confirme na tela principal se as permissões foram salvas corretamente.

**4. Manutenção**
Use a função "Editar" sempre que precisar ajustar as permissões de um usuário existente.

## Resumo das Funcionalidades

| Funcionalidade | Tela | Descrição |
|---|---|---|
| **Nova Permissão** | Principal | Adiciona novo usuário ao sistema |
| **Editar** | Principal → Edição | Modifica permissões de usuário existente |
| **Desativar** | Principal | Remove usuário permanentemente |
| **Localizar** | Edição | Busca usuários na base de dados |
| **Salvar** | Edição/Adição | Confirma alterações nas permissões |

## O Que Vem a Seguir?

Com o sistema de permissões configurado, você pode controlar efetivamente o acesso dos usuários às diferentes funcionalidades do sistema. No próximo tutorial, você aprenderá sobre outras funcionalidades avançadas do aplicativo.
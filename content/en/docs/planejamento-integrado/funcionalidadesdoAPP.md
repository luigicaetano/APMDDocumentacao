---
title: Funcionalidades do Aplicativo
date: 2025-05-05
description: >
  Nessa etapa, demonstramos como fizemos todas a interface do aplicativo e como o mesmo funciona.
weight: 3
---


<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Funcionalidades do Aplicativo</title>
    <style>
        /* Estilo geral da página */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #fafafa;
            padding: 20px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            background-color: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        h1, h2, h3, h4 {
            font-weight: 600;
            color: #000;
            margin-top: 1.5em;
        }

        h1 {
            font-size: 2.2em;
            margin-bottom: 0.8em;
            border-bottom: 2px solid #eaeaea;
            padding-bottom: 0.3em;
            margin-top: 0;
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

        h4 {
            font-size: 1.2em;
            color: #333;
            margin-bottom: 0.6em;
        }

        /* Estilo das seções de tela */
        .screen-section {
            background-color: #f8f9fa;
            border-left: 5px solid #0078d4;
            padding: 25px;
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

        /* Tabela de elementos */
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

        /* Estilo dos controles */
        .control-section {
            background-color: #f0f7ff;
            border-radius: 12px;
            padding: 20px;
            margin: 20px 0;
            border: 1px solid #e6f0ff;
        }

        /* Estilo do código */
        .code-block {
            background-color: #1e1e1e;
            color: #d4d4d4;
            padding: 20px;
            border-radius: 8px;
            overflow-x: auto;
            margin: 15px 0;
            font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
            font-size: 0.9em;
            border-left: 4px solid #0078d4;
        }

        /* Explicações de como funciona */
        .explanation {
            background-color: #f0f7ff;
            border-left: 4px solid #28a745;
            padding: 15px;
            margin: 15px 0;
            border-radius: 0 8px 8px 0;
        }

        .explanation::before {
            content: "💡 Como funciona: ";
            font-weight: bold;
            color: #28a745;
        }

        /* Botões de funcionalidade */
        .function-buttons {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 25px 0;
        }

        .function-button {
            background-color: #f8f9fa;
            border: 2px solid #0078d4;
            border-radius: 12px;
            padding: 15px;
            text-align: center;
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .function-button:hover {
            background-color: #0078d4;
            color: white;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 120, 212, 0.3);
        }

        .function-button h4 {
            margin: 0 0 10px 0;
            font-size: 1.1em;
        }

        /* Estilo responsivo */
        @media (max-width: 768px) {
            .container {
                padding: 20px;
            }
            
            h1 {
                font-size: 1.8em;
            }
            
            .screen-section {
                padding: 15px;
            }
            
            .function-buttons {
                grid-template-columns: 1fr;
            }
            
            table {
                font-size: 0.9em;
            }
            
            th, td {
                padding: 8px 10px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 Funcionalidades do Aplicativo</h1>
        <p><em>Nessa seção, demonstramos como fizemos toda a interface do aplicativo e como o mesmo funciona.</em></p>

        <div class="screen-section">
            <h2>🏠 Tela Inicial</h2>
            <img src="../assets/images/TelaInicial.png" alt="Tela Inicial do Aplicativo">
            
            <h3>Principais Elementos</h3>
            
            <table>
                <thead>
                    <tr>
                        <th>Elemento</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>✨ <strong>Tutorial Interativo</strong></td>
                        <td>Guia dinâmico que ensina o usuário a utilizar o aplicativo passo a passo</td>
                    </tr>
                    <tr>
                        <td>📋 <strong>Fluxo de Registro de Informação</strong></td>
                        <td>Redireciona para documento no SharePoint em nova aba, mantendo o aplicativo aberto</td>
                    </tr>
                    <tr>
                        <td>▶️ <strong>Iniciar Preenchimento</strong></td>
                        <td>Direciona o usuário para a tela de iniciativas</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="screen-section">
            <h2>📋 Tela de Iniciativas</h2>
            <img src="../assets/images/Iniciativas.png" alt="Tela Iniciativas">
            
            <div class="control-section">
                <h3>🎛️ Controles de Seleção</h3>
                <img src="../assets/images/ProgramaeAcao.png" alt="Botão Programa e Ação">
                
                <h4>🔄 Seletor de Programa</h4>
                <p><strong>Funcionalidade:</strong> Filtro baseado no perfil do usuário</p>
                
                <div class="code-block">
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
                </div>
                
                <div class="explanation">
                    Essa função verifica se a variável varGestor está ativada. Se estiver, ela retorna todos os programas distintos registrados na fonte de dados PlanejamentoIntegrado_ProgramasAcoes, sem nenhuma restrição. Caso contrário, ela filtra essa fonte para retornar apenas os programas que estão na lista de programasPermitidos e, então, retorna os programas distintos dessa seleção.
                </div>

                <h4>🔄 Seletor de Ação</h4>
                <p><strong>Funcionalidade:</strong> Filtragem de ações baseada no programa selecionado</p>
                
                <div class="code-block">
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
                </div>
                
                <div class="explanation">
                    Essa função é igual à anterior, porém filtra as Ações baseadas no programa selecionado e nas permissões do usuário.
                </div>
            </div>

            <div class="function-buttons">
                <div class="function-button">
                    <h4>➕ Adicionar Nova Iniciativa</h4>
                    <p>Criação de nova iniciativa com dados básicos</p>
                </div>
                <div class="function-button">
                    <h4>📝 Propor Programa</h4>
                    <p>Permite ao usuário propor novos programas</p>
                </div>
                <div class="function-button">
                    <h4>⚡ Propor Ação</h4>
                    <p>Permite ao usuário propor novas ações</p>
                </div>
            </div>

            <h4>➕ Código - Adicionar Nova Iniciativa</h4>
            <img src="../assets/images/AddNovaIniciativa.png" alt="Adicionar Nova Iniciativa">
            
            <div class="code-block">
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
            </div>
            
            <div class="explanation">
                Essa função cria um novo registro na fonte de dados chamada PlanejamentoIntegrado_Iniciativas. Para isso, ela usa a função Patch com o parâmetro Defaults, que indica que será criado um novo registro com valores padrão. No novo registro criado, são atribuídos três campos: Título, Programa e Ação.
            </div>

            <h4>📝 Botão Propor Programa</h4>
            <img src="../assets/images/ProporPrograma.png" alt="Propor Programa">
            
            <div class="code-block">
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
            </div>

            <h4>⚡ Botão Propor Ação</h4>
            <img src="../assets/images/ProporAcao.png" alt="Propor Ação">
            
            <div class="code-block">
If( 
    Toggle1.Checked; 
    Patch( 
        PlanejamentoIntegrado_ProgramasAcoes; 
        Defaults(PlanejamentoIntegrado_ProgramasAcoes); 
        { 
            Título: LookUp(...); 
            Programa: ComboboxCanvas1_10.Selected.Value; 
            Acao: TextInputCanvas1_6.Value 
        } 
    ); 
    Patch( 
        PlanejamentoIntegrado_ProgramasAcoes; 
        Defaults(PlanejamentoIntegrado_ProgramasAcoes); 
        { 
            Título: LookUp(...); 
            Programa: "Proposta " & CountRows(...) + 1; 
            Acao: TextInputCanvas1_6.Value 
        } 
    ) 
)
            </div>

            <h4>🔧 Botões Laterais</h4>
            <img src="../assets/images/BotoesLaterais.png" alt="Botões Laterais">
            
            <div class="function-buttons">
                <div class="function-button">
                    <h4>📊 Gerar Relatório</h4>
                    <p>Gera relatório automático baseado nos dados</p>
                </div>
                <div class="function-button">
                    <h4>🔍 Visão Geral Cenários</h4>
                    <p>Exibe uma visão consolidada dos cenários</p>
                </div>
            </div>

            <h4>🎯 Botões de Ação por Iniciativa</h4>
            <img src="../assets/images/BotoesIniciativa2.png" alt="Botões Iniciativa">
            
            <div class="function-buttons">
                <div class="function-button">
                    <h4>📊 Detalhar Iniciativa</h4>
                    <p>Abre detalhes completos da iniciativa</p>
                </div>
                <div class="function-button">
                    <h4>💰 Itens de Custo</h4>
                    <p>Gerencia custos da iniciativa</p>
                </div>
                <div class="function-button">
                    <h4>📈 Cenários</h4>
                    <p>Gerencia cenários da iniciativa</p>
                </div>
                <div class="function-button">
                    <h4>🗑️ Excluir Iniciativa</h4>
                    <p>Remove a iniciativa do sistema</p>
                </div>
            </div>
        </div>

        <div class="screen-section">
            <h2>📝 Detalhar Iniciativa</h2>
            <img src="../assets/images/DetalharIniciativa.png" alt="Detalhes Iniciativa">
            
            <p>Essa tela serve para detalhar mais sobre a iniciativa selecionada.</p>
            
            <div class="code-block">
Patch(
    PlanejamentoIntegrado_Iniciativas;
    currIniciativa;
    {
        Escopo: TextInputCanvas5_4.Value;
        AtividadesNaoOrcamentarias: TextInputCanvas5_5.Value
    }
)
            </div>
            
            <div class="explanation">
                Atualiza um registro específico (representado por currIniciativa) na fonte de dados "PlanejamentoIntegrado_Iniciativas", atribuindo novos valores aos campos "Escopo" e "AtividadesNaoOrcamentarias".
            </div>
        </div>

        <div class="screen-section">
            <h2>💰 Tela Itens de Custo</h2>
            <img src="../assets/images/itensdecusto.png" alt="Tela Itens de Custo">
            
            <h3>Principais Funcionalidades</h3>
            
            <h4>➕ Adicionar Novo Item de Custo</h4>
            <div class="code-block">
Patch(
    PlanejamentoIntegrado_ItensDeCusto;
    Defaults(PlanejamentoIntegrado_ItensDeCusto);
    {ID_Iniciativa: currIniciativa.ID}
);;
Refresh(PlanejamentoIntegrado_ItensDeCusto)
            </div>
            
            <div class="explanation">
                Essa função cria um novo registro na fonte de dados "PlanejamentoIntegrado_ItensDeCusto", vinculando-o automaticamente à iniciativa atual através do ID_Iniciativa.
            </div>
        </div>

        <div class="screen-section">
            <h2>📊 Tela Cenários</h2>
            <img src="../assets/images/TelaCenarios.png" alt="Tela Cenários">
            
            <h3>Principais Funcionalidades</h3>
            
            <div class="function-buttons">
                <div class="function-button">
                    <h4>👁️ Ver Itens de Custo</h4>
                    <p>Navega de volta para a tela de custos</p>
                </div>
                <div class="function-button">
                    <h4>➕ Adicionar Cenário</h4>
                    <p>Cria um novo cenário numerado sequencialmente</p>
                </div>
                <div class="function-button">
                    <h4>🔍 Detalhar Cenário</h4>
                    <p>Abre detalhes específicos do cenário</p>
                </div>
            </div>

            <h4>➕ Código - Adicionar Cenário</h4>
            <div class="code-block">
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
            </div>
            
            <div class="explanation">
                Esse código cria um novo registro vinculado à iniciativa atual e calcula automaticamente o próximo número sequencial para o cenário, garantindo numeração única por iniciativa.
            </div>
        </div>

        <div style="margin-top: 50px; padding-top: 20px; border-top: 1px solid #eaeaea; text-align: center;">
            <p><em>Sistema desenvolvido para otimizar o planejamento integrado e gestão de iniciativas organizacionais.</em></p>
        </div>
    </div>
</body>
</html>
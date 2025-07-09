---
title: Documentação Completa - App de Celebrações SEDESE
date: 2025-07-08
description: Guia completo com todas as funcionalidades do App de Celebrações, incluindo fluxos, operações em PowerApps e integração com Power Automate
weight: 5
---------

# 🎯 Sistema de Celebrações - Guia Completo

Este guia apresenta uma documentação completa do sistema de celebrações do DCP, incluindo o gerenciamento de emendas, programas e fluxos de trabalho. O sistema oferece controle total sobre o processo de celebrações, desde a criação inicial até o pagamento final.

## O Que Você Vai Aprender

- Como navegar pelas diferentes telas do sistema
- Como gerenciar emendas e programas
- Como utilizar os filtros e funcionalidades de busca
- Como configurar pagamentos e status
- Como gerar minutas e documentos automáticos
- Melhores práticas para gestão de celebrações

## Visão Geral do Sistema

O sistema de celebrações é dividido em várias telas especializadas que cobrem todo o ciclo de vida das celebrações, desde a criação até o pagamento final. Cada tela tem funcionalidades específicas para diferentes tipos de usuários e processos.

```mermaid
graph TD
    A[Tela Principal Celebrações] --> B[Emendas 2025]
    A --> C[Programas]
    B --> D[Emendas Adicionar]
    B --> E[Emendas Celebradas]
    B --> F[Gestão APMD]
    C --> G[Analistas Programas]
    C --> H[Analistas Emendas]
    D --> I[Salvar Nova Emenda]
    E --> J[Visualizar Pagamentos]
    F --> K[Gerar Minuta]
    G --> L[Filtros e Buscas]
    H --> M[Observações]
```

## Passo a Passo das Funcionalidades

<div class="celebracoes-steps">
  <div class="step">
    <h3>🏠 Passo 1: Tela Principal de Celebrações</h3>
    <p>A tela principal oferece acesso rápido às principais funcionalidades do sistema de celebrações.</p>
    <p><strong>🔗 Navegação para Emendas 2025</strong></p>
    <div class="code-sample">
      {{< highlight csharp >}}
      Navigate(CelebraçõesEmendas_Celebração_1;ScreenTransition.Cover)
      {{< /highlight >}}
    </div>
    <p>Este comando navega para a tela de emendas 2025 com transição de cobertura, proporcionando uma experiência visual suave.</p>
  </div>

  <div class="step">
    <h3>📋 Passo 2: Tela de Emendas 2025</h3>
    <p>Esta tela apresenta uma galeria complexa com múltiplos filtros para visualizar e gerenciar emendas.</p>
    <p><strong>🔍 Filtros e Buscas Inteligentes</strong></p>
    <div class="code-sample">
      {{< highlight csharp >}}
      Sort(
        Search(
          Search(
            Search(
              Search(
                Filter(
                  CelebracoesProgramas2025;
                  'Nº PROCESSO SEI' = "Emenda";
                  Not(
                    Or(
                      STATUS = "IOT Registrado no SIGCON";
                      STATUS = "Indicação Cancelada pela SEGOV";
                      STATUS = "Pagamento Realizado";
                      STATUS = "Encaminhado para Pagamento";
                      STATUS = "Pago";
                      STATUS = "Aguardando Pagamento";
                      STATUS = "Aguardando pagamento"
                    )
                  )
                );
                cbSEI2_8.Value;
                SEI
              );
              cbProposta2_8.Value;
              'NÚMERO DA PROPOSTA'
            );
            cbPlano2_13.Value;
            'NÚMERO DO PLANO DE TRABALHO'
          );
          cbPlano2_14.Value;
          NumeroIndicacao
        );
        NumeroIndicacao;
        SortOrder.Ascending
      )
      {{< /highlight >}}
    </div>
    <p><strong>Como Funciona:</strong></p>
    <ul>
      <li><strong>Filter:</strong> Filtra apenas emendas que não estão em status finais</li>
      <li><strong>Search (4x):</strong> Permite busca textual em SEI, Proposta, Plano de Trabalho e Indicação</li>
      <li><strong>Sort:</strong> Ordena por número de indicação crescente</li>
    </ul>
  </div>

  <div class="step">
    <h3>🔧 Passo 3: Funcionalidade de Expansão</h3>
    <p>O sistema oferece uma funcionalidade de expansão/contração para melhor visualização dos dados.</p>
    <div class="code-sample">
      {{< highlight csharp >}}
      Patch(
        variaveisMain;
        LookUp(
          variaveisMain;
          ParentID = ThisItem.ID
        );
        {
          Variable1: If(
            LookUp(
              variaveisMain;
              ParentID = ThisItem.ID;
              Variable1
            );
            false;
            true
          )
        }
      )
      {{< /highlight >}}
    </div>
    <p><strong>⚙️ Lógica de Funcionamento:</strong></p>
    <ul>
      <li><strong>Patch:</strong> Atualiza o registro específico em variaveisMain</li>
      <li><strong>LookUp:</strong> Localiza o registro com ParentID correspondente</li>
      <li><strong>Toggle:</strong> Alterna entre true/false para mostrar/ocultar detalhes</li>
    </ul>
  </div>

  <div class="step">
    <h3>💰 Passo 4: Gestão de Pagamentos</h3>
    <p>O sistema oferece uma interface dedicada para gerenciar informações de pagamento.</p>
    <div class="code-sample">
      {{< highlight csharp >}}
      // Botão para abrir modal de pagamento
      Select(Parent);
      UpdateContext({visPagamento:true})
      {{< /highlight >}}
    </div>
    <p><strong>💾 Salvamento de Dados de Pagamento:</strong></p>
    <div class="code-sample">
      {{< highlight csharp >}}
      Patch(
        CelebracoesProgramas2025;
        galProgramas_10.Selected;
        {
          'NÚMERO SIAFI': TextInputCanvas1_9.Value;
          'DATA ENVIO PARA DCF': DatePickerCanvas2.SelectedDate;
          'Nº DO EMPENHO': TextInputCanvas1_1.Value;
          'Nº DA ORDEM DE PAGAMENTO': TextInputCanvas1_2.Value;
          'OP ACATADA': DropdownCanvas3.Selected.Value;
          'DATA DA OP': DatePickerCanvas2_1.SelectedDate
        }
      );
      Reset(TextInputCanvas1);
      Reset(DatePickerCanvas2);
      Reset(TextInputCanvas1_1);
      Reset(TextInputCanvas1_2);
      Reset(DropdownCanvas3);
      Reset(DatePickerCanvas2_1)
      {{< /highlight >}}
    </div>
    <p>Este processo atualiza as informações de pagamento do registro selecionado e limpa os campos para nova entrada.</p>
  </div>

  <div class="step">
    <h3>➕ Passo 5: Adicionar Novas Emendas</h3>
    <p>A tela de adição permite criar novas emendas com todos os dados necessários.</p>
    <div class="code-sample">
      {{< highlight csharp >}}
      Patch(
        CelebracoesProgramas2025;
        Defaults(CelebracoesProgramas2025);
        {
          'Nº PROCESSO SEI': "Emenda";
          NumeroIndicacao: TextInput1_2.Text;
          'TÉCNICO RESPONSÁVEL CELEBRAÇÃO ': DropdownCanvas1_2.Selected.Value;
          'Grupo de Despesa': TextInput1_9.Text;
          Responsável: TextInput1_10.Text;
          'NÚMERO DA PROPOSTA': TextInput1_11.Text;
          'NÚMERO DO PLANO DE TRABALHO': TextInput1_4.Text;
          'PARCEIRO/ CONVENENTE': TextInput1_5.Text;
          'TIPO DE BENEFICIÁRIO ': TextInput1_6.Text;
          STATUSSIGCON: TextInput1_7.Text;
          SUBSECRETARIA: TextInput1_8.Text;
          Ação: TextInput1_12.Text;
          ValorIndicação: Value(TextInput1_13.Text);
          'Tipo de Recurso': DropdownCanvas1_4.Selected.Value;
          Genero: TextInput1_15.Text;
          'TIPO DE INSTRUMENTO ': TextInput1_16.Text;
          STATUS: "Indicação aprovada - Aguardando envio de e-mail";
          SEI: TextInput1.Text;
          MUNICÍPIO: TextInput1_106.Text;
          Parlamentar: If(DropdownCanvas1_4.Selected.Value = "Emenda Impositiva";TextInput1_10.Text;"")
        }
      );
      Navigate(CelebraçõesEmendas_Celebração_1;ScreenTransition.UnCover);
      Set(var2025;false)
      {{< /highlight >}}
    </div>
  </div>

  <div class="step">
    <h3>📊 Passo 6: Emendas Celebradas</h3>
    <p>Esta tela mostra apenas as emendas que já foram celebradas e estão em processo de pagamento.</p>
    <div class="code-sample">
      {{< highlight csharp >}}
      SortByColumns(
        Search(
          Filter(
            CelebracoesProgramas2025;
            'Nº PROCESSO SEI' = "Emenda";
            Or(
              STATUS = "Pagamento Realizado";
              STATUS = "Encaminhado para Pagamento";
              STATUS = "Pago";
              STATUS = "Aguardando Pagamento";
              STATUS = "Aguardando pagamento"
            )
          );
          cbSEI2_9.Value;
          SEI
        );
        "NumeroIndicacao";
        SortOrder.Ascending
      )
      {{< /highlight >}}
    </div>
    <p><strong>🎯 Funcionalidade Específica:</strong> Filtra apenas emendas com status de pagamento ativo ou concluído.</p>
  </div>

  <div class="step">
    <h3>👥 Passo 7: Tela de Analistas</h3>
    <p>Telas especializadas para analistas trabalharem com programas e emendas específicas.</p>
    <p><strong>📋 Analistas - Programas:</strong></p>
    <div class="code-sample">
      {{< highlight csharp >}}
      Sort(
        Search(
          Filter(
            CelebracoesProgramas;
            Lower('TÉCNICO RESPONSÁVEL CELEBRAÇÃO ') = Lower(_varUsuario);
            SEI <> Blank();
            'Nº PROCESSO SEI' = "Programa"
          );
          cbSEI2_1.Value;
          SEI
        );
        PrazoAtual;
        SortOrder.Ascending
      )
      {{< /highlight >}}
    </div>
    <p><strong>📋 Analistas - Emendas:</strong></p>
    <div class="code-sample">
      {{< highlight csharp >}}
      Sort(
        Search(
          Filter(
            CelebracoesProgramas2025;
            Lower('TÉCNICO RESPONSÁVEL CELEBRAÇÃO ') = Lower(_varUsuario);
            Not(
              Or(
                STATUS = "IOT Registrado no SIGCON";
                STATUS = "Indicação Cancelada pela SEGOV"
              )
            );
            'Nº PROCESSO SEI' = "Emenda"
          );
          cbSEI2_5.Value;
          SEI
        );
        NumeroIndicacao;
        SortOrder.Ascending
      )
      {{< /highlight >}}
    </div>
    <p><strong>🔐 Segurança:</strong> Filtra apenas os registros do técnico logado no sistema.</p>
  </div>

  <div class="step">
    <h3>📝 Passo 8: Sistema de Observações</h3>
    <p>Cada emenda possui um sistema de observações para controle histórico.</p>
    <div class="code-sample">
      {{< highlight csharp >}}
      Sort(
        Filter(
          BaseObservacoesCelebracoes;
          Título = Text(galProgramas_5.Selected.ID)
        );
        DataComentario;
        SortOrder.Descending
      )
      {{< /highlight >}}
    </div>
    <p>Este sistema permite acompanhar o histórico de alterações e comentários de cada emenda.</p>
  </div>

  <div class="step">
    <h3>📄 Passo 9: Geração de Minuta</h3>
    <p>O sistema possui uma funcionalidade avançada para gerar minutas automáticas.</p>
    <div class="code-sample">
      {{< highlight csharp >}}
      UpdateContext({visMinuta: true});
      Set(currEmendaAnalista; ThisItem);
      Clear(COL_NUMERO_EXTENSO);
      
      // Cálculo complexo do valor por extenso
      With({
        REAL: Index(Split(Text(Value(LookUp(BaseHistoricoConvenio;
          NumeroProposta = currEmendaAnalista.'NÚMERO DA PROPOSTA';
          'Valor Total Contrapartida'
        )) + Value(LookUp(BaseHistoricoConvenio;
          NumeroProposta = currEmendaAnalista.'NÚMERO DA PROPOSTA';
          'Valor Total Concedente'
        )); "#,##0.00"); ","); 1).Value;
        
        CENTAVOS: IfError(Index(Split(Text(Value(LookUp(BaseHistoricoConvenio;
          NumeroProposta = currEmendaAnalista.'NÚMERO DA PROPOSTA';
          'Valor Total Contrapartida'
        )) + Value(LookUp(BaseHistoricoConvenio;
          NumeroProposta = currEmendaAnalista.'NÚMERO DA PROPOSTA';
          'Valor Total Concedente'
        )); "#,##0.00"); ","); 2).Value; 0)
      };
      
      // Coleta valores por extenso
      Collect(COL_NUMERO_EXTENSO; {...})
      )
      {{< /highlight >}}
    </div>
    <p><strong>🔢 Conversão Numérica:</strong> Converte valores monetários para formato por extenso automaticamente.</p>
  </div>

  <div class="step">
    <h3>🏢 Passo 10: Gestão APMD</h3>
    <p>Tela especializada para gestão avançada de celebrações pela APMD.</p>
    <div class="code-sample">
      {{< highlight csharp >}}
      SortByColumns(
        Search(
          Filter(
            CelebracoesProgramas2025;
            Not(
              Or(
                STATUS = "IOT Registrado no SIGCON";
                STATUS = "Indicação Cancelada pela SEGOV";
                STATUS = "3ª Análise realizada. Solicitada documentação pendente";
                STATUS = "2ª Análise realizada. Solicitada documentação pendente";
                STATUS = "Encaminhado para finalística para Manifestação";
                STATUS = "Aguardando Andamento do Técnico da DCP";
                STATUS = "1ª Análise realizada. Solicitada documentação pendente";
                STATUS = "Análise Técnica";
                STATUS = "E-mail de orientação enviado - Aguardando envio de Proposta de Plano de Trabalho"
              )
            );
            !IsBlank(SEI)
          );
          cbSEI2_11.Value;
          SEI
        );
        "field_5";
        SortOrder.Ascending
      )
      {{< /highlight >}}
    </div>
    <p><strong>🎛️ Filtros Avançados:</strong> Remove processos em análise e mostra apenas os prontos para gestão.</p>
  </div>
</div>

## 💡 Dicas e Melhores Práticas

<div class="tips">
  <div class="tip">
    <h3>🔍 Otimização de Filtros</h3>
    <p>Use os filtros combinados para encontrar rapidamente os registros desejados. O sistema permite busca textual simultânea em múltiplos campos, tornando a localização muito mais eficiente.</p>
  </div>
  
  <div class="tip">
    <h3>💾 Salvamento Automático</h3>
    <p>Após cada operação de salvamento, os campos são automaticamente resetados. Isso evita erros de duplicação e prepara o sistema para nova entrada de dados.</p>
  </div>
  
  <div class="tip">
    <h3>🔐 Segurança por Usuário</h3>
    <p>As telas de analistas filtram automaticamente apenas os registros do técnico logado (_varUsuario). Isso garante que cada usuário veja apenas suas responsabilidades.</p>
  </div>
  
  <div class="tip">
    <h3>📋 Status Inteligente</h3>
    <p>O sistema diferencia automaticamente entre emendas em processo e celebradas através dos status. Use essa informação para organizar melhor o fluxo de trabalho.</p>
  </div>
  
  <div class="tip">
    <h3>📄 Geração de Documentos</h3>
    <p>A funcionalidade de minuta utiliza cálculos complexos para converter valores monetários em formato por extenso. Verifique sempre os valores antes de gerar documentos oficiais.</p>
  </div>
</div>

## 📊 Resumo das Funcionalidades

| Tela | Funcionalidade Principal | Usuário Alvo |
|---|---|---|
| **Celebrações DCP** | Navegação principal | Todos |
| **Emendas 2025** | Visualização e gestão de emendas | Gestores |
| **Emendas Adicionar** | Criação de novas emendas | Analistas |
| **Emendas Celebradas** | Acompanhamento de pagamentos | Gestores |
| **Analistas Programas** | Gestão de programas individuais | Analistas |
| **Analistas Emendas** | Gestão de emendas individuais | Analistas |
| **Gestão APMD** | Supervisão avançada | APMD |

## 🔄 Fluxo de Trabalho Recomendado

<div class="workflow">
  <div class="workflow-step">
    <h4>1. Criação 📝</h4>
    <p>Adicione novas emendas através da tela "Emendas Adicionar"</p>
  </div>
  
  <div class="workflow-step">
    <h4>2. Análise 🔍</h4>
    <p>Analistas trabalham em suas telas específicas com filtros por usuário</p>
  </div>
  
  <div class="workflow-step">
    <h4>3. Documentação 📄</h4>
    <p>Gere minutas e adicione observações conforme necessário</p>
  </div>
  
  <div class="workflow-step">
    <h4>4. Celebração 🎯</h4>
    <p>Mova emendas para status celebrado quando concluídas</p>
  </div>
  
  <div class="workflow-step">
    <h4>5. Pagamento 💰</h4>
    <p>Acompanhe o processo de pagamento até conclusão</p>
  </div>
</div>

## O Que Vem a Seguir?

Com o sistema de celebrações dominado, você terá controle total sobre o ciclo de vida das emendas e programas. Este conhecimento permite gerenciar eficientemente desde a criação até o pagamento final, garantindo transparência e controle em todo o processo.

<div class="navigation-links">
  <a href="../permissoes/" class="prev-link">← Passo anterior: Configurar Permissões</a>
  <a href="../integracao/" class="next-link">Próximo passo: Integração com Sistemas →</a>
</div>

<style>
body {
  font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: #333;
}

h1, h2, h3 {
  font-weight: 600;
  color: rgb(0, 0, 0);
  margin-top: 1.5em;
}

h1 {
  font-size: 2.2em;
  margin-bottom: 0.8em;
  border-bottom: 2px solid #eaeaea;
  padding-bottom: 0.3em;
}

/* Estilo dos passos de celebrações */
.celebracoes-steps {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 30px 0;
}

.step {
  background-color: #f8f9fa;
  border-left: 5px solid #007bff;
  padding: 25px;
  border-radius: 0 12px 12px 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.step:hover {
  transform: translateX(8px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}

.step h3 {
  margin-top: 0;
  color: #007bff;
  font-size: 1.4em;
  display: flex;
  align-items: center;
  gap: 10px;
}

/* Estilo das dicas */
.tips {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin: 30px 0;
}

.tip {
  background-color: #fff3cd;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  border: 1px solid #ffeaa7;
  transition: all 0.3s ease;
}

.tip:hover {
  box-shadow: 0 6px 20px rgba(0,0,0,0.12);
  transform: translateY(-5px);
}

.tip h3 {
  margin-top: 0;
  color: #b8860b;
  font-size: 1.2em;
}

/* Fluxo de trabalho */
.workflow {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.workflow-step {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
}

.workflow-step:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

.workflow-step h4 {
  margin-top: 0;
  font-size: 1.1em;
  color: #fff;
}

/* Tabela de funcionalidades */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  background-color: white;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  border-radius: 8px;
  overflow: hidden;
}

th, td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

th {
  background-color: #007bff;
  color: white;
  font-weight: 600;
}

tr:hover {
  background-color: #f8f9fa;
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
  color: #007bff;
  padding: 12px 20px;
  border-radius: 8px;
  background-color: #f0f7ff;
  transition: all 0.3s ease;
  font-weight: 500;
}

.navigation-links a:hover {
  background-color: #007bff;
  color: white;
  transform: translateY(-2px);
}

/* Mermaid diagrams */
.mermaid {
  background-color: white;
  padding: 1.5em;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin: 2em 0;
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
  border-left: 5px solid #007bff;
  margin: 0;
  background-color: #f8f9fa;
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

/* Responsividade */
@media (max-width: 768px) {
  .tips {
    grid-template-columns: 1fr;
  }
  
  .workflow {
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
    padding: 20px;
  }
}

/* Animações suaves */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.step {
  animation: fadeIn 0.6s ease forwards;
}

.step:nth-child(even) {
  animation-delay: 0.1s;
}

.step:nth-child(odd) {
  animation-delay: 0.2s;
}

/* Código destacado */
code {
  background-color: #f1f3f4;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
}

/* Alertas e avisos */
.alert {
  padding: 15px;
  margin: 20px 0;
  border-radius: 8px;
  border-left: 4px solid #007bff;
}

.alert-warning {
  background-color: #fff3cd;
  border-left-color: #ffc107;
  color: #856404;
}

.alert-info {
  background-color: #d1ecf1;
  border-left-color: #17a2b8;
  color: #0c5460;
}

.alert-success {
  background-color: #d4edda;
  border-left-color: #28a745;
  color: #155724;
}
</style>
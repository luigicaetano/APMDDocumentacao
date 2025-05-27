---
title: Documentações APMD
---
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Homepage de Documentação - Guia Visual</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.6;
            color: #1a202c;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }

        .header {
            text-align: center;
            padding: 3rem 0;
            color: white;
            margin-bottom: 3rem;
        }

        .header h1 {
            font-size: 3.5rem;
            font-weight: 800;
            margin-bottom: 1rem;
            text-shadow: 0 4px 8px rgba(0,0,0,0.3);
            background: linear-gradient(45deg, #fff, #a0aec0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .header p {
            font-size: 1.25rem;
            opacity: 0.9;
            max-width: 600px;
            margin: 0 auto;
        }

        .content-grid {
            display: grid;
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border-radius: 20px;
            padding: 2rem;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            border: 1px solid rgba(255,255,255,0.2);
            transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
            position: relative;
            overflow: hidden;
        }

        .card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #667eea, #764ba2);
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }

        .card:hover::before {
            transform: scaleX(1);
        }

        .card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 30px 60px rgba(0,0,0,0.15);
        }

        .card-icon {
            width: 60px;
            height: 60px;
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
        }

        .card h3 {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: #2d3748;
        }

        .card p {
            color: #4a5568;
            margin-bottom: 1.5rem;
        }

        .card ul {
            list-style: none;
            margin-bottom: 1.5rem;
        }

        .card li {
            padding: 0.5rem 0;
            color: #4a5568;
            position: relative;
            padding-left: 1.5rem;
        }

        .card li::before {
            content: '→';
            position: absolute;
            left: 0;
            color: #667eea;
            font-weight: bold;
        }

        .quick-start-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin: 2rem 0;
        }

        .quick-card {
            background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
            border-radius: 15px;
            padding: 1.5rem;
            text-align: center;
            transition: all 0.3s ease;
            border: 2px solid transparent;
            cursor: pointer;
        }

        .quick-card:hover {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            transform: translateY(-5px);
            border-color: rgba(255,255,255,0.3);
        }

        .quick-card-icon {
            font-size: 2rem;
            margin-bottom: 1rem;
            display: block;
        }

        .quick-card h4 {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin: 3rem 0;
        }

        .feature-card {
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 2rem;
            text-align: center;
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
        }

        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 25px 50px rgba(0,0,0,0.15);
        }

        .feature-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 1.5rem;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
        }

        .code-example {
            background: #1a202c;
            border-radius: 15px;
            padding: 1.5rem;
            margin: 1rem 0;
            color: #e2e8f0;
            font-family: 'Fira Code', monospace;
            overflow-x: auto;
            position: relative;
        }

        .code-example::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, #667eea, #764ba2);
        }

        .highlight {
            background: linear-gradient(135deg, #667eea, #764ba2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: 700;
        }

        .section-title {
            font-size: 2.5rem;
            font-weight: 800;
            text-align: center;
            margin: 3rem 0 2rem;
            color: white;
            text-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }

        .floating-elements {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        }

        .floating-circle {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            animation: float 6s ease-in-out infinite;
        }

        .floating-circle:nth-child(1) {
            width: 100px;
            height: 100px;
            top: 20%;
            left: 10%;
            animation-delay: 0s;
        }

        .floating-circle:nth-child(2) {
            width: 150px;
            height: 150px;
            top: 60%;
            right: 10%;
            animation-delay: 2s;
        }

        .floating-circle:nth-child(3) {
            width: 80px;
            height: 80px;
            bottom: 20%;
            left: 20%;
            animation-delay: 4s;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
            margin: 2rem 0;
        }

        .stat-card {
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 1.5rem;
            text-align: center;
            border: 1px solid rgba(255,255,255,0.2);
        }

        .stat-number {
            font-size: 2.5rem;
            font-weight: 800;
            color: #667eea;
            margin-bottom: 0.5rem;
        }

        .stat-label {
            color: #4a5568;
            font-weight: 500;
        }

        @media (max-width: 768px) {
            .header h1 {
                font-size: 2.5rem;
            }
            
            .container {
                padding: 1rem;
            }
            
            .card {
                padding: 1.5rem;
            }
        }
    </style>
</head>
<body>
    <div class="floating-elements">
        <div class="floating-circle"></div>
        <div class="floating-circle"></div>
        <div class="floating-circle"></div>
    </div>

    <div class="container">
        <header class="header">
            <h1>📚 Documentação Premium</h1>
            <p>Transforme sua documentação em uma experiência excepcional para desenvolvedores e usuários</p>
        </header>

        <div class="content-grid">
            <div class="card">
                <div class="card-icon">🎯</div>
                <h3>1. Hero Section Impactante</h3>
                <p>Primeira impressão que determina o sucesso da sua documentação</p>
                <ul>
                    <li>Título claro e valor principal em destaque</li>
                    <li>Subtítulo explicativo com benefícios</li>
                    <li>CTA prominente para "Começar Agora"</li>
                    <li>Estatísticas de credibilidade (usuários, downloads)</li>
                    <li>Preview visual ou demo animado</li>
                </ul>
                <div class="code-example">
&lt;div class="hero-section"&gt;
  &lt;h1&gt;Acelere seu desenvolvimento com &lt;span class="highlight"&gt;ProjectName&lt;/span&gt;&lt;/h1&gt;
  &lt;p&gt;A solução completa para [problema específico]&lt;/p&gt;
  &lt;button class="cta-primary"&gt;Começar em 2 minutos&lt;/button&gt;
&lt;/div&gt;
                </div>
            </div>

            <div class="card">
                <div class="card-icon">⚡</div>
                <h3>2. Quick Start Inteligente</h3>
                <p>Acelere a curva de aprendizado com navegação intuitiva</p>
                <div class="quick-start-grid">
                    <div class="quick-card">
                        <span class="quick-card-icon">🚀</span>
                        <h4>Instalação</h4>
                        <p>2 min</p>
                    </div>
                    <div class="quick-card">
                        <span class="quick-card-icon">📖</span>
                        <h4>Primeiro Tutorial</h4>
                        <p>5 min</p>
                    </div>
                    <div class="quick-card">
                        <span class="quick-card-icon">🔧</span>
                        <h4>API Reference</h4>
                        <p>Consulta</p>
                    </div>
                    <div class="quick-card">
                        <span class="quick-card-icon">💡</span>
                        <h4>Exemplos</h4>
                        <p>Práticos</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-icon">🎨</div>
                <h3>3. Design System Moderno</h3>
                <p>Elementos visuais que criam uma experiência premium</p>
                <ul>
                    <li>Gradientes sutis e glassmorphism</li>
                    <li>Micro-animações e hover effects</li>
                    <li>Iconografia consistente e significativa</li>
                    <li>Tipografia hierárquica clara</li>
                    <li>Sistema de cores semântico</li>
                    <li>Componentes interativos responsivos</li>
                </ul>
            </div>
        </div>

        <h2 class="section-title">🌟 Recursos Avançados</h2>

        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">🔍</div>
                <h3>Busca Inteligente</h3>
                <p>Algoritmo de busca com autocompletar, filtros por categoria e resultados instantâneos</p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🎮</div>
                <h3>Playground Interativo</h3>
                <p>Sandbox integrado para testar código em tempo real sem sair da documentação</p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">📱</div>
                <h3>Mobile-First</h3>
                <p>Design responsivo otimizado para todas as telas, com navegação touch-friendly</p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🌙</div>
                <h3>Modo Escuro</h3>
                <p>Toggle automático baseado nas preferências do sistema com transições suaves</p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">📊</div>
                <h3>Analytics Integrado</h3>
                <p>Métricas de uso para otimizar conteúdo baseado no comportamento real dos usuários</p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🔗</div>
                <h3>Linking Inteligente</h3>
                <p>Referências cruzadas automáticas, âncoras profundas e navegação contextual</p>
            </div>
        </div>

        <div class="card">
            <div class="card-icon">📈</div>
            <h3>4. Métricas de Credibilidade</h3>
            <p>Dados que constroem confiança instantânea</p>
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-number">50k+</div>
                    <div class="stat-label">Desenvolvedores</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">99.9%</div>
                    <div class="stat-label">Uptime</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">2.5M</div>
                    <div class="stat-label">API Calls/mês</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">24/7</div>
                    <div class="stat-label">Suporte</div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-icon">🛠️</div>
            <h3>5. Implementação Técnica</h3>
            <p>Stack moderno para performance e manutenibilidade</p>
            <ul>
                <li><strong>Framework:</strong> Docsy + Hugo para velocidade</li>
                <li><strong>Busca:</strong> Algolia ou Lunr.js integrado</li>
                <li><strong>Animações:</strong> Framer Motion ou CSS custom</li>
                <li><strong>Componentes:</strong> Sistema modular reutilizável</li>
                <li><strong>Deploy:</strong> Netlify/Vercel com CDN global</li>
                <li><strong>Analytics:</strong> Mixpanel para insights avançados</li>
            </ul>
            <div class="code-example">
// Exemplo de componente quick-start interativo
const QuickStartCard = ({ icon, title, time, href }) => (
  &lt;a href={href} className="quick-card group"&gt;
    &lt;span className="quick-card-icon group-hover:scale-110"&gt;{icon}&lt;/span&gt;
    &lt;h4&gt;{title}&lt;/h4&gt;
    &lt;p&gt;{time}&lt;/p&gt;
  &lt;/a&gt;
);
            </div>
        </div>

        <div class="card">
            <div class="card-icon">🎯</div>
            <h3>6. Estratégia de Conteúdo</h3>
            <p>Estrutura otimizada para diferentes perfis de usuário</p>
            <ul>
                <li><strong>Novatos:</strong> Tutorial step-by-step com validação</li>
                <li><strong>Experientes:</strong> Reference rápida e exemplos</li>
                <li><strong>Integradores:</strong> SDKs, webhooks e guias técnicos</li>
                <li><strong>Decisores:</strong> Cases, ROI e comparativos</li>
                <li><strong>Comunidade:</strong> Contribuições, discussões e feedback</li>
            </ul>
        </div>
    </div>

    <script>
        // Adiciona interatividade aos cards
        document.querySelectorAll('.quick-card').forEach(card => {
            card.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });

        // Animação de scroll suave para elementos
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.card, .feature-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
    </script>
</body>
</html>

---
title: Documentações APMD
description: Centro de documentação técnica para automações e desenvolvimento de aplicativos
---
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Documentações APMD</title>
    <meta name="description" content="Centro de documentação técnica para automações e desenvolvimento de aplicativos">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary: #2563eb;
            --primary-dark: #1d4ed8;
            --secondary: #64748b;
            --accent: #0ea5e9;
            --bg-primary: #0f172a;
            --bg-secondary: #1e293b;
            --bg-card: #334155;
            --text-primary: #f8fafc;
            --text-secondary: #cbd5e1;
            --text-muted: #94a3b8;
            --border: #475569;
            --gradient: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
        }

        body {
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
            background: var(--gradient);
            color: var(--text-primary);
            line-height: 1.6;
            min-height: 100vh;
            overflow-x: hidden;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        /* Header */
        .header {
            background: rgba(15, 23, 42, 0.9);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--border);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--text-primary);
            text-decoration: none;
            position: relative;
        }

        .logo::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, var(--primary), var(--accent));
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }

        .logo:hover::after {
            transform: scaleX(1);
        }

        /* Hero Section */
        .hero {
            padding: 4rem 0;
            text-align: center;
            position: relative;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            width: 100px;
            height: 100px;
            background: radial-gradient(circle, var(--primary) 0%, transparent 70%);
            transform: translateX(-50%);
            opacity: 0.3;
            animation: pulse 4s ease-in-out infinite;
        }

        @keyframes pulse {
            0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.3; }
            50% { transform: translateX(-50%) scale(1.2); opacity: 0.1; }
        }

        .hero-title {
            font-size: 3rem;
            font-weight: 800;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, var(--text-primary), var(--accent));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .hero-subtitle {
            font-size: 1.25rem;
            color: var(--text-secondary);
            margin-bottom: 1rem;
            font-weight: 500;
        }

        .hero-description {
            font-size: 1.1rem;
            color: var(--text-muted);
            max-width: 600px;
            margin: 0 auto;
        }

        /* Main Content */
        .main-content {
            padding: 4rem 0;
        }

        .section {
            margin-bottom: 4rem;
        }

        .section-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 2rem;
            color: var(--text-primary);
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .section-title::before {
            content: '';
            width: 4px;
            height: 2rem;
            background: linear-gradient(135deg, var(--primary), var(--accent));
            border-radius: 2px;
        }

        /* Cards Grid */
        .cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .card {
            background: rgba(51, 65, 85, 0.5);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 2rem;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, var(--accent), transparent);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .card:hover {
            transform: translateY(-5px);
            border-color: var(--accent);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .card:hover::before {
            opacity: 1;
        }

        .card-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;
        }

        .card-icon {
            width: 3rem;
            height: 3rem;
            background: linear-gradient(135deg, var(--primary), var(--accent));
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
        }

        .card-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--text-primary);
        }

        .card-description {
            color: var(--text-secondary);
            line-height: 1.6;
        }

        .card-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--accent);
            text-decoration: none;
            font-weight: 500;
            margin-top: 1rem;
            transition: color 0.3s ease;
        }

        .card-link:hover {
            color: var(--text-primary);
        }

        /* Features List */
        .features-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin: 2rem 0;
        }

        .feature-item {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
            padding: 1.5rem;
            background: rgba(51, 65, 85, 0.3);
            border-radius: 8px;
            border: 1px solid rgba(71, 85, 105, 0.5);
            transition: all 0.3s ease;
        }

        .feature-item:hover {
            background: rgba(51, 65, 85, 0.5);
            border-color: var(--border);
        }

        .feature-icon {
            width: 2.5rem;
            height: 2.5rem;
            background: linear-gradient(135deg, var(--primary), var(--accent));
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            font-size: 1.2rem;
        }

        .feature-content h4 {
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 0.5rem;
        }

        .feature-content p {
            color: var(--text-secondary);
            font-size: 0.95rem;
        }

        /* Collaboration Section */
        .collaboration {
            background: rgba(51, 65, 85, 0.3);
            border-radius: 16px;
            padding: 3rem;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .collaboration::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 50%);
            animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        .collaboration-content {
            position: relative;
            z-index: 1;
        }

        .collaboration h3 {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 1rem;
        }

        .collaboration p {
            color: var(--text-secondary);
            margin-bottom: 2rem;
        }

        .benefits {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin-top: 2rem;
        }

        .benefit {
            padding: 1rem;
            background: rgba(15, 23, 42, 0.5);
            border-radius: 8px;
            border: 1px solid rgba(71, 85, 105, 0.3);
        }

        .benefit h4 {
            color: var(--accent);
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        /* Footer */
        .footer {
            padding: 3rem 0;
            border-top: 1px solid var(--border);
            background: rgba(15, 23, 42, 0.8);
            text-align: center;
        }

        .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
        }

        .update-badge {
            background: linear-gradient(135deg, var(--primary), var(--accent));
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 6px;
            font-size: 0.9rem;
            font-weight: 500;
        }

        .footer-text {
            color: var(--text-muted);
            font-size: 0.9rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .hero-title {
                font-size: 2rem;
            }
            
            .hero-subtitle {
                font-size: 1.1rem;
            }
            
            .container {
                padding: 0 1rem;
            }
            
            .cards-grid {
                grid-template-columns: 1fr;
            }
            
            .collaboration {
                padding: 2rem;
            }
            
            .footer-content {
                flex-direction: column;
                text-align: center;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="header-content">
                <a href="#" class="logo">APMD Docs</a>
                <div class="update-badge">Atualizado</div>
            </div>
        </div>
    </header>

    <main>
        <section class="hero">
            <div class="container">
                <h1 class="hero-title">Bem-vindo à Documentação da APMD</h1>
                <p class="hero-subtitle">Seu hub central de conhecimento técnico</p>
                <p class="hero-description">
                    Aqui você encontrará documentações completas de todos os nossos processos de automação, 
                    guias de desenvolvimento de aplicativos e melhores práticas da nossa equipe.
                </p>
            </div>
        </section>

        <div class="container">
            <div class="main-content">
                <section class="section">
                    <h2 class="section-title">Navegue pela Documentação</h2>
                    
                    <div class="cards-grid">
                        <div class="card">
                            <div class="card-header">
                                <div class="card-icon">📋</div>
                                <h3 class="card-title">Planejamento Integrado</h3>
                            </div>
                            <p class="card-description">
                                Metodologias, frameworks e processos de planejamento para projetos de automação e desenvolvimento.
                            </p>
                            <a href="../docs/planejamento-integrado/_index.md/" class="card-link">
                                Acessar documentação →
                            </a>
                        </div>
                    </div>
                </section>

                <section class="section">
                    <h2 class="section-title">O que você encontrará aqui?</h2>
                    
                    <div class="features-list">
                        <div class="feature-item">
                            <div class="feature-icon">📖</div>
                            <div class="feature-content">
                                <h4>Documentações Técnicas</h4>
                                <p>Guias detalhados para implementação</p>
                            </div>
                        </div>
                        
                        <div class="feature-item">
                            <div class="feature-icon">🔄</div>
                            <div class="feature-content">
                                <h4>Processos de Automação</h4>
                                <p>Fluxos e metodologias testadas</p>
                            </div>
                        </div>
                        
                        <div class="feature-item">
                            <div class="feature-icon">📱</div>
                            <div class="feature-content">
                                <h4>Desenvolvimento de Apps</h4>
                                <p>Do conceito à publicação</p>
                            </div>
                        </div>
                        
                        <div class="feature-item">
                            <div class="feature-icon">💡</div>
                            <div class="feature-content">
                                <h4>Melhores Práticas</h4>
                                <p>Padrões e convenções da equipe</p>
                            </div>
                        </div>
                        
                        <div class="feature-item">
                            <div class="feature-icon">🛠️</div>
                            <div class="feature-content">
                                <h4>Ferramentas e Recursos</h4>
                                <p>Stack tecnológico e utilitários</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="section">
                    <div class="collaboration">
                        <div class="collaboration-content">
                            <h3>Colaboração Ativa</h3>
                            <p>Nossa equipe trabalha colaborativamente para manter a documentação sempre atualizada e útil.</p>
                            
                            <div class="benefits">
                                <div class="benefit">
                                    <h4>Conhecimento compartilhado</h4>
                                </div>
                                <div class="benefit">
                                    <h4>Atualizações constantes</h4>
                                </div>
                                <div class="benefit">
                                    <h4>Suporte técnico</h4>
                                </div>
                                <div class="benefit">
                                    <h4>Comunidade ativa</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <p class="footer-text">
                    <strong>💡 Dica:</strong> Esta documentação é mantida atualizada pela nossa equipe. 
                    Para sugestões ou correções, <a href="../contribuir/" style="color: var(--accent);">abra uma issue</a>.
                </p>
                <p class="footer-text">Mantido por: Equipe APMD</p>
            </div>
        </div>
    </footer>
</body>
</html>
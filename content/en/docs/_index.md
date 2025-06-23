---
title: Documentações APMD
description: Centro de documentação técnica para automações e desenvolvimento de aplicativos
---
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Documentações APMD</title>
  <meta name="description" content="Centro de documentação técnica para automações e desenvolvimento de aplicativos" />
  <script src="https://unpkg.com/lucide@latest" defer></script>
</head>
<body>
  
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
    <section class="container">
      <h2 class="section-title">Navegue pela Documentação</h2>
      <div class="cards-grid">
        <div class="card">
          <h3 class="card-title">Planejamento Integrado</h3>
          <p class="card-description">
            Metodologias, frameworks e processos de planejamento para projetos de automação e desenvolvimento.
          </p>
          <a href="../docs/planejamento-integrado/_index.md/" class="card-link">Acessar documentação →</a>
        </div>
      </div>
    </section>
    <section class="container">
      <h2 class="section-title">O que você encontrará aqui</h2>
      <div class="features-list">
        <div class="feature-item">
          <div data-lucide="book-open" class="feature-icon"></div>
          <h4>Documentações Técnicas</h4>
          <p>Guias detalhados para implementação</p>
        </div>
        <div class="feature-item">
          <div data-lucide="refresh-cw" class="feature-icon"></div>
          <h4>Processos de Automação</h4>
          <p>Fluxos e metodologias testadas</p>
        </div>
        <div class="feature-item">
          <div data-lucide="smartphone" class="feature-icon"></div>
          <h4>Desenvolvimento de Apps</h4>
          <p>Do conceito à publicação</p>
        </div>
        <div class="feature-item">
          <div data-lucide="lightbulb" class="feature-icon"></div>
          <h4>Melhores Práticas</h4>
          <p>Padrões e convenções da equipe</p>
        </div>
        <div class="feature-item">
          <div data-lucide="tools" class="feature-icon"></div>
          <h4>Ferramentas e Recursos</h4>
          <p>Stack tecnológico e utilitários</p>
        </div>
      </div>
    </section>
    <section class="container collaboration">
      <h3>Colaboração Ativa</h3>
      <p>Nossa equipe trabalha colaborativamente para manter a documentação sempre atualizada e útil.</p>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <p><strong>Dica:</strong> Esta documentação é mantida pela equipe APMD. Para sugestões ou correções, <a href="../contribuir/">abra uma issue</a>.</p>
      <p>Mantido por: Equipe APMD</p>
    </div>
  </footer>

  <script>
    lucide.createIcons();
  </script>

  <style>
    :root {
      --primary: #6b7280;
      --accent: #9ca3af;
      --bg: #f8fafc;
      --text: #1a1a1a;
      --text-secondary: #4a5568;
      --border: #e2e8f0;
      --card-bg: #ffffff;
      --header-bg: #ffffff;
      --gray-light: #f3f4f6;
      --gray-medium: #9ca3af;
      --gray-dark: #4b5563;
      --beige: #f5f5dc;
      --cream: #faf9f6;
      --warm-gray: #a8a29e;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', system-ui, sans-serif;
      background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 25%, #e2e8f0 50%, #cbd5e1 75%, #f3f4f6 100%);
      background-size: 400% 400%;
      animation: gradientShift 20s ease infinite;
      color: var(--text);
      line-height: 1.6;
      min-height: 100vh;
    }

    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .container {
      background: rgba(255, 255, 255, 0.7);
      border-radius: 12px;
      padding: 2rem;
      backdrop-filter: blur(10px);
      border: 1px solid var(--border);
    }

    .header {
      background: rgba(255, 255, 255, 0.95);
      border-bottom: 1px solid var(--border);
      position: sticky;
      top: 0;
      z-index: 10;
      backdrop-filter: blur(10px);
      padding: 0 2rem;
    }

    .header-content {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 1rem 0;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      text-decoration: none;
      color: var(--text);
      position: relative;
    }

    .logo::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -3px;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, var(--primary), var(--accent));
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    .logo:hover::after {
      transform: scaleX(1);
    }

    .update-badge {
      background: linear-gradient(135deg, var(--gray-medium), var(--gray-dark));
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 25px;
      font-size: 0.8rem;
      font-weight: 600;
      box-shadow: 0 4px 15px rgba(107, 114, 128, 0.2);
      animation: pulse 3s infinite;
    }

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.03); }
      100% { transform: scale(1); }
    }

    .hero {
      text-align: center;
      padding: 4rem 2rem;
    }

    .hero-title {
      font-size: 3rem;
      font-weight: 800;
      background: linear-gradient(135deg, var(--text), var(--gray-dark));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 1rem;
      animation: titleGlow 4s ease-in-out infinite alternate;
    }

    @keyframes titleGlow {
      from { filter: drop-shadow(0 0 5px rgba(75, 85, 99, 0.3)); }
      to { filter: drop-shadow(0 0 10px rgba(107, 114, 128, 0.4)); }
    }

    .hero-subtitle {
      font-size: 1.25rem;
      color: var(--text-secondary);
      margin-bottom: 1rem;
      font-weight: 500;
    }

    .hero-description {
      font-size: 1.1rem;
      color: var(--text-secondary);
      max-width: 600px;
      margin: 0 auto;
    }

    .section-title {
      font-size: 2rem;
      font-weight: 700;
      margin: 3rem 0 1.5rem;
      color: var(--text);
    }

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .card {
      background: var(--card-bg);
      border: 2px solid transparent;
      background-clip: padding-box;
      border-radius: 12px;
      padding: 2rem;
      transition: all 0.3s ease;
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
      position: relative;
      overflow: hidden;
    }

    .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 12px;
      padding: 2px;
      background: var(--gradient-3);
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: exclude;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .card:hover::before {
      opacity: 1;
    }

    .card:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 15px 35px rgba(75, 172, 254, 0.2);
    }

    .card-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text);
      margin-bottom: 0.5rem;
    }

    .card-description {
      color: var(--text-secondary);
      margin-bottom: 1rem;
    }

    .card-link {
      display: inline-block;
      margin-top: 1rem;
      color: var(--accent);
      text-decoration: none;
      font-weight: 500;
    }

    .card-link:hover {
      text-decoration: underline;
    }

    .features-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .feature-item {
      background: var(--card-bg);
      border-radius: 12px;
      padding: 1.5rem;
      border: 1px solid var(--border);
      box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .feature-item:nth-child(1) { border-left: 4px solid var(--gray-dark); }
    .feature-item:nth-child(2) { border-left: 4px solid var(--gray-medium); }
    .feature-item:nth-child(3) { border-left: 4px solid var(--warm-gray); }
    .feature-item:nth-child(4) { border-left: 4px solid var(--primary); }
    .feature-item:nth-child(5) { border-left: 4px solid var(--accent); }

    .feature-item::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
      transform: translateX(-100%);
      transition: transform 0.6s ease;
    }

    .feature-item:hover::before {
      transform: translateX(100%);
    }

    .feature-item:hover {
      transform: translateY(-5px) scale(1.05);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    }

    .feature-item h4 {
      color: var(--text);
      margin-bottom: 0.5rem;
      font-weight: 600;
    }

    .feature-item p {
      color: var(--text-secondary);
    }

    .feature-icon {
      width: 24px;
      height: 24px;
      margin-bottom: 0.5rem;
      color: var(--primary);
    }

    .collaboration {
      margin-top: 4rem;
      padding: 3rem;
      text-align: center;
      background: linear-gradient(135deg, var(--cream), var(--beige));
      border-radius: 20px;
      border: 1px solid var(--border);
      box-shadow: 0 8px 30px rgba(168, 162, 158, 0.15);
      color: var(--text);
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
      background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
      animation: rotate 25s linear infinite;
    }

    @keyframes rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .collaboration h3, .collaboration p {
      position: relative;
      z-index: 1;
    }

    .collaboration h3 {
      color: var(--text);
      margin-bottom: 1rem;
      font-size: 1.5rem;
      text-shadow: none;
    }

    .collaboration p {
      color: var(--text-secondary);
      text-shadow: none;
    }

    .footer {
      margin-top: 4rem;
      padding: 2rem 0;
      text-align: center;
      font-size: 0.9rem;
      border-top: 1px solid var(--border);
      color: var(--text-secondary);
    }

    .footer a {
      color: var(--accent);
      text-decoration: none;
    }

    .footer a:hover {
      text-decoration: underline;
    }

    .footer strong {
      color: var(--text);
    }
  </style>
</body>
</html>
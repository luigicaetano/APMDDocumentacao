---
title: Documentações APMD
description: Centro de documentação técnica para automações e desenvolvimento de aplicativos
---
</style>
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
            Processos de planejamento para projetos de automação e desenvolvimento.
          </p>
          <a href="../docs/planejamento-integrado/" class="card-link">Acessar documentação →</a>
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
          <p>Utilitários que facilitam o trabalho diário</p>
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
</body>
</html>

   <style>
    :root {
      --primary: #6b7280;
      --accent: #9ca3af;
      --bg: #f8fafc;
      --text: #1a1a1a;
      --text-secondary: #4a5568;
      --border: #e2e8f0;
      --card-bg: #ffffff;
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
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    .container {
      background: rgba(255, 255, 255, 0.7);
      border-radius: 12px;
      padding: 2rem;
      margin: 2rem auto;
      max-width: 1100px;
      backdrop-filter: blur(10px);
      border: 1px solid var(--border);
    }

    .hero {
      text-align: center;
      padding: 4rem 2rem;
      margin-bottom: 2rem;
    }

    .hero-title {
      font-size: 3rem;
      font-weight: 800;
      color: #1f2937;
      text-shadow: 0 1px 2px rgba(0,0,0,0.05);
    }

    .hero-subtitle {
      font-size: 1.25rem;
      color: var(--text-secondary);
      margin: 1rem 0;
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
      margin-bottom: 1.5rem;
      color: var(--text);
    }

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .card {
      background: var(--card-bg);
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
      transition: transform 0.3s ease;
    }

    .card:hover {
      transform: translateY(-5px);
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
      color: var(--accent);
      font-weight: 500;
      text-decoration: none;
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
    }

    .feature-item:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }

    .feature-icon {
      width: 24px;
      height: 24px;
      margin-bottom: 0.5rem;
      color: var(--primary);
    }

    .feature-item h4 {
      margin-bottom: 0.3rem;
      font-size: 1.1rem;
      font-weight: 600;
    }

    .feature-item p {
      font-size: 0.95rem;
      color: var(--text-secondary);
    }

    .collaboration {
      margin-top: 6rem;
      padding: 3rem;
      text-align: center;
      background: linear-gradient(135deg, var(--cream), var(--beige));
      border-radius: 20px;
      border: 1px solid var(--border);
      box-shadow: 0 8px 30px rgba(168, 162, 158, 0.15);
    }

    .footer {
      margin-top: 6rem;
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
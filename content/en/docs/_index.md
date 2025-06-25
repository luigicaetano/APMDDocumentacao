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
  --primary: #2563eb;
  --accent: #3b82f6;
  --bg: #f9fafb;
  --text: #111827;
  --text-secondary: #6b7280;
  --border: #e5e7eb;
  --card-bg: #ffffff;
  --light-blue: #eff6ff;
  --gray: #f3f4f6;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #dbeafe, #ffffff);
  border-bottom: 1px solid var(--border);
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  color: var(--primary);
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-top: 1rem;
}

.hero-description {
  max-width: 600px;
  margin: 1.5rem auto 0;
  font-size: 1.1rem;
  color: var(--text-secondary);
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.card {
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--primary);
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
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-item {
  background: var(--light-blue);
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.feature-item:hover {
  background: #dbeafe;
  transform: scale(1.02);
}

.feature-icon {
  width: 32px;
  height: 32px;
  margin: 0 auto 1rem;
  color: var(--primary);
}

.feature-item h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 0.5rem;
}

.feature-item p {
  font-size: 0.95rem;
  color: var(--text-secondary);
}

.collaboration {
  text-align: center;
  margin: 4rem auto;
  padding: 3rem;
  background: #fef3c7;
  border-radius: 1rem;
  border: 1px solid var(--border);
  font-size: 1rem;
  color: #78350f;
}

.footer {
  text-align: center;
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-top: 4rem;
  padding: 2rem;
  border-top: 1px solid var(--border);
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
<style>
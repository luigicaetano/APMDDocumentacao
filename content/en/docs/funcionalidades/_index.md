---
title: ⚙️ Funcionalidades Gerais
date: 2025-06-11
description: >
  Repositório de funcionalidades reutilizáveis implementadas nos aplicativos da SEDESE, com tutoriais práticos e exemplos de aplicação.
categories: [Tecnologia, Power Platform]
tags: [PowerApps, Funcionalidades, Componentes Reutilizáveis]
---

<div class="hero-banner">
  <div class="hero-content">
    <h1 class="hero-title"> Funcionalidades dos Apps</h1>
    <p class="hero-subtitle">Acelere seu desenvolvimento com componentes reutilizáveis e tutoriais práticos</p>
    <div class="hero-badges">
      <span class="badge badge-primary">Power Platform</span>
      <span class="badge badge-secondary">Componentes</span>
      <span class="badge badge-accent">Reutilizáveis</span>
    </div>
  </div>
  <div class="hero-visual">
    <div class="floating-card">
      <div class="card-mini">
        <div class="pulse-dot"></div>
      </div>
    </div>
  </div>
</div>
<div class="info-dashboard">
  <div class="dashboard-grid">
    <div class="info-card gradient-blue">
      <div class="info-header">
        <div class="info-icon">👩‍💻</div>
        <h3>Colaboradores</h3>
      </div>
      <p class="info-value">Equipe APMD</p>
    </div>
    <div class="info-card gradient-blue">
      <div class="info-header">
        <div class="info-icon">🧰</div>
        <h3>Ferramentas</h3>
      </div>
      <p class="info-value">PowerApps • Power Automate • SharePoint</p>
    </div>
    <div class="info-card gradient-blue">
      <div class="info-header">
        <div class="info-icon">📁</div>
        <h3>Categoria</h3>
      </div>
      <p class="info-value">Componentes e Funcionalidades</p>
    </div>
    <div class="info-card gradient-blue">
      <div class="info-header">
        <div class="info-icon">🗓️</div>
        <h3>Última Atualização</h3>
      </div>
      <p class="info-value">11 de Junho, 2025</p>
    </div>
  </div>
</div>

## 💡 Sobre Esta Seção

<div class="about-container">
  <div class="about-content">
    <p class="lead-text">Esta seção é seu arsenal de desenvolvimento para o Power Apps. Aqui você encontra funcionalidades modulares, testadas e prontas para implementação.</p>
    <div class="benefits-grid">
      <div class="benefit-item">
        <div class="benefit-text">
          <h4>Desenvolvimento Acelerado</h4>
          <p>Ações comuns que se repetem entre aplicativos</p>
        </div>
      </div>
      <div class="benefit-item">
        <div class="benefit-text">
          <h4>Código Reutilizável</h4>
          <p>Expressões úteis de PowerApps e Power Automate</p>
        </div>
      </div>
      <div class="benefit-item">
        <div class="benefit-text">
          <h4>Padrões Consistentes</h4>
          <p>Garantia de uniformidade entre projetos</p>
        </div>
      </div>
    </div>
  </div>
</div>



</div>

## 📖 Estrutura dos Tutoriais

<div class="tutorial-structure">
  <div class="structure-item">
    <div class="structure-number">1</div>
    <div class="structure-content">
      <h4>✅ Objetivo Claro</h4>
      <p>Explicação detalhada sobre a ação da funcionalidade</p>
    </div>
  </div>
  
  <div class="structure-item">
    <div class="structure-number">2</div>
    <div class="structure-content">
      <h4>💡 Código Pronto</h4>
      <p>Trechos de código testados para copy-paste</p>
    </div>
  </div>
  
  <div class="structure-item">
    <div class="structure-number">3</div>
    <div class="structure-content">
      <h4>🧩 Boas Práticas</h4>
      <p>Recomendações de implementação e casos de uso ideais</p>
    </div>
  </div>
  




<style>
/* Hero Section */
.hero-banner {
  background: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%);
  color: white;
  padding: 4rem 2rem;
  border-radius: 20px;
  margin: 2rem 0;
  position: relative;
  overflow: hidden;
}

.hero-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.1"><circle cx="30" cy="30" r="2"/></g></svg>') repeat;
  opacity: 0.3;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.hero-subtitle {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  font-weight: 300;
}

.hero-badges {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.badge {
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
}

.badge-primary { background: rgba(255,255,255,0.2); }
.badge-secondary { background: rgba(255,255,255,0.15); }
.badge-accent { background: rgba(255,255,255,0.1); }

/* Info Dashboard */
.info-dashboard {
  margin: 3rem 0;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.info-card {
  padding: 2rem;
  border-radius: 16px;
  color: inherit;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
}

.info-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
  pointer-events: none;
}

..gradient-blue { 
  background: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%); 
}
.gradient-purple { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
.gradient-green { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
.gradient-orange { background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); }

.info-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.info-header h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.info-icon {
  font-size: 1.5rem;
}

.info-value {
  font-size: 1rem;
  font-weight: 300;
  opacity: 0.9;
  margin: 0;
}

/* About Section */
.about-container {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 3rem;
  border-radius: 20px;
  margin: 3rem 0;
}

.lead-text {
  font-size: 1.3rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  text-align: center;
  color: #2d3748;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

.benefit-icon {
  background: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.benefit-text h4 {
  margin: 0 0 0.5rem 0;
  color: #2d3748;
  font-size: 1.1rem;
}

.benefit-text p {
  margin: 0;
  color: #718096;
  line-height: 1.5;
}

/* Features Showcase */
.features-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.feature-card {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-card:hover {
  border-color: #667eea;
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(102, 126, 234, 0.15);
}

.feature-card.featured {
  border-color: #667eea;
  background: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%);
  color: white;
}

.feature-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.feature-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
}

.feature-icon.primary {background: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%);}
.feature-icon.secondary { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
.feature-icon.accent { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
.feature-icon.success { background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); }

.feature-status {
  background: rgba(255,255,255,0.2);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

.feature-card:not(.featured) .feature-status {
  background: #667eea;
}

.feature-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.feature-card p {
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.feature-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background: rgba(255,255,255,0.2);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.feature-card:not(.featured) .tag {
  background: #e2e8f0;
  color: #4a5568;
}

/* Tutorial Structure */
.tutorial-structure {
  background: #f7fafc;
  padding: 3rem;
  border-radius: 20px;
  margin: 3rem 0;
}

.structure-item {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.structure-number {
  background: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.structure-content h4 {
  margin: 0 0 0.5rem 0;
  color: #2d3748;
}

.structure-content p {
  margin: 0;
  color: #718096;
  line-height: 1.5;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%);
  color: white;
  padding: 4rem 2rem;
  border-radius: 20px;
  text-align: center;
  margin: 3rem 0;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-text h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.cta-text p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  line-height: 1.6;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.btn-primary {
  background: white;
  color: #667eea;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255,255,255,0.3);
}

.btn-secondary {
  background: transparent;
  color: white;
  border-color: rgba(255,255,255,0.3);
}

.btn-secondary:hover {
  background: rgba(255,255,255,0.1);
  border-color: white;
}

.btn-icon {
  font-size: 1.1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
  
  .features-showcase {
    grid-template-columns: 1fr;
  }
  
  .benefits-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}

/* Animations */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: #48bb78;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.floating-card {
  position: absolute;
  top: 2rem;
  right: 2rem;
  opacity: 0.7;
}

.card-mini {
  background: rgba(255,255,255,0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
}

@media (max-width: 768px) {
  .floating-card {
    display: none;
  }
}
</style>
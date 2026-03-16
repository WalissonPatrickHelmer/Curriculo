/* =========================================
   1. Variáveis de Tema e Reset
   ========================================= */
:root {
    /* Tema Escuro (Padrão) */
    --bg-body: #0a0a0c;
    --bg-card: #14141a;
    --text-main: #ffffff;
    --text-muted: #94a3b8;
    --emerald: #10b981;
    --border: rgba(255, 255, 255, 0.1);
    --nav-bg: #0a0a0c;
}

body.light-theme {
    /* Tema Claro */
    --bg-body: #f8fafc;
    --bg-card: #ffffff;
    --text-main: #1e293b;
    --text-muted: #475569;
    --emerald: #059669;
    --border: rgba(0, 0, 0, 0.1);
    --nav-bg: #f8fafc;
}

* {
    margin: 0;
    padding: 0;
    box-shadow: none;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-body);
    color: var(--text-main);
    transition: background 0.3s, color 0.3s;
    line-height: 1.6;
}

/* =========================================
   2. Layout Utilitários
   ========================================= */
.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
}

.container.small { max-width: 800px; }
.text-center { text-align: center; }

section { padding: 80px 0; }
.section-dark { background: var(--bg-card); }

.section-title {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 40px;
}

.section-title h2 { font-size: 1.8rem; font-weight: 700; color: var(--text-main); }
.section-title i { font-size: 1.8rem; }
.justify-center { justify-content: center; }

body.light-theme .section-title h2 { color: #000000 !important; }

/* =========================================
   3. Navegação
   ========================================= */
#navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    background: var(--nav-bg);
    border-bottom: 1px solid var(--border);
    height: 70px;
    display: flex;
    align-items: center;
}

.nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.logo { font-weight: 900; font-size: 1.5rem; color: var(--text-main); }
.logo span { color: var(--emerald); }

.nav-links { list-style: none; display: flex; gap: 2rem; }
.nav-links a { text-decoration: none; color: var(--text-muted); font-weight: 500; transition: color 0.2s; }
.nav-links a:hover { color: var(--emerald); }

/* =========================================
   4. Controles de Tema
   ========================================= */
.theme-controls {
    position: fixed;
    top: 90px;
    right: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 1001;
}

.control-btn {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid var(--border);
    background: var(--bg-card);
    color: var(--text-main);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
}

/* =========================================
   5. Hero Section
   ========================================= */
.hero { padding: 150px 0 80px; text-align: center; }
.badge { display: inline-block; padding: 5px 15px; border: 1px solid var(--emerald); color: var(--emerald); border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-bottom: 20px; }
.hero h1 { font-size: 3.5rem; margin-bottom: 20px; font-weight: 900; }
.hero p { font-size: 1.2rem; max-width: 600px; margin: 0 auto 30px; }

.btn-primary { background: var(--emerald); color: white; padding: 12px 25px; border-radius: 8px; text-decoration: none; font-weight: 700; display: inline-flex; align-items: center; gap: 10px; border: none; cursor: pointer; }
.btn-secondary { background: var(--bg-card); border: 1px solid var(--border); color: var(--text-main); padding: 12px 25px; border-radius: 8px; text-decoration: none; font-weight: 700; display: inline-flex; align-items: center; gap: 10px; cursor: pointer; }

body.light-theme .btn-github { background-color: #000000 !important; color: #ffffff !important; border: none; }

/* =========================================
   6. Habilidades (Tags originais)
   ========================================= */
.tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 15px; justify-content: center; }
.tags span { background: rgba(16, 185, 129, 0.1); color: var(--emerald); padding: 4px 10px; border-radius: 4px; font-size: 0.8rem; }

/* =========================================
   7. Formação Acadêmica (Cartões Destacados)
   ========================================= */
.edu-wrapper {
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: center;
    margin-top: 30px;
}

.edu-card-highlight {
    background: var(--bg-card);
    border-left: 4px solid var(--emerald);
    padding: 35px;
    border-radius: 12px;
    width: 100%;
    max-width: 700px;
    text-align: center;
    transition: transform 0.3s ease;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

.edu-card-highlight:hover { transform: scale(1.02); }

.edu-card-highlight h3 {
    color: var(--emerald);
    font-size: 1.5rem;
    margin-bottom: 12px;
    font-weight: 700;
}

.edu-card-highlight .school {
    font-weight: 700;
    font-size: 1.1rem;
    margin-bottom: 8px;
    color: var(--text-main);
}

.edu-card-highlight .date {
    color: var(--text-muted);
    font-size: 0.95rem;
    display: block;
}

body.light-theme .edu-card-highlight .school { color: #000000 !important; }

/* =========================================
   8. Projetos (Grid 4xN e Botões Bottom)
   ========================================= */
.projects-grid { 
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
    gap: 25px; 
    margin-top: 40px; 
}

/* Card de Projeto com alinhamento flexível */
.project-card { 
    background: var(--bg-card); 
    border: 1px solid var(--border); 
    padding: 25px; 
    border-radius: 12px; 
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: space-between; /* Garante que o botão fique no fundo */
    min-height: 300px; /* Altura mínima uniforme */
    transition: transform 0.3s ease, border-color 0.3s ease;
}

.project-card:hover { transform: translateY(-5px); border-color: var(--emerald); }

.project-card h3 { font-size: 1.25rem; font-weight: 700; margin-bottom: 10px; }
.project-card p { color: var(--text-muted); font-size: 0.95rem; flex-grow: 1; /* Ocupa o espaço livre */ }

/* Botão de Acesso do Projeto */
.btn-project {
    display: inline-block;
    margin-top: auto; /* Empurra o botão para a base */
    padding: 10px 25px;
    border: 1px solid var(--emerald);
    color: var(--emerald);
    text-decoration: none;
    border-radius: 6px;
    font-weight: 700;
    font-size: 0.9rem;
    transition: all 0.3s;
    width: fit-content;
}

.btn-project:hover {
    background: var(--emerald);
    color: white;
}

/* =========================================
   9. Experiência e Timeline
   ========================================= */
.timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
}

.timeline-item {
    background: var(--bg-card);
    border: 1px solid var(--border);
    padding: 25px;
    border-radius: 12px;
    margin-bottom: 20px;
}

.time-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;}
.timeline-item h3 { font-size: 1.2rem; font-weight: 700; color: var(--text-main); }
.timeline-item .role { font-weight: 700; color: var(--emerald); margin-bottom: 5px; }
.timeline-item .desc { color: var(--text-muted); font-size: 0.95rem; }

body.light-theme .timeline-item h3 { color: #000000 !important; }

/* =========================================
   10. Rodapé e Contato
   ========================================= */
footer { padding: 80px 0; background: var(--bg-card); border-top: 1px solid var(--border); }
.contact-links { display: flex; justify-content: center; gap: 20px; margin: 40px 0; flex-wrap: wrap; }
.contact-card { text-decoration: none; color: var(--text-main); padding: 15px 25px; border: 1px solid var(--border); border-radius: 12px; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }

.whatsapp:hover { background: #25D366; color: white; border-color: #25D366; }
.email:hover { background: #EA4335; color: white; border-color: #EA4335; }

/* =========================================
   11. Responsividade
   ========================================= */
@media (min-width: 1024px) {
    /* Força 4 colunas em desktops */
    .projects-grid { grid-template-columns: repeat(4, 1fr); }
}

@media (max-width: 1023px) and (min-width: 650px) {
    /* Força 2 colunas em tablets */
    .projects-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
    .hero h1 { font-size: 2.5rem; }
    .nav-links { display: none; } /* Oculta menu em mobile */
}

@media (max-width: 649px) {
    /* Força 1 coluna em celulares */
    .projects-grid { grid-template-columns: 1fr; }
}
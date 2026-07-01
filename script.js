console.log("%c🌿 Sistema Avançado EcoAgro Digital Ativo! 🌿", "color: #39ff14; font-size: 14px; font-weight: bold; background-color: #000; padding: 5px;");

// 1. ALTERNADOR DE TEMA (MODO CLARO / ESCURO)
const btnTema = document.getElementById('btn-tema');
btnTema.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// 2. FILTRO DE ABAS INTERATIVO
const botoesFiltro = document.querySelectorAll('.btn-filtro');
const itensFontes = document.querySelectorAll('.item-fonte');

botoesFiltro.forEach(botao => {
    botao.addEventListener('click', () => {
        botoesFiltro.forEach(b => b.classList.remove('ativo'));
        botao.classList.add('ativo');
        
        const categoriaAlvo = botao.getAttribute('data-alvo');
        
        itensFontes.forEach(item => {
            if (categoriaAlvo === 'todos' || item.getAttribute('data-categoria') === categoriaAlvo) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// 3. LOGICA DO MINI-QUIZ
const opcoesQuiz = document.querySelectorAll('.opcao-btn');
const caixaResultado = document.getElementById('resultado-quiz');

opcoesQuiz.forEach(opcao => {
    opcao.addEventListener('click', () => {
        const respostaCorreta = opcao.getAttribute('data-correta') === 'true';
        caixaResultado.classList.remove('resultado-escondido', 'acertou', 'errou');
        
        if (respostaCorreta) {
            caixaResultado.textContent = "🎉 Resposta Correta! Rotação de culturas e bioinsumos garantem a força do agro sem esgotar o ecossistema.";
            caixaResultado.classList.add('acertou');
        } else {
            caixaResultado.textContent = "❌ Tente novamente! Essa prática agride o meio ambiente e reduz a sustentabilidade futura.";
            caixaResultado.classList.add('errou');
        }
    });
});

// 4. SIMULADOR DE ESPAÇO DA COMUNIDADE (COMENTÁRIOS)
const formComentario = document.getElementById('form-comentario');
const listaComentarios = document.getElementById('lista-comentarios');

formComentario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nome = document.getElementById('nome-usuario').value;
    const texto = document.getElementById('texto-comentario').value;
    
    const novoComentario = document.createElement('div');
    novoComentario.classList.add('bloco-comentario');
    novoComentario.innerHTML = `<strong>👤 ${nome}:</strong> <p style="margin: 5px 0 0 0; font-size:14px;">${texto}</p>`;
    
    listaComentarios.prepend(novoComentario);
    
    formComentario.reset();
});

// 5. NAVEGAÇÃO DE SCROLL SUAVE
const linksMenu = document.querySelectorAll('.menu-cartoon a');
linksMenu.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - 90;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
    });
});

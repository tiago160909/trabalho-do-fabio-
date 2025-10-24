// Copilot: dados das músicas organizadas por categorias
const musicasPop = [
  { id:1, titulo: 'Talking to the Moon', artista: 'Bruno Mars', capaUrl: 'https://i.scdn.co/image/ab67616d0000b2734a3b4e5c8f2d4f67b8e2d3f7', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3' },
  { id:2, titulo: 'Treasure', artista: 'Bruno Mars', capaUrl: 'https://i.scdn.co/image/ab67616d0000b2730a2b4b6b9c8d7e6f5a3b1c2d', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3' },
  { id:3, titulo: 'No Tears Left To Cry', artista: 'Ariana Grande', capaUrl: 'https://i.scdn.co/image/ab67616d0000b273e3f4e5d6c7b8a9f0b1c2d3e4', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' }
];

const musicasRap = [
  { id:10, titulo: 'SICKO MODE', artista: 'Travis Scott', capaUrl: 'https://i.scdn.co/image/ab67616d0000b273d4b5f4f6e7a8b9c0d1e2f3a4', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { id:11, titulo: 'Goosebumps', artista: 'Travis Scott ft. Kendrick Lamar', capaUrl: 'https://i.scdn.co/image/ab67616d0000b273c3d4e5f6a7b8c9d0e1f2a3b4', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { id:12, titulo: 'In da Club', artista: '50 Cent', capaUrl: 'https://i.scdn.co/image/ab67616d0000b273b2c3d4e5f6a7b8c9d0e1f2b3', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
  { id:13, titulo: 'Candy Shop', artista: '50 Cent', capaUrl: 'https://i.scdn.co/image/ab67616d0000b273a1b2c3d4e5f6a7b8c9d0e1a2', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' }
];

const musicasGospel = [
  { id:20, titulo: 'Ousado Amor', artista: 'Isaías Saad', capaUrl: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=6', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3' },
  { id:21, titulo: 'Ninguém Explica Deus', artista: 'Preto no Branco ft. Gabriela Rocha', capaUrl: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=7', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3' },
  { id:22, titulo: 'Oceans (Where Feet May Fail)', artista: 'Hillsong UNITED', capaUrl: 'https://i.scdn.co/image/ab67616d0000b273f1e2d3c4b5a6f7e8d9c0b1a2', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { id:23, titulo: 'Rei Eterno', artista: 'Diante do Trono', capaUrl: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=9', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
  { id:24, titulo: 'Aquele Que Nos Chama', artista: 'Fernandinho', capaUrl: 'https://images.unsplash.com/photo-1529257414773-19602a5b0d36?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=10', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' }
];

const musicasFutebol = [
  { id:101, titulo: 'Waka Waka (This Time for Africa)', artista: 'Shakira', capaUrl: 'https://i.scdn.co/image/ab67616d0000b2731f2e3d4c5b6a7e8d9c0b1a2b', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { id:102, titulo: 'Live It Up', artista: 'Nicky Jam ft. Will Smith & Era Istrefi', capaUrl: 'https://i.scdn.co/image/ab67616d0000b2732a3b4c5d6e7f8a9b0c1d2e3f', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' }
];

// Combinadas para busca e seção 'Todas as Músicas'
const todasMusicas = musicasPop.concat(musicasRap, musicasGospel, musicasFutebol);

// Estado
let favoritos = JSON.parse(localStorage.getItem('fav_musicas') || '[]');
let tema = localStorage.getItem('tema') || 'dark';
let carrosselIndex = 0;
let carrosselTimer = null;

// Aplica tema salvo
document.body.setAttribute('data-theme', tema);

// Renderizadores de categoria
function renderCategoria(lista, containerId){
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  lista.forEach((m, index) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = criarCardHTML(m);
    const card = wrapper.firstElementChild;
    container.appendChild(card);
    setTimeout(() => card.classList.add('show'), 40 * index);
  });
  aplicarEventosAosCards(container);
}

// Carrossel (destaques usa as primeiras 3 de todasMusicas)
function renderCarrossel(){
  const track = document.getElementById('carrossel-track');
  track.innerHTML = '';
  const destaques = todasMusicas.slice(0,3);
  destaques.forEach((m) => {
    const item = document.createElement('div');
    item.className = 'carrossel-item';
    item.innerHTML = `
      <img src="${m.capaUrl}" alt="${m.titulo}">
      <div class="carrossel-info">
        <strong>${m.titulo}</strong>
        <div>${m.artista}</div>
      </div>
    `;
    track.appendChild(item);
  });
}

function iniciarCarrossel(){
  const track = document.getElementById('carrossel-track');
  const items = track.querySelectorAll('.carrossel-item');
  const prev = document.querySelector('.carrossel-prev');
  const next = document.querySelector('.carrossel-next');

  function mostrar(index){
    carrosselIndex = (index + items.length) % items.length;
    const offset = -carrosselIndex * (items[0].offsetWidth + 12);
    track.style.transform = `translateX(${offset}px)`;
  }

  prev.addEventListener('click', () => { mostrar(carrosselIndex -1); resetTimer(); });
  next.addEventListener('click', () => { mostrar(carrosselIndex +1); resetTimer(); });

  function resetTimer(){
    clearInterval(carrosselTimer);
    carrosselTimer = setInterval(() => mostrar(carrosselIndex +1), 5000);
  }

  // inicia automático
  carrosselTimer = setInterval(() => mostrar(carrosselIndex +1), 5000);
  window.addEventListener('resize', () => mostrar(carrosselIndex));
}

// Função para renderizar todas as músicas
function criarCardHTML(m){
  return `
    <div class="card" data-id="${m.id}">
      <img class="capa" src="${m.capaUrl}" alt="Capa ${m.titulo}">
      <div class="info">
        <div class="titulo">${m.titulo}</div>
        <div class="artista">${m.artista}</div>
      </div>
      <div class="controls">
        <div>
          <button class="btn-fav" data-id="${m.id}" aria-label="Favoritar">❤</button>
        </div>
        <div style="display:flex; gap:8px; align-items:center">
          <button class="btn-play" data-id="${m.id}" aria-label="Tocar">
            <span class="icone">▶</span>
          </button>
        </div>
      </div>
      <audio class="audio-preview" src="${m.src}" preload="none"></audio>
    </div>
  `;
}

function renderizarMusicas(lista = musicas){
  const container = document.getElementById('lista-de-musicas');
  container.innerHTML = '';

  lista.forEach((m, index) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = criarCardHTML(m);
    const card = wrapper.firstElementChild;
    container.appendChild(card);

    // animação de entrada
    setTimeout(() => card.classList.add('show'), 50 * index);
  });

  aplicarEventosAosCards(container);
}

function renderizarFutebol(){
  const container = document.getElementById('lista-futebol');
  container.innerHTML = '';
  musicasFutebol.forEach((m, index) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = criarCardHTML(m);
    const card = wrapper.firstElementChild;
    container.appendChild(card);
    setTimeout(() => card.classList.add('show'), 50 * index);
  });

  aplicarEventosAosCards(container);
}

function aplicarEventosAosCards(container){
  // eventos de favoritos
  container.querySelectorAll('.btn-fav').forEach(btn => {
    const id = parseInt(btn.dataset.id);
    if(favoritos.includes(id)) btn.classList.add('favorito');
    btn.addEventListener('click', () => toggleFavorito(id, btn));
  });

  // eventos de play
  container.querySelectorAll('.btn-play').forEach(btn => {
    const id = parseInt(btn.dataset.id);
    btn.addEventListener('click', async () => {
      const card = btn.closest('.card');
      const audio = card.querySelector('.audio-preview');
      const icone = btn.querySelector('.icone');

      // Pause em qualquer outro áudio tocando
      document.querySelectorAll('.audio-preview').forEach(a => {
        if(a !== audio){
          a.pause(); a.currentTime = 0;
          const p = a.closest('.card')?.querySelector('.btn-play .icone'); if(p) p.textContent = '▶';
          const otherCard = a.closest('.card'); if(otherCard) otherCard.classList.remove('tocando');
          const otherBtn = otherCard?.querySelector('.btn-play'); if(otherBtn) otherBtn.classList.remove('pulse');
        }
      });

      if(audio.paused){
        try{ await audio.play(); icone.textContent = '❚❚'; card.classList.add('tocando'); btn.classList.add('pulse'); }
        catch(e){ console.error('Erro ao tocar:', e); }
      } else { audio.pause(); audio.currentTime = 0; icone.textContent = '▶'; card.classList.remove('tocando'); btn.classList.remove('pulse'); }

      // Atualiza ícones de outros botões
      document.querySelectorAll('.btn-play .icone').forEach(ic => { if(ic !== icone) ic.textContent = '▶'; });
    });
  });
}

// Função para renderizar favoritos em seção dedicada
function renderizarFavoritos(){
  const favContainer = document.getElementById('lista-de-favoritos');
  const listaFav = musicas.concat(musicasFutebol).filter(m => favoritos.includes(m.id));
  if(listaFav.length === 0){ favContainer.innerHTML = '<p>Nenhum favorito ainda.</p>'; return; }
  favContainer.innerHTML = '';
  listaFav.forEach((m, index) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = criarCardHTML(m);
    const card = wrapper.firstElementChild;
    favContainer.appendChild(card);
    setTimeout(() => card.classList.add('show'), 50 * index);
  });
  aplicarEventosAosCards(favContainer);
}

// Alterna favorito e salva no localStorage
function toggleFavorito(id, btn){
  const idx = favoritos.indexOf(id);
  if(idx === -1){ favoritos.push(id); btn.classList.add('favorito'); }
  else { favoritos.splice(idx,1); btn.classList.remove('favorito'); }
  localStorage.setItem('fav_musicas', JSON.stringify(favoritos));
  renderizarFavoritos();
}

// Busca em tempo real
function aplicarFiltro(texto){
  const t = texto.toLowerCase();
  const combinadas = musicas.concat(musicasFutebol);
  const filtradas = combinadas.filter(m => m.titulo.toLowerCase().includes(t) || m.artista.toLowerCase().includes(t));
  renderizarMusicas(filtradas);
}

// Alterna tema e salva no localStorage
function toggleTema(){
  tema = (tema === 'dark') ? 'light' : 'dark';
  document.body.setAttribute('data-theme', tema);
  localStorage.setItem('tema', tema);
}

// Navegação suave: ao clicar em links no topo, rola para a seção correspondente
function initNavegacao(){
  document.querySelectorAll('.menu .links a').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const target = a.getAttribute('data-target');
      const el = document.getElementById(target);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
}

// Inicialização geral
function init(){
  renderCarrossel();
  renderCategoria(musicasPop, 'lista-pop');
  renderCategoria(musicasRap, 'lista-rap');
  renderCategoria(musicasGospel, 'lista-gospel');
  renderCategoria(musicasFutebol, 'lista-futebol');
  renderarTodasEFavoritos();
  iniciarCarrossel();

  // Eventos de busca
  const campo = document.getElementById('campo-busca');
  campo.addEventListener('input', (e) => aplicarFiltro(e.target.value));

  // Tema
  document.getElementById('btn-tema').addEventListener('click', toggleTema);

  // Navegação topo
  initNavegacao();
}

function renderarTodasEFavoritos(){
  renderizarMusicas(todasMusicas);
  renderizarFavoritos();
}

if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();

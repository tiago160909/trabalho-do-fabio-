// Copilot: lista única de músicas com categorias, ids e links de capa
const musicas = [
  // Pop & R&B
  { id: 1, titulo: 'Talking to the Moon', artista: 'Bruno Mars', capaUrl: 'https://tse2.mm.bing.net/th/id/OIP.QWJREtFa8JWFQUIdwGxKkwHaE8?rs=1&pid=ImgDetMain&o=7', categoria: 'Pop & R&B', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3' },
  { id: 2, titulo: 'Treasure', artista: 'Bruno Mars', capaUrl: 'https://tse2.mm.bing.net/th/id/OIP.QWJREtFa8JWFQUIdwGxKkwHaE8?rs=1&pid=ImgDetMain&o=7', categoria: 'Pop & R&B', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3' },
  { id: 3, titulo: 'No Tears Left To Cry', artista: 'Ariana Grande', capaUrl: 'https://tse1.mm.bing.net/th/id/OIP.dJBEkCXDDdLQM0PHvmxN0QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3', categoria: 'Pop & R&B', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },

  // Rap & Trap
  { id: 4, titulo: 'SICKO MODE', artista: 'Travis Scott', capaUrl: 'https://www.rollingstone.com/wp-content/uploads/2019/10/TravisScott.jpg', categoria: 'Rap & Trap', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { id: 5, titulo: 'Goosebumps', artista: 'Travis Scott ft. Kendrick Lamar', capaUrl: 'https://www.rollingstone.com/wp-content/uploads/2019/10/TravisScott.jpg', categoria: 'Rap & Trap', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { id: 6, titulo: 'In da Club', artista: '50 Cent', capaUrl: 'https://i.scdn.co/image/dd031b9c5d1b6eba4a691cd89c954255aae787f2', categoria: 'Rap & Trap', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
  { id: 7, titulo: 'Candy Shop', artista: '50 Cent', capaUrl: 'https://i.scdn.co/image/dd031b9c5d1b6eba4a691cd89c954255aae787f2', categoria: 'Rap & Trap', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' },

  // Gospel / Música Cristã
  { id: 8, titulo: 'Ousado Amor', artista: 'Isaías Saad', capaUrl: 'https://th.bing.com/th/id/R.13803851f0b2cf3fbee284b3fc7e48e0?rik=9ZievHBSdc0kgw&pid=ImgRaw&r=0', categoria: 'Gospel / Música Cristã', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3' },
  { id: 9, titulo: 'Ninguém Explica Deus', artista: 'Preto no Branco ft. Gabriela Rocha', capaUrl: 'https://web.portalsucesso.com.br/wp-content/uploads/2018/08/preto-no-branco.png', categoria: 'Gospel / Música Cristã', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3' },
  { id: 10, titulo: 'Oceans (Where Feet May Fail)', artista: 'Hillsong UNITED', capaUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80&auto=format&fit=crop', categoria: 'Gospel / Música Cristã', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { id: 11, titulo: 'Rei Eterno', artista: 'Diante do Trono', capaUrl: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80&auto=format&fit=crop', categoria: 'Gospel / Música Cristã', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
  { id: 12, titulo: 'Aquele Que Nos Chama', artista: 'Fernandinho', capaUrl: 'https://akamai.sscdn.co/gcs/cifra-blog/pt/wp-content/uploads/2023/11/0afa757-historia-de-fernandinho.jpg', categoria: 'Gospel / Música Cristã', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' },

  // Futebol / Temas de Copa
  { id: 13, titulo: 'Waka Waka (This Time for Africa)', artista: 'Shakira', capaUrl: 'https://tse1.mm.bing.net/th/id/OIP.-i0hGAS4iNwDcg844eyCWwHaEt?rs=1&pid=ImgDetMain&o=7', categoria: 'Futebol', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { id: 14, titulo: 'Live It Up', artista: 'Nicky Jam ft. Will Smith & Era Istrefi', capaUrl: 'https://i.ytimg.com/vi/_OYs3mecLQc/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGDMgWCh_MA8=&rs=AOn4CLAxyU6NwD5AMfA0Qkhp6TTwc0T-yw', categoria: 'Futebol', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },

  // Rock Clássico (novo)
  { id: 15, titulo: 'Bohemian Rhapsody', artista: 'Queen', capaUrl: 'https://akamai.sscdn.co/uploadfile/letras/fotos/e/8/4/7/e847e9d573d628bfc8e9a276d88bdb9d.jpg', categoria: 'Rock Clássico', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3' },
  { id: 16, titulo: 'We Will Rock You', artista: 'Queen', capaUrl: 'https://akamai.sscdn.co/uploadfile/letras/fotos/e/8/4/7/e847e9d573d628bfc8e9a276d88bdb9d.jpg', categoria: 'Rock Clássico', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3' },

  // Rap Nacional (novo)
  { id: 17, titulo: 'Vida Loka Pt. 1', artista: 'Racionais MC\'s', capaUrl: 'https://wallpaperaccess.com/full/5652592.jpg', categoria: 'Rap Nacional', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3' },
  { id: 18, titulo: 'Vida Loka Pt. 2', artista: 'Racionais MC\'s', capaUrl: 'https://wallpaperaccess.com/full/5652592.jpg', categoria: 'Rap Nacional', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3' },
  { id: 19, titulo: 'Negro Drama', artista: 'Racionais MC\'s', capaUrl: 'https://wallpaperaccess.com/full/5652592.jpg', categoria: 'Rap Nacional', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3' },
  { id: 20, titulo: 'Jesus Chorou', artista: 'Racionais MC\'s', capaUrl: 'https://wallpaperaccess.com/full/5652592.jpg', categoria: 'Rap Nacional', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3' },
  { id: 21, titulo: 'Capítulo 4, Versículo 3', artista: 'Racionais MC\'s', capaUrl: 'https://wallpaperaccess.com/full/5652592.jpg', categoria: 'Rap Nacional', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3' },

  // Observação: 'Ninguém Explica Deus' já existe (id:9) — não foi duplicada

  // Gospel / Música Cristã (adições)
  { id: 22, titulo: 'Me Deixe Aqui', artista: 'Gabriela Rocha', capaUrl: 'https://tse3.mm.bing.net/th/id/OIP.z1TkX01XqsUOBoeajGFLfwHaF7?rs=1&pid=ImgDetMain&o=7&rm=3', categoria: 'Gospel / Música Cristã', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3' },
  { id: 23, titulo: 'És Tudo Pra Mim', artista: 'Eli Soares', capaUrl: 'https://cdn.comunhao.com.br/wp-content/uploads/2022/10/04134753/Eli_Soares-1068x713.jpg', categoria: 'Gospel / Música Cristã', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3' },
  { id: 24, titulo: 'A Casa é Sua', artista: 'Casa Worship', capaUrl: 'https://th.bing.com/th/id/R.8f88a95fa709df22e532630a903e2d12?rik=Fw%2fUbDPjmmrkcw&pid=ImgRaw&r=0', categoria: 'Gospel / Música Cristã', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3' },
  { id: 25, titulo: 'Meu Amanhã', artista: 'Eli Soares', capaUrl: 'https://cdn.comunhao.com.br/wp-content/uploads/2022/10/04134753/Eli_Soares-1068x713.jpg', categoria: 'Gospel / Música Cristã', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-18.mp3' }
];

// Categorias derivadas automaticamente
const musicasPop = musicas.filter(m => m.categoria === 'Pop & R&B');
const musicasRap = musicas.filter(m => m.categoria === 'Rap & Trap');
const musicasGospel = musicas.filter(m => m.categoria === 'Gospel / Música Cristã');
const musicasFutebol = musicas.filter(m => m.categoria === 'Futebol');
// novos filtros para as categorias adicionadas
const musicasRock = musicas.filter(m => m.categoria === 'Rock Clássico');
const musicasRapNacional = musicas.filter(m => m.categoria === 'Rap Nacional');
const todasMusicas = musicas.slice();

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
  // usar todasMusicas (contém todas as entradas) para evitar duplicações/omissões
  const listaFav = todasMusicas.filter(m => favoritos.includes(m.id));
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
  // usar todasMusicas para pesquisar em todas as categorias incluindo as novas
  const combinadas = todasMusicas;
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

// Sugestões de busca (apenas músicas Gospel)
function initSugestoes(){
  const campo = document.getElementById('campo-busca');
  const container = document.getElementById('sugestoes');

  function mostrarSugestoes(texto){
    const t = (texto || '').toLowerCase();
    const sugestoes = musicas.filter(m => m.categoria && m.categoria.toLowerCase().includes('gospel'))
      .filter(m => m.titulo.toLowerCase().includes(t) || m.artista.toLowerCase().includes(t));

    container.innerHTML = '';
    if(sugestoes.length === 0){ container.classList.remove('show'); container.setAttribute('aria-hidden','true'); return; }

    sugestoes.forEach(m => {
      const item = document.createElement('div');
      item.className = 'sugestao-item';
      item.innerHTML = `
        <img class="sugestao-thumb" src="${m.capaUrl}" alt="${m.titulo}">
        <div class="sugestao-info">
          <div class="sugestao-titulo">${m.titulo}</div>
          <div class="sugestao-artista">${m.artista}</div>
        </div>
      `;

      item.addEventListener('click', () => {
        // destacar visualmente a música selecionada
        document.querySelectorAll('.sugestao-item').forEach(si => si.classList.remove('selecionada'));
        item.classList.add('selecionada');
        container.classList.remove('show');
        container.setAttribute('aria-hidden','true');

        // efeito visual: localizar e aplicar destaque no card correspondente
        const alvo = Array.from(document.querySelectorAll('.card')).find(c => c.querySelector('.titulo').textContent === m.titulo && c.querySelector('.artista').textContent === m.artista);
        if(alvo){
          alvo.scrollIntoView({behavior:'smooth', block:'center'});
          alvo.classList.add('tocando');
          setTimeout(() => alvo.classList.remove('tocando'), 3000);
        }
      });

      container.appendChild(item);
    });

    container.classList.add('show');
    container.setAttribute('aria-hidden','false');
  }

  campo.addEventListener('focus', () => mostrarSugestoes(campo.value));
  campo.addEventListener('input', (e) => mostrarSugestoes(e.target.value));
  document.addEventListener('click', (e) => { if(!campo.contains(e.target) && !container.contains(e.target)) { container.classList.remove('show'); container.setAttribute('aria-hidden','true'); } });
}

// Inicialização geral
function init(){
  renderCarrossel();
  renderCategoria(musicasPop, 'lista-pop');
  renderCategoria(musicasRap, 'lista-rap');
  // renderizar Rap Nacional e Rock Clássico nas novas seções
  renderCategoria(musicasRapNacional, 'lista-rap-nacional');
  renderCategoria(musicasRock, 'lista-rock');
  renderCategoria(musicasGospel, 'lista-gospel');
  renderCategoria(musicasFutebol, 'lista-futebol');
  renderarTodasEFavoritos();
  iniciarCarrossel();

  // Eventos de busca
  const campo = document.getElementById('campo-busca');
  campo.addEventListener('input', (e) => aplicarFiltro(e.target.value));

  // Sugestões
  initSugestoes();

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

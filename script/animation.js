// ============================================
// DRIFT PANEL - Music Player Controller
// ============================================

class DriftPlayer {
  constructor() {
    // Elementos do DOM
    this.audio = document.getElementById('audio');
    this.playBtn = document.getElementById('play-btn');
    this.prevBtn = document.getElementById('prev-btn');
    this.nextBtn = document.getElementById('next-btn');
    this.shuffleBtn = document.getElementById('shuffle-btn');
    this.repeatBtn = document.getElementById('repeat-btn');
    this.progress = document.getElementById('progress');
    this.currentTimeEl = document.getElementById('current-time');
    this.durationEl = document.getElementById('duration');
    this.playlistSelect = document.getElementById('playlist-select');
    this.savePlaylistBtn = document.getElementById('save-playlist');
    this.clearPlaylistBtn = document.getElementById('clear-playlist');
    this.restoreDefaultBtn = document.getElementById('restore-default-btn');
    this.fileInput = document.getElementById('file-input');
    
    // ✅ NOVO - Elementos para exibir a capa
    this.coverImg = document.getElementById('cover-art');
    this.trackTitleEl = document.getElementById('track-title');
    this.trackArtistEl = document.getElementById('track-artist');

    // Estado do player
    this.isPlaying = false;
    this.isShuffle = false;
    this.repeatMode = 0; // 0 = sem repetição, 1 = repetir tudo, 2 = repetir uma
    this.currentTrackIndex = 0;
    this.playlists = {};
    this.defaultPlaylist = [];
    this.currentPlaylistName = 'default';
    this.shuffleQueue = [];

    // Playlist padrão com capas
    this.initializeDefaultPlaylist();

    // Event Listeners
    this.setupEventListeners();

    // Carregar playlists salvas
    this.loadPlaylistsFromStorage();

    // Atualizar seletor de playlists
    this.updatePlaylistSelect();
  }

  // ============ INICIALIZAÇÃO ============

  initializeDefaultPlaylist() {
    // ✅ ATUALIZADO - Adicionadas as capas das músicas
    this.defaultPlaylist = [
      {
        id: 1,
        title: 'Young Girl',
        artist: 'Ef × Madokas × Leno Ms × Doomshop Typebeat',
        producer: 'Prod. Cr4cu',
        duration: '3:45',
        url: '../playlist/music/prod. Cr4cu/[Free] ＂Young Girl＂ - Ef × Madokas × Leno Ms × Doomshop Typebeat - Prod. Cr4cu.mp3',
        cover: '../playlist/covers/young-girl.jpg'
      },
      {
        id: 2,
        title: 'Verdade Chinesa',
        artist: 'Ef × Ugovhb × Freddie Dredd × Doomshop Typebeat',
        producer: 'Prod. Cr4cu',
        duration: '2:25',
        url: '../playlist/music/prod. Cr4cu/[Free] ＂Verdade Chinesa＂ - Ef × Ugovhb × Freddie Dredd × Doomshop Typebeat - Prod. Cr4cu.mp3',
        cover: '../playlist/covers/verdade-chinesa.jpg'
      },
      {
        id: 3,
        title: 'I wonder',
        artist: 'Massaru × Ef × Lee san × Yun Li × Detroit Typebeat',
        producer: 'Prod. Cr4cu',
        duration: '2:52',
        url: '../playlist/music/prod. Cr4cu/[Free For Profit] ＂I wonder＂ - Massaru  × Ef × Lee san × Yun Li × Detroit Typebeat - Prod. Cr4cu.mp3',
        cover: '../playlist/covers/i-wonder.jpg'
      },
      {
        id: 4,
        title: 'Bound',
        artist: 'Yunmaho × Lil zé × Hoodtrap jerk Typebeat',
        producer: 'Prod. Cr4cu',
        duration: '2:12',
        url: '../playlist/music/prod. Cr4cu/[Free] ＂Bound＂ - Yunmaho × Lil zé × Hoodtrap jerk Typebeat - Prod. Cr4cu.mp3',
        cover: '../playlist/covers/bound.jpg'
      },
      {
        id: 5,
        title: 'No surprises',
        artist: '8poolfv × Lilfatz × Pol0xd × 1nsec × Doomshop Typebeat',
        producer: 'Prod. Cr4cu',
        duration: '1:38',
        url: '../playlist/music/prod. Cr4cu/[Free] ＂No surprises＂ - 8poolfv × Lilfatz × Pol0xd × 1nsec × Doomshop Typebeat - Prod. Cr4cu.mp3',
        cover: '../playlist/covers/no-surprises.jpg'
      },
      {
        id: 6,
        title: 'Acenda o farol',
        artist: 'Lilfatz × Madokas × Ugovhb × Doomshop Typebeat',
        producer: 'Prod. Cr4cu',
        duration: '2:25',
        url: '../playlist/music/prod. Cr4cu/[Free] ＂Acenda o farol＂ - Lilfatz × Madokas × Ugovhb × Doomshop Typebeat - Prod. Cr4cu.mp3',
        cover: '../playlist/cover/[Free] ＂Acenda o farol＂ - Lilfatz × Madokas × Ugovhb × Doomshop Typebeat - Prod. Cr4cu.webp'
      }
    ];

    this.playlists['default'] = JSON.parse(JSON.stringify(this.defaultPlaylist));
  }

  setupEventListeners() {
    // Controles de reprodução
    this.playBtn.addEventListener('click', () => this.togglePlay());
    this.prevBtn.addEventListener('click', () => this.previousTrack());
    this.nextBtn.addEventListener('click', () => this.nextTrack());
    this.shuffleBtn.addEventListener('click', () => this.toggleShuffle());
    this.repeatBtn.addEventListener('click', () => this.toggleRepeat());

    // Progresso da música
    this.audio.addEventListener('timeupdate', () => this.updateProgress());
    this.audio.addEventListener('loadedmetadata', () => this.updateDuration());
    this.audio.addEventListener('ended', () => this.onTrackEnd());
    this.progress.addEventListener('change', (e) => this.seek(e));

    // Playlist
    this.playlistSelect.addEventListener('change', (e) => this.switchPlaylist(e));
    this.savePlaylistBtn.addEventListener('click', () => this.savePlaylistToStorage());
    this.clearPlaylistBtn.addEventListener('click', () => this.clearCurrentPlaylist());
    this.restoreDefaultBtn.addEventListener('click', () => this.restoreDefaultPlaylist());
    this.fileInput.addEventListener('change', (e) => this.addTracksFromFiles(e));
  }

  // ============ CONTROLES DE REPRODUÇÃO ============

  togglePlay() {
    if (this.playlists[this.currentPlaylistName].length === 0) {
      alert('Nenhuma música na playlist!');
      return;
    }

    if (this.isPlaying) {
      this.audio.pause();
      this.isPlaying = false;
      this.playBtn.textContent = '▶️';
    } else {
      this.loadAndPlayTrack(this.currentTrackIndex);
      this.audio.play();
      this.isPlaying = true;
      this.playBtn.textContent = '⏸️';
    }
  }

  previousTrack() {
    if (this.playlists[this.currentPlaylistName].length === 0) return;
    this.currentTrackIndex = (this.currentTrackIndex - 1 + this.playlists[this.currentPlaylistName].length) % this.playlists[this.currentPlaylistName].length;
    this.loadAndPlayTrack(this.currentTrackIndex);
  }

  nextTrack() {
    if (this.playlists[this.currentPlaylistName].length === 0) return;
    
    if (this.isShuffle) {
      const idxInQueue = this.shuffleQueue.indexOf(this.currentTrackIndex);
      if (idxInQueue === -1 || idxInQueue === this.shuffleQueue.length - 1) {
        this.currentTrackIndex = this.shuffleQueue[0];
      } else {
        this.currentTrackIndex = this.shuffleQueue[idxInQueue + 1];
      }
    } else {
      this.currentTrackIndex = (this.currentTrackIndex + 1) % this.playlists[this.currentPlaylistName].length;
    }
    
    this.loadAndPlayTrack(this.currentTrackIndex);
  }

  onTrackEnd() {
    if (this.repeatMode === 2) {
      // Repetir uma música
      this.loadAndPlayTrack(this.currentTrackIndex);
    } else if (this.repeatMode === 1) {
      // Repetir tudo -> avançar normalmente, nextTrack já dará loop
      this.nextTrack();
    } else {
      // Sem repetição -> ir para próxima; se voltar ao início e estamos no último, pausar
      const playlistLength = this.playlists[this.currentPlaylistName].length;
      if (this.currentTrackIndex === playlistLength - 1) {
        this.audio.pause();
        this.isPlaying = false;
        this.playBtn.textContent = '▶️';
      } else {
        this.nextTrack();
      }
    }
  }

  // ============ SHUFFLE E REPEAT ============

  toggleShuffle() {
    this.isShuffle = !this.isShuffle;
    this.shuffleBtn.style.opacity = this.isShuffle ? '1' : '0.5';
    
    if (this.isShuffle) {
      this.createShuffleQueue();
      // garantir que a fila comece pela faixa atual
      const currentPos = this.shuffleQueue.indexOf(this.currentTrackIndex);
      if (currentPos > 0) {
        this.shuffleQueue.splice(currentPos, 1);
        this.shuffleQueue.unshift(this.currentTrackIndex);
      }
    }
  }

  createShuffleQueue() {
    const playlistLength = this.playlists[this.currentPlaylistName].length;
    this.shuffleQueue = Array.from({ length: playlistLength }, (_, i) => i);
    
    // Fisher-Yates shuffle
    for (let i = this.shuffleQueue.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.shuffleQueue[i], this.shuffleQueue[j]] = [this.shuffleQueue[j], this.shuffleQueue[i]];
    }
  }

  toggleRepeat() {
    this.repeatMode = (this.repeatMode + 1) % 3;
    
    const repeatStates = ['🔁', '🔂', '🔃'];
    this.repeatBtn.textContent = repeatStates[this.repeatMode];
    this.repeatBtn.style.opacity = this.repeatMode === 0 ? '0.5' : '1';
  }

  // ============ PROGRESSO E BUSCA ============

  updateProgress() {
    if (this.audio.duration) {
      const percent = (this.audio.currentTime / this.audio.duration) * 100;
      this.progress.value = percent;
      this.currentTimeEl.textContent = this.formatTime(this.audio.currentTime);
    }
  }

  updateDuration() {
    this.durationEl.textContent = this.formatTime(this.audio.duration);
  }

  seek(e) {
    const time = (e.target.value / 100) * this.audio.duration;
    this.audio.currentTime = time;
  }

  formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return '0:00';
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  }

  // ============ CARREGAR E REPRODUZIR ============

  loadAndPlayTrack(index) {
    const playlist = this.playlists[this.currentPlaylistName];
    if (playlist.length === 0) return;

    // garantir índice válido
    index = ((index % playlist.length) + playlist.length) % playlist.length;
    this.currentTrackIndex = index;

    const track = playlist[index];
    this.audio.src = track.url;
    this.audio.load();
    
    // ✅ NOVO - Atualizar capa e informações da música
    if (this.coverImg) {
      this.coverImg.src = track.cover || '../playlist/covers/default-cover.jpg';
      this.coverImg.alt = track.title;
      // Adicionar animação de transição
      this.coverImg.style.animation = 'none';
      setTimeout(() => {
        this.coverImg.style.animation = 'coverFade 0.3s ease-in-out';
      }, 10);
    }

    // ✅ NOVO - Atualizar título e artista
    if (this.trackTitleEl) {
      this.trackTitleEl.textContent = track.title;
    }
    if (this.trackArtistEl) {
      this.trackArtistEl.textContent = track.artist;
    }
    
    if (this.isPlaying) {
      // só tocar automaticamente se o estado for playing
      this.audio.play().catch(err => {
        // autoplay pode falhar por políticas do navegador
        console.warn('Play falhou:', err);
      });
    }

    console.log(`Tocando: ${track.title} - ${track.artist}`);
  }

  // ============ GERENCIAMENTO DE PLAYLISTS ============

  switchPlaylist(e) {
    this.currentPlaylistName = e.target.value;
    this.currentTrackIndex = 0;
    this.audio.pause();
    this.isPlaying = false;
    this.playBtn.textContent = '▶️';
    this.progress.value = 0;
    // ✅ Atualizar capa quando mudar de playlist
    this.loadAndPlayTrack(this.currentTrackIndex);
    this.updatePlaylistDisplay();
  }

  savePlaylistToStorage() {
    const playlistName = prompt('Digite o nome da playlist:');
    if (!playlistName || playlistName.trim() === '') return;

    if (playlistName in this.playlists) {
      if (!confirm('Playlist já existe. Deseja sobrescrever?')) return;
    }

    this.playlists[playlistName] = JSON.parse(JSON.stringify(this.playlists[this.currentPlaylistName]));
    localStorage.setItem('driftPanelPlaylists', JSON.stringify(this.playlists));
    this.updatePlaylistSelect();
    alert(`Playlist "${playlistName}" salva com sucesso!`);
  }

  loadPlaylistsFromStorage() {
    const saved = localStorage.getItem('driftPanelPlaylists');
    if (saved) {
      try {
        this.playlists = JSON.parse(saved);
        // garantir presença da default
        if (!this.playlists['default']) {
          this.playlists['default'] = JSON.parse(JSON.stringify(this.defaultPlaylist));
        }
      } catch (e) {
        console.error('Erro ao carregar playlists:', e);
      }
    } else {
      // se nada salvo, já temos default inicializado
      this.playlists['default'] = JSON.parse(JSON.stringify(this.defaultPlaylist));
    }
  }

  updatePlaylistSelect() {
    this.playlistSelect.innerHTML = '';
    Object.keys(this.playlists).forEach(name => {
      const option = document.createElement('option');
      option.value = name;
      const badge = name === 'default' ? ' 🎵 (Oficial)' : '';
      option.textContent = `${name}${badge} (${this.playlists[name].length} músicas)`;
      this.playlistSelect.appendChild(option);
    });
    // tenta preservar seleção atual
    if (this.playlists[this.currentPlaylistName]) {
      this.playlistSelect.value = this.currentPlaylistName;
    } else {
      this.currentPlaylistName = 'default';
      this.playlistSelect.value = 'default';
    }
  }

  clearCurrentPlaylist() {
    if (confirm('Deseja limpar a playlist atual?')) {
      if (this.currentPlaylistName === 'default') {
        this.playlists['default'] = JSON.parse(JSON.stringify(this.defaultPlaylist));
        alert('Playlist restaurada para as músicas padrão!');
      } else {
        delete this.playlists[this.currentPlaylistName];
        this.currentPlaylistName = 'default';
      }
      
      this.currentTrackIndex = 0;
      this.audio.pause();
      this.isPlaying = false;
      this.playBtn.textContent = '▶️';
      this.progress.value = 0;
      
      localStorage.setItem('driftPanelPlaylists', JSON.stringify(this.playlists));
      this.updatePlaylistSelect();
      this.loadAndPlayTrack(this.currentTrackIndex);
    }
  }

  restoreDefaultPlaylist() {
    if (confirm('Restaurar a playlist padrão com as músicas oficiais?')) {
      this.playlists['default'] = JSON.parse(JSON.stringify(this.defaultPlaylist));
      this.currentPlaylistName = 'default';
      this.currentTrackIndex = 0;
      this.audio.pause();
      this.isPlaying = false;
      this.playBtn.textContent = '▶️';
      this.progress.value = 0;
      
      localStorage.setItem('driftPanelPlaylists', JSON.stringify(this.playlists));
      this.updatePlaylistSelect();
      this.loadAndPlayTrack(this.currentTrackIndex);
      alert('✅ Playlist padrão restaurada com sucesso!');
    }
  }

  // ============ ADICIONAR FAIXAS DE ARQUIVO ============

  addTracksFromFiles(e) {
    const files = Array.from(e.target.files);
    
    if (files.length === 0) return;

    if (this.currentPlaylistName === 'default') {
      const newPlaylistName = prompt('Qual o nome para a nova playlist?', 'Minha Playlist');
      if (!newPlaylistName || newPlaylistName.trim() === '') {
        alert('Operação cancelada');
        return;
      }
      this.playlists[newPlaylistName] = [];
      this.currentPlaylistName = newPlaylistName;
    }
    
    let addedCount = 0;

    files.forEach((file) => {
      if (!file.type.startsWith('audio/')) return;

      const url = URL.createObjectURL(file);

      // Tentar inferir título e artista a partir do nome do arquivo
      const name = file.name.replace(/\.[^/.]+$/, ''); // remove extensão
      let title = name;
      let artist = 'Desconhecido';
      // se o nome contiver " - " assumimos "Artista - Título"
      if (name.includes(' - ')) {
        const parts = name.split(' - ');
        artist = parts[0].trim();
        title = parts.slice(1).join(' - ').trim();
      }

      const newTrack = {
        id: Date.now() + Math.floor(Math.random() * 1000),
        title,
        artist,
        producer: '',
        duration: '0:00',
        url,
        cover: '../playlist/covers/default-cover.jpg' // fallback
      };

      this.playlists[this.currentPlaylistName].push(newTrack);
      addedCount++;
    });

    if (addedCount > 0) {
      // Salvar e atualizar UI
      localStorage.setItem('driftPanelPlaylists', JSON.stringify(this.playlists));
      this.updatePlaylistSelect();
      this.updatePlaylistDisplay();
      alert(`${addedCount} arquivo(s) adicionados à playlist "${this.currentPlaylistName}".`);
    } else {
      alert('Nenhum arquivo de áudio válido selecionado.');
    }

    // reset input para permitir re-seleção dos mesmos arquivos futuramente
    e.target.value = '';
  }

  // ============ UI AUXILIAR ============

  updatePlaylistDisplay() {
    // Implementação simples: você pode preencher um elemento de lista com as faixas da playlist atual.
    // Procure por um elemento com id="playlist-display" no seu HTML, se quiser ver a lista atualizada.
    const display = document.getElementById('playlist-display');
    if (!display) return;

    display.innerHTML = '';
    const list = this.playlists[this.currentPlaylistName] || [];
    list.forEach((track, idx) => {
      const item = document.createElement('div');
      item.className = 'playlist-item';
      item.textContent = `${idx + 1}. ${track.title} — ${track.artist}`;
      // clique para tocar
      item.addEventListener('click', () => {
        this.currentTrackIndex = idx;
        this.loadAndPlayTrack(idx);
        this.isPlaying = true;
        this.audio.play();
        this.playBtn.textContent = '⏸️';
      });
      display.appendChild(item);
    });
  }
}

// Inicializa o player quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  const player = new DriftPlayer();
  // opcional: expor para debug
  window.driftPlayer = player;
});

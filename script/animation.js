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

    // Elementos de UI adicionais
    this.coverImg = document.getElementById('cover-art');
    this.trackTitleEl = document.getElementById('track-title');
    this.trackArtistEl = document.getElementById('track-artist');

    // Ícone do play/pause (span interno)
    this.playIcon = this.playBtn ? this.playBtn.querySelector('.material-symbols-outlined') : null;

    // Estado do player
    this.isPlaying = false;
    this.isShuffle = false;
    this.repeatMode = 0; // 0 = sem repetição, 1 = repetir tudo, 2 = repetir uma
    this.currentTrackIndex = 0;
    this.playlists = {};
    this.defaultPlaylist = [];
    this.currentPlaylistName = 'default';
    this.shuffleQueue = [];

    // Playlist padrão
    this.initializeDefaultPlaylist();

    // Event listeners
    this.setupEventListeners();

    // Carregar playlists salvas
    this.loadPlaylistsFromStorage();

    // Atualizar seletor de playlists
    this.updatePlaylistSelect();
  }

  // ============ INICIALIZAÇÃO ============
  initializeDefaultPlaylist() {
    this.defaultPlaylist = [
      {
        id: 1,
        title: 'Young Girl',
        artist: 'Ef × Madokas × Leno Ms × Doomshop Typebeat',
        producer: 'Prod. Cr4cu',
        duration: '3:45',
        url: '../playlist/music/prod. Cr4cu/[Free] ＂Young Girl＂ - Ef × Madokas × Leno Ms × Doomshop Typebeat - Prod. Cr4cu.mp3',
        cover: '../playlist/cover/young-girl.webp'
      },
      {
        id: 2,
        title: 'Verdade Chinesa',
        artist: 'Ef × Ugovhb × Freddie Dredd × Doomshop Typebeat',
        producer: 'Prod. Cr4cu',
        duration: '2:25',
        url: '../playlist/music/prod. Cr4cu/[Free] ＂Verdade Chinesa＂ - Ef × Ugovhb × Freddie Dredd × Doomshop Typebeat - Prod. Cr4cu.mp3',
        cover: '../playlist/cover/verdade-chinesa.webp'
      },
      {
        id: 3,
        title: 'I wonder',
        artist: 'Massaru × Ef × Lee san × Yun Li × Detroit Typebeat',
        producer: 'Prod. Cr4cu',
        duration: '2:52',
        url: '../playlist/music/prod. Cr4cu/[Free For Profit] ＂I wonder＂ - Massaru  × Ef × Lee san × Yun Li × Detroit Typebeat - Prod. Cr4cu.mp3',
        cover: '../playlist/cover/i-wonder.webp'
      },
      {
        id: 4,
        title: 'Bound',
        artist: 'Yunmaho × Lil zé × Hoodtrap jerk Typebeat',
        producer: 'Prod. Cr4cu',
        duration: '2:12',
        url: '../playlist/music/prod. Cr4cu/[Free] ＂Bound＂ - Yunmaho × Lil zé × Hoodtrap jerk Typebeat - Prod. Cr4cu.mp3',
        cover: '../playlist/cover/bound.webp'
      },
      {
        id: 5,
        title: 'No surprises',
        artist: '8poolfv × Lilfatz × Pol0xd × 1nsec × Doomshop Typebeat',
        producer: 'Prod. Cr4cu',
        duration: '1:38',
        url: '../playlist/music/prod. Cr4cu/[Free] ＂No surprises＂ - 8poolfv × Lilfatz × Pol0xd × 1nsec × Doomshop Typebeat - Prod. Cr4cu.mp3',
        cover: '../playlist/cover/no-surprises.webp'
      },
      {
        id: 6,
        title: 'Acenda o farol',
        artist: 'Lilfatz × Madokas × Ugovhb × Doomshop Typebeat',
        producer: 'Prod. Cr4cu',
        duration: '2:25',
        url: '../playlist/music/prod. Cr4cu/[Free] ＂Acenda o farol＂ - Lilfatz × Madokas × Ugovhb × Doomshop Typebeat - Prod. Cr4cu.mp3',
        cover: '../playlist/cover/acenda-o-farol.webp'
      }
    ];

    this.playlists['default'] = JSON.parse(JSON.stringify(this.defaultPlaylist));
  }

  setupEventListeners() {
    if (this.playBtn) this.playBtn.addEventListener('click', () => this.togglePlay());
    if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.previousTrack());
    if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.nextTrack());
    if (this.shuffleBtn) this.shuffleBtn.addEventListener('click', () => this.toggleShuffle());
    if (this.repeatBtn) this.repeatBtn.addEventListener('click', () => this.toggleRepeat());

    if (this.audio) {
      this.audio.addEventListener('timeupdate', () => this.updateProgress());
      this.audio.addEventListener('loadedmetadata', () => this.updateDuration());
      this.audio.addEventListener('ended', () => this.onTrackEnd());
    }

    if (this.progress) this.progress.addEventListener('change', (e) => this.seek(e));
    if (this.playlistSelect) this.playlistSelect.addEventListener('change', (e) => this.switchPlaylist(e));
    if (this.savePlaylistBtn) this.savePlaylistBtn.addEventListener('click', () => this.savePlaylistToStorage());
    if (this.clearPlaylistBtn) this.clearPlaylistBtn.addEventListener('click', () => this.clearCurrentPlaylist());
    if (this.restoreDefaultBtn) this.restoreDefaultBtn.addEventListener('click', () => this.restoreDefaultPlaylist());
    if (this.fileInput) this.fileInput.addEventListener('change', (e) => this.addTracksFromFiles(e));
  }

  // ============ CONTROLES DE REPRODUÇÃO ============
  togglePlay() {
    const list = this.playlists[this.currentPlaylistName] || [];
    if (list.length === 0) {
      alert('Nenhuma música na playlist!');
      return;
    }

    this.isPlaying = !this.isPlaying;

    if (this.isPlaying) {
      this.loadAndPlayTrack(this.currentTrackIndex);
      this.audio.play().catch(() => {});
      if (this.playIcon) this.playIcon.textContent = 'pause';
    } else {
      this.audio.pause();
      if (this.playIcon) this.playIcon.textContent = 'play_arrow';
    }
  }

  previousTrack() {
    const len = (this.playlists[this.currentPlaylistName] || []).length;
    if (len === 0) return;
    this.currentTrackIndex = (this.currentTrackIndex - 1 + len) % len;
    this.loadAndPlayTrack(this.currentTrackIndex);
  }

  nextTrack() {
    const len = (this.playlists[this.currentPlaylistName] || []).length;
    if (len === 0) return;

    if (this.isShuffle) {
      const idxInQueue = this.shuffleQueue.indexOf(this.currentTrackIndex);
      if (idxInQueue === -1 || idxInQueue === this.shuffleQueue.length - 1) {
        this.currentTrackIndex = this.shuffleQueue[0];
      } else {
        this.currentTrackIndex = this.shuffleQueue[idxInQueue + 1];
      }
    } else {
      this.currentTrackIndex = (this.currentTrackIndex + 1) % len;
    }

    this.loadAndPlayTrack(this.currentTrackIndex);
  }

  onTrackEnd() {
    if (this.repeatMode === 2) {
      // repetir uma
      this.loadAndPlayTrack(this.currentTrackIndex);
    } else if (this.repeatMode === 1) {
      // repetir tudo
      this.nextTrack();
    } else {
      // sem repetição
      const playlistLength = (this.playlists[this.currentPlaylistName] || []).length;
      if (this.currentTrackIndex === playlistLength - 1) {
        this.audio.pause();
        this.isPlaying = false;
        if (this.playIcon) this.playIcon.textContent = 'play_arrow';
      } else {
        this.nextTrack();
      }
    }
  }

  // ============ SHUFFLE E REPEAT ============
  toggleShuffle() {
    this.isShuffle = !this.isShuffle;
    if (this.shuffleBtn) this.shuffleBtn.style.opacity = this.isShuffle ? '1' : '0.5';

    if (this.isShuffle) {
      this.createShuffleQueue();
      const currentPos = this.shuffleQueue.indexOf(this.currentTrackIndex);
      if (currentPos > 0) {
        this.shuffleQueue.splice(currentPos, 1);
        this.shuffleQueue.unshift(this.currentTrackIndex);
      }
    }
  }

  createShuffleQueue() {
    const playlistLength = (this.playlists[this.currentPlaylistName] || []).length;
    this.shuffleQueue = Array.from({ length: playlistLength }, (_, i) => i);
    for (let i = this.shuffleQueue.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.shuffleQueue[i], this.shuffleQueue[j]] = [this.shuffleQueue[j], this.shuffleQueue[i]];
    }
  }

    toggleRepeat() {
    this.repeatMode = (this.repeatMode + 1) % 3;
    const repeatStates = ['repeat', 'repeat_on', 'repeat_one']; // nomes Material Symbols
    const iconSpan = this.repeatBtn ? this.repeatBtn.querySelector('.material-symbols-outlined') : null;

    if (iconSpan) iconSpan.textContent = repeatStates[this.repeatMode];

    if (this.repeatBtn) {
        this.repeatBtn.style.opacity = this.repeatMode === 0 ? '0.5' : '1';
        this.repeatBtn.classList.toggle('active', this.repeatMode !== 0);
    }
    }


  // ============ PROGRESSO E BUSCA ============
  updateProgress() {
    if (this.audio && this.audio.duration) {
      const percent = (this.audio.currentTime / this.audio.duration) * 100;
      if (this.progress) this.progress.value = percent;
      if (this.currentTimeEl) this.currentTimeEl.textContent = this.formatTime(this.audio.currentTime);
    }
  }

  updateDuration() {
    if (this.durationEl && this.audio) this.durationEl.textContent = this.formatTime(this.audio.duration);
  }

  seek(e) {
    if (!this.audio || !this.audio.duration) return;
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
    const playlist = this.playlists[this.currentPlaylistName] || [];
    if (playlist.length === 0) return;

    index = ((index % playlist.length) + playlist.length) % playlist.length;
    this.currentTrackIndex = index;

    const track = playlist[index];
    if (this.audio) {
      this.audio.src = track.url;
      this.audio.load();
    }

    if (this.coverImg) {
      this.coverImg.src = track.cover || '../playlist/covers/default-cover.jpg';
      this.coverImg.alt = track.title;
      this.coverImg.style.animation = 'none';
      setTimeout(() => {
        if (this.coverImg) this.coverImg.style.animation = 'coverFade 0.3s ease-in-out';
      }, 10);
    }

    if (this.trackTitleEl) this.trackTitleEl.textContent = track.title;
    if (this.trackArtistEl) this.trackArtistEl.textContent = track.artist;

    if (this.isPlaying && this.audio) {
      this.audio.play().catch(err => console.warn('Play falhou:', err));
      if (this.playIcon) this.playIcon.textContent = 'pause';
    }

    console.log(`Tocando: ${track.title} - ${track.artist}`);
  }

  // ============ GERENCIAMENTO DE PLAYLISTS ============
  switchPlaylist(e) {
    this.currentPlaylistName = e.target.value;
    this.currentTrackIndex = 0;
    if (this.audio) this.audio.pause();
    this.isPlaying = false;
    if (this.playIcon) this.playIcon.textContent = 'play_arrow';
    if (this.progress) this.progress.value = 0;
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
        if (!this.playlists['default']) this.playlists['default'] = JSON.parse(JSON.stringify(this.defaultPlaylist));
      } catch (e) {
        console.error('Erro ao carregar playlists:', e);
      }
    } else {
      this.playlists['default'] = JSON.parse(JSON.stringify(this.defaultPlaylist));
    }
  }

  updatePlaylistSelect() {
    if (!this.playlistSelect) return;
    this.playlistSelect.innerHTML = '';
    Object.keys(this.playlists).forEach(name => {
      const option = document.createElement('option');
      option.value = name;
      const badge = name === 'default' ? ' 🎵 (Oficial)' : '';
      option.textContent = `${name}${badge} (${this.playlists[name].length} músicas)`;
      this.playlistSelect.appendChild(option);
    });
    if (this.playlists[this.currentPlaylistName]) {
      this.playlistSelect.value = this.currentPlaylistName;
    } else {
      this.currentPlaylistName = 'default';
      this.playlistSelect.value = 'default';
    }
  }

  clearCurrentPlaylist() {
    if (!confirm('Deseja limpar a playlist atual?')) return;

    if (this.currentPlaylistName === 'default') {
      this.playlists['default'] = JSON.parse(JSON.stringify(this.defaultPlaylist));
      alert('Playlist restaurada para as músicas padrão!');
    } else {
      delete this.playlists[this.currentPlaylistName];
      this.currentPlaylistName = 'default';
    }

    this.currentTrackIndex = 0;
    if (this.audio) this.audio.pause();
    this.isPlaying = false;
    if (this.playIcon) this.playIcon.textContent = 'play_arrow';
    if (this.progress) this.progress.value = 0;

    localStorage.setItem('driftPanelPlaylists', JSON.stringify(this.playlists));
    this.updatePlaylistSelect();
    this.loadAndPlayTrack(this.currentTrackIndex);
  }

  restoreDefaultPlaylist() {
    if (!confirm('Restaurar a playlist padrão com as músicas oficiais?')) return;

    this.playlists['default'] = JSON.parse(JSON.stringify(this.defaultPlaylist));
    this.currentPlaylistName = 'default';
    this.currentTrackIndex = 0;
    if (this.audio) this.audio.pause();
    this.isPlaying = false;
    if (this.playIcon) this.playIcon.textContent = 'play_arrow';
    if (this.progress) this.progress.value = 0;

    localStorage.setItem('driftPanelPlaylists', JSON.stringify(this.playlists));
    this.updatePlaylistSelect();
    this.loadAndPlayTrack(this.currentTrackIndex);
    alert('✅ Playlist padrão restaurada com sucesso!');
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
      const name = file.name.replace(/\.[^/.]+$/, '');
      let title = name;
      let artist = 'Desconhecido';
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
        cover: '../playlist/covers/default-cover.jpg'
      };
      this.playlists[this.currentPlaylistName].push(newTrack);
      addedCount++;
    });

    if (addedCount > 0) {
      localStorage.setItem('driftPanelPlaylists', JSON.stringify(this.playlists));
      this.updatePlaylistSelect();
      this.updatePlaylistDisplay();
      alert(`${addedCount} arquivo(s) adicionados à playlist "${this.currentPlaylistName}".`);
    } else {
      alert('Nenhum arquivo de áudio válido selecionado.');
    }

    e.target.value = '';
  }

  // ============ UI AUXILIAR ============
  updatePlaylistDisplay() {
    const display = document.getElementById('playlist-display');
    if (!display) return;
    display.innerHTML = '';
    const list = this.playlists[this.currentPlaylistName] || [];
    list.forEach((track, idx) => {
      const item = document.createElement('div');
      item.className = 'playlist-item';
      item.textContent = `${idx + 1}. ${track.title} — ${track.artist}`;
      item.addEventListener('click', () => {
        this.currentTrackIndex = idx;
        this.loadAndPlayTrack(idx);
        this.isPlaying = true;
        this.audio.play().catch(() => {});
        if (this.playIcon) this.playIcon.textContent = 'pause';
      });
      display.appendChild(item);
    });
  }
}

// Inicializa o player quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  const player = new DriftPlayer();
  window.driftPlayer = player;
});
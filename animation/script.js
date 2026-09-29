// ============================================================
// i18n — translations
// Add a new language by adding a key here (e.g. "ru": {...})
// and an <option> in the #lang-select in index.html.
// ============================================================
const TRANSLATIONS = {
  en: {
    'nav.intro':'Introduction',
    'nav.menu':'Menu','nav.about':'About','nav.summary':'Summary','nav.feature':'Feature','nav.music':'Music','nav.credits':'Credits',
    'settings.title':'Settings','settings.language':'Language','settings.theme':'Theme','settings.motion':'Reduce animations','settings.arrow':'Show scroll arrow','settings.cursor':'Custom cursor',
    'hero.quote':'"Every race is all or nothing — floor it; it might be your last great story."',
    'hero.listen':'Listen',
    'resumo.title':'Every lap, a chapter',
    'resumo.p1':"Drift Panel brings together the best tracks to turn every lap into an epic moment. Playlists built for adrenaline: intense beats for acceleration, distinctive grooves for controlled corners, and atmospheric tracks to warm up before hitting the track.",
    'resumo.p2':'Browse, load your own music, and customize playlists without leaving your browser — everything runs locally, with nothing uploaded to any server.',
    'sobre.title':'Built for drivers and gamers',
    'sobre.p1':"Simple playback controls, shuffle and repeat, with local storage for your playlists. Focus on driving or gaming — we've got the soundtrack covered.",
    'sobre.p2':'Create custom sets for every kind of session: practice, races, sim racing, or just a free ride. Save combinations and switch modes with one click.',
    'tags.training':'Practice','tags.races':'Races','tags.virtual':'Sim racing','tags.freeride':'Free ride','tags.simulator':'Simulator','tags.stream':'Stream',
    'player.title':'The player','player.subtitle':'Local, no accounts, no uploads. Your tracks stay in your browser.','player.noTrack':'No track loaded',
    'action.restore':'Reset to default','action.add':'Add tracks','action.save':'Save playlist','action.saved':'Playlist saved','action.clear':'Clear',
    'queue.remove':'remove','queue.empty':'No tracks in the queue','queue.label':'Playlist','queue.toggle':'Show or hide the playlist',
    'ctrl.shuffle':'Shuffle','ctrl.prev':'Previous','ctrl.play':'Play or pause','ctrl.next':'Next','ctrl.repeat':'Repeat','ctrl.seek':'Seek','ctrl.volume':'Volume','player.error':'Could not play this track',
    'music.title':'The soundtrack of the track',
    'music.p':'Tracks handpicked from independent producers, built to match the pace of the race — from warm-up to the final corner.',
    'credits.title':'Credits',
    'footer.contact':'Contact','footer.terms':'Terms','footer.audioPolicy':'Audio Use Policy','footer.report':'Report an issue',
    'footer.legal':"The audio tracks listed on this site belong to third parties and are subject to the respective producers' permissions. You may listen on this site according to the artists' authorization; we do not license or sublicense these tracks. For use or reuse, please obtain permission directly from the rights holders.",
    'footer.copyright':'© 2026 Yukynn. All rights reserved.',
    'theme.dark':'Dark','theme.light':'Light','theme.blue':'Blue','theme.pink':'Pink','theme.red':'Red','theme.yellow':'Yellow','theme.green':'Green',
  },
  pt: {
    'nav.intro':'Introdução',
    'nav.menu':'Menu','nav.about':'Sobre','nav.summary':'Resumo','nav.feature':'Função','nav.music':'Música','nav.credits':'Créditos',
    'settings.title':'Configurações','settings.language':'Idioma','settings.theme':'Tema','settings.motion':'Reduzir animações','settings.arrow':'Mostrar seta de rolagem','settings.cursor':'Cursor personalizado',
    'hero.quote':'"Faça de cada corrida um tudo ou nada — acelere ao máximo; pode ser a sua última grande história."',
    'hero.listen':'ouvir',
    'resumo.title':'Cada volta, um capítulo',
    'resumo.p1':'Drift Panel reúne as melhores faixas para transformar cada volta em um momento épico. Playlists pensadas para adrenalina: batidas intensas para acelerações, grooves marcantes para curvas controladas e faixas atmosféricas para aquecer antes da pista.',
    'resumo.p2':'Navegue, carregue suas músicas e personalize listas sem sair do navegador — tudo roda localmente, sem envio de arquivos para servidores.',
    'sobre.title':'Feito para pilotos e jogadores',
    'sobre.p1':'Controles simples de reprodução, aleatório e repetição, com armazenamento local das suas playlists. Concentre-se na pilotagem ou na jogatina — a trilha sonora fica por nossa conta.',
    'sobre.p2':'Crie sets personalizados para cada tipo de sessão: treinos, provas, corridas virtuais ou passeio livre. Salve combinações e troque entre modos com um clique.',
    'tags.training':'Treino','tags.races':'Provas','tags.virtual':'Corrida virtual','tags.freeride':'Passeio livre','tags.simulator':'Simulador','tags.stream':'Stream',
    'player.title':'O player','player.subtitle':'Local, sem contas, sem upload. Suas faixas ficam no seu navegador.','player.noTrack':'Nenhuma faixa carregada',
    'action.restore':'Restaurar padrão','action.add':'Adicionar faixas','action.save':'Salvar playlist','action.saved':'Playlist salva','action.clear':'Limpar',
    'queue.remove':'remover','queue.empty':'Nenhuma faixa na fila','queue.label':'Playlist','queue.toggle':'Mostrar ou ocultar a playlist',
    'ctrl.shuffle':'Aleatório','ctrl.prev':'Anterior','ctrl.play':'Reproduzir ou pausar','ctrl.next':'Próxima','ctrl.repeat':'Repetir','ctrl.seek':'Posição','ctrl.volume':'Volume','player.error':'Não foi possível tocar esta faixa',
    'music.title':'A trilha da pista',
    'music.p':'Faixas selecionadas por produtores independentes, pensadas para acompanhar o ritmo da corrida — de aquecimento a última curva.',
    'credits.title':'Créditos',
    'footer.contact':'Contato','footer.terms':'Termos','footer.audioPolicy':'Política de Uso de Áudio','footer.report':'Reportar problema',
    'footer.legal':'As faixas de áudio listadas neste site pertencem a terceiros e estão sujeitas às permissões dos respectivos produtores. Você pode ouvir no site conforme autorização dos artistas; não licenciamos nem sublicenciamos essas faixas. Para uso ou reutilização, obtenha permissão diretamente dos detentores dos direitos.',
    'footer.copyright':'© 2026 Yukynn. Todos os direitos reservados.',
    'theme.dark':'Escuro','theme.light':'Claro','theme.blue':'Azul','theme.pink':'Rosa','theme.red':'Vermelho','theme.yellow':'Amarelo','theme.green':'Verde',
  },
  es: {
    'nav.intro':'Introducción',
    'nav.menu':'Menú','nav.about':'Acerca de','nav.summary':'Resumen','nav.feature':'Función','nav.music':'Música','nav.credits':'Créditos',
    'settings.title':'Ajustes','settings.language':'Idioma','settings.theme':'Tema','settings.motion':'Reducir animaciones','settings.arrow':'Mostrar flecha de desplazamiento','settings.cursor':'Cursor personalizado',
    'hero.quote':'"Haz de cada carrera todo o nada — acelera al máximo; puede ser tu última gran historia."',
    'hero.listen':'escuchar',
    'resumo.title':'Cada vuelta, un capítulo',
    'resumo.p1':'Drift Panel reúne las mejores pistas para convertir cada vuelta en un momento épico. Playlists pensadas para la adrenalina: ritmos intensos para las aceleraciones, grooves marcados para las curvas controladas y pistas atmosféricas para calentar antes de salir a pista.',
    'resumo.p2':'Explora, carga tu propia música y personaliza listas sin salir del navegador — todo funciona localmente, sin subir archivos a ningún servidor.',
    'sobre.title':'Hecho para pilotos y jugadores',
    'sobre.p1':'Controles simples de reproducción, aleatorio y repetición, con almacenamiento local de tus playlists. Concéntrate en conducir o jugar — nosotros nos encargamos de la banda sonora.',
    'sobre.p2':'Crea sets personalizados para cada tipo de sesión: entrenamientos, carreras, simuladores o simplemente un paseo libre. Guarda combinaciones y cambia de modo con un clic.',
    'tags.training':'Entrenamiento','tags.races':'Carreras','tags.virtual':'Sim racing','tags.freeride':'Paseo libre','tags.simulator':'Simulador','tags.stream':'Stream',
    'player.title':'El reproductor','player.subtitle':'Local, sin cuentas, sin subidas. Tus pistas se quedan en tu navegador.','player.noTrack':'Ninguna pista cargada',
    'action.restore':'Restaurar predeterminado','action.add':'Agregar pistas','action.save':'Guardar playlist','action.saved':'Playlist guardada','action.clear':'Limpiar',
    'queue.remove':'quitar','queue.empty':'No hay pistas en la cola','queue.label':'Playlist','queue.toggle':'Mostrar u ocultar la playlist',
    'ctrl.shuffle':'Aleatorio','ctrl.prev':'Anterior','ctrl.play':'Reproducir o pausar','ctrl.next':'Siguiente','ctrl.repeat':'Repetir','ctrl.seek':'Posición','ctrl.volume':'Volumen','player.error':'No se pudo reproducir esta pista',
    'music.title':'La banda sonora de la pista',
    'music.p':'Pistas seleccionadas por productores independientes, pensadas para acompañar el ritmo de la carrera — desde el calentamiento hasta la última curva.',
    'credits.title':'Créditos',
    'footer.contact':'Contacto','footer.terms':'Términos','footer.audioPolicy':'Política de Uso de Audio','footer.report':'Reportar un problema',
    'footer.legal':'Las pistas de audio listadas en este sitio pertenecen a terceros y están sujetas a los permisos de sus respectivos productores. Puedes escucharlas en el sitio conforme a la autorización de los artistas; no licenciamos ni sublicenciamos estas pistas. Para su uso o reutilización, obtén permiso directamente de los titulares de los derechos.',
    'footer.copyright':'© 2026 Yukynn. Todos los derechos reservados.',
    'theme.dark':'Oscuro','theme.light':'Claro','theme.blue':'Azul','theme.pink':'Rosa','theme.red':'Rojo','theme.yellow':'Amarillo','theme.green':'Verde',
  },
  fr: {
    'nav.intro':'Introduction',
    'nav.menu':'Menu','nav.about':'À propos','nav.summary':'Résumé','nav.feature':'Fonction','nav.music':'Musique','nav.credits':'Crédits',
    'settings.title':'Réglages','settings.language':'Langue','settings.theme':'Thème','settings.motion':'Réduire les animations','settings.arrow':'Afficher la flèche de défilement','settings.cursor':'Curseur personnalisé',
    'hero.quote':'"Faites de chaque course un tout ou rien — accélérez à fond ; ce sera peut-être votre plus grande histoire."',
    'hero.listen':'écouter',
    'resumo.title':'Chaque tour, un chapitre',
    'resumo.p1':"Drift Panel rassemble les meilleurs morceaux pour transformer chaque tour en moment épique. Des playlists pensées pour l'adrénaline : des rythmes intenses pour les accélérations, des grooves marqués pour les virages maîtrisés et des morceaux atmosphériques pour s'échauffer avant la piste.",
    'resumo.p2':"Parcourez, chargez votre propre musique et personnalisez vos listes sans quitter le navigateur — tout fonctionne localement, sans envoi de fichiers vers un serveur.",
    'sobre.title':'Conçu pour les pilotes et les joueurs',
    'sobre.p1':"Des contrôles de lecture simples, lecture aléatoire et répétition, avec stockage local de vos playlists. Concentrez-vous sur la conduite ou le jeu — on s'occupe de la bande-son.",
    'sobre.p2':'Créez des sets personnalisés pour chaque type de session : entraînements, courses, sim racing ou simple balade libre. Enregistrez vos combinaisons et changez de mode en un clic.',
    'tags.training':'Entraînement','tags.races':'Courses','tags.virtual':'Sim racing','tags.freeride':'Balade libre','tags.simulator':'Simulateur','tags.stream':'Stream',
    'player.title':'Le lecteur','player.subtitle':'Local, sans compte, sans envoi. Vos morceaux restent dans votre navigateur.','player.noTrack':'Aucun morceau chargé',
    'action.restore':'Réinitialiser','action.add':'Ajouter des morceaux','action.save':'Enregistrer la playlist','action.saved':'Playlist enregistrée','action.clear':'Effacer',
    'queue.remove':'retirer','queue.empty':'Aucun morceau dans la file','queue.label':'Playlist','queue.toggle':'Afficher ou masquer la playlist',
    'ctrl.shuffle':'Lecture aléatoire','ctrl.prev':'Précédent','ctrl.play':'Lecture ou pause','ctrl.next':'Suivant','ctrl.repeat':'Répéter','ctrl.seek':'Position','ctrl.volume':'Volume','player.error':'Impossible de lire ce morceau',
    'music.title':'La bande-son de la piste',
    'music.p':"Des morceaux sélectionnés par des producteurs indépendants, pensés pour suivre le rythme de la course — de l'échauffement au dernier virage.",
    'credits.title':'Crédits',
    'footer.contact':'Contact','footer.terms':'Conditions','footer.audioPolicy':"Politique d'utilisation audio",'footer.report':'Signaler un problème',
    'footer.legal':"Les pistes audio répertoriées sur ce site appartiennent à des tiers et sont soumises aux autorisations de leurs producteurs respectifs. Vous pouvez les écouter sur le site selon l'autorisation des artistes ; nous ne concédons ni ne sous-concédons aucune licence sur ces pistes. Pour toute utilisation ou réutilisation, obtenez l'autorisation directement auprès des ayants droit.",
    'footer.copyright':'© 2026 Yukynn. Tous droits réservés.',
    'theme.dark':'Sombre','theme.light':'Clair','theme.blue':'Bleu','theme.pink':'Rose','theme.red':'Rouge','theme.yellow':'Jaune','theme.green':'Vert',
  },
  de: {
    'nav.intro':'Einführung',
    'nav.menu':'Menü','nav.about':'Über','nav.summary':'Übersicht','nav.feature':'Funktion','nav.music':'Musik','nav.credits':'Credits',
    'settings.title':'Einstellungen','settings.language':'Sprache','settings.theme':'Design','settings.motion':'Animationen reduzieren','settings.arrow':'Scroll-Pfeil anzeigen','settings.cursor':'Individueller Cursor',
    'hero.quote':'"Mach jedes Rennen zu einem Alles-oder-Nichts — gib Vollgas; es könnte deine letzte große Geschichte sein."',
    'hero.listen':'anhören',
    'resumo.title':'Jede Runde, ein Kapitel',
    'resumo.p1':'Drift Panel vereint die besten Tracks, um jede Runde zu einem epischen Moment zu machen. Playlists für Adrenalin: intensive Beats für Beschleunigungen, markante Grooves für kontrollierte Kurven und atmosphärische Tracks zum Aufwärmen vor der Strecke.',
    'resumo.p2':'Stöbere, lade deine eigene Musik und passe Listen an, ohne den Browser zu verlassen — alles läuft lokal, ohne Uploads auf einen Server.',
    'sobre.title':'Gemacht für Fahrer und Spieler',
    'sobre.p1':'Einfache Wiedergabesteuerung, Zufallswiedergabe und Wiederholung, mit lokaler Speicherung deiner Playlists. Konzentriere dich aufs Fahren oder Zocken — den Soundtrack übernehmen wir.',
    'sobre.p2':'Erstelle individuelle Sets für jede Session: Training, Rennen, Sim-Racing oder einfach eine freie Fahrt. Speichere Kombinationen und wechsle Modi mit einem Klick.',
    'tags.training':'Training','tags.races':'Rennen','tags.virtual':'Sim-Racing','tags.freeride':'Freie Fahrt','tags.simulator':'Simulator','tags.stream':'Stream',
    'player.title':'Der Player','player.subtitle':'Lokal, ohne Konto, ohne Upload. Deine Tracks bleiben in deinem Browser.','player.noTrack':'Kein Track geladen',
    'action.restore':'Zurücksetzen','action.add':'Tracks hinzufügen','action.save':'Playlist speichern','action.saved':'Playlist gespeichert','action.clear':'Leeren',
    'queue.remove':'entfernen','queue.empty':'Keine Tracks in der Warteschlange','queue.label':'Playlist','queue.toggle':'Playlist ein- oder ausblenden',
    'ctrl.shuffle':'Zufallswiedergabe','ctrl.prev':'Zurück','ctrl.play':'Wiedergabe oder Pause','ctrl.next':'Weiter','ctrl.repeat':'Wiederholen','ctrl.seek':'Position','ctrl.volume':'Lautstärke','player.error':'Dieser Titel konnte nicht abgespielt werden',
    'music.title':'Der Soundtrack der Strecke',
    'music.p':'Tracks, ausgewählt von unabhängigen Produzenten, passend zum Tempo des Rennens — vom Aufwärmen bis zur letzten Kurve.',
    'credits.title':'Credits',
    'footer.contact':'Kontakt','footer.terms':'Bedingungen','footer.audioPolicy':'Richtlinie zur Audionutzung','footer.report':'Problem melden',
    'footer.legal':'Die auf dieser Seite aufgeführten Audiotracks gehören Dritten und unterliegen den Genehmigungen der jeweiligen Produzenten. Du kannst sie gemäß der Erlaubnis der Künstler auf der Seite anhören; wir lizenzieren oder unterlizenzieren diese Tracks nicht. Für Nutzung oder Weiterverwendung hole die Erlaubnis direkt bei den Rechteinhabern ein.',
    'footer.copyright':'© 2026 Yukynn. Alle Rechte vorbehalten.',
    'theme.dark':'Dunkel','theme.light':'Hell','theme.blue':'Blau','theme.pink':'Pink','theme.red':'Rot','theme.yellow':'Gelb','theme.green':'Grün',
  },
  ja: {
    'nav.intro':'はじめに',
    'nav.menu':'メニュー','nav.about':'紹介','nav.summary':'概要','nav.feature':'機能','nav.music':'音楽','nav.credits':'クレジット',
    'settings.title':'設定','settings.language':'言語','settings.theme':'テーマ','settings.motion':'アニメーションを減らす','settings.arrow':'スクロール矢印を表示','settings.cursor':'カスタムカーソル',
    'hero.quote':'「すべてのレースをオール・オア・ナッシングに — 全力で加速しろ。それが最後の大きな物語になるかもしれない。」',
    'hero.listen':'聴く',
    'resumo.title':'一周ごとに、ひとつの物語',
    'resumo.p1':'Drift Panelは、どの一周も特別な瞬間に変える名曲を集めました。加速のための激しいビート、コーナリングを彩るグルーヴ、走行前を温めるアンビエントな曲まで。',
    'resumo.p2':'ブラウザを離れずに音楽を選び、読み込み、プレイリストをカスタマイズできます。すべてローカルで動作し、サーバーへのアップロードはありません。',
    'sobre.title':'ドライバーとゲーマーのために',
    'sobre.p1':'シンプルな再生コントロール、シャッフルとリピート、プレイリストのローカル保存。運転やプレイに集中してください — サウンドトラックはお任せを。',
    'sobre.p2':'練習、レース、シムレーシング、フリー走行など、セッションごとにカスタムセットを作成。組み合わせを保存し、ワンクリックでモードを切り替えられます。',
    'tags.training':'練習','tags.races':'レース','tags.virtual':'シムレーシング','tags.freeride':'フリー走行','tags.simulator':'シミュレーター','tags.stream':'配信',
    'player.title':'プレイヤー','player.subtitle':'ローカル動作、アカウント不要、アップロードなし。曲はブラウザ内に保存されます。','player.noTrack':'曲が読み込まれていません',
    'action.restore':'デフォルトに戻す','action.add':'曲を追加','action.save':'プレイリストを保存','action.saved':'プレイリストを保存しました','action.clear':'クリア',
    'queue.remove':'削除','queue.empty':'キューに曲がありません','queue.label':'プレイリスト','queue.toggle':'プレイリストの表示/非表示',
    'ctrl.shuffle':'シャッフル','ctrl.prev':'前へ','ctrl.play':'再生・一時停止','ctrl.next':'次へ','ctrl.repeat':'リピート','ctrl.seek':'再生位置','ctrl.volume':'音量','player.error':'この曲は再生できませんでした',
    'music.title':'サーキットのサウンドトラック',
    'music.p':'インディーズプロデューサーが厳選した楽曲で、ウォームアップから最終コーナーまでレースのペースに寄り添います。',
    'credits.title':'クレジット',
    'footer.contact':'お問い合わせ','footer.terms':'利用規約','footer.audioPolicy':'オーディオ利用ポリシー','footer.report':'問題を報告',
    'footer.legal':'本サイトに掲載されている音源は第三者に帰属し、それぞれの制作者の許諾に従います。アーティストの許可の範囲内で本サイト上で視聴できますが、当サイトはこれらの楽曲をライセンス・再許諾するものではありません。利用・再利用については、権利者に直接許可を得てください。',
    'footer.copyright':'© 2026 Yukynn. 無断複写・転載を禁じます。',
    'theme.dark':'ダーク','theme.light':'ライト','theme.blue':'ブルー','theme.pink':'ピンク','theme.red':'レッド','theme.yellow':'イエロー','theme.green':'グリーン',
  },
  it: {
    'nav.intro':'Introduzione',
    'nav.menu':'Menu','nav.about':'Chi siamo','nav.summary':'Riepilogo','nav.feature':'Funzione','nav.music':'Musica','nav.credits':'Crediti',
    'settings.title':'Impostazioni','settings.language':'Lingua','settings.theme':'Tema','settings.motion':'Riduci le animazioni','settings.arrow':'Mostra la freccia di scorrimento','settings.cursor':'Cursore personalizzato',
    'hero.quote':'"Fai di ogni gara un tutto o niente — spingi al massimo; potrebbe essere la tua ultima grande storia."',
    'hero.listen':'ascolta',
    'resumo.title':'Ogni giro, un capitolo',
    'resumo.p1':"Drift Panel raccoglie i brani migliori per trasformare ogni giro in un momento epico. Playlist pensate per l'adrenalina: beat intensi per le accelerazioni, groove decisi per le curve controllate e brani atmosferici per scaldarsi prima della pista.",
    'resumo.p2':'Sfoglia, carica la tua musica e personalizza le liste senza uscire dal browser — tutto funziona in locale, senza caricare file su alcun server.',
    'sobre.title':'Pensato per piloti e giocatori',
    'sobre.p1':'Controlli di riproduzione semplici, casuale e ripetizione, con salvataggio locale delle tue playlist. Concentrati sulla guida o sul gioco — alla colonna sonora pensiamo noi.',
    'sobre.p2':'Crea set personalizzati per ogni tipo di sessione: allenamenti, gare, sim racing o semplice giro libero. Salva le combinazioni e cambia modalità con un clic.',
    'tags.training':'Allenamento','tags.races':'Gare','tags.virtual':'Sim racing','tags.freeride':'Giro libero','tags.simulator':'Simulatore','tags.stream':'Stream',
    'player.title':'Il player','player.subtitle':'In locale, senza account, senza upload. I tuoi brani restano nel tuo browser.','player.noTrack':'Nessun brano caricato',
    'action.restore':'Ripristina predefiniti','action.add':'Aggiungi brani','action.save':'Salva playlist','action.saved':'Playlist salvata','action.clear':'Svuota',
    'queue.remove':'rimuovi','queue.empty':'Nessun brano in coda','queue.label':'Playlist','queue.toggle':'Mostra o nascondi la playlist',
    'ctrl.shuffle':'Casuale','ctrl.prev':'Precedente','ctrl.play':'Riproduci o metti in pausa','ctrl.next':'Successivo','ctrl.repeat':'Ripeti','ctrl.seek':'Posizione','ctrl.volume':'Volume','player.error':'Impossibile riprodurre questo brano',
    'music.title':'La colonna sonora della pista',
    'music.p':"Brani selezionati da produttori indipendenti, pensati per seguire il ritmo della gara — dal riscaldamento all'ultima curva.",
    'credits.title':'Crediti',
    'footer.contact':'Contatti','footer.terms':'Termini','footer.audioPolicy':"Politica sull'uso audio",'footer.report':'Segnala un problema',
    'footer.legal':"I brani audio elencati su questo sito appartengono a terzi e sono soggetti alle autorizzazioni dei rispettivi produttori. Puoi ascoltarli sul sito secondo l'autorizzazione degli artisti; non concediamo né subconcediamo in licenza questi brani. Per l'uso o il riutilizzo, ottieni il permesso direttamente dai titolari dei diritti.",
    'footer.copyright':'© 2026 Yukynn. Tutti i diritti riservati.',
    'theme.dark':'Scuro','theme.light':'Chiaro','theme.blue':'Blu','theme.pink':'Rosa','theme.red':'Rosso','theme.yellow':'Giallo','theme.green':'Verde',
  },
};

let currentLang = localStorage.getItem('driftpanel-lang') || 'en';

function t(key) {
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key])
    || (TRANSLATIONS.en && TRANSLATIONS.en[key])
    || key;
}

const osReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let reduceMotion = osReduceMotion || localStorage.getItem('driftpanel-motion') === 'off';
document.documentElement.dataset.motion = reduceMotion ? 'off' : 'on';

let langReady = false;
function applyLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = 'en';
  const run = () => renderLanguage(lang);
  if (langReady && !reduceMotion && document.startViewTransition) document.startViewTransition(run);
  else run();
  langReady = true;
}

function renderLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]:not([data-typewriter])').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.title = t(el.dataset.i18nTitle);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    el.setAttribute('aria-label', t(el.dataset.i18nAria));
  });
  // Refresh dynamic bits that aren't plain data-i18n text nodes
  if (typeof renderQueue === 'function') renderQueue();
  if (typeof currentIndex !== 'undefined' && currentIndex === -1 && typeof trackName !== 'undefined') {
    trackName.textContent = t('player.noTrack');
  }
  updateHeroQuote();
  localStorage.setItem('driftpanel-lang', lang);
}

// ---------- Typewriter effect for the hero quote ----------
const heroQuoteEl = document.getElementById('hero-quote');
let typewriterToken = 0;

function typewriteText(el, text, speed) {
  const token = ++typewriterToken;
  el.classList.add('typing');
  el.textContent = '';
  let i = 0;
  function step() {
    if (token !== typewriterToken) return; // a newer call took over
    el.textContent = text.slice(0, i);
    i++;
    if (i <= text.length) {
      setTimeout(step, speed);
    } else {
      el.classList.remove('typing');
    }
  }
  step();
}

function updateHeroQuote() {
  if (!heroQuoteEl) return;
  const text = t('hero.quote');
  if (reduceMotion) {
    typewriterToken++;
    heroQuoteEl.classList.remove('typing');
    heroQuoteEl.textContent = text;
  } else {
    typewriteText(heroQuoteEl, text, 26);
  }
}

// ============================================================
// Themes
// ============================================================
const THEMES = ['dark', 'light', 'blue', 'pink', 'red', 'yellow', 'green'];
let currentTheme = localStorage.getItem('driftpanel-theme') || 'dark';

// Each theme shows a matching car in the hero. Swap the image file
// here if you want to use your own photos — just keep the theme name as the key.
const HERO_CARS = {
  dark:   { src: 'image/car-dark.webp',   srcset: 'image/car-dark-sm.webp 768w, image/car-dark.webp 1536w',   alt: 'Black car drifting, theme: dark' },
  light:  { src: 'image/car-light.webp',  srcset: 'image/car-light-sm.webp 768w, image/car-light.webp 1536w', alt: 'White car drifting, theme: light' },
  blue:   { src: 'image/car-blue.webp',   srcset: 'image/car-blue-sm.webp 768w, image/car-blue.webp 1536w',   alt: 'Blue car drifting, theme: blue' },
  pink:   { src: 'image/car-pink.webp',   srcset: 'image/car-pink-sm.webp 768w, image/car-pink.webp 1536w',   alt: 'Pink car drifting, theme: pink' },
  red:    { src: 'image/car-red.webp',    srcset: 'image/car-red-sm.webp 768w, image/car-red.webp 1536w',     alt: 'Red car drifting, theme: red' },
  yellow: { src: 'image/car-yellow.webp', srcset: 'image/car-yellow-sm.webp 768w, image/car-yellow.webp 1536w', alt: 'Yellow car drifting, theme: yellow' },
  green:  { src: 'image/car-green.webp',  srcset: 'image/car-green-sm.webp 768w, image/car-green.webp 1536w', alt: 'Green car drifting, theme: green' },
};

function applyTheme(theme) {
  if (!THEMES.includes(theme)) theme = 'dark';
  currentTheme = theme;
  localStorage.setItem('driftpanel-theme', theme);
  const paint = () => document.documentElement.setAttribute('data-theme', theme);
  if (heroCarReady && !reduceMotion && document.startViewTransition) {
    document.startViewTransition(paint).finished.finally(() => updateHeroCar(theme));
  } else {
    paint();
    updateHeroCar(theme);
  }
}

let heroCarReady = false;
let heroCarToken = 0;
// The cars face right, so the new one is revealed by a diagonal curtain
// sweeping left to right, with a streak of the theme's accent color on its edge.
async function updateHeroCar(theme) {
  const el = document.getElementById('hero-photo');
  if (!el) return;
  const car = HERO_CARS[theme] || HERO_CARS.dark;
  if (el.getAttribute('src') === car.src) { heroCarReady = true; return; }
  const animate = heroCarReady && !reduceMotion;
  heroCarReady = true;
  const token = ++heroCarToken;
  try { const pre = new Image(); pre.srcset = car.srcset; pre.src = car.src; await pre.decode(); } catch (e) {}
  if (token !== heroCarToken) return;
  const wrap = el.parentElement;
  wrap.querySelectorAll('.hero-ghost, .hero-streak').forEach(n => n.remove());
  if (animate) {
    const ghost = el.cloneNode();
    ghost.removeAttribute('id');
    ghost.className = 'hero-photo hero-ghost';
    ghost.setAttribute('aria-hidden', 'true');
    wrap.insertBefore(ghost, el);
    const streak = document.createElement('div');
    streak.className = 'hero-streak';
    wrap.appendChild(streak);
    streak.addEventListener('animationend', () => { ghost.remove(); streak.remove(); });
  }
  el.setAttribute('src', car.src);
  el.setAttribute('srcset', car.srcset);
  el.setAttribute('alt', car.alt);
  el.classList.remove('curtain');
  if (animate) { void el.offsetWidth; el.classList.add('curtain'); }
}

function preloadHeroCars() {
  Object.values(HERO_CARS).forEach(c => { const i = new Image(); i.srcset = c.srcset; i.src = c.src; });
}

// ---------- Scroll reveal ----------
const revealTargets = document.querySelectorAll('.section, .hero');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealTargets.forEach(el => revealObserver.observe(el));

// ---------- Parallax ----------
const parallaxEls = document.querySelectorAll('[data-parallax]');
const heroPhotoEl = document.getElementById('hero-photo');
if (heroPhotoEl) heroPhotoEl.dataset.parallax = '0.05';
const allParallaxEls = heroPhotoEl ? [...parallaxEls, heroPhotoEl] : [...parallaxEls];
const parallaxState = new Map();
function computeParallaxTargets() {
  const vh = window.innerHeight;
  allParallaxEls.forEach(el => {
    const speed = parseFloat(el.dataset.parallax) || 0.1;
    const rect = el.getBoundingClientRect();
    const centerOffset = (rect.top + rect.height / 2) - vh / 2;
    const target = centerOffset * -speed;
    const state = parallaxState.get(el) || { current: 0, target: 0 };
    state.target = target;
    parallaxState.set(el, state);
  });
}
function parallaxLoop() {
  if (!reduceMotion) {
    allParallaxEls.forEach(el => {
      const state = parallaxState.get(el);
      if (!state) return;
      state.current += (state.target - state.current) * 0.08;
      el.style.transform = `translate3d(0, ${state.current.toFixed(2)}px, 0)`;
    });
  }
  requestAnimationFrame(parallaxLoop);
}
// Recalcula sem saltar: usada quando as animações são reativadas, para não
// fazer os elementos "voarem" do zero até a posição atual em um único frame.
function updateParallax() {
  computeParallaxTargets();
  parallaxState.forEach(state => { state.current = state.target; });
}
{
  window.addEventListener('scroll', computeParallaxTargets, { passive: true });
  window.addEventListener('resize', computeParallaxTargets);
  updateParallax();
  requestAnimationFrame(parallaxLoop);
}

// ---------- Player card tilt ----------
const playerCardEl = document.querySelector('.player-card');
if (playerCardEl && window.matchMedia('(pointer: fine)').matches) {
  playerCardEl.addEventListener('mousemove', (e) => {
    if (reduceMotion) return;
    const rect = playerCardEl.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    playerCardEl.style.transform = `perspective(700px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg)`;
  });
  playerCardEl.addEventListener('mouseleave', () => {
    playerCardEl.style.transform = '';
  });
}

// ---------- Nav active state ----------
const navLinks = document.querySelectorAll('.nav-links a');
const navSections = document.querySelectorAll('section[id], header[id]');
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.target === id);
      });
    }
  });
}, { rootMargin: '-45% 0px -45% 0px' });
navSections.forEach(sec => navObserver.observe(sec));

// ---------- Player ----------
const audio = document.getElementById('audio-el');
const btnPlay = document.getElementById('btn-play');
const iconPlay = document.getElementById('icon-play');
const iconPause = document.getElementById('icon-pause');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnShuffle = document.getElementById('btn-shuffle');
const btnRepeat = document.getElementById('btn-repeat');
const seek = document.getElementById('seek');
const timeCurrent = document.getElementById('time-current');
const timeTotal = document.getElementById('time-total');
const volume = document.getElementById('volume');
const trackName = document.getElementById('track-name');
const coverArt = document.getElementById('cover-art');
const coverFallback = document.getElementById('cover-fallback');
const queueList = document.getElementById('queue-list');
const fileInput = document.getElementById('file-input');
const btnRestore = document.getElementById('btn-restore');
const btnSave = document.getElementById('btn-save');
const btnClear = document.getElementById('btn-clear');
const btnToggleQueue = document.getElementById('btn-toggle-queue');
const menuBtn = document.getElementById('menu-btn');
const navLinksEl = document.getElementById('nav-links');
const navScrim = document.getElementById('nav-scrim');
function setMenuOpen(open) {
  navLinksEl.classList.toggle('open', open);
  navScrim.hidden = !open;
  menuBtn.setAttribute('aria-expanded', String(open));
}
menuBtn.addEventListener('click', () => setMenuOpen(!navLinksEl.classList.contains('open')));
navScrim.addEventListener('click', () => setMenuOpen(false));
navLinksEl.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenuOpen(false)));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navLinksEl.classList.contains('open')) { setMenuOpen(false); menuBtn.focus(); }
});

const langSelect = document.getElementById('lang-select');
const themeSelect = document.getElementById('theme-select');

let queue = [];       // { name, url }
let currentIndex = -1;
let isShuffle = false;
let isRepeat = false;
const playHistory = [];

// ---------- Default playlist ----------
// Put your audio files in audio/ using these names
// (or edit the paths below to match your own files).
const DEFAULT_TRACKS = [
  { name: 'Young Girl', url: 'audio/young-girl.mp3', cover: 'image/covers/young-girl.webp' },
  { name: 'Verdade Chinesa', url: 'audio/verdade-chinesa.mp3', cover: 'image/covers/verdade-chinesa.webp' },
  { name: 'I Wonder', url: 'audio/i-wonder.mp3', cover: 'image/covers/i-wonder.webp' },
  { name: 'Bound', url: 'audio/bound.mp3', cover: 'image/covers/bound.webp' },
  { name: 'No surprises', url: 'audio/no-surprises.mp3', cover: 'image/covers/no-surprises.webp' },
  { name: 'Acenda o Farol', url: 'audio/acenda-o-farol.mp3', cover: 'image/covers/acenda-o-farol.webp' },
];

function loadDefaultPlaylist() {
  queue = DEFAULT_TRACKS.map(tr => ({ ...tr, def: true }));
  currentIndex = -1;
  trackName.textContent = t('player.noTrack');
  renderQueue();
}

function formatTime(sec) {
  if (!isFinite(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function renderQueue() {
  queueList.innerHTML = '';
  if (!queue.length) {
    const empty = document.createElement('li');
    empty.className = 'queue-empty';
    empty.textContent = t('queue.empty');
    queueList.appendChild(empty);
    return;
  }
  queue.forEach((track, i) => {
    const li = document.createElement('li');
    li.className = i === currentIndex ? 'current' : '';
    const label = document.createElement('span');
    label.textContent = track.name;
    li.appendChild(label);
    const removeBtn = document.createElement('button');
    removeBtn.textContent = t('queue.remove');
    removeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      removeTrack(i);
    });
    li.appendChild(removeBtn);
    li.addEventListener('click', () => loadTrack(i, true));
    queueList.appendChild(li);
  });
}

function loadTrack(index, autoplay) {
  if (index < 0 || index >= queue.length) return;
  currentIndex = index;
  const track = queue[index];
  audio.src = track.url;
  trackName.textContent = track.name;
  coverFallback.textContent = track.cover ? 'DP' : track.name.slice(0, 2).toUpperCase();
  coverArt.alt = track.cover ? track.name : '';
  if (track.cover && coverArt.getAttribute('src') === track.cover) {
    coverArt.style.opacity = 1;
  } else if (track.cover) {
    coverArt.style.opacity = 0;
    coverArt.onload = () => { coverArt.style.opacity = 1; };
    coverArt.src = track.cover;
  } else {
    coverArt.style.opacity = 0;
  }
  renderQueue();
  audio.volume = parseFloat(volume.value);
  localStorage.setItem('driftpanel-last-track', track.def ? track.url : '');
  if (autoplay) audio.play().catch(() => {});
  else if (savedPosition && savedPosition.url === track.url) {
    audio.addEventListener('loadedmetadata', () => { audio.currentTime = savedPosition.time; }, { once: true });
  }
  updateMediaSession(track);
}

function togglePlay() {
  if (!queue.length) return;
  if (currentIndex === -1) { loadTrack(0, true); return; }
  if (audio.paused) audio.play().catch(() => {});
  else audio.pause();
}

function playNext() {
  if (!queue.length) return;
  let next;
  if (isShuffle && queue.length > 1) {
    do { next = Math.floor(Math.random() * queue.length); } while (next === currentIndex);
  } else {
    next = (currentIndex + 1) % queue.length;
  }
  if (currentIndex >= 0) playHistory.push(currentIndex);
  if (playHistory.length > 100) playHistory.shift();
  loadTrack(next, true);
}

function playPrev() {
  if (!queue.length) return;
  if (audio.currentTime > 3) { audio.currentTime = 0; return; }
  const prev = playHistory.length ? playHistory.pop() : (currentIndex - 1 + queue.length) % queue.length;
  loadTrack(prev, true);
}

function removeTrack(index) {
  const wasCurrent = index === currentIndex;
  revokeIfUpload(queue[index]);
  playHistory.length = 0;
  queue.splice(index, 1);
  if (wasCurrent) {
    audio.pause();
    audio.src = '';
    currentIndex = -1;
    trackName.textContent = t('player.noTrack');
  } else if (index < currentIndex) {
    currentIndex -= 1;
  }
  renderQueue();
}

// Playback state icons
audio.addEventListener('play', () => {
  iconPlay.style.display = 'none';
  iconPause.style.display = 'block';
  btnPlay.classList.add('is-playing');
});
audio.addEventListener('pause', () => {
  iconPlay.style.display = 'block';
  iconPause.style.display = 'none';
  btnPlay.classList.remove('is-playing');
});
audio.addEventListener('ended', () => {
  if (isRepeat) { loadTrack(currentIndex, true); }
  else { playNext(); }
});
audio.addEventListener('loadedmetadata', () => {
  timeTotal.textContent = formatTime(audio.duration);
  seek.max = audio.duration || 0;
});
audio.addEventListener('timeupdate', () => {
  timeCurrent.textContent = formatTime(audio.currentTime);
  seek.value = audio.currentTime;
});

seek.addEventListener('input', () => { audio.currentTime = seek.value; });
volume.addEventListener('input', () => {
  audio.volume = parseFloat(volume.value);
  localStorage.setItem('driftpanel-volume', volume.value);
});
const savedVolume = localStorage.getItem('driftpanel-volume');
if (savedVolume !== null) { volume.value = savedVolume; }
audio.volume = parseFloat(volume.value);

btnPlay.addEventListener('click', togglePlay);
btnNext.addEventListener('click', playNext);
btnPrev.addEventListener('click', playPrev);

btnShuffle.addEventListener('click', () => {
  isShuffle = !isShuffle;
  btnShuffle.classList.toggle('is-active', isShuffle);
});
btnRepeat.addEventListener('click', () => {
  isRepeat = !isRepeat;
  btnRepeat.classList.toggle('is-active', isRepeat);
});

fileInput.addEventListener('change', (e) => {
  const files = Array.from(e.target.files);
  files.forEach(file => {
    const entry = { id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7), name: file.name.replace(/\.[^/.]+$/, ''), file, url: URL.createObjectURL(file) };
      queue.push(entry);
      readId3Cover(file).then(cover => {
        if (!cover) return;
        entry.cover = cover;
        if (queue[currentIndex] === entry) loadTrack(currentIndex, false);
      });
  });
  renderQueue();
  if (currentIndex === -1 && queue.length) loadTrack(0, false);
  fileInput.value = '';
});

btnClear.addEventListener('click', () => {
  audio.pause();
  audio.src = '';
  queue.forEach(revokeIfUpload);
  playHistory.length = 0;
  queue = [];
  currentIndex = -1;
  trackName.textContent = t('player.noTrack');
  renderQueue();
});

btnRestore.addEventListener('click', () => {
  audio.pause();
  audio.src = '';
  isShuffle = false;
  isRepeat = false;
  btnShuffle.classList.remove('is-active');
  btnRepeat.classList.remove('is-active');
  volume.value = 0.8;
  audio.volume = 0.8;
  queue.forEach(revokeIfUpload);
  playHistory.length = 0;
  loadDefaultPlaylist();
  localStorage.removeItem('driftpanel-playlist');
  dbPutAll([]).catch(() => {});
});

btnSave.addEventListener('click', async () => {
  try {
    // Default tracks are saved by reference; uploaded files go into IndexedDB.
    const order = queue.map(tr => tr.def ? { t: 'd', url: tr.url } : { t: 'f', id: tr.id });
    await dbPutAll(queue.filter(tr => tr.file).map(tr => ({ id: tr.id, name: tr.name, file: tr.file })));
    localStorage.setItem('driftpanel-playlist', JSON.stringify(order));
    btnSave.classList.add('saved');
    btnSave.title = t('action.saved');
    setTimeout(() => { btnSave.classList.remove('saved'); btnSave.title = t('action.save'); }, 1800);
  } catch (err) {
    console.error('Could not save the playlist:', err);
  }
});

// ---------- Errors, keyboard access, persistence ----------
let errorStreak = 0;
audio.addEventListener('playing', () => { errorStreak = 0; });
audio.addEventListener('error', () => {
  if (!audio.getAttribute('src') || currentIndex < 0) return;
  errorStreak++;
  trackName.textContent = t('player.error');
  const failed = currentIndex;
  if (queue.length > 1 && errorStreak < queue.length) {
    setTimeout(() => { if (currentIndex === failed) playNext(); }, 1500);
  }
});

document.querySelector('label[for="file-input"]').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fileInput.click(); }
});

function revokeIfUpload(tr) { if (tr && tr.file) URL.revokeObjectURL(tr.url); }

const DB_NAME = 'driftpanel', DB_STORE = 'tracks';
function dbOpen() {
  return new Promise((res, rej) => {
    const r = indexedDB.open(DB_NAME, 1);
    r.onupgradeneeded = () => r.result.createObjectStore(DB_STORE, { keyPath: 'id' });
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
}
async function dbPutAll(items) {
  const db = await dbOpen();
  return new Promise((res, rej) => {
    const tx = db.transaction(DB_STORE, 'readwrite');
    const store = tx.objectStore(DB_STORE);
    store.clear();
    items.forEach(i => store.put(i));
    tx.oncomplete = () => res();
    tx.onerror = () => rej(tx.error);
  });
}
async function dbGetAll() {
  const db = await dbOpen();
  return new Promise((res, rej) => {
    const r = db.transaction(DB_STORE).objectStore(DB_STORE).getAll();
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
}

let savedPosition = null;
try { savedPosition = JSON.parse(localStorage.getItem('driftpanel-position') || 'null'); } catch (e) {}
audio.addEventListener('timeupdate', () => {
  if (currentIndex < 0 || !queue[currentIndex] || !queue[currentIndex].def) return;
  localStorage.setItem('driftpanel-position', JSON.stringify({ url: queue[currentIndex].url, time: audio.currentTime }));
});

async function restorePlaylist() {
  try {
    const saved = JSON.parse(localStorage.getItem('driftpanel-playlist') || 'null');
    if (Array.isArray(saved) && (saved.length === 0 || typeof saved[0] === 'object')) {
      const files = new Map((await dbGetAll()).map(f => [f.id, f]));
      queue = saved.map(s => {
        if (s.t === 'd') { const d = DEFAULT_TRACKS.find(x => x.url === s.url); return d && { ...d, def: true }; }
        const f = files.get(s.id);
        return f && { id: f.id, name: f.name, file: f.file, url: URL.createObjectURL(f.file) };
      }).filter(Boolean);
      currentIndex = -1;
      trackName.textContent = t('player.noTrack');
      renderQueue();
      return;
    }
  } catch (err) {
    console.error('Could not restore the playlist:', err);
  }
  loadDefaultPlaylist();
  const lastUrl = localStorage.getItem('driftpanel-last-track');
  const lastIdx = lastUrl ? queue.findIndex(tr => tr.url === lastUrl) : -1;
  if (lastIdx >= 0) loadTrack(lastIdx, false);
}

// ---------- Language & theme controls ----------
langSelect.value = currentLang;
themeSelect.value = currentTheme;
langSelect.addEventListener('change', (e) => applyLanguage(e.target.value));
themeSelect.addEventListener('change', (e) => applyTheme(e.target.value));

// ---------- Settings menu (language, theme, animations) ----------
const settingsBtn = document.getElementById('settings-btn');
const settingsPanel = document.getElementById('settings-panel');
const motionToggle = document.getElementById('motion-toggle');
const arrowToggle = document.getElementById('arrow-toggle');

function setSettingsOpen(open) {
  settingsPanel.hidden = !open;
  settingsBtn.setAttribute('aria-expanded', String(open));
}
settingsBtn.addEventListener('click', () => setSettingsOpen(settingsPanel.hidden));
document.addEventListener('click', (e) => {
  if (!settingsPanel.hidden && !settingsPanel.contains(e.target) && !settingsBtn.contains(e.target)) setSettingsOpen(false);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !settingsPanel.hidden) { setSettingsOpen(false); settingsBtn.focus(); }
});

function setMotionOff(off, save = true) {
  reduceMotion = off;
  document.documentElement.dataset.motion = off ? 'off' : 'on';
  if (save) localStorage.setItem('driftpanel-motion', off ? 'off' : 'on');
  if (off) {
    allParallaxEls.forEach(el => { el.style.transform = ''; });
    if (playerCardEl) playerCardEl.style.transform = '';
    updateHeroQuote();
  } else {
    updateParallax();
  }
}
motionToggle.checked = reduceMotion;
motionToggle.disabled = osReduceMotion;   // the system setting always wins
motionToggle.addEventListener('change', (e) => setMotionOff(e.target.checked));

let showArrow = localStorage.getItem('driftpanel-arrow') !== 'off';
function setArrowVisible(visible, save = true) {
  showArrow = visible;
  document.documentElement.dataset.arrow = visible ? 'on' : 'off';
  if (save) localStorage.setItem('driftpanel-arrow', visible ? 'on' : 'off');
}
setArrowVisible(showArrow, false);
arrowToggle.checked = showArrow;
arrowToggle.addEventListener('change', (e) => setArrowVisible(e.target.checked));

// ---------- Queue show/hide toggle ----------
let queueCollapsed = localStorage.getItem('driftpanel-queue-collapsed') === 'true';
function applyQueueCollapsed() {
  queueList.classList.toggle('collapsed', queueCollapsed);
  btnToggleQueue.classList.toggle('is-collapsed', queueCollapsed);
  btnToggleQueue.setAttribute('aria-expanded', String(!queueCollapsed));
}
btnToggleQueue.addEventListener('click', () => {
  queueCollapsed = !queueCollapsed;
  localStorage.setItem('driftpanel-queue-collapsed', String(queueCollapsed));
  applyQueueCollapsed();
});
applyQueueCollapsed();

// ---------- Init ----------
applyTheme(currentTheme);
applyLanguage(currentLang);
restorePlaylist();
setTimeout(preloadHeroCars, 2000);

// ---------- Keyboard shortcuts ----------
document.addEventListener('keydown', (e) => {
  const tag = (e.target.tagName || '').toLowerCase();
  if (tag === 'input' || tag === 'select' || tag === 'textarea' || !settingsPanel.hidden) return;
  if (e.code === 'Space') { e.preventDefault(); togglePlay(); }
  else if (e.code === 'ArrowRight') { playNext(); }
  else if (e.code === 'ArrowLeft') { playPrev(); }
  else if (e.key === 'm' || e.key === 'M') {
    volume.dataset.prev = volume.dataset.prev || '0.8';
    if (parseFloat(volume.value) > 0) { volume.dataset.prev = volume.value; volume.value = 0; }
    else { volume.value = volume.dataset.prev; }
    volume.dispatchEvent(new Event('input'));
  }
});

// ---------- Media Session (lock screen / hardware keys) ----------
function updateMediaSession(track) {
  if (!('mediaSession' in navigator)) return;
  navigator.mediaSession.metadata = new MediaMetadata({
    title: track.name,
    artist: 'Drift Panel',
    artwork: track.cover ? [{ src: track.cover, sizes: '512x512', type: 'image/webp' }] : [],
  });
}
if ('mediaSession' in navigator) {
  navigator.mediaSession.setActionHandler('play', () => togglePlay());
  navigator.mediaSession.setActionHandler('pause', () => togglePlay());
  navigator.mediaSession.setActionHandler('previoustrack', () => playPrev());
  navigator.mediaSession.setActionHandler('nexttrack', () => playNext());
}
audio.addEventListener('play', () => { if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'playing'; });
audio.addEventListener('pause', () => { if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'paused'; });

// ---------- Cover art embedded in uploaded MP3 files (ID3v2 APIC) ----------
async function readId3Cover(file) {
  try {
    const head = new Uint8Array(await file.slice(0, 10).arrayBuffer());
    if (head[0] !== 0x49 || head[1] !== 0x44 || head[2] !== 0x33) return null; // "ID3"
    const size = ((head[6] & 0x7f) << 21) | ((head[7] & 0x7f) << 14) | ((head[8] & 0x7f) << 7) | (head[9] & 0x7f);
    const tag = new Uint8Array(await file.slice(0, 10 + size).arrayBuffer());
    const v4 = head[3] >= 4;
    let off = 10;
    while (off + 10 <= tag.length) {
      const id = String.fromCharCode(tag[off], tag[off + 1], tag[off + 2], tag[off + 3]);
      let fsize;
      if (v4) fsize = ((tag[off + 4] & 0x7f) << 21) | ((tag[off + 5] & 0x7f) << 14) | ((tag[off + 6] & 0x7f) << 7) | (tag[off + 7] & 0x7f);
      else fsize = (tag[off + 4] << 24) | (tag[off + 5] << 16) | (tag[off + 6] << 8) | tag[off + 7];
      if (id === 'APIC' && fsize > 0) {
        const body = tag.slice(off + 10, off + 10 + fsize);
        let p2 = 1;
        let mimeEnd = body.indexOf(0, p2);
        const mime = new TextDecoder('latin1').decode(body.slice(p2, mimeEnd)) || 'image/jpeg';
        p2 = mimeEnd + 2; // skip mime terminator + picture type byte
        const enc = body[0];
        const step = (enc === 1 || enc === 2) ? 2 : 1;
        let descEnd = p2;
        while (descEnd < body.length - (step - 1)) {
          if (step === 1 ? body[descEnd] === 0 : (body[descEnd] === 0 && body[descEnd + 1] === 0)) break;
          descEnd += step;
        }
        const imgData = body.slice(descEnd + step);
        return URL.createObjectURL(new Blob([imgData], { type: mime }));
      }
      if (!id.trim() || fsize <= 0) break;
      off += 10 + fsize;
    }
  } catch (err) { /* not a readable ID3 cover; fall back to initials */ }
  return null;
}


// ---------- Custom neon cursor ----------
(function () {
  if (!window.matchMedia('(pointer: fine)').matches) return; // celular/tablet: sem alterações

  const canvas = document.createElement('canvas');
  canvas.id = 'cursor-canvas';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener('resize', resize);
  resize();

  const TRAIL_MS = 420;     // tempo até um ponto do rastro sumir por completo
  const EASE = 0.32;        // suavização da bolinha em direção ao mouse (0-1, maior = mais colada)
  let points = [];          // { x, y, t }
  let targetX = window.innerWidth / 2, targetY = window.innerHeight / 2;
  let curX = targetX, curY = targetY;
  let hasMoved = false;
  let hovering = false;
  let hoveringText = false;
  let pulse = 0;
  let active = localStorage.getItem('driftpanel-cursor') !== 'off';

  function accentColor() {
    return getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#FF3B30';
  }

  const TEXT_SEL = 'input:not([type="range"]):not([type="checkbox"]):not([type="file"]):not([type="radio"]), textarea, [contenteditable="true"]';
  const HOVER_SEL = 'a, button, select, label, input[type="range"], input[type="checkbox"], [role="switch"], .icon-btn, .ctrl-btn, .hero-title, .visual-tags span, .player-queue li';

  document.addEventListener('mousemove', (e) => {
    targetX = e.clientX; targetY = e.clientY;
    if (!hasMoved) { curX = targetX; curY = targetY; hasMoved = true; }
    const overText = e.target.closest ? e.target.closest(TEXT_SEL) : null;
    hoveringText = !!overText;
    hovering = !hoveringText && !!(e.target.closest && e.target.closest(HOVER_SEL));
  }, { passive: true });
  document.addEventListener('mousedown', () => { pulse = 1; });
  document.addEventListener('mouseleave', () => { points = []; });

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // a bolinha persegue o mouse em vez de teleportar até ele
    curX += (targetX - curX) * EASE;
    curY += (targetY - curY) * EASE;

    const now = performance.now();
    if (active && !reduceMotion && !hoveringText) {
      points.push({ x: curX, y: curY, t: now });
    }
    // pontos velhos somem sozinhos, mesmo com o mouse parado
    while (points.length && now - points[0].t > TRAIL_MS) points.shift();

    if (active && !reduceMotion && points.length > 1) {
      const color = accentColor();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      for (let i = 1; i < points.length; i++) {
        const p0 = points[i - 1], p1 = points[i];
        const age = 1 - (now - p1.t) / TRAIL_MS;   // 1 = recém-criado, 0 = prestes a sumir
        const eased = age * age;                   // permanece visível e apaga rápido no fim
        const midX = (p0.x + p1.x) / 2, midY = (p0.y + p1.y) / 2;
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.quadraticCurveTo(p0.x, p0.y, midX, midY);
        ctx.strokeStyle = color;
        ctx.globalAlpha = eased * 0.6;
        ctx.lineWidth = 0.5 + eased * 3;
        ctx.shadowColor = color;
        ctx.shadowBlur = 9 * eased;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }
    if (active && !reduceMotion && !hoveringText) {
      const color = accentColor();
      const r = (hovering ? 9 : 5.5) + pulse * 6;
      ctx.beginPath();
      ctx.shadowColor = color;
      ctx.shadowBlur = 14;
      if (hovering) {
        ctx.lineWidth = 2;
        ctx.strokeStyle = color;
        ctx.arc(curX, curY, r, 0, Math.PI * 2);
        ctx.stroke();
      } else {
        ctx.fillStyle = color;
        ctx.arc(curX, curY, r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
    }
    pulse += (0 - pulse) * 0.15;
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);

  function setCursorActive(on, save) {
    active = on;
    document.body.classList.toggle('custom-cursor-active', on);
    canvas.style.display = on ? 'block' : 'none';
    if (save !== false) localStorage.setItem('driftpanel-cursor', on ? 'on' : 'off');
    if (!on) points = [];
  }
  setCursorActive(active, false);

  const cursorToggle = document.getElementById('cursor-toggle');
  cursorToggle.checked = active;
  cursorToggle.addEventListener('change', (e) => setCursorActive(e.target.checked, true));
})();

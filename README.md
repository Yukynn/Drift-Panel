# Drift Panel

Site com tema de drift/automobilismo: um player de música que roda no
navegador, sem conta e sem servidor. Tudo acontece no lado do cliente.

## Estrutura

```
driftpanel/
  index.html            marcação da página
  design/style.css       estilos, temas de cor e animações
  animation/script.js    idiomas, temas, player e interações
  image/                 fotos dos carros (WebP) e capas das faixas
  audio/                 faixas padrão em MP3
```

## Rodando localmente

Como o player lê o arquivo `audio/` por caminho relativo, abra a pasta
com um servidor local em vez de abrir o `index.html` direto (alguns
navegadores bloqueiam `fetch`/áudio em `file://`):

```
npx serve .
# ou
python3 -m http.server
```

## Funcionalidades

- 7 temas de cor e 7 idiomas, com um painel de configurações (ícone de
  engrenagem) que também permite reduzir as animações.
- Player com shuffle, repeat, playlist, upload de músicas locais e
  atalhos de teclado (espaço, setas, M).
- Progresso, volume e a última faixa tocada ficam salvos no navegador.
- Integração com a Media Session API (teclas de mídia e tela de
  bloqueio no celular).

## Créditos

As faixas padrão são de terceiros, creditadas na seção "Créditos" da
própria página. Confirme a licença de uso antes de publicar alterações
no repertório.

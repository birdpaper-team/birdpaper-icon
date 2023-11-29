import type { App } from 'vue';
import _IconAlbumLine from './icon-album-line.vue';

const IconAlbumLine = Object.assign(_IconAlbumLine, {
  install: (app: App) => {
    app.component(_IconAlbumLine.name, _IconAlbumLine);
  }
});

export default IconAlbumLine;
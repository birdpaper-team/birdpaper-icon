import type { App } from 'vue';
import _IconAlbumFill from './icon-album-fill.vue';

const IconAlbumFill = Object.assign(_IconAlbumFill, {
  install: (app: App) => {
    app.component(_IconAlbumFill.name, _IconAlbumFill);
  }
});

export default IconAlbumFill;
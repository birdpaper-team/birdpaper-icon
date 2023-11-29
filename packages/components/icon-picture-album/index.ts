import type { App } from 'vue';
import _IconPictureAlbum from './icon-picture-album.vue';

const IconPictureAlbum = Object.assign(_IconPictureAlbum, {
  install: (app: App) => {
    app.component(_IconPictureAlbum.name, _IconPictureAlbum);
  }
});

export default IconPictureAlbum;
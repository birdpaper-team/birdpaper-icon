import type { App } from 'vue';
import _IconPictureInPictureFill from './icon-picture-in-picture-fill.vue';

const IconPictureInPictureFill = Object.assign(_IconPictureInPictureFill, {
  install: (app: App) => {
    app.component(_IconPictureInPictureFill.name, _IconPictureInPictureFill);
  }
});

export default IconPictureInPictureFill;
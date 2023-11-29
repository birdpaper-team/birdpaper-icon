import type { App } from 'vue';
import _IconPictureInPictureExitFill from './icon-picture-in-picture-exit-fill.vue';

const IconPictureInPictureExitFill = Object.assign(_IconPictureInPictureExitFill, {
  install: (app: App) => {
    app.component(_IconPictureInPictureExitFill.name, _IconPictureInPictureExitFill);
  }
});

export default IconPictureInPictureExitFill;
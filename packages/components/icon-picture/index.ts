import type { App } from 'vue';
import _IconPicture from './icon-picture.vue';

const IconPicture = Object.assign(_IconPicture, {
  install: (app: App) => {
    app.component(_IconPicture.name, _IconPicture);
  }
});

export default IconPicture;
import type { App } from 'vue';
import _IconErrorPicture from './icon-error-picture.vue';

const IconErrorPicture = Object.assign(_IconErrorPicture, {
  install: (app: App) => {
    app.component(_IconErrorPicture.name, _IconErrorPicture);
  }
});

export default IconErrorPicture;
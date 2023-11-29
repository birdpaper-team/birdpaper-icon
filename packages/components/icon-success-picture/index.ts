import type { App } from 'vue';
import _IconSuccessPicture from './icon-success-picture.vue';

const IconSuccessPicture = Object.assign(_IconSuccessPicture, {
  install: (app: App) => {
    app.component(_IconSuccessPicture.name, _IconSuccessPicture);
  }
});

export default IconSuccessPicture;
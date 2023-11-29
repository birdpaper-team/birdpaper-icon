import type { App } from 'vue';
import _IconSelfie from './icon-selfie.vue';

const IconSelfie = Object.assign(_IconSelfie, {
  install: (app: App) => {
    app.component(_IconSelfie.name, _IconSelfie);
  }
});

export default IconSelfie;
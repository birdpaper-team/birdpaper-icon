import type { App } from 'vue';
import _IconFacebook from './icon-facebook.vue';

const IconFacebook = Object.assign(_IconFacebook, {
  install: (app: App) => {
    app.component(_IconFacebook.name, _IconFacebook);
  }
});

export default IconFacebook;
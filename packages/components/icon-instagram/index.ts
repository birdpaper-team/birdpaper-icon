import type { App } from 'vue';
import _IconInstagram from './icon-instagram.vue';

const IconInstagram = Object.assign(_IconInstagram, {
  install: (app: App) => {
    app.component(_IconInstagram.name, _IconInstagram);
  }
});

export default IconInstagram;
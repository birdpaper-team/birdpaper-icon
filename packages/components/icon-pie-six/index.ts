import type { App } from 'vue';
import _IconPieSix from './icon-pie-six.vue';

const IconPieSix = Object.assign(_IconPieSix, {
  install: (app: App) => {
    app.component(_IconPieSix.name, _IconPieSix);
  }
});

export default IconPieSix;
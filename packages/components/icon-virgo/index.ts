import type { App } from 'vue';
import _IconVirgo from './icon-virgo.vue';

const IconVirgo = Object.assign(_IconVirgo, {
  install: (app: App) => {
    app.component(_IconVirgo.name, _IconVirgo);
  }
});

export default IconVirgo;
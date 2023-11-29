import type { App } from 'vue';
import _IconPalm from './icon-palm.vue';

const IconPalm = Object.assign(_IconPalm, {
  install: (app: App) => {
    app.component(_IconPalm.name, _IconPalm);
  }
});

export default IconPalm;
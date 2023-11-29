import type { App } from 'vue';
import _IconPot from './icon-pot.vue';

const IconPot = Object.assign(_IconPot, {
  install: (app: App) => {
    app.component(_IconPot.name, _IconPot);
  }
});

export default IconPot;
import type { App } from 'vue';
import _IconBoots from './icon-boots.vue';

const IconBoots = Object.assign(_IconBoots, {
  install: (app: App) => {
    app.component(_IconBoots.name, _IconBoots);
  }
});

export default IconBoots;
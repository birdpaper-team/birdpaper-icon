import type { App } from 'vue';
import _IconCastle from './icon-castle.vue';

const IconCastle = Object.assign(_IconCastle, {
  install: (app: App) => {
    app.component(_IconCastle.name, _IconCastle);
  }
});

export default IconCastle;
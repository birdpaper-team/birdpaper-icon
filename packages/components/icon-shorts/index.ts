import type { App } from 'vue';
import _IconShorts from './icon-shorts.vue';

const IconShorts = Object.assign(_IconShorts, {
  install: (app: App) => {
    app.component(_IconShorts.name, _IconShorts);
  }
});

export default IconShorts;
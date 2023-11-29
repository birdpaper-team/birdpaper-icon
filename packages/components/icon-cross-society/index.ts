import type { App } from 'vue';
import _IconCrossSociety from './icon-cross-society.vue';

const IconCrossSociety = Object.assign(_IconCrossSociety, {
  install: (app: App) => {
    app.component(_IconCrossSociety.name, _IconCrossSociety);
  }
});

export default IconCrossSociety;
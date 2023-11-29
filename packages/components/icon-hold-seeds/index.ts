import type { App } from 'vue';
import _IconHoldSeeds from './icon-hold-seeds.vue';

const IconHoldSeeds = Object.assign(_IconHoldSeeds, {
  install: (app: App) => {
    app.component(_IconHoldSeeds.name, _IconHoldSeeds);
  }
});

export default IconHoldSeeds;
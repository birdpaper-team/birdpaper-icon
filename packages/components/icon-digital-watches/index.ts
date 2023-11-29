import type { App } from 'vue';
import _IconDigitalWatches from './icon-digital-watches.vue';

const IconDigitalWatches = Object.assign(_IconDigitalWatches, {
  install: (app: App) => {
    app.component(_IconDigitalWatches.name, _IconDigitalWatches);
  }
});

export default IconDigitalWatches;
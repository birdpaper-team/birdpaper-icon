import type { App } from 'vue';
import _IconHeavyRain from './icon-heavy-rain.vue';

const IconHeavyRain = Object.assign(_IconHeavyRain, {
  install: (app: App) => {
    app.component(_IconHeavyRain.name, _IconHeavyRain);
  }
});

export default IconHeavyRain;
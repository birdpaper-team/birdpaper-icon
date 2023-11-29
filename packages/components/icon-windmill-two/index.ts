import type { App } from 'vue';
import _IconWindmillTwo from './icon-windmill-two.vue';

const IconWindmillTwo = Object.assign(_IconWindmillTwo, {
  install: (app: App) => {
    app.component(_IconWindmillTwo.name, _IconWindmillTwo);
  }
});

export default IconWindmillTwo;
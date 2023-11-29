import type { App } from 'vue';
import _IconWindmillOne from './icon-windmill-one.vue';

const IconWindmillOne = Object.assign(_IconWindmillOne, {
  install: (app: App) => {
    app.component(_IconWindmillOne.name, _IconWindmillOne);
  }
});

export default IconWindmillOne;
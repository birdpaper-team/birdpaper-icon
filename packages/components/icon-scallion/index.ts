import type { App } from 'vue';
import _IconScallion from './icon-scallion.vue';

const IconScallion = Object.assign(_IconScallion, {
  install: (app: App) => {
    app.component(_IconScallion.name, _IconScallion);
  }
});

export default IconScallion;
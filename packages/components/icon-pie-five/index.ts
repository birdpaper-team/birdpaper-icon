import type { App } from 'vue';
import _IconPieFive from './icon-pie-five.vue';

const IconPieFive = Object.assign(_IconPieFive, {
  install: (app: App) => {
    app.component(_IconPieFive.name, _IconPieFive);
  }
});

export default IconPieFive;
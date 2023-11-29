import type { App } from 'vue';
import _IconPieFour from './icon-pie-four.vue';

const IconPieFour = Object.assign(_IconPieFour, {
  install: (app: App) => {
    app.component(_IconPieFour.name, _IconPieFour);
  }
});

export default IconPieFour;
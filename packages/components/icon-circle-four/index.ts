import type { App } from 'vue';
import _IconCircleFour from './icon-circle-four.vue';

const IconCircleFour = Object.assign(_IconCircleFour, {
  install: (app: App) => {
    app.component(_IconCircleFour.name, _IconCircleFour);
  }
});

export default IconCircleFour;
import type { App } from 'vue';
import _IconCubeFour from './icon-cube-four.vue';

const IconCubeFour = Object.assign(_IconCubeFour, {
  install: (app: App) => {
    app.component(_IconCubeFour.name, _IconCubeFour);
  }
});

export default IconCubeFour;
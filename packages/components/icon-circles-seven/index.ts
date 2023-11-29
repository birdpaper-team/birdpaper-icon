import type { App } from 'vue';
import _IconCirclesSeven from './icon-circles-seven.vue';

const IconCirclesSeven = Object.assign(_IconCirclesSeven, {
  install: (app: App) => {
    app.component(_IconCirclesSeven.name, _IconCirclesSeven);
  }
});

export default IconCirclesSeven;
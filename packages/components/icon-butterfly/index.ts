import type { App } from 'vue';
import _IconButterfly from './icon-butterfly.vue';

const IconButterfly = Object.assign(_IconButterfly, {
  install: (app: App) => {
    app.component(_IconButterfly.name, _IconButterfly);
  }
});

export default IconButterfly;
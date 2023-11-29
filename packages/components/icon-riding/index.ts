import type { App } from 'vue';
import _IconRiding from './icon-riding.vue';

const IconRiding = Object.assign(_IconRiding, {
  install: (app: App) => {
    app.component(_IconRiding.name, _IconRiding);
  }
});

export default IconRiding;
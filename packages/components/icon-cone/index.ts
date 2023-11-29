import type { App } from 'vue';
import _IconCone from './icon-cone.vue';

const IconCone = Object.assign(_IconCone, {
  install: (app: App) => {
    app.component(_IconCone.name, _IconCone);
  }
});

export default IconCone;
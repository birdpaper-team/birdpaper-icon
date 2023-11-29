import type { App } from 'vue';
import _IconIntersection from './icon-intersection.vue';

const IconIntersection = Object.assign(_IconIntersection, {
  install: (app: App) => {
    app.component(_IconIntersection.name, _IconIntersection);
  }
});

export default IconIntersection;
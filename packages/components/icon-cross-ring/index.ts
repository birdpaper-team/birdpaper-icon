import type { App } from 'vue';
import _IconCrossRing from './icon-cross-ring.vue';

const IconCrossRing = Object.assign(_IconCrossRing, {
  install: (app: App) => {
    app.component(_IconCrossRing.name, _IconCrossRing);
  }
});

export default IconCrossRing;
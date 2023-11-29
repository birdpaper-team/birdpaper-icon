import type { App } from 'vue';
import _IconRing from './icon-ring.vue';

const IconRing = Object.assign(_IconRing, {
  install: (app: App) => {
    app.component(_IconRing.name, _IconRing);
  }
});

export default IconRing;
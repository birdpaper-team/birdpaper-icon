import type { App } from 'vue';
import _IconRings from './icon-rings.vue';

const IconRings = Object.assign(_IconRings, {
  install: (app: App) => {
    app.component(_IconRings.name, _IconRings);
  }
});

export default IconRings;
import type { App } from 'vue';
import _IconSwimmingRing from './icon-swimming-ring.vue';

const IconSwimmingRing = Object.assign(_IconSwimmingRing, {
  install: (app: App) => {
    app.component(_IconSwimmingRing.name, _IconSwimmingRing);
  }
});

export default IconSwimmingRing;
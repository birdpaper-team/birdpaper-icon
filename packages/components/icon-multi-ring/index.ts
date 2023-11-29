import type { App } from 'vue';
import _IconMultiRing from './icon-multi-ring.vue';

const IconMultiRing = Object.assign(_IconMultiRing, {
  install: (app: App) => {
    app.component(_IconMultiRing.name, _IconMultiRing);
  }
});

export default IconMultiRing;
import type { App } from 'vue';
import _IconMulticast from './icon-multicast.vue';

const IconMulticast = Object.assign(_IconMulticast, {
  install: (app: App) => {
    app.component(_IconMulticast.name, _IconMulticast);
  }
});

export default IconMulticast;
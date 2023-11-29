import type { App } from 'vue';
import _IconFishing from './icon-fishing.vue';

const IconFishing = Object.assign(_IconFishing, {
  install: (app: App) => {
    app.component(_IconFishing.name, _IconFishing);
  }
});

export default IconFishing;
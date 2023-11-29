import type { App } from 'vue';
import _IconVideocamera from './icon-videocamera.vue';

const IconVideocamera = Object.assign(_IconVideocamera, {
  install: (app: App) => {
    app.component(_IconVideocamera.name, _IconVideocamera);
  }
});

export default IconVideocamera;
import type { App } from 'vue';
import _IconDetection from './icon-detection.vue';

const IconDetection = Object.assign(_IconDetection, {
  install: (app: App) => {
    app.component(_IconDetection.name, _IconDetection);
  }
});

export default IconDetection;
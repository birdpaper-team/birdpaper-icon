import type { App } from 'vue';
import _IconCompression from './icon-compression.vue';

const IconCompression = Object.assign(_IconCompression, {
  install: (app: App) => {
    app.component(_IconCompression.name, _IconCompression);
  }
});

export default IconCompression;
import type { App } from 'vue';
import _IconFileQuality from './icon-file-quality.vue';

const IconFileQuality = Object.assign(_IconFileQuality, {
  install: (app: App) => {
    app.component(_IconFileQuality.name, _IconFileQuality);
  }
});

export default IconFileQuality;
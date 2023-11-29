import type { App } from 'vue';
import _IconChinesePavilion from './icon-chinese-pavilion.vue';

const IconChinesePavilion = Object.assign(_IconChinesePavilion, {
  install: (app: App) => {
    app.component(_IconChinesePavilion.name, _IconChinesePavilion);
  }
});

export default IconChinesePavilion;
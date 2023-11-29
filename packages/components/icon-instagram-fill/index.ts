import type { App } from 'vue';
import _IconInstagramFill from './icon-instagram-fill.vue';

const IconInstagramFill = Object.assign(_IconInstagramFill, {
  install: (app: App) => {
    app.component(_IconInstagramFill.name, _IconInstagramFill);
  }
});

export default IconInstagramFill;
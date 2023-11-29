import type { App } from 'vue';
import _IconShareFill from './icon-share-fill.vue';

const IconShareFill = Object.assign(_IconShareFill, {
  install: (app: App) => {
    app.component(_IconShareFill.name, _IconShareFill);
  }
});

export default IconShareFill;
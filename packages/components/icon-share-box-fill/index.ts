import type { App } from 'vue';
import _IconShareBoxFill from './icon-share-box-fill.vue';

const IconShareBoxFill = Object.assign(_IconShareBoxFill, {
  install: (app: App) => {
    app.component(_IconShareBoxFill.name, _IconShareBoxFill);
  }
});

export default IconShareBoxFill;
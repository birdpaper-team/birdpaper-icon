import type { App } from 'vue';
import _IconShareCircleFill from './icon-share-circle-fill.vue';

const IconShareCircleFill = Object.assign(_IconShareCircleFill, {
  install: (app: App) => {
    app.component(_IconShareCircleFill.name, _IconShareCircleFill);
  }
});

export default IconShareCircleFill;
import type { App } from 'vue';
import _IconMetaFill from './icon-meta-fill.vue';

const IconMetaFill = Object.assign(_IconMetaFill, {
  install: (app: App) => {
    app.component(_IconMetaFill.name, _IconMetaFill);
  }
});

export default IconMetaFill;
import type { App } from 'vue';
import _IconAlignItemTopFill from './icon-align-item-top-fill.vue';

const IconAlignItemTopFill = Object.assign(_IconAlignItemTopFill, {
  install: (app: App) => {
    app.component(_IconAlignItemTopFill.name, _IconAlignItemTopFill);
  }
});

export default IconAlignItemTopFill;
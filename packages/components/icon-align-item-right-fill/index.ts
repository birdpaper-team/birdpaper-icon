import type { App } from 'vue';
import _IconAlignItemRightFill from './icon-align-item-right-fill.vue';

const IconAlignItemRightFill = Object.assign(_IconAlignItemRightFill, {
  install: (app: App) => {
    app.component(_IconAlignItemRightFill.name, _IconAlignItemRightFill);
  }
});

export default IconAlignItemRightFill;
import type { App } from 'vue';
import _IconAlignItemLeftFill from './icon-align-item-left-fill.vue';

const IconAlignItemLeftFill = Object.assign(_IconAlignItemLeftFill, {
  install: (app: App) => {
    app.component(_IconAlignItemLeftFill.name, _IconAlignItemLeftFill);
  }
});

export default IconAlignItemLeftFill;
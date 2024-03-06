import type { App } from 'vue';
import _IconAlignItemBottomFill from './icon-align-item-bottom-fill.vue';

const IconAlignItemBottomFill = Object.assign(_IconAlignItemBottomFill, {
  install: (app: App) => {
    app.component(_IconAlignItemBottomFill.name, _IconAlignItemBottomFill);
  }
});

export default IconAlignItemBottomFill;
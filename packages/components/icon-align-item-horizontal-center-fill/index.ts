import type { App } from 'vue';
import _IconAlignItemHorizontalCenterFill from './icon-align-item-horizontal-center-fill.vue';

const IconAlignItemHorizontalCenterFill = Object.assign(_IconAlignItemHorizontalCenterFill, {
  install: (app: App) => {
    app.component(_IconAlignItemHorizontalCenterFill.name, _IconAlignItemHorizontalCenterFill);
  }
});

export default IconAlignItemHorizontalCenterFill;
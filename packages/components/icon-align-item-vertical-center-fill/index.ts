import type { App } from 'vue';
import _IconAlignItemVerticalCenterFill from './icon-align-item-vertical-center-fill.vue';

const IconAlignItemVerticalCenterFill = Object.assign(_IconAlignItemVerticalCenterFill, {
  install: (app: App) => {
    app.component(_IconAlignItemVerticalCenterFill.name, _IconAlignItemVerticalCenterFill);
  }
});

export default IconAlignItemVerticalCenterFill;
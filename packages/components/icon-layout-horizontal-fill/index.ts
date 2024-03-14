import type { App } from 'vue';
import _IconLayoutHorizontalFill from './icon-layout-horizontal-fill.vue';

const IconLayoutHorizontalFill = Object.assign(_IconLayoutHorizontalFill, {
  install: (app: App) => {
    app.component(_IconLayoutHorizontalFill.name, _IconLayoutHorizontalFill);
  }
});

export default IconLayoutHorizontalFill;
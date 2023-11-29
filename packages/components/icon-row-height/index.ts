import type { App } from 'vue';
import _IconRowHeight from './icon-row-height.vue';

const IconRowHeight = Object.assign(_IconRowHeight, {
  install: (app: App) => {
    app.component(_IconRowHeight.name, _IconRowHeight);
  }
});

export default IconRowHeight;
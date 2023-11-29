import type { App } from 'vue';
import _IconAutoLineHeight from './icon-auto-line-height.vue';

const IconAutoLineHeight = Object.assign(_IconAutoLineHeight, {
  install: (app: App) => {
    app.component(_IconAutoLineHeight.name, _IconAutoLineHeight);
  }
});

export default IconAutoLineHeight;
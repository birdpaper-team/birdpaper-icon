import type { App } from 'vue';
import _IconAutoLineWidth from './icon-auto-line-width.vue';

const IconAutoLineWidth = Object.assign(_IconAutoLineWidth, {
  install: (app: App) => {
    app.component(_IconAutoLineWidth.name, _IconAutoLineWidth);
  }
});

export default IconAutoLineWidth;
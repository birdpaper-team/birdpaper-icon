import type { App } from 'vue';
import _IconAutoWidth from './icon-auto-width.vue';

const IconAutoWidth = Object.assign(_IconAutoWidth, {
  install: (app: App) => {
    app.component(_IconAutoWidth.name, _IconAutoWidth);
  }
});

export default IconAutoWidth;
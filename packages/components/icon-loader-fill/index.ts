import type { App } from 'vue';
import _IconLoaderFill from './icon-loader-fill.vue';

const IconLoaderFill = Object.assign(_IconLoaderFill, {
  install: (app: App) => {
    app.component(_IconLoaderFill.name, _IconLoaderFill);
  }
});

export default IconLoaderFill;
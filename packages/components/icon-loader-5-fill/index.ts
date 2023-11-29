import type { App } from 'vue';
import _IconLoader5Fill from './icon-loader-5-fill.vue';

const IconLoader5Fill = Object.assign(_IconLoader5Fill, {
  install: (app: App) => {
    app.component(_IconLoader5Fill.name, _IconLoader5Fill);
  }
});

export default IconLoader5Fill;
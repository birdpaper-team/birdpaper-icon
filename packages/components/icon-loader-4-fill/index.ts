import type { App } from 'vue';
import _IconLoader4Fill from './icon-loader-4-fill.vue';

const IconLoader4Fill = Object.assign(_IconLoader4Fill, {
  install: (app: App) => {
    app.component(_IconLoader4Fill.name, _IconLoader4Fill);
  }
});

export default IconLoader4Fill;
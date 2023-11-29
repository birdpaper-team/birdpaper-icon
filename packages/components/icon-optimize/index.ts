import type { App } from 'vue';
import _IconOptimize from './icon-optimize.vue';

const IconOptimize = Object.assign(_IconOptimize, {
  install: (app: App) => {
    app.component(_IconOptimize.name, _IconOptimize);
  }
});

export default IconOptimize;
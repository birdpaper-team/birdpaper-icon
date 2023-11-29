import type { App } from 'vue';
import _IconSmartOptimization from './icon-smart-optimization.vue';

const IconSmartOptimization = Object.assign(_IconSmartOptimization, {
  install: (app: App) => {
    app.component(_IconSmartOptimization.name, _IconSmartOptimization);
  }
});

export default IconSmartOptimization;
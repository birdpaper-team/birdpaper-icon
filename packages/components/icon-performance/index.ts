import type { App } from 'vue';
import _IconPerformance from './icon-performance.vue';

const IconPerformance = Object.assign(_IconPerformance, {
  install: (app: App) => {
    app.component(_IconPerformance.name, _IconPerformance);
  }
});

export default IconPerformance;
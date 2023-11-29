import type { App } from 'vue';
import _IconAnalysis from './icon-analysis.vue';

const IconAnalysis = Object.assign(_IconAnalysis, {
  install: (app: App) => {
    app.component(_IconAnalysis.name, _IconAnalysis);
  }
});

export default IconAnalysis;
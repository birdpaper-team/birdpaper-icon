import type { App } from 'vue';
import _IconChartRing from './icon-chart-ring.vue';

const IconChartRing = Object.assign(_IconChartRing, {
  install: (app: App) => {
    app.component(_IconChartRing.name, _IconChartRing);
  }
});

export default IconChartRing;
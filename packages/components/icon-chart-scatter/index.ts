import type { App } from 'vue';
import _IconChartScatter from './icon-chart-scatter.vue';

const IconChartScatter = Object.assign(_IconChartScatter, {
  install: (app: App) => {
    app.component(_IconChartScatter.name, _IconChartScatter);
  }
});

export default IconChartScatter;
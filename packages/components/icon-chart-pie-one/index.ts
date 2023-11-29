import type { App } from 'vue';
import _IconChartPieOne from './icon-chart-pie-one.vue';

const IconChartPieOne = Object.assign(_IconChartPieOne, {
  install: (app: App) => {
    app.component(_IconChartPieOne.name, _IconChartPieOne);
  }
});

export default IconChartPieOne;
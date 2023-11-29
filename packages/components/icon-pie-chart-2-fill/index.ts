import type { App } from 'vue';
import _IconPieChart2Fill from './icon-pie-chart-2-fill.vue';

const IconPieChart2Fill = Object.assign(_IconPieChart2Fill, {
  install: (app: App) => {
    app.component(_IconPieChart2Fill.name, _IconPieChart2Fill);
  }
});

export default IconPieChart2Fill;
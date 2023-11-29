import type { App } from 'vue';
import _IconBarChart2Fill from './icon-bar-chart-2-fill.vue';

const IconBarChart2Fill = Object.assign(_IconBarChart2Fill, {
  install: (app: App) => {
    app.component(_IconBarChart2Fill.name, _IconBarChart2Fill);
  }
});

export default IconBarChart2Fill;
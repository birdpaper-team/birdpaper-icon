import type { App } from 'vue';
import _IconBubbleChartFill from './icon-bubble-chart-fill.vue';

const IconBubbleChartFill = Object.assign(_IconBubbleChartFill, {
  install: (app: App) => {
    app.component(_IconBubbleChartFill.name, _IconBubbleChartFill);
  }
});

export default IconBubbleChartFill;
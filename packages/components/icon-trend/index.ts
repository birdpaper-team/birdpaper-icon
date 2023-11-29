import type { App } from 'vue';
import _IconTrend from './icon-trend.vue';

const IconTrend = Object.assign(_IconTrend, {
  install: (app: App) => {
    app.component(_IconTrend.name, _IconTrend);
  }
});

export default IconTrend;
import type { App } from 'vue';
import _IconAverage from './icon-average.vue';

const IconAverage = Object.assign(_IconAverage, {
  install: (app: App) => {
    app.component(_IconAverage.name, _IconAverage);
  }
});

export default IconAverage;
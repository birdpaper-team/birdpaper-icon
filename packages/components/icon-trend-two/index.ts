import type { App } from 'vue';
import _IconTrendTwo from './icon-trend-two.vue';

const IconTrendTwo = Object.assign(_IconTrendTwo, {
  install: (app: App) => {
    app.component(_IconTrendTwo.name, _IconTrendTwo);
  }
});

export default IconTrendTwo;
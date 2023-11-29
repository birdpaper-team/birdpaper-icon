import type { App } from 'vue';
import _IconLayoutRight2Fill from './icon-layout-right-2-fill.vue';

const IconLayoutRight2Fill = Object.assign(_IconLayoutRight2Fill, {
  install: (app: App) => {
    app.component(_IconLayoutRight2Fill.name, _IconLayoutRight2Fill);
  }
});

export default IconLayoutRight2Fill;
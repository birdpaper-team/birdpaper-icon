import type { App } from 'vue';
import _IconScales2Fill from './icon-scales-2-fill.vue';

const IconScales2Fill = Object.assign(_IconScales2Fill, {
  install: (app: App) => {
    app.component(_IconScales2Fill.name, _IconScales2Fill);
  }
});

export default IconScales2Fill;
import type { App } from 'vue';
import _IconScales3Fill from './icon-scales-3-fill.vue';

const IconScales3Fill = Object.assign(_IconScales3Fill, {
  install: (app: App) => {
    app.component(_IconScales3Fill.name, _IconScales3Fill);
  }
});

export default IconScales3Fill;
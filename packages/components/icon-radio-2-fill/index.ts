import type { App } from 'vue';
import _IconRadio2Fill from './icon-radio-2-fill.vue';

const IconRadio2Fill = Object.assign(_IconRadio2Fill, {
  install: (app: App) => {
    app.component(_IconRadio2Fill.name, _IconRadio2Fill);
  }
});

export default IconRadio2Fill;
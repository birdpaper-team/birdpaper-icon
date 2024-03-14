import type { App } from 'vue';
import _IconInformation2Fill from './icon-information-2-fill.vue';

const IconInformation2Fill = Object.assign(_IconInformation2Fill, {
  install: (app: App) => {
    app.component(_IconInformation2Fill.name, _IconInformation2Fill);
  }
});

export default IconInformation2Fill;
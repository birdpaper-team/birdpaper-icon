import type { App } from 'vue';
import _IconStapler from './icon-stapler.vue';

const IconStapler = Object.assign(_IconStapler, {
  install: (app: App) => {
    app.component(_IconStapler.name, _IconStapler);
  }
});

export default IconStapler;
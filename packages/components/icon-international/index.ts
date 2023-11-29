import type { App } from 'vue';
import _IconInternational from './icon-international.vue';

const IconInternational = Object.assign(_IconInternational, {
  install: (app: App) => {
    app.component(_IconInternational.name, _IconInternational);
  }
});

export default IconInternational;
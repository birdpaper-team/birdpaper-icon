import type { App } from 'vue';
import _IconShrimp from './icon-shrimp.vue';

const IconShrimp = Object.assign(_IconShrimp, {
  install: (app: App) => {
    app.component(_IconShrimp.name, _IconShrimp);
  }
});

export default IconShrimp;
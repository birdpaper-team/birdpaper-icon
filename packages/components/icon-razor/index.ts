import type { App } from 'vue';
import _IconRazor from './icon-razor.vue';

const IconRazor = Object.assign(_IconRazor, {
  install: (app: App) => {
    app.component(_IconRazor.name, _IconRazor);
  }
});

export default IconRazor;
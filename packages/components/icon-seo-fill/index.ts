import type { App } from 'vue';
import _IconSeoFill from './icon-seo-fill.vue';

const IconSeoFill = Object.assign(_IconSeoFill, {
  install: (app: App) => {
    app.component(_IconSeoFill.name, _IconSeoFill);
  }
});

export default IconSeoFill;
import type { App } from 'vue';
import _IconShowersFill from './icon-showers-fill.vue';

const IconShowersFill = Object.assign(_IconShowersFill, {
  install: (app: App) => {
    app.component(_IconShowersFill.name, _IconShowersFill);
  }
});

export default IconShowersFill;
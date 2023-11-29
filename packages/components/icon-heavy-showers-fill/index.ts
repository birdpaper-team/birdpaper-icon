import type { App } from 'vue';
import _IconHeavyShowersFill from './icon-heavy-showers-fill.vue';

const IconHeavyShowersFill = Object.assign(_IconHeavyShowersFill, {
  install: (app: App) => {
    app.component(_IconHeavyShowersFill.name, _IconHeavyShowersFill);
  }
});

export default IconHeavyShowersFill;
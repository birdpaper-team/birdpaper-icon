import type { App } from 'vue';
import _IconPlug2Fill from './icon-plug-2-fill.vue';

const IconPlug2Fill = Object.assign(_IconPlug2Fill, {
  install: (app: App) => {
    app.component(_IconPlug2Fill.name, _IconPlug2Fill);
  }
});

export default IconPlug2Fill;
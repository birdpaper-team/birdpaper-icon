import type { App } from 'vue';
import _IconGobletFill from './icon-goblet-fill.vue';

const IconGobletFill = Object.assign(_IconGobletFill, {
  install: (app: App) => {
    app.component(_IconGobletFill.name, _IconGobletFill);
  }
});

export default IconGobletFill;
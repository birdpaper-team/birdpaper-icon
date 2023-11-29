import type { App } from 'vue';
import _IconRomper from './icon-romper.vue';

const IconRomper = Object.assign(_IconRomper, {
  install: (app: App) => {
    app.component(_IconRomper.name, _IconRomper);
  }
});

export default IconRomper;
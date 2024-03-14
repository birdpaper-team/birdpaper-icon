import type { App } from 'vue';
import _IconPauseLargeFill from './icon-pause-large-fill.vue';

const IconPauseLargeFill = Object.assign(_IconPauseLargeFill, {
  install: (app: App) => {
    app.component(_IconPauseLargeFill.name, _IconPauseLargeFill);
  }
});

export default IconPauseLargeFill;
import type { App } from 'vue';
import _IconPauseMiniFill from './icon-pause-mini-fill.vue';

const IconPauseMiniFill = Object.assign(_IconPauseMiniFill, {
  install: (app: App) => {
    app.component(_IconPauseMiniFill.name, _IconPauseMiniFill);
  }
});

export default IconPauseMiniFill;
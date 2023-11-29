import type { App } from 'vue';
import _IconPill from './icon-pill.vue';

const IconPill = Object.assign(_IconPill, {
  install: (app: App) => {
    app.component(_IconPill.name, _IconPill);
  }
});

export default IconPill;
import type { App } from 'vue';
import _IconGhostFill from './icon-ghost-fill.vue';

const IconGhostFill = Object.assign(_IconGhostFill, {
  install: (app: App) => {
    app.component(_IconGhostFill.name, _IconGhostFill);
  }
});

export default IconGhostFill;
import type { App } from 'vue';
import _IconCutting from './icon-cutting.vue';

const IconCutting = Object.assign(_IconCutting, {
  install: (app: App) => {
    app.component(_IconCutting.name, _IconCutting);
  }
});

export default IconCutting;
import type { App } from 'vue';
import _IconArrowDropUpFill from './icon-arrow-drop-up-fill.vue';

const IconArrowDropUpFill = Object.assign(_IconArrowDropUpFill, {
  install: (app: App) => {
    app.component(_IconArrowDropUpFill.name, _IconArrowDropUpFill);
  }
});

export default IconArrowDropUpFill;
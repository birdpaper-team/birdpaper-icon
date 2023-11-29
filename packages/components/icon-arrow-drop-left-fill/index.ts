import type { App } from 'vue';
import _IconArrowDropLeftFill from './icon-arrow-drop-left-fill.vue';

const IconArrowDropLeftFill = Object.assign(_IconArrowDropLeftFill, {
  install: (app: App) => {
    app.component(_IconArrowDropLeftFill.name, _IconArrowDropLeftFill);
  }
});

export default IconArrowDropLeftFill;
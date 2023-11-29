import type { App } from 'vue';
import _IconArrowUpFill from './icon-arrow-up-fill.vue';

const IconArrowUpFill = Object.assign(_IconArrowUpFill, {
  install: (app: App) => {
    app.component(_IconArrowUpFill.name, _IconArrowUpFill);
  }
});

export default IconArrowUpFill;
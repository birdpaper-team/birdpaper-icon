import type { App } from 'vue';
import _IconArrowDownFill from './icon-arrow-down-fill.vue';

const IconArrowDownFill = Object.assign(_IconArrowDownFill, {
  install: (app: App) => {
    app.component(_IconArrowDownFill.name, _IconArrowDownFill);
  }
});

export default IconArrowDownFill;
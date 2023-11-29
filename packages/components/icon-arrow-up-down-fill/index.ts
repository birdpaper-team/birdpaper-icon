import type { App } from 'vue';
import _IconArrowUpDownFill from './icon-arrow-up-down-fill.vue';

const IconArrowUpDownFill = Object.assign(_IconArrowUpDownFill, {
  install: (app: App) => {
    app.component(_IconArrowUpDownFill.name, _IconArrowUpDownFill);
  }
});

export default IconArrowUpDownFill;
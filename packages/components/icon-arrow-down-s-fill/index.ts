import type { App } from 'vue';
import _IconArrowDownSFill from './icon-arrow-down-s-fill.vue';

const IconArrowDownSFill = Object.assign(_IconArrowDownSFill, {
  install: (app: App) => {
    app.component(_IconArrowDownSFill.name, _IconArrowDownSFill);
  }
});

export default IconArrowDownSFill;
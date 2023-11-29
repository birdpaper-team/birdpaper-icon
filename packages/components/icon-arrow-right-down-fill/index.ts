import type { App } from 'vue';
import _IconArrowRightDownFill from './icon-arrow-right-down-fill.vue';

const IconArrowRightDownFill = Object.assign(_IconArrowRightDownFill, {
  install: (app: App) => {
    app.component(_IconArrowRightDownFill.name, _IconArrowRightDownFill);
  }
});

export default IconArrowRightDownFill;
import type { App } from 'vue';
import _IconArrowRightUpFill from './icon-arrow-right-up-fill.vue';

const IconArrowRightUpFill = Object.assign(_IconArrowRightUpFill, {
  install: (app: App) => {
    app.component(_IconArrowRightUpFill.name, _IconArrowRightUpFill);
  }
});

export default IconArrowRightUpFill;
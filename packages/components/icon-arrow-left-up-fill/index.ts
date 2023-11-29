import type { App } from 'vue';
import _IconArrowLeftUpFill from './icon-arrow-left-up-fill.vue';

const IconArrowLeftUpFill = Object.assign(_IconArrowLeftUpFill, {
  install: (app: App) => {
    app.component(_IconArrowLeftUpFill.name, _IconArrowLeftUpFill);
  }
});

export default IconArrowLeftUpFill;
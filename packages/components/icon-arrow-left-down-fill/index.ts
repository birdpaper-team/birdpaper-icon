import type { App } from 'vue';
import _IconArrowLeftDownFill from './icon-arrow-left-down-fill.vue';

const IconArrowLeftDownFill = Object.assign(_IconArrowLeftDownFill, {
  install: (app: App) => {
    app.component(_IconArrowLeftDownFill.name, _IconArrowLeftDownFill);
  }
});

export default IconArrowLeftDownFill;
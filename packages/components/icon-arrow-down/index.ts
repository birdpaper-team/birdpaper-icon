import type { App } from 'vue';
import _IconArrowDown from './icon-arrow-down.vue';

const IconArrowDown = Object.assign(_IconArrowDown, {
  install: (app: App) => {
    app.component(_IconArrowDown.name, _IconArrowDown);
  }
});

export default IconArrowDown;
import type { App } from 'vue';
import _IconArrowRightDown from './icon-arrow-right-down.vue';

const IconArrowRightDown = Object.assign(_IconArrowRightDown, {
  install: (app: App) => {
    app.component(_IconArrowRightDown.name, _IconArrowRightDown);
  }
});

export default IconArrowRightDown;
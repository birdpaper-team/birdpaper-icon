import type { App } from 'vue';
import _IconArrowCircleDown from './icon-arrow-circle-down.vue';

const IconArrowCircleDown = Object.assign(_IconArrowCircleDown, {
  install: (app: App) => {
    app.component(_IconArrowCircleDown.name, _IconArrowCircleDown);
  }
});

export default IconArrowCircleDown;
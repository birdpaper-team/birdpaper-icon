import type { App } from 'vue';
import _IconArrowCircleUp from './icon-arrow-circle-up.vue';

const IconArrowCircleUp = Object.assign(_IconArrowCircleUp, {
  install: (app: App) => {
    app.component(_IconArrowCircleUp.name, _IconArrowCircleUp);
  }
});

export default IconArrowCircleUp;
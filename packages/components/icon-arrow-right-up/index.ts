import type { App } from 'vue';
import _IconArrowRightUp from './icon-arrow-right-up.vue';

const IconArrowRightUp = Object.assign(_IconArrowRightUp, {
  install: (app: App) => {
    app.component(_IconArrowRightUp.name, _IconArrowRightUp);
  }
});

export default IconArrowRightUp;
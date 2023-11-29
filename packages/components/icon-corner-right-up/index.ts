import type { App } from 'vue';
import _IconCornerRightUp from './icon-corner-right-up.vue';

const IconCornerRightUp = Object.assign(_IconCornerRightUp, {
  install: (app: App) => {
    app.component(_IconCornerRightUp.name, _IconCornerRightUp);
  }
});

export default IconCornerRightUp;
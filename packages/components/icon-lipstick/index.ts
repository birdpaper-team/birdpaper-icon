import type { App } from 'vue';
import _IconLipstick from './icon-lipstick.vue';

const IconLipstick = Object.assign(_IconLipstick, {
  install: (app: App) => {
    app.component(_IconLipstick.name, _IconLipstick);
  }
});

export default IconLipstick;
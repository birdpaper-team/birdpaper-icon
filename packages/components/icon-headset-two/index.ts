import type { App } from 'vue';
import _IconHeadsetTwo from './icon-headset-two.vue';

const IconHeadsetTwo = Object.assign(_IconHeadsetTwo, {
  install: (app: App) => {
    app.component(_IconHeadsetTwo.name, _IconHeadsetTwo);
  }
});

export default IconHeadsetTwo;
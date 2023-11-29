import type { App } from 'vue';
import _IconRopeSkippingOne from './icon-rope-skipping-one.vue';

const IconRopeSkippingOne = Object.assign(_IconRopeSkippingOne, {
  install: (app: App) => {
    app.component(_IconRopeSkippingOne.name, _IconRopeSkippingOne);
  }
});

export default IconRopeSkippingOne;
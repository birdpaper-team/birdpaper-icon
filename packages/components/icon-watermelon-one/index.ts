import type { App } from 'vue';
import _IconWatermelonOne from './icon-watermelon-one.vue';

const IconWatermelonOne = Object.assign(_IconWatermelonOne, {
  install: (app: App) => {
    app.component(_IconWatermelonOne.name, _IconWatermelonOne);
  }
});

export default IconWatermelonOne;
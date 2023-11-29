import type { App } from 'vue';
import _IconWaterpoloOne from './icon-waterpolo-one.vue';

const IconWaterpoloOne = Object.assign(_IconWaterpoloOne, {
  install: (app: App) => {
    app.component(_IconWaterpoloOne.name, _IconWaterpoloOne);
  }
});

export default IconWaterpoloOne;
import type { App } from 'vue';
import _IconWatermelon from './icon-watermelon.vue';

const IconWatermelon = Object.assign(_IconWatermelon, {
  install: (app: App) => {
    app.component(_IconWatermelon.name, _IconWatermelon);
  }
});

export default IconWatermelon;
import type { App } from 'vue';
import _IconHeartRate from './icon-heart-rate.vue';

const IconHeartRate = Object.assign(_IconHeartRate, {
  install: (app: App) => {
    app.component(_IconHeartRate.name, _IconHeartRate);
  }
});

export default IconHeartRate;
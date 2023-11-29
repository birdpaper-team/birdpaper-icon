import type { App } from 'vue';
import _IconHeartPulseLine from './icon-heart-pulse-line.vue';

const IconHeartPulseLine = Object.assign(_IconHeartPulseLine, {
  install: (app: App) => {
    app.component(_IconHeartPulseLine.name, _IconHeartPulseLine);
  }
});

export default IconHeartPulseLine;
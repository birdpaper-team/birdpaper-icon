import type { App } from 'vue';
import _IconHotAirBalloon from './icon-hot-air-balloon.vue';

const IconHotAirBalloon = Object.assign(_IconHotAirBalloon, {
  install: (app: App) => {
    app.component(_IconHotAirBalloon.name, _IconHotAirBalloon);
  }
});

export default IconHotAirBalloon;
import type { App } from 'vue';
import _IconBoosterCarSeat from './icon-booster-car-seat.vue';

const IconBoosterCarSeat = Object.assign(_IconBoosterCarSeat, {
  install: (app: App) => {
    app.component(_IconBoosterCarSeat.name, _IconBoosterCarSeat);
  }
});

export default IconBoosterCarSeat;
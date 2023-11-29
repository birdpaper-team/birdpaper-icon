import type { App } from 'vue';
import _IconBabyCarSeat from './icon-baby-car-seat.vue';

const IconBabyCarSeat = Object.assign(_IconBabyCarSeat, {
  install: (app: App) => {
    app.component(_IconBabyCarSeat.name, _IconBabyCarSeat);
  }
});

export default IconBabyCarSeat;
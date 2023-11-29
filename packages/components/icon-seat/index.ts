import type { App } from 'vue';
import _IconSeat from './icon-seat.vue';

const IconSeat = Object.assign(_IconSeat, {
  install: (app: App) => {
    app.component(_IconSeat.name, _IconSeat);
  }
});

export default IconSeat;
import type { App } from 'vue';
import _IconParking from './icon-parking.vue';

const IconParking = Object.assign(_IconParking, {
  install: (app: App) => {
    app.component(_IconParking.name, _IconParking);
  }
});

export default IconParking;
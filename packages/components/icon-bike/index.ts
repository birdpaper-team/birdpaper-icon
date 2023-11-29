import type { App } from 'vue';
import _IconBike from './icon-bike.vue';

const IconBike = Object.assign(_IconBike, {
  install: (app: App) => {
    app.component(_IconBike.name, _IconBike);
  }
});

export default IconBike;
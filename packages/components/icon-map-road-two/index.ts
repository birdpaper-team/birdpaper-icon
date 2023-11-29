import type { App } from 'vue';
import _IconMapRoadTwo from './icon-map-road-two.vue';

const IconMapRoadTwo = Object.assign(_IconMapRoadTwo, {
  install: (app: App) => {
    app.component(_IconMapRoadTwo.name, _IconMapRoadTwo);
  }
});

export default IconMapRoadTwo;
import type { App } from 'vue';
import _IconRoadOne from './icon-road-one.vue';

const IconRoadOne = Object.assign(_IconRoadOne, {
  install: (app: App) => {
    app.component(_IconRoadOne.name, _IconRoadOne);
  }
});

export default IconRoadOne;
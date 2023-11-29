import type { App } from 'vue';
import _IconBuildingFour from './icon-building-four.vue';

const IconBuildingFour = Object.assign(_IconBuildingFour, {
  install: (app: App) => {
    app.component(_IconBuildingFour.name, _IconBuildingFour);
  }
});

export default IconBuildingFour;
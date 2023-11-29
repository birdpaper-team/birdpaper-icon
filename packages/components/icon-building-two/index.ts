import type { App } from 'vue';
import _IconBuildingTwo from './icon-building-two.vue';

const IconBuildingTwo = Object.assign(_IconBuildingTwo, {
  install: (app: App) => {
    app.component(_IconBuildingTwo.name, _IconBuildingTwo);
  }
});

export default IconBuildingTwo;
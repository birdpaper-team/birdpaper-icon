import type { App } from 'vue';
import _IconBuildingOne from './icon-building-one.vue';

const IconBuildingOne = Object.assign(_IconBuildingOne, {
  install: (app: App) => {
    app.component(_IconBuildingOne.name, _IconBuildingOne);
  }
});

export default IconBuildingOne;
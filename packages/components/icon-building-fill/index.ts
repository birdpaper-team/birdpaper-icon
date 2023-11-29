import type { App } from 'vue';
import _IconBuildingFill from './icon-building-fill.vue';

const IconBuildingFill = Object.assign(_IconBuildingFill, {
  install: (app: App) => {
    app.component(_IconBuildingFill.name, _IconBuildingFill);
  }
});

export default IconBuildingFill;
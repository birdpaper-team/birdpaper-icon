import type { App } from 'vue';
import _IconCityOne from './icon-city-one.vue';

const IconCityOne = Object.assign(_IconCityOne, {
  install: (app: App) => {
    app.component(_IconCityOne.name, _IconCityOne);
  }
});

export default IconCityOne;
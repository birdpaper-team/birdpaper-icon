import type { App } from 'vue';
import _IconAirplaneWindowOne from './icon-airplane-window-one.vue';

const IconAirplaneWindowOne = Object.assign(_IconAirplaneWindowOne, {
  install: (app: App) => {
    app.component(_IconAirplaneWindowOne.name, _IconAirplaneWindowOne);
  }
});

export default IconAirplaneWindowOne;
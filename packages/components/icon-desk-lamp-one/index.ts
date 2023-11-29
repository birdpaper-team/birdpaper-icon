import type { App } from 'vue';
import _IconDeskLampOne from './icon-desk-lamp-one.vue';

const IconDeskLampOne = Object.assign(_IconDeskLampOne, {
  install: (app: App) => {
    app.component(_IconDeskLampOne.name, _IconDeskLampOne);
  }
});

export default IconDeskLampOne;
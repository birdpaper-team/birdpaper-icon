import type { App } from 'vue';
import _IconDeskLamp from './icon-desk-lamp.vue';

const IconDeskLamp = Object.assign(_IconDeskLamp, {
  install: (app: App) => {
    app.component(_IconDeskLamp.name, _IconDeskLamp);
  }
});

export default IconDeskLamp;
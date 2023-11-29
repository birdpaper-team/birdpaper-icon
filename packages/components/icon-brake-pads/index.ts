import type { App } from 'vue';
import _IconBrakePads from './icon-brake-pads.vue';

const IconBrakePads = Object.assign(_IconBrakePads, {
  install: (app: App) => {
    app.component(_IconBrakePads.name, _IconBrakePads);
  }
});

export default IconBrakePads;
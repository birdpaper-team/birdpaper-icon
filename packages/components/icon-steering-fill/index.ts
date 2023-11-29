import type { App } from 'vue';
import _IconSteeringFill from './icon-steering-fill.vue';

const IconSteeringFill = Object.assign(_IconSteeringFill, {
  install: (app: App) => {
    app.component(_IconSteeringFill.name, _IconSteeringFill);
  }
});

export default IconSteeringFill;
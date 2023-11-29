import type { App } from 'vue';
import _IconOrthopedic from './icon-orthopedic.vue';

const IconOrthopedic = Object.assign(_IconOrthopedic, {
  install: (app: App) => {
    app.component(_IconOrthopedic.name, _IconOrthopedic);
  }
});

export default IconOrthopedic;
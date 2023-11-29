import type { App } from 'vue';
import _IconLayoutFour from './icon-layout-four.vue';

const IconLayoutFour = Object.assign(_IconLayoutFour, {
  install: (app: App) => {
    app.component(_IconLayoutFour.name, _IconLayoutFour);
  }
});

export default IconLayoutFour;
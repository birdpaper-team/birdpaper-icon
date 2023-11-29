import type { App } from 'vue';
import _IconGridFour from './icon-grid-four.vue';

const IconGridFour = Object.assign(_IconGridFour, {
  install: (app: App) => {
    app.component(_IconGridFour.name, _IconGridFour);
  }
});

export default IconGridFour;
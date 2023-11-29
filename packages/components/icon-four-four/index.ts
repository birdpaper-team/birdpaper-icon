import type { App } from 'vue';
import _IconFourFour from './icon-four-four.vue';

const IconFourFour = Object.assign(_IconFourFour, {
  install: (app: App) => {
    app.component(_IconFourFour.name, _IconFourFour);
  }
});

export default IconFourFour;
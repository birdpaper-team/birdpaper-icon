import type { App } from 'vue';
import _IconFour from './icon-four.vue';

const IconFour = Object.assign(_IconFour, {
  install: (app: App) => {
    app.component(_IconFour.name, _IconFour);
  }
});

export default IconFour;
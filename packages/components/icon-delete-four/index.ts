import type { App } from 'vue';
import _IconDeleteFour from './icon-delete-four.vue';

const IconDeleteFour = Object.assign(_IconDeleteFour, {
  install: (app: App) => {
    app.component(_IconDeleteFour.name, _IconDeleteFour);
  }
});

export default IconDeleteFour;
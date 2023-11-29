import type { App } from 'vue';
import _IconAddFour from './icon-add-four.vue';

const IconAddFour = Object.assign(_IconAddFour, {
  install: (app: App) => {
    app.component(_IconAddFour.name, _IconAddFour);
  }
});

export default IconAddFour;
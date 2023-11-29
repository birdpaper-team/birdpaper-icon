import type { App } from 'vue';
import _IconBlockFour from './icon-block-four.vue';

const IconBlockFour = Object.assign(_IconBlockFour, {
  install: (app: App) => {
    app.component(_IconBlockFour.name, _IconBlockFour);
  }
});

export default IconBlockFour;
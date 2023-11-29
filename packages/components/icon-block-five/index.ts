import type { App } from 'vue';
import _IconBlockFive from './icon-block-five.vue';

const IconBlockFive = Object.assign(_IconBlockFive, {
  install: (app: App) => {
    app.component(_IconBlockFive.name, _IconBlockFive);
  }
});

export default IconBlockFive;
import type { App } from 'vue';
import _IconBlockEight from './icon-block-eight.vue';

const IconBlockEight = Object.assign(_IconBlockEight, {
  install: (app: App) => {
    app.component(_IconBlockEight.name, _IconBlockEight);
  }
});

export default IconBlockEight;
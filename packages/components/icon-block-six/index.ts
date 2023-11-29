import type { App } from 'vue';
import _IconBlockSix from './icon-block-six.vue';

const IconBlockSix = Object.assign(_IconBlockSix, {
  install: (app: App) => {
    app.component(_IconBlockSix.name, _IconBlockSix);
  }
});

export default IconBlockSix;
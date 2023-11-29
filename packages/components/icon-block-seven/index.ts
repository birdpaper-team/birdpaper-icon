import type { App } from 'vue';
import _IconBlockSeven from './icon-block-seven.vue';

const IconBlockSeven = Object.assign(_IconBlockSeven, {
  install: (app: App) => {
    app.component(_IconBlockSeven.name, _IconBlockSeven);
  }
});

export default IconBlockSeven;
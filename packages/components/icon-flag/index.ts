import type { App } from 'vue';
import _IconFlag from './icon-flag.vue';

const IconFlag = Object.assign(_IconFlag, {
  install: (app: App) => {
    app.component(_IconFlag.name, _IconFlag);
  }
});

export default IconFlag;
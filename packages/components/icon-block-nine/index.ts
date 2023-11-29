import type { App } from 'vue';
import _IconBlockNine from './icon-block-nine.vue';

const IconBlockNine = Object.assign(_IconBlockNine, {
  install: (app: App) => {
    app.component(_IconBlockNine.name, _IconBlockNine);
  }
});

export default IconBlockNine;
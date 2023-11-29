import type { App } from 'vue';
import _IconStandUp from './icon-stand-up.vue';

const IconStandUp = Object.assign(_IconStandUp, {
  install: (app: App) => {
    app.component(_IconStandUp.name, _IconStandUp);
  }
});

export default IconStandUp;
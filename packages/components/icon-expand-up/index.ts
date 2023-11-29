import type { App } from 'vue';
import _IconExpandUp from './icon-expand-up.vue';

const IconExpandUp = Object.assign(_IconExpandUp, {
  install: (app: App) => {
    app.component(_IconExpandUp.name, _IconExpandUp);
  }
});

export default IconExpandUp;
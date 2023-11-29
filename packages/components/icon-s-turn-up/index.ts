import type { App } from 'vue';
import _IconSTurnUp from './icon-s-turn-up.vue';

const IconSTurnUp = Object.assign(_IconSTurnUp, {
  install: (app: App) => {
    app.component(_IconSTurnUp.name, _IconSTurnUp);
  }
});

export default IconSTurnUp;
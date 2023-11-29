import type { App } from 'vue';
import _IconLeftSmallUp from './icon-left-small-up.vue';

const IconLeftSmallUp = Object.assign(_IconLeftSmallUp, {
  install: (app: App) => {
    app.component(_IconLeftSmallUp.name, _IconLeftSmallUp);
  }
});

export default IconLeftSmallUp;
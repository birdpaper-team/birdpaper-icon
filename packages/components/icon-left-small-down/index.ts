import type { App } from 'vue';
import _IconLeftSmallDown from './icon-left-small-down.vue';

const IconLeftSmallDown = Object.assign(_IconLeftSmallDown, {
  install: (app: App) => {
    app.component(_IconLeftSmallDown.name, _IconLeftSmallDown);
  }
});

export default IconLeftSmallDown;
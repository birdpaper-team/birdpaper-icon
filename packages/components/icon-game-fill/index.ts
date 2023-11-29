import type { App } from 'vue';
import _IconGameFill from './icon-game-fill.vue';

const IconGameFill = Object.assign(_IconGameFill, {
  install: (app: App) => {
    app.component(_IconGameFill.name, _IconGameFill);
  }
});

export default IconGameFill;
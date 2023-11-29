import type { App } from 'vue';
import _IconUTurnDown from './icon-u-turn-down.vue';

const IconUTurnDown = Object.assign(_IconUTurnDown, {
  install: (app: App) => {
    app.component(_IconUTurnDown.name, _IconUTurnDown);
  }
});

export default IconUTurnDown;
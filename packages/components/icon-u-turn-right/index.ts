import type { App } from 'vue';
import _IconUTurnRight from './icon-u-turn-right.vue';

const IconUTurnRight = Object.assign(_IconUTurnRight, {
  install: (app: App) => {
    app.component(_IconUTurnRight.name, _IconUTurnRight);
  }
});

export default IconUTurnRight;
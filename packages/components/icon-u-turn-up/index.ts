import type { App } from 'vue';
import _IconUTurnUp from './icon-u-turn-up.vue';

const IconUTurnUp = Object.assign(_IconUTurnUp, {
  install: (app: App) => {
    app.component(_IconUTurnUp.name, _IconUTurnUp);
  }
});

export default IconUTurnUp;
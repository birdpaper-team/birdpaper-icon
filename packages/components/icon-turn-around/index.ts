import type { App } from 'vue';
import _IconTurnAround from './icon-turn-around.vue';

const IconTurnAround = Object.assign(_IconTurnAround, {
  install: (app: App) => {
    app.component(_IconTurnAround.name, _IconTurnAround);
  }
});

export default IconTurnAround;
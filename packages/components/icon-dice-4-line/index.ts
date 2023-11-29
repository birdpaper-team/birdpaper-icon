import type { App } from 'vue';
import _IconDice4Line from './icon-dice-4-line.vue';

const IconDice4Line = Object.assign(_IconDice4Line, {
  install: (app: App) => {
    app.component(_IconDice4Line.name, _IconDice4Line);
  }
});

export default IconDice4Line;
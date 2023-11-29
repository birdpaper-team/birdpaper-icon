import type { App } from 'vue';
import _IconDice5Line from './icon-dice-5-line.vue';

const IconDice5Line = Object.assign(_IconDice5Line, {
  install: (app: App) => {
    app.component(_IconDice5Line.name, _IconDice5Line);
  }
});

export default IconDice5Line;
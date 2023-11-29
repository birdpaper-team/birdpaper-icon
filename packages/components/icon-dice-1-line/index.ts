import type { App } from 'vue';
import _IconDice1Line from './icon-dice-1-line.vue';

const IconDice1Line = Object.assign(_IconDice1Line, {
  install: (app: App) => {
    app.component(_IconDice1Line.name, _IconDice1Line);
  }
});

export default IconDice1Line;
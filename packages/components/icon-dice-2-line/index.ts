import type { App } from 'vue';
import _IconDice2Line from './icon-dice-2-line.vue';

const IconDice2Line = Object.assign(_IconDice2Line, {
  install: (app: App) => {
    app.component(_IconDice2Line.name, _IconDice2Line);
  }
});

export default IconDice2Line;
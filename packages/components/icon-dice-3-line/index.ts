import type { App } from 'vue';
import _IconDice3Line from './icon-dice-3-line.vue';

const IconDice3Line = Object.assign(_IconDice3Line, {
  install: (app: App) => {
    app.component(_IconDice3Line.name, _IconDice3Line);
  }
});

export default IconDice3Line;
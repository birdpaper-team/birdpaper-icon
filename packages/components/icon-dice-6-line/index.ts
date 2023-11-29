import type { App } from 'vue';
import _IconDice6Line from './icon-dice-6-line.vue';

const IconDice6Line = Object.assign(_IconDice6Line, {
  install: (app: App) => {
    app.component(_IconDice6Line.name, _IconDice6Line);
  }
});

export default IconDice6Line;
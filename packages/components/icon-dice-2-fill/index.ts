import type { App } from 'vue';
import _IconDice2Fill from './icon-dice-2-fill.vue';

const IconDice2Fill = Object.assign(_IconDice2Fill, {
  install: (app: App) => {
    app.component(_IconDice2Fill.name, _IconDice2Fill);
  }
});

export default IconDice2Fill;
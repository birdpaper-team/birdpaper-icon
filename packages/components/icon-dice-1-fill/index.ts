import type { App } from 'vue';
import _IconDice1Fill from './icon-dice-1-fill.vue';

const IconDice1Fill = Object.assign(_IconDice1Fill, {
  install: (app: App) => {
    app.component(_IconDice1Fill.name, _IconDice1Fill);
  }
});

export default IconDice1Fill;
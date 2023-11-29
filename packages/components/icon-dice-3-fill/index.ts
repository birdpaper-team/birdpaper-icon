import type { App } from 'vue';
import _IconDice3Fill from './icon-dice-3-fill.vue';

const IconDice3Fill = Object.assign(_IconDice3Fill, {
  install: (app: App) => {
    app.component(_IconDice3Fill.name, _IconDice3Fill);
  }
});

export default IconDice3Fill;
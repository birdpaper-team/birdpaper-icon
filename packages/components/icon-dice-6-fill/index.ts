import type { App } from 'vue';
import _IconDice6Fill from './icon-dice-6-fill.vue';

const IconDice6Fill = Object.assign(_IconDice6Fill, {
  install: (app: App) => {
    app.component(_IconDice6Fill.name, _IconDice6Fill);
  }
});

export default IconDice6Fill;
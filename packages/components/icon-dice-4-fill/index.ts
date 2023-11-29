import type { App } from 'vue';
import _IconDice4Fill from './icon-dice-4-fill.vue';

const IconDice4Fill = Object.assign(_IconDice4Fill, {
  install: (app: App) => {
    app.component(_IconDice4Fill.name, _IconDice4Fill);
  }
});

export default IconDice4Fill;
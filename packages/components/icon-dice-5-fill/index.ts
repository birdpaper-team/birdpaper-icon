import type { App } from 'vue';
import _IconDice5Fill from './icon-dice-5-fill.vue';

const IconDice5Fill = Object.assign(_IconDice5Fill, {
  install: (app: App) => {
    app.component(_IconDice5Fill.name, _IconDice5Fill);
  }
});

export default IconDice5Fill;
import type { App } from 'vue';
import _IconTeaDrink from './icon-tea-drink.vue';

const IconTeaDrink = Object.assign(_IconTeaDrink, {
  install: (app: App) => {
    app.component(_IconTeaDrink.name, _IconTeaDrink);
  }
});

export default IconTeaDrink;
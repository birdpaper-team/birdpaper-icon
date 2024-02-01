import type { App } from 'vue';
import _IconDrinks2Fill from './icon-drinks-2-fill.vue';

const IconDrinks2Fill = Object.assign(_IconDrinks2Fill, {
  install: (app: App) => {
    app.component(_IconDrinks2Fill.name, _IconDrinks2Fill);
  }
});

export default IconDrinks2Fill;
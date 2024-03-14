import type { App } from 'vue';
import _IconDrinks2Line from './icon-drinks-2-line.vue';

const IconDrinks2Line = Object.assign(_IconDrinks2Line, {
  install: (app: App) => {
    app.component(_IconDrinks2Line.name, _IconDrinks2Line);
  }
});

export default IconDrinks2Line;
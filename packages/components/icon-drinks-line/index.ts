import type { App } from 'vue';
import _IconDrinksLine from './icon-drinks-line.vue';

const IconDrinksLine = Object.assign(_IconDrinksLine, {
  install: (app: App) => {
    app.component(_IconDrinksLine.name, _IconDrinksLine);
  }
});

export default IconDrinksLine;
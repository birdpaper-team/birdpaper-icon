import type { App } from 'vue';
import _IconHealthBookFill from './icon-health-book-fill.vue';

const IconHealthBookFill = Object.assign(_IconHealthBookFill, {
  install: (app: App) => {
    app.component(_IconHealthBookFill.name, _IconHealthBookFill);
  }
});

export default IconHealthBookFill;
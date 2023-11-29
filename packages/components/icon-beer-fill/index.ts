import type { App } from 'vue';
import _IconBeerFill from './icon-beer-fill.vue';

const IconBeerFill = Object.assign(_IconBeerFill, {
  install: (app: App) => {
    app.component(_IconBeerFill.name, _IconBeerFill);
  }
});

export default IconBeerFill;
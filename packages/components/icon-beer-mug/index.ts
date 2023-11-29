import type { App } from 'vue';
import _IconBeerMug from './icon-beer-mug.vue';

const IconBeerMug = Object.assign(_IconBeerMug, {
  install: (app: App) => {
    app.component(_IconBeerMug.name, _IconBeerMug);
  }
});

export default IconBeerMug;
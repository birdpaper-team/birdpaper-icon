import type { App } from 'vue';
import _IconBeer from './icon-beer.vue';

const IconBeer = Object.assign(_IconBeer, {
  install: (app: App) => {
    app.component(_IconBeer.name, _IconBeer);
  }
});

export default IconBeer;
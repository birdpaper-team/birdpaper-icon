import type { App } from 'vue';
import _IconPlayBasketball from './icon-play-basketball.vue';

const IconPlayBasketball = Object.assign(_IconPlayBasketball, {
  install: (app: App) => {
    app.component(_IconPlayBasketball.name, _IconPlayBasketball);
  }
});

export default IconPlayBasketball;
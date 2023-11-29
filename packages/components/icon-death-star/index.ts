import type { App } from 'vue';
import _IconDeathStar from './icon-death-star.vue';

const IconDeathStar = Object.assign(_IconDeathStar, {
  install: (app: App) => {
    app.component(_IconDeathStar.name, _IconDeathStar);
  }
});

export default IconDeathStar;
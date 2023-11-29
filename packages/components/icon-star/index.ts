import type { App } from 'vue';
import _IconStar from './icon-star.vue';

const IconStar = Object.assign(_IconStar, {
  install: (app: App) => {
    app.component(_IconStar.name, _IconStar);
  }
});

export default IconStar;
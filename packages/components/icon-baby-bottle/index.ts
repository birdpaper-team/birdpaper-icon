import type { App } from 'vue';
import _IconBabyBottle from './icon-baby-bottle.vue';

const IconBabyBottle = Object.assign(_IconBabyBottle, {
  install: (app: App) => {
    app.component(_IconBabyBottle.name, _IconBabyBottle);
  }
});

export default IconBabyBottle;
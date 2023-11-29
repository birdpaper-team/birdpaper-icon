import type { App } from 'vue';
import _IconBabyPants from './icon-baby-pants.vue';

const IconBabyPants = Object.assign(_IconBabyPants, {
  install: (app: App) => {
    app.component(_IconBabyPants.name, _IconBabyPants);
  }
});

export default IconBabyPants;
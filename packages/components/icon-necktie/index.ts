import type { App } from 'vue';
import _IconNecktie from './icon-necktie.vue';

const IconNecktie = Object.assign(_IconNecktie, {
  install: (app: App) => {
    app.component(_IconNecktie.name, _IconNecktie);
  }
});

export default IconNecktie;
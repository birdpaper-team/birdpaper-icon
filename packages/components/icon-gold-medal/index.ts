import type { App } from 'vue';
import _IconGoldMedal from './icon-gold-medal.vue';

const IconGoldMedal = Object.assign(_IconGoldMedal, {
  install: (app: App) => {
    app.component(_IconGoldMedal.name, _IconGoldMedal);
  }
});

export default IconGoldMedal;
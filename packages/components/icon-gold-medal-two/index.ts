import type { App } from 'vue';
import _IconGoldMedalTwo from './icon-gold-medal-two.vue';

const IconGoldMedalTwo = Object.assign(_IconGoldMedalTwo, {
  install: (app: App) => {
    app.component(_IconGoldMedalTwo.name, _IconGoldMedalTwo);
  }
});

export default IconGoldMedalTwo;
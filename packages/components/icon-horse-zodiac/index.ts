import type { App } from 'vue';
import _IconHorseZodiac from './icon-horse-zodiac.vue';

const IconHorseZodiac = Object.assign(_IconHorseZodiac, {
  install: (app: App) => {
    app.component(_IconHorseZodiac.name, _IconHorseZodiac);
  }
});

export default IconHorseZodiac;
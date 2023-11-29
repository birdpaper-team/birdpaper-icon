import type { App } from 'vue';
import _IconPigZodiac from './icon-pig-zodiac.vue';

const IconPigZodiac = Object.assign(_IconPigZodiac, {
  install: (app: App) => {
    app.component(_IconPigZodiac.name, _IconPigZodiac);
  }
});

export default IconPigZodiac;
import type { App } from 'vue';
import _IconDogZodiac from './icon-dog-zodiac.vue';

const IconDogZodiac = Object.assign(_IconDogZodiac, {
  install: (app: App) => {
    app.component(_IconDogZodiac.name, _IconDogZodiac);
  }
});

export default IconDogZodiac;
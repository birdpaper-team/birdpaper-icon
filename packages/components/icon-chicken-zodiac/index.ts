import type { App } from 'vue';
import _IconChickenZodiac from './icon-chicken-zodiac.vue';

const IconChickenZodiac = Object.assign(_IconChickenZodiac, {
  install: (app: App) => {
    app.component(_IconChickenZodiac.name, _IconChickenZodiac);
  }
});

export default IconChickenZodiac;
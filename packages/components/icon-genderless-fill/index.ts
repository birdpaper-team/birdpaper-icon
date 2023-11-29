import type { App } from 'vue';
import _IconGenderlessFill from './icon-genderless-fill.vue';

const IconGenderlessFill = Object.assign(_IconGenderlessFill, {
  install: (app: App) => {
    app.component(_IconGenderlessFill.name, _IconGenderlessFill);
  }
});

export default IconGenderlessFill;
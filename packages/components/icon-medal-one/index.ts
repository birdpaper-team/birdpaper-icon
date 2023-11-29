import type { App } from 'vue';
import _IconMedalOne from './icon-medal-one.vue';

const IconMedalOne = Object.assign(_IconMedalOne, {
  install: (app: App) => {
    app.component(_IconMedalOne.name, _IconMedalOne);
  }
});

export default IconMedalOne;
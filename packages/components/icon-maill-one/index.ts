import type { App } from 'vue';
import _IconMaillOne from './icon-maill-one.vue';

const IconMaillOne = Object.assign(_IconMaillOne, {
  install: (app: App) => {
    app.component(_IconMaillOne.name, _IconMaillOne);
  }
});

export default IconMaillOne;
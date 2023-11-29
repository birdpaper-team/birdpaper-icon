import type { App } from 'vue';
import _IconFeelgoodOne from './icon-feelgood-one.vue';

const IconFeelgoodOne = Object.assign(_IconFeelgoodOne, {
  install: (app: App) => {
    app.component(_IconFeelgoodOne.name, _IconFeelgoodOne);
  }
});

export default IconFeelgoodOne;
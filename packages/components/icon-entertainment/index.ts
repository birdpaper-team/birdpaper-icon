import type { App } from 'vue';
import _IconEntertainment from './icon-entertainment.vue';

const IconEntertainment = Object.assign(_IconEntertainment, {
  install: (app: App) => {
    app.component(_IconEntertainment.name, _IconEntertainment);
  }
});

export default IconEntertainment;
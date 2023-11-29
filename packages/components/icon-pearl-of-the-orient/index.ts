import type { App } from 'vue';
import _IconPearlOfTheOrient from './icon-pearl-of-the-orient.vue';

const IconPearlOfTheOrient = Object.assign(_IconPearlOfTheOrient, {
  install: (app: App) => {
    app.component(_IconPearlOfTheOrient.name, _IconPearlOfTheOrient);
  }
});

export default IconPearlOfTheOrient;
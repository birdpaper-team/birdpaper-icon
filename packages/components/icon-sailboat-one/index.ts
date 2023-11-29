import type { App } from 'vue';
import _IconSailboatOne from './icon-sailboat-one.vue';

const IconSailboatOne = Object.assign(_IconSailboatOne, {
  install: (app: App) => {
    app.component(_IconSailboatOne.name, _IconSailboatOne);
  }
});

export default IconSailboatOne;
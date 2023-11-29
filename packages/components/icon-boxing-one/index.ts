import type { App } from 'vue';
import _IconBoxingOne from './icon-boxing-one.vue';

const IconBoxingOne = Object.assign(_IconBoxingOne, {
  install: (app: App) => {
    app.component(_IconBoxingOne.name, _IconBoxingOne);
  }
});

export default IconBoxingOne;
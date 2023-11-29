import type { App } from 'vue';
import _IconCakeOne from './icon-cake-one.vue';

const IconCakeOne = Object.assign(_IconCakeOne, {
  install: (app: App) => {
    app.component(_IconCakeOne.name, _IconCakeOne);
  }
});

export default IconCakeOne;
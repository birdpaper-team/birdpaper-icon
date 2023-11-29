import type { App } from 'vue';
import _IconCakeTwo from './icon-cake-two.vue';

const IconCakeTwo = Object.assign(_IconCakeTwo, {
  install: (app: App) => {
    app.component(_IconCakeTwo.name, _IconCakeTwo);
  }
});

export default IconCakeTwo;
import type { App } from 'vue';
import _IconSwipe from './icon-swipe.vue';

const IconSwipe = Object.assign(_IconSwipe, {
  install: (app: App) => {
    app.component(_IconSwipe.name, _IconSwipe);
  }
});

export default IconSwipe;
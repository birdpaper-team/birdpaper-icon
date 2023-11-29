import type { App } from 'vue';
import _IconSlidingHorizontal from './icon-sliding-horizontal.vue';

const IconSlidingHorizontal = Object.assign(_IconSlidingHorizontal, {
  install: (app: App) => {
    app.component(_IconSlidingHorizontal.name, _IconSlidingHorizontal);
  }
});

export default IconSlidingHorizontal;
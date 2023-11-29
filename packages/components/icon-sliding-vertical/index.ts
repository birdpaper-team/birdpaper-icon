import type { App } from 'vue';
import _IconSlidingVertical from './icon-sliding-vertical.vue';

const IconSlidingVertical = Object.assign(_IconSlidingVertical, {
  install: (app: App) => {
    app.component(_IconSlidingVertical.name, _IconSlidingVertical);
  }
});

export default IconSlidingVertical;
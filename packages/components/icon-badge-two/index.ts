import type { App } from 'vue';
import _IconBadgeTwo from './icon-badge-two.vue';

const IconBadgeTwo = Object.assign(_IconBadgeTwo, {
  install: (app: App) => {
    app.component(_IconBadgeTwo.name, _IconBadgeTwo);
  }
});

export default IconBadgeTwo;
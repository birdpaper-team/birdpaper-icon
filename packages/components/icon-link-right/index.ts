import type { App } from 'vue';
import _IconLinkRight from './icon-link-right.vue';

const IconLinkRight = Object.assign(_IconLinkRight, {
  install: (app: App) => {
    app.component(_IconLinkRight.name, _IconLinkRight);
  }
});

export default IconLinkRight;
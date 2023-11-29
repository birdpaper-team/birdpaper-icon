import type { App } from 'vue';
import _IconLinkLeft from './icon-link-left.vue';

const IconLinkLeft = Object.assign(_IconLinkLeft, {
  install: (app: App) => {
    app.component(_IconLinkLeft.name, _IconLinkLeft);
  }
});

export default IconLinkLeft;
import type { App } from 'vue';
import _IconLinkTwo from './icon-link-two.vue';

const IconLinkTwo = Object.assign(_IconLinkTwo, {
  install: (app: App) => {
    app.component(_IconLinkTwo.name, _IconLinkTwo);
  }
});

export default IconLinkTwo;
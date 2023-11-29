import type { App } from 'vue';
import _IconLinkOne from './icon-link-one.vue';

const IconLinkOne = Object.assign(_IconLinkOne, {
  install: (app: App) => {
    app.component(_IconLinkOne.name, _IconLinkOne);
  }
});

export default IconLinkOne;
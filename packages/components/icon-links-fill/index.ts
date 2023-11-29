import type { App } from 'vue';
import _IconLinksFill from './icon-links-fill.vue';

const IconLinksFill = Object.assign(_IconLinksFill, {
  install: (app: App) => {
    app.component(_IconLinksFill.name, _IconLinksFill);
  }
});

export default IconLinksFill;
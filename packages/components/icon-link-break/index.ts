import type { App } from 'vue';
import _IconLinkBreak from './icon-link-break.vue';

const IconLinkBreak = Object.assign(_IconLinkBreak, {
  install: (app: App) => {
    app.component(_IconLinkBreak.name, _IconLinkBreak);
  }
});

export default IconLinkBreak;
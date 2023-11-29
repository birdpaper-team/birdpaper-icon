import type { App } from 'vue';
import _IconCopyLink from './icon-copy-link.vue';

const IconCopyLink = Object.assign(_IconCopyLink, {
  install: (app: App) => {
    app.component(_IconCopyLink.name, _IconCopyLink);
  }
});

export default IconCopyLink;
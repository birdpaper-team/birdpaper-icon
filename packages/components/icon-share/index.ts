import type { App } from 'vue';
import _IconShare from './icon-share.vue';

const IconShare = Object.assign(_IconShare, {
  install: (app: App) => {
    app.component(_IconShare.name, _IconShare);
  }
});

export default IconShare;
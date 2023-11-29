import type { App } from 'vue';
import _IconSnapchatFill from './icon-snapchat-fill.vue';

const IconSnapchatFill = Object.assign(_IconSnapchatFill, {
  install: (app: App) => {
    app.component(_IconSnapchatFill.name, _IconSnapchatFill);
  }
});

export default IconSnapchatFill;
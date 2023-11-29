import type { App } from 'vue';
import _IconReplyAllFill from './icon-reply-all-fill.vue';

const IconReplyAllFill = Object.assign(_IconReplyAllFill, {
  install: (app: App) => {
    app.component(_IconReplyAllFill.name, _IconReplyAllFill);
  }
});

export default IconReplyAllFill;
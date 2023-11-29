import type { App } from 'vue';
import _IconReplyFill from './icon-reply-fill.vue';

const IconReplyFill = Object.assign(_IconReplyFill, {
  install: (app: App) => {
    app.component(_IconReplyFill.name, _IconReplyFill);
  }
});

export default IconReplyFill;
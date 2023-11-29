import type { App } from 'vue';
import _IconInbox2Fill from './icon-inbox-2-fill.vue';

const IconInbox2Fill = Object.assign(_IconInbox2Fill, {
  install: (app: App) => {
    app.component(_IconInbox2Fill.name, _IconInbox2Fill);
  }
});

export default IconInbox2Fill;
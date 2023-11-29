import type { App } from 'vue';
import _IconAttachment2 from './icon-attachment-2.vue';

const IconAttachment2 = Object.assign(_IconAttachment2, {
  install: (app: App) => {
    app.component(_IconAttachment2.name, _IconAttachment2);
  }
});

export default IconAttachment2;
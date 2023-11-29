import type { App } from 'vue';
import _IconPaperclip from './icon-paperclip.vue';

const IconPaperclip = Object.assign(_IconPaperclip, {
  install: (app: App) => {
    app.component(_IconPaperclip.name, _IconPaperclip);
  }
});

export default IconPaperclip;
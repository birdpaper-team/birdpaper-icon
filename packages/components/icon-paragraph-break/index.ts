import type { App } from 'vue';
import _IconParagraphBreak from './icon-paragraph-break.vue';

const IconParagraphBreak = Object.assign(_IconParagraphBreak, {
  install: (app: App) => {
    app.component(_IconParagraphBreak.name, _IconParagraphBreak);
  }
});

export default IconParagraphBreak;
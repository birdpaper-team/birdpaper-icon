import type { App } from 'vue';
import _IconParagraphBreakTwo from './icon-paragraph-break-two.vue';

const IconParagraphBreakTwo = Object.assign(_IconParagraphBreakTwo, {
  install: (app: App) => {
    app.component(_IconParagraphBreakTwo.name, _IconParagraphBreakTwo);
  }
});

export default IconParagraphBreakTwo;
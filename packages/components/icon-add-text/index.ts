import type { App } from 'vue';
import _IconAddText from './icon-add-text.vue';

const IconAddText = Object.assign(_IconAddText, {
  install: (app: App) => {
    app.component(_IconAddText.name, _IconAddText);
  }
});

export default IconAddText;
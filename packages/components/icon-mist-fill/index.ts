import type { App } from 'vue';
import _IconMistFill from './icon-mist-fill.vue';

const IconMistFill = Object.assign(_IconMistFill, {
  install: (app: App) => {
    app.component(_IconMistFill.name, _IconMistFill);
  }
});

export default IconMistFill;
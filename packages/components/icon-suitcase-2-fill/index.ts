import type { App } from 'vue';
import _IconSuitcase2Fill from './icon-suitcase-2-fill.vue';

const IconSuitcase2Fill = Object.assign(_IconSuitcase2Fill, {
  install: (app: App) => {
    app.component(_IconSuitcase2Fill.name, _IconSuitcase2Fill);
  }
});

export default IconSuitcase2Fill;
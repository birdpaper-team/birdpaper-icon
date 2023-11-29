import type { App } from 'vue';
import _IconSuitcase3Fill from './icon-suitcase-3-fill.vue';

const IconSuitcase3Fill = Object.assign(_IconSuitcase3Fill, {
  install: (app: App) => {
    app.component(_IconSuitcase3Fill.name, _IconSuitcase3Fill);
  }
});

export default IconSuitcase3Fill;
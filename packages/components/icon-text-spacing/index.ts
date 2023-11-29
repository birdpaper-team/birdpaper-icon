import type { App } from 'vue';
import _IconTextSpacing from './icon-text-spacing.vue';

const IconTextSpacing = Object.assign(_IconTextSpacing, {
  install: (app: App) => {
    app.component(_IconTextSpacing.name, _IconTextSpacing);
  }
});

export default IconTextSpacing;
import type { App } from 'vue';
import _IconDistributeVerticalSpacing from './icon-distribute-vertical-spacing.vue';

const IconDistributeVerticalSpacing = Object.assign(_IconDistributeVerticalSpacing, {
  install: (app: App) => {
    app.component(_IconDistributeVerticalSpacing.name, _IconDistributeVerticalSpacing);
  }
});

export default IconDistributeVerticalSpacing;
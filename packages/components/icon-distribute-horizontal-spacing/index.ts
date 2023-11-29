import type { App } from 'vue';
import _IconDistributeHorizontalSpacing from './icon-distribute-horizontal-spacing.vue';

const IconDistributeHorizontalSpacing = Object.assign(_IconDistributeHorizontalSpacing, {
  install: (app: App) => {
    app.component(_IconDistributeHorizontalSpacing.name, _IconDistributeHorizontalSpacing);
  }
});

export default IconDistributeHorizontalSpacing;
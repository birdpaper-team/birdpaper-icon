import type { App } from 'vue';
import _IconHorizontalSpacingBetweenItems from './icon-horizontal-spacing-between-items.vue';

const IconHorizontalSpacingBetweenItems = Object.assign(_IconHorizontalSpacingBetweenItems, {
  install: (app: App) => {
    app.component(_IconHorizontalSpacingBetweenItems.name, _IconHorizontalSpacingBetweenItems);
  }
});

export default IconHorizontalSpacingBetweenItems;
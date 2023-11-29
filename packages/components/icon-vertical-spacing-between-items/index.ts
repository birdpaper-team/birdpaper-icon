import type { App } from 'vue';
import _IconVerticalSpacingBetweenItems from './icon-vertical-spacing-between-items.vue';

const IconVerticalSpacingBetweenItems = Object.assign(_IconVerticalSpacingBetweenItems, {
  install: (app: App) => {
    app.component(_IconVerticalSpacingBetweenItems.name, _IconVerticalSpacingBetweenItems);
  }
});

export default IconVerticalSpacingBetweenItems;
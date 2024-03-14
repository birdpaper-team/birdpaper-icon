import type { App } from 'vue';
import _IconTextBlock from './icon-text-block.vue';

const IconTextBlock = Object.assign(_IconTextBlock, {
  install: (app: App) => {
    app.component(_IconTextBlock.name, _IconTextBlock);
  }
});

export default IconTextBlock;
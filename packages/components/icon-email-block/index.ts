import type { App } from 'vue';
import _IconEmailBlock from './icon-email-block.vue';

const IconEmailBlock = Object.assign(_IconEmailBlock, {
  install: (app: App) => {
    app.component(_IconEmailBlock.name, _IconEmailBlock);
  }
});

export default IconEmailBlock;
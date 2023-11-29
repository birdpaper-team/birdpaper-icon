import type { App } from 'vue';
import _IconBlock from './icon-block.vue';

const IconBlock = Object.assign(_IconBlock, {
  install: (app: App) => {
    app.component(_IconBlock.name, _IconBlock);
  }
});

export default IconBlock;
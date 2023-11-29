import type { App } from 'vue';
import _IconFolderBlock from './icon-folder-block.vue';

const IconFolderBlock = Object.assign(_IconFolderBlock, {
  install: (app: App) => {
    app.component(_IconFolderBlock.name, _IconFolderBlock);
  }
});

export default IconFolderBlock;
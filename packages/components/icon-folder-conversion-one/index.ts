import type { App } from 'vue';
import _IconFolderConversionOne from './icon-folder-conversion-one.vue';

const IconFolderConversionOne = Object.assign(_IconFolderConversionOne, {
  install: (app: App) => {
    app.component(_IconFolderConversionOne.name, _IconFolderConversionOne);
  }
});

export default IconFolderConversionOne;
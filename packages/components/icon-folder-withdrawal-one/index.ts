import type { App } from 'vue';
import _IconFolderWithdrawalOne from './icon-folder-withdrawal-one.vue';

const IconFolderWithdrawalOne = Object.assign(_IconFolderWithdrawalOne, {
  install: (app: App) => {
    app.component(_IconFolderWithdrawalOne.name, _IconFolderWithdrawalOne);
  }
});

export default IconFolderWithdrawalOne;
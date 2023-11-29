import type { App } from 'vue';
import _IconFolderWithdrawal from './icon-folder-withdrawal.vue';

const IconFolderWithdrawal = Object.assign(_IconFolderWithdrawal, {
  install: (app: App) => {
    app.component(_IconFolderWithdrawal.name, _IconFolderWithdrawal);
  }
});

export default IconFolderWithdrawal;
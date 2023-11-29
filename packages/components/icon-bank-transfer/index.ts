import type { App } from 'vue';
import _IconBankTransfer from './icon-bank-transfer.vue';

const IconBankTransfer = Object.assign(_IconBankTransfer, {
  install: (app: App) => {
    app.component(_IconBankTransfer.name, _IconBankTransfer);
  }
});

export default IconBankTransfer;
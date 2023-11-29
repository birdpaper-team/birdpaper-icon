import type { App } from 'vue';
import _IconReverseOperationOut from './icon-reverse-operation-out.vue';

const IconReverseOperationOut = Object.assign(_IconReverseOperationOut, {
  install: (app: App) => {
    app.component(_IconReverseOperationOut.name, _IconReverseOperationOut);
  }
});

export default IconReverseOperationOut;
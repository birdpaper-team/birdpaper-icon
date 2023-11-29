import type { App } from 'vue';
import _IconInductionLock from './icon-induction-lock.vue';

const IconInductionLock = Object.assign(_IconInductionLock, {
  install: (app: App) => {
    app.component(_IconInductionLock.name, _IconInductionLock);
  }
});

export default IconInductionLock;
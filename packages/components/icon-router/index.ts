import type { App } from 'vue';
import _IconRouter from './icon-router.vue';

const IconRouter = Object.assign(_IconRouter, {
  install: (app: App) => {
    app.component(_IconRouter.name, _IconRouter);
  }
});

export default IconRouter;
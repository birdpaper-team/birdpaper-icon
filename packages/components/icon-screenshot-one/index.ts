import type { App } from 'vue';
import _IconScreenshotOne from './icon-screenshot-one.vue';

const IconScreenshotOne = Object.assign(_IconScreenshotOne, {
  install: (app: App) => {
    app.component(_IconScreenshotOne.name, _IconScreenshotOne);
  }
});

export default IconScreenshotOne;
import type { App } from 'vue';
import _IconFileRemovalOne from './icon-file-removal-one.vue';

const IconFileRemovalOne = Object.assign(_IconFileRemovalOne, {
  install: (app: App) => {
    app.component(_IconFileRemovalOne.name, _IconFileRemovalOne);
  }
});

export default IconFileRemovalOne;
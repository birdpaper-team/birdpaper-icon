import type { App } from 'vue';
import _IconFenceOne from './icon-fence-one.vue';

const IconFenceOne = Object.assign(_IconFenceOne, {
  install: (app: App) => {
    app.component(_IconFenceOne.name, _IconFenceOne);
  }
});

export default IconFenceOne;
import type { App } from 'vue';
import _IconAlignTextCenterOne from './icon-align-text-center-one.vue';

const IconAlignTextCenterOne = Object.assign(_IconAlignTextCenterOne, {
  install: (app: App) => {
    app.component(_IconAlignTextCenterOne.name, _IconAlignTextCenterOne);
  }
});

export default IconAlignTextCenterOne;
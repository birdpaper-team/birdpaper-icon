import type { App } from 'vue';
import _IconAlignHorizontalCenterTwo from './icon-align-horizontal-center-two.vue';

const IconAlignHorizontalCenterTwo = Object.assign(_IconAlignHorizontalCenterTwo, {
  install: (app: App) => {
    app.component(_IconAlignHorizontalCenterTwo.name, _IconAlignHorizontalCenterTwo);
  }
});

export default IconAlignHorizontalCenterTwo;
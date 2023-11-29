import type { App } from 'vue';
import _IconShowerHead from './icon-shower-head.vue';

const IconShowerHead = Object.assign(_IconShowerHead, {
  install: (app: App) => {
    app.component(_IconShowerHead.name, _IconShowerHead);
  }
});

export default IconShowerHead;
import type { App } from 'vue';
import _IconBone from './icon-bone.vue';

const IconBone = Object.assign(_IconBone, {
  install: (app: App) => {
    app.component(_IconBone.name, _IconBone);
  }
});

export default IconBone;
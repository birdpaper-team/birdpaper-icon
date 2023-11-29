import type { App } from 'vue';
import _IconBrdigeThree from './icon-brdige-three.vue';

const IconBrdigeThree = Object.assign(_IconBrdigeThree, {
  install: (app: App) => {
    app.component(_IconBrdigeThree.name, _IconBrdigeThree);
  }
});

export default IconBrdigeThree;
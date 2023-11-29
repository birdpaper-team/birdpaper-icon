import type { App } from 'vue';
import _IconThreeSlashes from './icon-three-slashes.vue';

const IconThreeSlashes = Object.assign(_IconThreeSlashes, {
  install: (app: App) => {
    app.component(_IconThreeSlashes.name, _IconThreeSlashes);
  }
});

export default IconThreeSlashes;
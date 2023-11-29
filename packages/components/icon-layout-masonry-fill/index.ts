import type { App } from 'vue';
import _IconLayoutMasonryFill from './icon-layout-masonry-fill.vue';

const IconLayoutMasonryFill = Object.assign(_IconLayoutMasonryFill, {
  install: (app: App) => {
    app.component(_IconLayoutMasonryFill.name, _IconLayoutMasonryFill);
  }
});

export default IconLayoutMasonryFill;
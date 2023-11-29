import type { App } from 'vue';
import _IconMailReview from './icon-mail-review.vue';

const IconMailReview = Object.assign(_IconMailReview, {
  install: (app: App) => {
    app.component(_IconMailReview.name, _IconMailReview);
  }
});

export default IconMailReview;
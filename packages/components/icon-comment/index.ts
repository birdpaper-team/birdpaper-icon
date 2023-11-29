import type { App } from 'vue';
import _IconComment from './icon-comment.vue';

const IconComment = Object.assign(_IconComment, {
  install: (app: App) => {
    app.component(_IconComment.name, _IconComment);
  }
});

export default IconComment;
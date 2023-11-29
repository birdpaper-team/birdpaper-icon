import type { App } from 'vue';
import _IconCarouselVideo from './icon-carousel-video.vue';

const IconCarouselVideo = Object.assign(_IconCarouselVideo, {
  install: (app: App) => {
    app.component(_IconCarouselVideo.name, _IconCarouselVideo);
  }
});

export default IconCarouselVideo;
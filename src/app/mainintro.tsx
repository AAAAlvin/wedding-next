
import { MainTitle } from './maintitle';
import { PhotoGallery } from './photogallery';

export function MainIntro() {
  return (
    <div>
      <div className="bg-white">
          <MainTitle title="GALLERY" subtitle="우리의 순간"/>
          <PhotoGallery/>
      </div>
    </div>
  );
}
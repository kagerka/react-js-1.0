import s from './ProfileInfo.module.css';


function ProfileInfo() {
  return (
    <div>
      <div className={s.content_img_wrapper}>
        <img className={s.content_img}
             src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
             alt=""/>
      </div>
      <div className={s.wrapper}>
        <img className={s.avatar} src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" alt=""/>
      </div>
    </div>
  );
}

export default ProfileInfo;

import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import userPhoto from './../../../assets/images/userpic-base.jpg';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={s.content_img_wrapper}>
        <img
          className={s.content_img}
          src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
          alt=''
        />
      </div>
      <div className={s.wrapper}>
        <img
          className={s.avatar}
          src={
            props.profile.photos.large ? props.profile.photos.large : userPhoto
          }
          alt=''
        />
        <div>
          <div>
            <h2 className={s.fullName}>{props.profile.fullName}</h2>
          </div>
          <ProfileStatus
            status={props.status}
            updateStatus={props.updateStatus}
          />
          <div>
            <h3 className={s.h3}>About me </h3>
            <div>{props.profile.aboutMe}</div>
          </div>
          <div>
            <h3 className={s.h3}>Contacts</h3>
            <div>
              <strong>Facebook: </strong>
              {props.profile.contacts.facebook}
            </div>
            <div>
              <strong>Website: </strong>
              {props.profile.contacts.website}
            </div>
            <div>
              <strong>VK: </strong> {props.profile.contacts.vk}
            </div>
            <div>
              <strong>Twitter: </strong>
              {props.profile.contacts.twitter}
            </div>
            <div>
              <strong>Instagram: </strong>
              {props.profile.contacts.instagram}
            </div>
            <div>
              <strong>Youtube: </strong>
              {props.profile.contacts.youtube}
            </div>
            <div>
              <strong>Github: </strong>
              {props.profile.contacts.github}
            </div>
            <div>
              <strong>Main link: </strong>
              {props.profile.contacts.mainLink}
            </div>
          </div>
          {props.profile.lookingForAJob ? (
            <div>
              <h3 className={s.h3}>Ищу работу</h3>
              <div>{props.profile.lookingForAJobDescription}</div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;

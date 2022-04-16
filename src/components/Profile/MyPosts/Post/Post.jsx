import s from './Post.module.css';

function Post(props) {
  return (
    <div className={s.item}>
      <img className={s.avatar}
           src="https://cdn.impactinit.com/cdn/x/x@f59b8e3f78/smss52/smsimg30/pv/ingimagecontributors/ing_47129_23497.jpg"
           alt=""/>
      { props.message }
      <div><span>Likes: </span>{ props.likes }</div>
    </div>
  );
}

export default Post;

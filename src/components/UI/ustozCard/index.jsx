import { memo } from "react";
import { userImg } from "../../../assets/images/svg";
import { Deleti, Edit, Calendar, UserIconMini } from "../../../assets/react-icons";

const index = memo(({ className }) => {
  return (
    <div className={`ustoz__card ${className}`}>
      <img className="ustoz__img" src={userImg} alt="" />
      <Edit className="edit" />
      <Deleti className="deleti" />
      <h3 className="ustoz__title">Mirzaev Mirkomil</h3>
      <h4 className="ustoz__Id">ID 123456789</h4>
      <div className="ustoz__malumot">
        <div className="Toifa">
          <div className="icon__user"> <UserIconMini /></div>
          <div className="column">
            <p>Toifa</p>
            <span>IV</span>
          </div>
        </div>
        <div className="Kuni">
          <Calendar className="kalendar" />
          <div className="column">
            <p>kuni</p>
            <span>Se Pay Sha</span>
          </div>
        </div>
      </div>
    </div>

  );
});

export default index;
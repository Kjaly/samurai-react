import React from "react";
import s from "./Users.module.scss";
import userPhoto from "../../assets/images/IconBros.png";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";


let User = ({user,folowingInProgress,unfollow,follow}) => {
    return (
        <div key={user.id}>
                    <span>
                        <div className={s.userAvatar}>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=""/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={folowingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              unfollow(user.id)
                                          }}>
                                    Unfollow </button>

                                : <button disabled={folowingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              follow(user.id)
                                          }}>
                                    Follow </button>}

                        </div>
                    </span>
            <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'user.location.country'}</div>
                            <div>{'user.location.city'}</div>
                        </span>
                    </span>
        </div>
    )
}

export default User;
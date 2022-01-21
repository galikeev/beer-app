import { useState, useEffect, useMemo } from "react";

import setContent from "../../utils/setContent";
import useBeerService from "../../services/BeerService";

import './userProfile.scss';

const UserProfile = () => {

    const [user, setUser] = useState({});

    const {getUser, process, setProcess} = useBeerService();

    useEffect(() => {
        updateUser()
        // eslint-disable-next-line
    }, [])
    
    const onUserLoaded = (user) => {
        setUser(() => user)
    }

    const updateUser = () => {
        getUser()
            .then(onUserLoaded)
            .then(() => setProcess('confirmed'))
    }

    const renderItems = (obj) => {
        const mail = `mailto:${obj.email}`;
        const phone = `tel:${obj.phone}`;
        return (
            <div key={obj.id} className="user__wrapper">
                <div className="user__profile">
                    <div className="user__img">
                        <img src={obj.img} alt={obj.username} />
                    </div>
                    <div className="user__main">
                        <h3 className="user__nick">@{obj.username}</h3>
                        <h2 className="user__name">{obj.name} {obj.surname}</h2>
                        <div>{obj.titileJob}, {obj.skillJob}</div>
                    </div>
                    <div className="user__main">
                        <div>Gender: {obj.gender}</div>
                        <div>Date birthday: {obj.birthday }</div>
                    </div>
                </div>
                <div className="user__descr">
                    <div className="user__from">{obj.country}, {obj.state}, <br/> {obj.city}, <br/> {obj.streetName}, {obj.address}</div>
                    <div className="user__phone">
                        <a href={phone}>{obj.phone}</a>
                    </div>
                    <div className="user__mail">
                    <a href={mail}>{obj.email}</a>
                    </div>
                    <button className="user__button" onClick={updateUser}>Change user</button>
                </div>
            </div>
        )
    }

    const elements = useMemo(() => {
        return setContent(process, () => renderItems(user));
        // eslint-disable-next-line
    }, [process])

    return (
        <div className="user">
            {elements}
        </div>
    )
}

export default UserProfile;
import { useState, useEffect, useMemo } from "react";

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import useBeerService from "../../services/BeerService";

import './userProfile.scss';

const setContent = (process, Component) => {
    switch (process) {
        case 'waiting':
            return <Spinner/>
        case 'loading':
            return <Spinner/>
        case 'confirmed':
            return <Component/>
        case 'error':
            return <ErrorMessage/>
        default:
            throw new Error('Unexpected process state')
    }
}

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
        return (
            <>
                <div>{obj.first_name}</div>
                <div>{obj.last_name}</div>
            </>
        )
    }

    const elements = useMemo(() => {
        return setContent(process, () => renderItems(user));
        // eslint-disable-next-line
    }, [process])

    return (
        <>
            {elements}
        </>
    )
}

export default UserProfile;
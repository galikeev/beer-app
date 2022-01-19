import {useHttp} from '../hooks/http.hook';

const useBeerService = () => {
    const {request, clearError, process, setProcess} = useHttp();

    const _apiBase = 'https://random-data-api.com/api/';

    const getUser = async () => {
        const res = await request(`${_apiBase}users/random_user`);
        return _transformUser(res);
    }

    const getBeer = async () => {
        const res = await request(`${_apiBase}beer/random_beer`);
        return res;
    }

    const _transformUser = (user) => {
        return {
            id: user.id,
            uid: user.uid,
            name: user.first_name,
            surname: user.last_name,
            username: user.username,
            email: user.email,
            img: user.avatar,
            gender: user.gender,
            phone: user.phone_number.substr(0, user.phone_number.length - 6),
            birthday: user.date_of_birth,
            titileJob: user.employment.title,
            skillJob: user.employment.key_skill,
            city: user.address.city,
            streetName: user.address.street_name,
            address: user.address.street_address,
            state: user.address.state,
            country: user.address.country
        }
    }

    return {
        clearError,
        process,
        setProcess,
        getUser,
        getBeer,
    }
}

export default useBeerService;
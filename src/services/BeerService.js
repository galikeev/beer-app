import {useHttp} from '../hooks/http.hook';

const useBeerService = () => {
    const {request, clearError, process, setProcess} = useHttp();

    const _apiBase = 'https://random-data-api.com/api/';

    const getUser = async () => {
        const res = await request(`${_apiBase}users/random_user`);
        return res;
    }

    const getBeer = async () => {
        const res = await request(`${_apiBase}beer/random_beer`);
        return res;
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
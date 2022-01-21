import { useState, useEffect, useMemo } from "react";

import setContent from "../../utils/setContent";
import useBeerService from "../../services/BeerService";

import './beerProfile.scss';

const BeerProfile = () => {

    const [beer, setBeer] = useState({});

    const {getBeer, process, setProcess} = useBeerService();

    useEffect(() => {
        updateBeer()
        // eslint-disable-next-line
    }, [])

    const onBeerLoaded = (beer) => {
        setBeer(() => beer)
    }

    const updateBeer = () => {
        getBeer()
            .then(onBeerLoaded)
            .then(() => setProcess('confirmed'))
    }

    const renderItems = (obj) => {
        return (
            <div>{obj.brand}</div>
        )
    }

    const elements = useMemo(() => {
        return setContent(process, () => renderItems(beer));
        // eslint-disable-next-line
    }, [process])

    return (
        <div className="beer">
            {elements}
        </div>
    )
}

export default BeerProfile;
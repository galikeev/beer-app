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
            <div key={obj.id} className="beer__wrapper">
                <div className="beer__name">
                    <h2 className="beer__desr">{obj.brand}</h2>
                    <h2 className="beer__desr">{obj.name}</h2>
                    <h2 className="beer__desr">{obj.style}</h2>
                </div>
                <div className="beer__style">
                    <div className="beer__desr">Hop: {obj.hop}</div>
                    <div className="beer__desr">Yeast: {obj.yeast}</div>
                    <div className="beer__desr">Malt: {obj.malts}</div>
                    <div className="beer__desr">Ibu: {obj.ibu}</div>
                    <div className="beer__desr">Alcohol: {obj.alcohol}</div>
                    <div className="beer__desr">Blg: {obj.blg}</div>
                </div>
                <button className="beer__button" onClick={updateBeer}>Change beer</button>
            </div>
        )
    }

    const elements = useMemo(() => {
        return setContent(process, () => renderItems(beer));
        // eslint-disable-next-line
    }, [process])

    return (
        <div className="beer">
            <h1 className="beer__title">My beer:</h1>
            {elements}
        </div>
    )
}

export default BeerProfile;
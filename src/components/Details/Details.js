import React, {useState, useEffect} from 'react';
// подкл хук История
import { useHistory } from 'react-router-dom';
import Youtube from 'react-youtube';
import './details.css';

import useLaunches from '../useLaunches/useLaunches';
import Main from '../Main/Main';

const Details = (props) => {

    const [launch, setLaunch] = useState(null);
    const { getLaunch } = useLaunches();

    useEffect(() => {
        setLaunch(getLaunch(props.match.params.id));
    }, [getLaunch]);

    const history = useHistory();

    console.log(props.match);
    console.log(launch);

    return (
        <>
            <Main name={launch?.name} />
            <main className="details">
                <div className="container">
                    <div className="details-row">
                        <div className="details-image">
                            <img src={launch?.links.patch.small} alt={launch?.name} />
                        </div>
                        <div className="details-content">
                            <p className="details-description">{launch?.details}</p>
                        </div>
                    </div>
                    <div>
                        <Youtube videoId={launch?.links.youtube_id} className="details-youtube" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                    </div>
                </div>
                <a onClick={history.goBack} className="button button-back">go back</a>
            </main>
        </>
    )
};

export default Details;

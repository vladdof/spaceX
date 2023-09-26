export const createSrcVideo = (rocket) => {
    const PLANET_NAMES = {
        'Falcon 1': 'moon',
        'Falcon 9': 'earth',
        'Falcon Heavy': 'mars',
        'other': 'space'
    };

    return `/video/${PLANET_NAMES[rocket] || PLANET_NAMES['other']}.mp4`;
};

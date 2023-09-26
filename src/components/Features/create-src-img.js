export const createSrcImg = (rocket) => {
    const ROCKET_NAMES = {
        'Falcon 1': 'falcon-1',
        'Falcon 9': 'falcon-9',
        'Falcon Heavy': 'falcon-heavy',
        'other': 'starship'
    };

    return `/img/${ROCKET_NAMES.hasOwnProperty(rocket.value.name) ? ROCKET_NAMES[rocket.value.name] : ROCKET_NAMES['other']}.png`;
};

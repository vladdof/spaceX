export default class FetchData {
    startUrl = 'https://api.spacexdata.com/v4/';

    // запрос данных с сервера
    getResource = async url => {
        // await - пока не получим ответа , не запишем результат в переменную res
        const res = await fetch(url);
        // у fetch есть результат ok
        if (!res.ok) {
            throw new Error(`Произошла ошибка ${res.status}`);
        }

        return await res.json();
    };

    getRocket = async () => await this.getResource(this.startUrl + 'rockets');

    getLaunches = async () => await this.getResource(this.startUrl + 'launches/past');

    getCompany = async () => await this.getResource(this.startUrl + 'company');
};

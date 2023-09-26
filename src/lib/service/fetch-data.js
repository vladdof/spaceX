export class FetchData {
    startUrl = import.meta.env.VITE_API_SPACE;

    getResource = async url => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Произошла ошибка ${res.status}`);
        }

        return await res.json();
    };

    getRockets = async () => await this.getResource(this.startUrl + 'rockets');

    getLaunches = async () => await this.getResource(this.startUrl + 'launches/past');

    getCompany = async () => await this.getResource(this.startUrl + 'company');
};

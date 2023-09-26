import { defineStore } from 'pinia';
import { FetchData } from '../lib/service/fetch-data';

const fetchData = new FetchData();

export const useLaunchesStore = defineStore('launches', {
    state: () => ({
        launches: [],
        company: {},
        rockets: [],
    }),
    getters: {
        getLaunchById: ({ launches }) => {
            return (id) => launches.find((launch) => launch.id === id)
        },
    },
    actions: {
        async fetchLaunches() {
            this.launches = await fetchData.getLaunches();
        },
        async fetchCompany() {
            this.company = await fetchData.getCompany();
        },
        async fetchRockets() {
            this.rockets = await fetchData.getRockets();
        },
    },
})

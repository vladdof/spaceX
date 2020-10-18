import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Calendar from './components/Calendar/Calendar';
import Details from './components/Details/Details';
import FetchData from './service/FetchData';

import './style.css';

class App extends React.Component {

    fetchData = new FetchData();

    state = {
        rocket: 'Falcon 1',
        rocketFeatures: null,
        rockets: [],
        company: null,
    };
    // перед рендером запускается функция
    componentDidMount() {
        this.updateRocket();
        this.updateCompany();
    };

    updateRocket() {
        this.fetchData.getRocket()
            .then(data => {
                this.setState({ rockets: data.map(item => item.name) });

                return data;
            })
            .then(
                data => data.find(item => item.name === this.state.rocket)
            )
            .then(
                rocketFeatures => this.setState({ rocketFeatures }, () => {
                    console.log('после обновления', this.state);
                })
            );
    };

    changeRocket = rocket => {
        this.setState({
            rocket
        }, this.updateRocket);
    };

    updateCompany = () => {
        this.fetchData.getCompany()
            .then(
                company => this.setState({ company })
            )
    };

    render() {
        return (
            <BrowserRouter>
                <Header rockets={this.state.rockets} changeRocket={this.changeRocket} />

                <Route exact path='/' render={
                    () => this.state.company && <Home company={this.state.company} />
                } />

                <Route path='/rocket/:rocket' render={
                    ({match}) => this.state.rocketFeatures && <Features {...this.state.rocketFeatures} match={match} />
                } />

                <Route path='/calendar' component={Calendar} />

                <Route path='/details/:id' component={Details} />

                {this.state.company && <Footer {...this.state.company.links} />}
            </BrowserRouter>
        );
    };
};

export default App;

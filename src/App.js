import React, { Component } from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import Users from './Users';
import Things from './Things';
import Nav from './Nav';

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
            things: []
        }
    }
    componentDidMount() {
        return Promise.all([
            axios.get('/api/users'),
            axios.get('/api/things')
        ])
        .then( ([ users, things ]) => [
            users.data,
            things.data
        ])
        .then(([ users, things ]) => {
            this.setState({ users, things })
        })
    }
    render() {
        const { users, things } = this.state;
        console.log(this.state)
        return (
            <HashRouter>
                <div>
                    <h1>Acme Favorites</h1>
                        <div className="container">
                            <Route component={Nav} />

                            <Route exact path="/users" render={() => <Users users={users} /> } />
                            <Route exact path="/things" render={() => <Things things={things} />} />
                            <Redirect to="/users" />
                            
                        </div>
                </div>
            </HashRouter>
        )
    }
}

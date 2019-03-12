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
        this.loadUsers();
        this.loadThings();
    }
    loadUsers() {
        axios.get('/api/users')
            .then(({ data }) => this.setState({ users: data}))
            .catch(error => console.log(error));
    }
    loadThings() {
        axios.get('/api/things')
            .then(({ data }) => this.setState({ things: data }))
            .catch(error => console.log(error));
    }
    render() {
        const users = this.state.users;
        const things = this.state.things;
        return (
            <HashRouter>
                <div>
                    <h1>Acme Favorites</h1>
                        <div className="container">
                            <Route component={Nav} />

                            <Users users={users} />
                            <Things things={things} />
                            
                            <Route exact path="/users" component={Users} />
                            <Route exact path="/things" component={Things} />
                            <Redirect to="/users" />
                        </div>
                </div>
            </HashRouter>
        )
    }
}

import { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom' // BrowserRouter as Router
import Header from './components/Header'
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Describ from './pages/Describ';
import Footer from './components/Footer';
import './sass/main.scss';

class RoutesApp extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Redirect exact from="/" to="/Home" />
                        <Route path="/Home" component={Home} />
                        <Route path="/About" component={About} />
                        <Route path="/Describ/:userId" component={Describ} />
                        <Route path='*' component={NotFound} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default RoutesApp;
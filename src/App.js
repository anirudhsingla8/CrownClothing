import React,{Component} from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop_page/ShopPage";
import Header from "./components/header/Header";
import SignInSignUpPage from "./pages/sign_in_sign_up_page/SignInSignUpPage";
import {auth} from "./firebase/firebase";

const HatsPage = (props) => {
    return(
         <div>
            <h1>
                <button onClick={() => props.history.push('/hats')}/>
                HATS PAGE
            </h1>
        </div>
    )
}

const HatsPageList = (props) => {
    console.log(props.match.url)
    return(
        <div>
            <h1>
                HATS PAGE
                <Link to={`${props.match.url}/13`}>13</Link>
                <Link to={`${props.match.url}/14`}>14</Link>
                <Link to={`${props.match.url}/15`}>15</Link>
                <button onClick={() => props.history.push(`${props.match.url}/16`)}>16</button>
            </h1>
        </div>
    )
}

const HatsPageID = (props) => {
    console.log(props.match.url)
    return(
        <div>
            <h1>
                HATS PAGE{props.match.params.id}
            </h1>
        </div>
    )
}

class App extends Component{
    state={
        currentUser:null
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({
                currentUser: user
            });
            console.log('user is' + user);
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        const {currentUser} = this.state;
        return (
            <div>
                <Header currentUser={currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/hats' component={HatsPageList}/>
                    <Route exact path='/shop' component={ShopPage}/>
                    <Route path='/hats/:id' component={HatsPageID}/>
                    <Route path='/signIn' component={SignInSignUpPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;

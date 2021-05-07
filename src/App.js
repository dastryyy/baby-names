import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import NamesList from './components/namesList';
import Credit from './components/Credit';
import Search from './components/Search';
import ShortList from './components/ShortList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      favorites: []
    }
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }

  addFavorite(id) {
    const favList = this.state.favorites.concat([id])
    this.setState({
      favorites: favList
    })
  }

  render() {

    return(
      <div>
        <Search 
          filterText={this.state.filterText} 
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <ShortList 
            favorites={this.state.favorites}
            data={this.props.data}
          />
          <NamesList 
            data = {this.props.data}
            filterText={this.state.filterText}
            addFavorite={this.addFavorite.bind(this)}
          />
          <Credit />
        </main>
      </div>
    )
  }
}

export default App;

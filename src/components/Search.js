import React ,{Component} from 'react';
import '../App.css';

class Search extends Component {
  render (){
    return (
      <div className="Search">
          <form>
              <input text="enter the lyrics"/>
          </form>
      </div>
    );
  }
}

export default Search;
import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <section className='titlebar'>
          <h1 className='header'>Cookable</h1>
        </section>
        <section className="main-content">
          <h1 className="section-title">Recipes</h1>
          <div className="recipe-list">
            <div className="column-headers">
              <h2>Title</h2>
              <h2>Type</h2>
              <h2>Prep time</h2>
              <h2>Source</h2>
            </div>
            <div className="recipe-listings">
              <div>Some Title</div>
              <div>Entree</div>
              <div>Under 30 min</div>
              <div>Epicurious</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

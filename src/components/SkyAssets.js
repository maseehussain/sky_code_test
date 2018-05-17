import React from 'react';
import Axios from 'axios';

class SkyAssets extends React.Component {
  state = {
    assets: []
  }

  componentDidMount() {
    Axios
      .get('https://my-json-server.typicode.com/sky-uk/monitoring-tech-test/assets')
      .then(res => this.setState({ assets: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="page-banner col-md-12">
        <div className="index">
          {this.state.assets.map(asset => {
            return (
              <div key={asset.assetImage}>
                <h1 className="asset-name">{asset.name}</h1>
                <img src={asset.assetImage} className="img-responsive"/>
                <h2 className="asset-description">{asset.description}</h2>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SkyAssets;

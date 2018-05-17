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
      <div className="row">
        <div className="page-banner col-md-12">
          <img className="sky-logo" src="https://www.venturethree.com/assets/site/work/sky/_1024xAUTO_crop_center-center/sky-fallback2.png"/>
          <div className="index">
            {this.state.assets.map(asset => {
              return (
                <div key={asset.assetImage} className="image-tile col-md-4 col-sm-6 col-xs-12">
                  <h1 className="asset-name">{asset.name}</h1>
                  <h5 className="asset-provider">{asset.provider}</h5>
                  <img src={asset.assetImage} className="asset-image img-responsive"/>
                  <h2 className="asset-description">{asset.description}</h2>
                  <h4 className="views">Sky Go views: {asset.skygoTotalViews} <br/> NowTV views: {asset.nowtvTotalViews}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default SkyAssets;

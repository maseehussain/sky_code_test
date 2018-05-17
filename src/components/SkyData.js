import React from 'react';
import Axios from 'axios';

class SkyData extends React.Component {
  state = {
    database: []
  }

  componentDidMount() {
    Axios
      .get('https://my-json-server.typicode.com/sky-uk/monitoring-tech-test/data')
      .then(res => this.setState({ database: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="page-banner col-md-12">
        <div className="index">
          {this.state.database.map(data => {
            return (
              <div key={data.timestamp}>
                <h2 className="data-timestamp">Timestamp: {data.timestamp}</h2>
                <h3 className="data-value">Value: {data.value}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SkyData;

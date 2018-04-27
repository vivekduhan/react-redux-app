import React, {Component}  from 'react';

export default class GoogleMap extends Component {
  componentDidMount() {
    console.log('component mounted');
    new google.maps.Map(this.refs.map , {
      zoom: 8,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  render() {
    console.log('in google api');
    return <div ref="map" />;
  }
}

import React, { Component } from "react";
import { ListView } from "react-native";
import { connect } from "react-redux";
import ListItem from "./ListItem";

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.libraries); //take the key from mapStateToProps
  }
  renderRow(library) {
    return (
      <ListItem library={library} /> //the key will takes to List item value which is key = library
    );
  }
  render() {
    return <ListView dataSource={this.dataSource} renderRow={this.renderRow} />;
  }
}

//---IMPORTANT---- BRIDGE FROM STORE TO RENDER
const mapStateToProps = state => {
  return { libraries: state.libraries }; //key(it can be anything): state.(key of store(index.js))
};

export default connect(mapStateToProps)(LibraryList);
//connect(which one do u want to connect to store)(name of this class)

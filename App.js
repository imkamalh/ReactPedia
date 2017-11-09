import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { View } from "react-native";
import reducers from "./src/reducers";
import { Header } from "./src/components/common/header";
import LibraryList from './src/components/LibraryList';

const App = () => {
  return (
    <Provider store={createStore(reducers)}> 
      <View>
        <Header headerText="Reactpedia" />
        <LibraryList/>
      </View>
    </Provider>
  );
};

export default App;

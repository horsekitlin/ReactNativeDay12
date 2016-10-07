/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import _ from 'lodash';
import Chart from 'react-native-chart';

import fakerData from './data';

class ReactNativeDay12 extends Component {
    constructor(props){
        super(props);

        this.state = {
            ageData: getAgeData(fakerData),
        };
    }

  render() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.block}>
                    <Text style={styles.headerText}>
                        依照年齡分類
                    </Text>
                </View>
                <View>
                    <Chart
                          style={styles.chart}
                          data={this.state.ageData.line}
                          verticalGridStep={10}
                          type="line"
                          showDataPoint={true}
                       />
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.block}>
                    <Text style={styles.headerText}>
                        依照年齡分類(條狀圖)
                    </Text>
                </View>
                <View>
                    <Chart
                          style={styles.chart}
                          data={this.state.ageData.line}
                          verticalGridStep={10}
                          type="bar"
                          showDataPoint={true}
                       />
                </View>
            </View>
        </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        borderColor: '#CCCCCC',
        borderBottomWidth: 2,
        paddingBottom: 10,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    chart: {
        width: 200,
        height: 200,
    },
    block: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 5,
        paddingTop: 5,
        marginBottom: 5,
        paddingBottom: 5,

    },
    headerText: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 25,
    }
});


AppRegistry.registerComponent('ReactNativeDay12', () => ReactNativeDay12);


function getAgeData(fakerData: array): Object{
    const ageData = [
        [],
        [],
        [],
        [],
        [],
        []
    ];

    fakerData.map(user => {
        if(user.age > 60){
            ageData[5].push(user);
        }else if(user.age > 50){
            ageData[4].push(user);
        }else if(user.age > 40){
            ageData[3].push(user);
        }else if(user.age > 30){
            ageData[2].push(user);
        }else if(user.age > 20){
            ageData[1].push(user);
        }else if(user.age > 10){
            ageData[0].push(user);
        }
    });

    const lineType = [];

    ageData.map((content, index) => {
        lineType.push([index, content.length]);
    });

    return{
        line: lineType
    };
}

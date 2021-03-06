import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import FlipCard from 'react-native-flip-card'

const TaskCard = ({ goal }) => {
  return (

      <FlipCard
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
        onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
      >
        {/* Face Side */}
        <View  style = {styles.card} key = {goal.id}>
          <Icon name = "pinboard" type = "fontisto" color = "#DB9B8F" />
          <Text style = {styles.text}>{goal.Task}</Text>
        </View>
        {/* Back Side */}
        <View style = {styles.back}>
          <Text>Complete by: {goal.DueDate} </Text>
          <Text>Estimated Time to Complete: {goal.Time} </Text>
          <Icon style = {styles.icon} name = "trash" type = "fontisto" color = "#DB9B8F" onPress = "DELETE" />

        </View>

      </FlipCard>

  );
};

const styles = StyleSheet.create({
  text: {
    justifyContent: 'center',
    fontSize: 12,
    padding: 12

  },
  card: {
    justifyContent: 'center',
    width: 250,
    height: 80,
    marginBottom: 12,
    paddingLeft: 10,
    paddingTop: 10,
    borderWidth: .5,
    borderColor: "gray",
    backgroundColor: "white",
    resizeMode: "cover",
    shadowColor: "#000",
    shadowOffset: {
	     width: 0,
	      height: 8,
      },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
  image: {
    width: 128,
    height: 100 ,
    justify: "center"
  },
  back:{
    justifyContent: 'center',
    marginBottom: 12,
    paddingLeft: 10,
    paddingTop: 10,
    flex: 1,
    borderWidth: .5,
    borderColor: "gray",
    backgroundColor: "white",
    resizeMode: "cover",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
        height: 8,
      },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
  icon:{
    justifyContent: "right",
    marginBottom: 12,
    paddingLeft: 10,
    paddingTop: 10,
  },
})

export default TaskCard;

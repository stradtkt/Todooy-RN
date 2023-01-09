import React, { Component } from 'react';
import { Button, Pressable, StyleSheet, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export const IconButton = ({icon, color, onPress }) => {
    return (
        <Pressable style={styles.buttonStyles} onPress={onPress}>
            <FontAwesomeIcon icon={icon} color={color} style={styles.iconStyles}/>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    buttonStyles: {
        backgroundColor: 'transparent',
    },
    iconStyles: {
        fontSize: 24
      }
});




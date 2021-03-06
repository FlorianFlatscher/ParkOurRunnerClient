/**
 * @format
 * @flow
 */

import React from 'react';

import {Button, ScrollView, Text, View} from 'react-native';

import Header from '../components/Header';

import styles from '../styles';

const Home = ({navigation}) => (
    <ScrollView>
        <Header />
        <View style={styles.body}>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>About</Text>
                <Text style={styles.sectionDescription}>
                    This is a terrible App written in react-native. If you go
                    into a park while having the app open, you collect the park.
                    This gives you points which do not have any value except for
                    telling people they are nazis because they haven't visited
                    as many parks as you.
                </Text>
            </View>
            <View style={styles.sectionContainer}>
                <Button
                    title="View Parks nearby"
                    onPress={() => navigation.navigate('Nearby')}
                />
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Leaderboard</Text>
                <Text style={styles.sectionDescription}>
                    Look at the score from the top Park'our' Runners of the
                    Week. You can even see your score and cry yourself to sleep,
                    because you aren't good enough at this crappy game, no one
                    cares about.
                </Text>
                <View style={styles.sectionContainer}>
                    <Button
                        title="Weekly Leaderboard"
                        onPress={() => navigation.navigate('Leaderboard')}
                    />
                </View>
            </View>
        </View>
    </ScrollView>
);

export default Home;

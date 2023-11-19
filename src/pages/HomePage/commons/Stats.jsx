import React, {useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';
import StatsItem from './StatsItem';
import {useDispatch, useSelector} from 'react-redux';
import Footer from '../../../commons/Footer';
import {getData, getTerms} from '../../../fetch/api';



const Stats = () => {
  const dispatch = useDispatch();
    const { stats, terms } = useSelector(state => ({
    stats: state.stats.data.data,
    terms: state.stats.terms.data,
    }));


    const statsObj = stats.stats;
    const increaseObj = Object.entries(stats.increase)
    const termsObj = Object.entries(terms)

    // console.log(stats)



  useEffect(() => {
    dispatch(getData());
    dispatch(getTerms())
  }, [dispatch]);


  return (
    <ScrollView>
      <Text></Text>
      {Object.entries(statsObj).map(([key, value], i) => (
        <StatsItem
          key={key}
          statsAll={value}
          statsDay={increaseObj[i][1]}
          icon={termsObj[i][1].icon}
          title={termsObj[i][1].title}
        />
      ))}
      <Footer />
    </ScrollView>
  );
};

export default Stats;

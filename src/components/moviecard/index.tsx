import React from 'react';
import { View, Text, TouchableOpacityProps } from 'react-native';
import { Movie } from './styles';

// import { Container } from './styles';
interface Props extends TouchableOpacityProps {
  thumb: string;
}

export default function MovieCard(props: Props) {
  const { thumb } = props;

  return (
    <Movie.Container {...props} activeOpacity={.8}>
      <Movie.Thumb source={{ uri: `https://image.tmdb.org/t/p/w500/${thumb}` }} />
    </Movie.Container>
  )
}
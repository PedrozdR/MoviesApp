import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export const Movie = {
  Container: styled.TouchableOpacity`
    width: ${width / 2 - 16}px;
    height: 260px;
    elevation: 6;
    margin: 8px;
    border-radius:8px;
    background :${({ theme }) => theme.colors.overlay}
  `,
  Thumb: styled.Image`
    flex:1;
    border-radius:8px;
  `
}
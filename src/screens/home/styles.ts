import styled from "styled-components/native";
import { FlatList } from "react-native";
import { IMovie } from "../../services/models";

export const Movie = {
  List: styled(FlatList as new () => FlatList<IMovie>).attrs(() => ({
    contentContainerStyle: {
      flexGrow: 1,
      padding: 16,
      alignItems: "center",
      justifyContent: "center",
    }
  }))`
  flex:1;
  `
}

export const Empty = {
  Container: styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
  `,
  Text: styled.Text`
    font-size: 24px; 
  `
}

export const Loading = {
  Container: styled.View`
   margin-top: 8px;
`,
  Indicator: styled.ActivityIndicator.attrs(() => ({
    color: '#30638E'
  }))``
}
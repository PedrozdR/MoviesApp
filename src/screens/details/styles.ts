import styled from 'styled-components/native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const Container = styled.ScrollView.attrs(() => ({
  bounces: false,
}))`
  flex:1;
  margin-top:${ getStatusBarHeight(true)}px;
`


export const Movie = {
  Image: styled.Image.attrs(() => ({
    resizeMode: "stretch"
  }))`
    width: 100%;
    height: 400px;
  `,
  Content: styled.View`
    width: 100%;
    padding:16px;
    align-items:flex-start;
  `,
  Title: styled.Text`
    font-size: 24px;
    color: ${({ theme }) => theme.colors.text};
    font-weight:bold;
  `,
  Icon: styled(FontAwesome5).attrs(() => ({
    size: 20
  }))`
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 12px;
  `,

  Overview: styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
    text-align:justify;
  `,
  Text: styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
  `,
  Section: styled.Text`
    font-size: 26px;
    color: ${({ theme }) => theme.colors.text};
  `,
  SectionBorder: styled.View`
    width:36px;
    height:3px; 
    border-radius:3px;
    background: ${({ theme }) => theme.colors.primary};
    margin-bottom: 14px;
  `,
};

export const Infos = {
  Container: styled.View`
    flex-direction:row;
    align-items:center;
    margin: 18px 0px;
  `,
  Content: styled.View`
    flex-direction:row;
    align-items:center;
    margin-right: 16px;
  `
}

export const Genres = {
  Container: styled.View`
    flex-direction:row;
    align-items:center;
    flex-wrap: wrap;
    margin: 12px 0px;
  `,
  Box: styled.View`
    align-items:center;
    justify-content:center;
    padding:8px 12px;
    border-radius: 8px;
    margin: 8px 8px 0px 0px;
    background:${({ theme }) => theme.colors.primary}
  `,
  Title: styled.Text`
    color: #fff
  `
}

export const Header = {
  Container: styled.SafeAreaView`
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
    height: 60px; 
    padding: 42px 20px;
    background: transparent;
    position: absolute;
    top:0;
    z-index:9;
  `,
  Button: styled.TouchableOpacity.attrs(() => ({
    activeOpacity: .8
  }))`
    padding: 8px; 
    width:40px;
    height: 40px; 
    border-radius:20px;
    background: ${({ theme }) => theme.colors.primary};
    align-items:center;
    justify-content:center;
    elevation :4;
  `,
  Icon: styled(FontAwesome5)`
    color:#fff;
  `
}

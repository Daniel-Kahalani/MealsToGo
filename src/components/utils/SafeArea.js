import { StatusBar, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

export default styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

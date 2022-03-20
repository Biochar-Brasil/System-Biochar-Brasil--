import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';

const LogoContent = styled(Grid)`
  justify-content: center;
  align-items: center;
  display: flex;
`;

const TopBar = styled(AppBar)`
  background-color: #dee8e4;
  height: 90px;
  justify-content: center; //cetraliza verticalmente
  padding-left: 3%;
  padding-right: 3%;
`;

const IconMenuContent = styled(Grid)`
  align-items: left; //centraliza horizontalmente
  color: black;
  & > button {
    & > span {
      & > svg {
        font-size: 2rem !important;
      }
    }
  }
`;

const DropDownContent = styled(Grid)`
  color: black;
  align-items: right; //centraliza horizontalmente
  background-color: red;
  justify-content: center; //cetraliza verticalmente
`;

export { LogoContent, TopBar, IconMenuContent, DropDownContent };

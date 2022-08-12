import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
// import AppBar from '@material-ui/core/AppBar';

const ContentPartner = styled(Grid)`
  background-color: #f1f1f1;
  border-radius: 9px;
  padding: 20px;
  @media (max-width: 800px) {
    text-align: center;
  }
`;

const Container = styled.div`
  display: flex;
  @media (max-width: 800px) {
    display: block;
  }
`;

const Value = styled.div`
  font-size: 100px;
  align-items: center;
  text-align: center;
  color: #135b4f;
  font-weight: bold;
  display: flex;
  h6 {
    margin-right: 15px;
  }
  @media (max-width: 800px) {
    font-size: 50px;
    width: 100%;
  }
`;

const NamePartner = styled.h3`
  align-items: center;
  margin: 0px;
  margin-top: 20px;
  color: #135b4f;
  font-size: 35px;
`;

const TitlePage = styled.h3`
  color: '#fff';
  font-size: 20px;
  font-weight: 400;
  margin: 0px;
`;

const SubTitlePage = styled.h3`
  font-size: 20px;
  font-weight: 400;
  margin: 0px;
  color: #135b4f;
`;

const Update = styled.h5`
  font-size: 15px;
  font-weight: 400;
  margin: 0px;
  text-align: center;
`;

const Commission = styled.h5`
  font-size: 17px;
  font-weight: 400;
  margin: 0px;
  text-align: center;
`;

const ContainerP = styled.div`
  width: 60%;
  @media (max-width: 800px) {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const ContainerS = styled.div`
  width: 40%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export {
  TitlePage,
  SubTitlePage,
  Value,
  NamePartner,
  ContentPartner,
  Update,
  Commission,
  Container,
  ContainerP,
  ContainerS,
};

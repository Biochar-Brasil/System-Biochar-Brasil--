import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import PageContent from '../../Components/page-content';

// import { dataPartner } from './usePartner.ts';
import {
  Value,
  NamePartner,
  ContentPartner,
  SubTitlePage,
  TitlePage,
  Update,
  Commission,
  Container,
  ContainerP,
  ContainerS,
} from './style';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const config = {
  apiKey: 'AIzaSyChZ4U7tkD2ZU-YHFL2WcvBM0grDQlGnLU',
  authDomain: 'system-biocharbrasil.firebaseapp.com',
  projectId: 'system-biocharbrasil',
  storageBucket: 'system-biocharbrasil.appspot.com',
  messagingSenderId: '385962320222',
  appId: '1:385962320222:web:5e0fdf9267ac0149a7afcf',
  measurementId: 'G-VJ7BRZ31D2',
};

firebase.initializeApp(config);

function Partener() {
  const [data, setData] = useState({});

  const query = useQuery();
  const testdata = async () => {
    const token = query.get('token');
    const db = firebase.firestore();
    db.collection('users')
      .doc(token)
      .get()
      .then((item) => setData(item.data()));
  };

  useEffect(() => {
    testdata();
  }, []);

  return (
    <div>
      <PageContent>
        <ContentPartner>
          <Grid>
            <TitlePage>Comissão de venda</TitlePage>
            <SubTitlePage>BiocharBrasil</SubTitlePage>
          </Grid>
          <Container>
            <ContainerP>
              <NamePartner>{data.fullname}</NamePartner>
              <div>@{data.instagram}</div>
            </ContainerP>
            <ContainerS>
              <Commission>Comissão de venda</Commission>
              <Value>
                <h6>R$</h6>
                {data.comissao}
              </Value>
              <Update>Atualizado em: {data.update}</Update>
            </ContainerS>
          </Container>
        </ContentPartner>
      </PageContent>
    </div>
  );
}

export default Partener;

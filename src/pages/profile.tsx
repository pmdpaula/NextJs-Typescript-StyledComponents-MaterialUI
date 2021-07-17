import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import { GetServerSideProps } from 'next';
// import { parseCookies } from 'nookies';
import { useContext } from 'react';

import PageSquare from '../components/commons/PageSquare/PageSquare';
import { AuthContext } from '../components/wrappers/WebsitePage/context/AuthContext';
// import { WebsitePageContext } from '../components/wrappers/WebsitePage/context/index';
import websitePageHOC from '../components/wrappers/WebsitePage/hoc/index';
// import { getAPIClient } from '../services/axios';

const pageName = 'Perfil';

const PageProfile = () => {
  // const websitePageContext = useContext(WebsitePageContext);
  const { user } = useContext(AuthContext);

  return (
    <PageSquare>
      <Typography>{pageName}</Typography>
      <Typography variant="h4">Dados do usuário</Typography>
      <Divider variant="middle" style={{ margin: '5px 0' }} />
      {user ? (
        <Box display="flex" flexDirection="column" alignItems="start">
          <Grid item>
            <Typography>{`Nome: ${user?.name}`}</Typography>
          </Grid>
          <Grid item>
            <Typography>{`Username: ${user?.username}`}</Typography>
          </Grid>
          <Grid item>
            <Typography>{`E-mail: ${user?.email}`}</Typography>
          </Grid>
          <Grid item>
            {/* <img src={user?.avatarUrl} alt="Avatar do Usuário" width={100} /> */}
            <Avatar src={user?.avatarUrl} alt="Avatar do Usuário" />
          </Grid>
          {/* <Image
            src={user.avatarUrl}
            alt="Avatar do usuário"
            width={200}
            height={100}
          /> */}
        </Box>
      ) : (
        <Box display="flex" flexDirection="column" alignItems="center">
          <CircularProgress />
          {/* Não foi possível pegar os dados do usuário. */}
        </Box>
      )}
    </PageSquare>
  );
};

export default websitePageHOC(PageProfile, {
  pageWrapperProps: {
    seoProps: {
      headTitle: pageName,
    },
    footerProps: {
      content: 'Copyright AxeBlade Software',
    },
  },
});

// export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
//   const apiClient = getAPIClient(ctx);
//   const { 'nextauth.token': token } = parseCookies(ctx);

//   if (!token) {
//     return {
//       redirect: {
//         destination: '/app/login/',
//         permanent: false,
//       },
//     };
//   }

//   // await apiClient.get('/users');

//   return {
//     props: {},
//   };
// };

import Grid from '@material-ui/core/Grid';
// import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

import Chart from '../components/dashboard/Chart';
import Deposits from '../components/dashboard/Deposits';
import Orders from '../components/dashboard/Orders';
import Link from '../components/foundation/Link';
import websitePageHOC from '../components/wrappers/WebsitePage/hoc/index';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

function Home(): JSX.Element {
  return (
    <>
      <Title>My page</Title>
      <Link href="/materialui" color="secondary">
        Meu link
      </Link>
      <Grid item xs={12} md={8} lg={9}>
        <Paper>
          <Chart />
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper>
          <Deposits />
        </Paper>
      </Grid>
      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper>
          <Orders />
        </Paper>
      </Grid>
    </>
  );
}

export default websitePageHOC(Home, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
    footerProps: {
      content: 'Copyright AxeBlade Software',
    },
  },
});

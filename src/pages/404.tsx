import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import websitePageHOC from '../components/wrappers/WebsitePage/hoc';

const Page404 = (): JSX.Element => (
  <Paper elevation={3}>
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <Typography variant="h1">404</Typography>
      </Grid>
      <Grid item>
        <Typography>Deu Ruim. Não achamamos a página!</Typography>
      </Grid>
    </Grid>
  </Paper>
);

export default websitePageHOC(Page404, {
  pageWrapperProps: {
    seoProps: {
      headTitle: '404',
    },
  },
});

import Typography from '@material-ui/core/Typography';

import PageSquare from '../components/commons/PageSquare/PageSquare';
import websitePageHOC from '../components/wrappers/WebsitePage/hoc/index';

const pageName = 'Perfil';

const PageProfile = () => (
  <PageSquare>
    <Typography>{pageName}</Typography>
  </PageSquare>
);

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

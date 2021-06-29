import Typography from '@material-ui/core/Typography';

import PageSquare from '../../components/commons/PageSquare/PageSquare';
import websitePageHOC from '../../components/wrappers/WebsitePage/hoc/index';

const pageName = 'Clonagem PJe';

const PageClonePJe = () => (
  <PageSquare>
    <Typography>{pageName}</Typography>
  </PageSquare>
);

export default websitePageHOC(PageClonePJe, {
  pageWrapperProps: {
    seoProps: {
      headTitle: pageName,
    },
  },
});

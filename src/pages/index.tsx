import styled from 'styled-components';

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
    </>
  );
}

export default websitePageHOC(Home, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
  },
});

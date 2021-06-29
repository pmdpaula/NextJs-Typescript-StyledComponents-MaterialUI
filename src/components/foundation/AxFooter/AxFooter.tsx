import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { ReactNode } from 'react';
import styled from 'styled-components';

const AxFooterWrapper = styled(Grid)`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

const AxFooterBox = styled(Paper)`
  background: ${({ theme }) => theme.palette.secondary.main};
  border-radius: 14px;
  height: 1.8rem;
  padding: 0.3rem;
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface AxFooterProps {
  content: ReactNode;
}

const AxFooter = ({ content }: AxFooterProps): JSX.Element => (
  <>
    <AxFooterWrapper>
      <AxFooterBox elevation={3}>
        <Typography color="textSecondary" variant="caption">
          {content}
        </Typography>
      </AxFooterBox>
    </AxFooterWrapper>
  </>
);
export default AxFooter;

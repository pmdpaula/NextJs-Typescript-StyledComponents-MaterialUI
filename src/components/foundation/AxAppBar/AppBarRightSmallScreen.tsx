import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch';
import Tooltip from '@material-ui/core/Tooltip';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import MoreIcon from '@material-ui/icons/MoreVert';
import { useContext, useState } from 'react';

import { WebsitePageContext } from '../../wrappers/WebsitePage/context';
import Link from '../Link/index';

interface AppBarRightSmallScreenProps {
  // eslint-disable-next-line no-unused-vars
  toggleTheme: (event: any) => void;
}

const AppBarRightSmallScreen = ({
  toggleTheme,
}: AppBarRightSmallScreenProps): JSX.Element => {
  const websitePageContext = useContext(WebsitePageContext);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenuProfile = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <MoreIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={openMenuProfile}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          {' '}
          <Link href="/profile">
            <IconButton color="inherit">
              <AssignmentIndIcon />
            </IconButton>
            Perfil
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Tooltip
            title={
              websitePageContext.isDark
                ? 'Mudar para tema claro'
                : 'Mudar para tema escuro'
            }
            arrow
            placement="bottom"
          >
            <Switch
              checked={websitePageContext.isDark}
              onChange={toggleTheme}
            />
          </Tooltip>
          Tema
        </MenuItem>
      </Menu>
    </>
  );
};

export default AppBarRightSmallScreen;

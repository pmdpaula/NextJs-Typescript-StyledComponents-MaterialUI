import BarChartIcon from '@material-ui/icons/BarChart';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import GroupIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import TableChartIcon from '@material-ui/icons/TableChart';
import WatchIcon from '@material-ui/icons/Watch';
import { ElementType } from 'react';
// import { ReactNode } from 'react';

export interface menutItemsProps {
  ident: string;
  link?: string;
  name: string;
  Icon?: ElementType;
  access: string;
  disabled: boolean;
  items?: menutItemsProps[];
}

export const menutItems: menutItemsProps[] = [
  {
    ident: 'home',
    link: '/',
    name: 'Home',
    Icon: BarChartIcon,
    access: 'default',
    disabled: false,
  },
  {
    ident: 'dashboard',
    // link: '/dashboard',
    name: 'Dashboard',
    Icon: HomeIcon,
    access: 'default',
    disabled: false,
    items: [
      {
        ident: 'dashboard:general',
        link: '/dashboard/general',
        name: 'Dashboard Geral',
        // Icon: BarChartIcon,
        access: 'default',
        disabled: false,
      },
    ],
  },
  {
    ident: 'tables',
    link: '/tables',
    name: 'Tabelas',
    Icon: TableChartIcon,
    access: 'default',
    disabled: false,
  },
  {
    ident: 'objects',
    link: '/objects',
    name: 'Objetos',
    Icon: WatchIcon,
    access: 'default',
    disabled: false,
  },
  {
    ident: 'process',
    // link: '/process',
    name: 'Processos',
    Icon: GraphicEqIcon,
    access: 'default',
    disabled: false,
    items: [
      {
        ident: 'process:cloning',
        // link: '/process',
        name: 'Clonagens',
        Icon: GraphicEqIcon,
        access: 'default',
        disabled: false,
        items: [
          {
            ident: 'process:clpje',
            link: '/process/clone-pje',
            name: 'Clones PJe',
            // Icon: GraphicEqIcon,
            access: 'default',
            disabled: false,
          },
          {
            ident: 'process:clsap',
            link: '/process/clone-sap',
            name: 'Clones SAP',
            // Icon: GraphicEqIcon,
            access: 'default',
            disabled: true,
          },
        ],
      },
      {
        ident: 'process:dumpora',
        link: '/process/dumps-ora',
        name: 'Dumps Oracle',
        // Icon: GraphicEqIcon,
        access: 'default',
        disabled: true,
      },
    ],
  },
  {
    ident: 'teams',
    // link: '/teams',
    name: 'Equipes',
    Icon: GroupIcon,
    access: 'default',
    disabled: false,
    items: [
      {
        ident: 'teams:abscal',
        link: '/teams/absent-calendar',
        name: 'Calendário de Ausências',
        // Icon: GroupIcon,
        access: 'default',
        disabled: false,
      },
      {
        ident: 'teams:absres',
        link: '/teams/absent-resume',
        name: 'Resumo de Ausências',
        // Icon: GroupIcon,
        access: 'default',
        disabled: false,
      },
      {
        ident: 'teams:absadm',
        link: '/teams/absent-admin',
        name: 'Admin. de Ausências',
        // Icon: GroupIcon,
        access: 'default',
        disabled: true,
      },
    ],
  },
  {
    ident: 'admin',
    link: '/admin',
    name: 'Administração',
    Icon: BusinessCenterIcon,
    access: 'admin',
    disabled: true,
  },
];

// export const mainListItems = (): JSX.Element => {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {menutItems.map((item) => (
//         <ListItem button>
//           <ListItemIcon>{item.icon}</ListItemIcon>
//           <ListItemText primary={item.title} />
//           {item.routes && open ? <ExpandLess /> : <ExpandMore />}
//         </ListItem>
//       ))}
//     </>
//   );
// };

// export const mainListItems = (
//   <div>
//     <ListItem button>
//       <ListItemIcon>
//         <DashboardIcon />
//       </ListItemIcon>
//       <ListItemText primary="Dashboard" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <ShoppingCartIcon />
//       </ListItemIcon>
//       <ListItemText primary="Orders" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <PeopleIcon />
//       </ListItemIcon>
//       <ListItemText primary="Customers" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <BarChartIcon />
//       </ListItemIcon>
//       <ListItemText primary="Reports" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <LayersIcon />
//       </ListItemIcon>
//       <ListItemText primary="Integrations" />
//     </ListItem>
//   </div>
// );

// export default mainListItems;

import { ROUTES } from '../../Routes.constants';

// import PressNote from '../PressNote';

const CONSTANTS = {
  navItems: [
    {
      label: 'Files',
      svgType: 'SVG-file',
      path: ROUTES.HOME,
    },
    {
      label: 'Repositories',
      svgType: 'SVG-repo',
      path: ROUTES.REPOSITORIES,
    },
    {
      label: 'Users',
      svgType: 'SVG-user',
      path: ROUTES.USERS,
    },
    {
      label: 'Rules',
      svgType: 'SVG-rules',
      path: ROUTES.RULES,
    },
  ],
};

export default CONSTANTS;

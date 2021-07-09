import { ROUTES } from '../../Routes.constants';

export const GetHeaderSubtitles = ({ headerPath }) => {
  if (HeaderSubtitles[headerPath]?.subTitle) {
    return HeaderSubtitles[headerPath].subTitle;
  } else {
    return '';
  }
};

export const GetHeaderTitles = ({ headerPath }) => {
  if (HeaderSubtitles[headerPath]?.title) {
    return HeaderSubtitles[headerPath].title;
  } else {
    return '';
  }
};

const HeaderSubtitles = {
  [ROUTES.HOME]: {
    title: 'Overview',
    subTitle: 'Home',
  },
  [ROUTES.RULES]: {
    title: 'Overview',
    subTitle: 'Rules',
  },
  [ROUTES.USERS]: {
    title: 'Overview',
    subTitle: 'Users',
  },
  [ROUTES.PROFILE]: {
    title: 'Overview',
    subTitle: 'Profile',
  },
  [ROUTES.CHANGE_PASSWORD]: {
    title: 'Overview',
    subTitle: 'Change Password',
  },
  [ROUTES.REPOSITORIES]: {
    title: 'Overview',
    subTitle: 'Repositories',
  },
};

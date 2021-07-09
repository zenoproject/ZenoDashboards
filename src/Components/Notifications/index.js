import React from 'react';
import { notification } from 'antd';

export const Notifications = ({
  type = 'info',
  notificationTitle = 'Notification Title',
  notificationMessage = '',
}) => {
  notification[type]({
    message: notificationTitle,
    description: notificationMessage,
  });
};

// Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { ControlBarButton, Cog, useMeetingManager, } from 'amazon-chime-sdk-component-library-react';
import React from 'react';
import DevicePermissionPrompt from '../DevicePermissionPrompt';
import { DeviceLabels } from '../../types';
const DevicePermissionControl: React.FC = () => {
  const meetingManager = useMeetingManager();

  const handleClick = () => {
    meetingManager.invokeDeviceLabelTrigger(DeviceLabels.AudioAndVideo);
  }

  return (
    <>
      <ControlBarButton icon={<Cog />} onClick={handleClick} label="Device" />
      <DevicePermissionPrompt />
    </>
  );
}

export default DevicePermissionControl;

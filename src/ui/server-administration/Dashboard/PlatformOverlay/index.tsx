import * as faker from 'faker';
import * as React from 'react';

import { Platform } from '..';
import * as ros from '../../../../services/ros';
import * as store from '../../../../store';

import { PlatformOverlay } from './PlatformOverlay';

interface IPlatformOverlayContainerProps {
  onClose: () => void;
  platform: Platform;
  serverUrl: string;
}

class PlatformOverlayContainer extends React.Component<
  IPlatformOverlayContainerProps,
  {}
> {
  public componentDidMount() {
    // this.props.onCreateUser();
  }

  public render() {
    return (
      <PlatformOverlay
        onClose={this.props.onClose}
        platform={this.props.platform}
      />
    );
  }

  private async createUser() {
    const username = faker.internet.userName();
    const password = faker.internet.password();
    const userId = await ros.users.create(
      this.props.serverUrl,
      username,
      password,
    );
  }
}

export { PlatformOverlayContainer as PlatformOverlay };

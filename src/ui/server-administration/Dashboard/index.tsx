import * as React from 'react';
import * as Realm from 'realm';

import { main } from '../../../actions/main';

import { Dashboard } from './Dashboard';

export type Platform = 'android' | 'apple' | 'javascript' | 'xamarin';

export const getPlatformTitle = (platform: Platform) => {
  if (platform === 'android') {
    return 'Android';
  } else if (platform === 'apple') {
    return 'iOS / macOS';
  } else if (platform === 'javascript') {
    return 'React Native / Node.js';
  } else if (platform === 'xamarin') {
    return 'Xamarin';
  }
};

export const getPlatformLanguage = (platform: Platform) => {
  if (platform === 'android') {
    return 'Java';
  } else if (platform === 'apple') {
    return 'Swift / Objective C';
  } else if (platform === 'javascript') {
    return 'JavaScript';
  } else if (platform === 'xamarin') {
    return '.NET';
  }
};

interface IDashboardContainerProps {
  isCloudTenant: boolean;
  serverUrl: string;
}

interface IDashboardContainerState {
  hoveringPlatform?: Platform;
  selectedPlatform?: Platform;
}

class DashboardContainer extends React.Component<
  IDashboardContainerProps,
  IDashboardContainerState
> {
  public render() {
    return (
      <Dashboard
        isCloudTenant={this.props.isCloudTenant}
        serverUrl={this.props.serverUrl}
        {...this.state}
        {...this}
      />
    );
  }

  public onShowCloudTutorial = () => {
    main.showTutorial({ id: 'cloud-intro' });
  };

  public onMouseEnterPlatform = (platform: Platform) => {
    this.setState({ hoveringPlatform: platform });
  };

  public onMouseLeavePlatform = () => {
    this.setState({ hoveringPlatform: undefined });
  };

  public onSelectPlatform = (platform: Platform) => {
    this.setState({ selectedPlatform: platform });
  };

  public onDeselectPlatform = () => {
    this.setState({ selectedPlatform: undefined });
  };
}

export { DashboardContainer as Dashboard };

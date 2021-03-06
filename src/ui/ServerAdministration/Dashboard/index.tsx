////////////////////////////////////////////////////////////////////////////
//
// Copyright 2018 Realm Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
////////////////////////////////////////////////////////////////////////////

import * as React from 'react';

import { Dashboard } from './Dashboard';

export type Platform = 'android' | 'apple' | 'javascript' | 'xamarin';

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
        {...this.state}
        {...this}
      />
    );
  }

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

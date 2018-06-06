import * as React from 'react';
import { RealmProvider } from 'react-realm-context';
import * as Realm from 'realm';

import { IRealmBrowserWindowProps } from '../../windows/WindowType';

import { Focus } from './Focus';
import { RealmBrowser } from './RealmBrowser';

type IRealmBrowserContainerProps = IRealmBrowserWindowProps;

interface IRealmBrowserContainerState {
  focus?: Focus;
}

class RealmBrowserContainer extends React.Component<
  IRealmBrowserContainerProps,
  IRealmBrowserContainerState
> {
  public state: IRealmBrowserContainerState = {};
  public render() {
    const realmConfiguration = this.generateRealmConfiguration();
    return (
      <RealmProvider {...realmConfiguration}>
        <RealmBrowser
          onClassSelected={this.onClassSelected}
          focus={this.state.focus}
        />
      </RealmProvider>
    );
  }

  protected generateRealmConfiguration(): Realm.Configuration {
    const { realm } = this.props;
    if (realm.mode === 'local') {
      return { path: realm.path };
    } else {
      return {};
    }
  }

  protected onClassSelected = (name: string) => {
    this.setState({
      focus: {
        kind: 'class',
        className: name,
      },
    });
  };
}

export { RealmBrowserContainer as RealmBrowser };

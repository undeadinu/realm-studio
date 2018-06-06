import * as React from 'react';

import { Content } from './Content';
import { Focus } from './Focus';
import { SideBar } from './SideBar';

import './RealmBrowser.scss';

interface IRealmBrowserProps {
  onClassSelected: (name: string) => void;
  focus?: Focus;
}

export const RealmBrowser = ({
  onClassSelected,
  focus,
}: IRealmBrowserProps) => (
  <div className="RealmBrowser">
    <SideBar
      className="RealmBrowser__SideBar"
      focus={focus}
      onClassSelected={onClassSelected}
    />
    <Content className="RealmBrowser__Content" />
  </div>
);

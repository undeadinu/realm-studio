import * as classNames from 'classnames';
import * as React from 'react';

import { Focus } from '../Focus';

import { ClassSelector } from './ClassSelector';

import './SideBar.scss';

interface ISideBarProps {
  className?: string;
  onClassSelected: (name: string) => void;
  focus?: Focus;
}

export const SideBar = ({
  className,
  onClassSelected,
  focus,
}: ISideBarProps) => (
  <div className={classNames('SideBar', className)}>
    <header className="SideBar__Header">Classes</header>
    <ClassSelector onClassSelected={onClassSelected} focus={focus} />
  </div>
);

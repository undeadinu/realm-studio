import * as classNames from 'classnames';
import * as React from 'react';

import './Content.scss';

interface IContentProps {
  className?: string;
}

export const Content = ({ className }: IContentProps) => (
  <div className={classNames('Content', className)}>Content</div>
);

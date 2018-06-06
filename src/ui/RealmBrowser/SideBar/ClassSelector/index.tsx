import * as React from 'react';
import { RealmConsumer } from 'react-realm-context';
import { Badge } from 'reactstrap';

import { Focus } from '../../Focus';

import './ClassSelector.scss';

interface IClassSelectorProps {
  onClassSelected: (name: string) => void;
  focus?: Focus;
}

export const ClassSelector = ({
  onClassSelected,
  focus,
}: IClassSelectorProps) => (
  <RealmConsumer>
    {({ realm }) => (
      <ul className="ClassSelector">
        {realm.schema.map(objectSchema => (
          <li className="ClassSelector__Class" key={objectSchema.name}>
            <div className="ClassSelector__Class__Name">
              {objectSchema.name}
            </div>
            <div className="ClassSelector__Class__Count">
              <Badge color="primary">
                {realm.objects(objectSchema.name).length}
              </Badge>
            </div>
          </li>
        ))}
      </ul>
    )}
  </RealmConsumer>
);

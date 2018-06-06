// TODO: Remove this interface once the Realm.ObjectSchemaProperty
// has a name parameter in its type definition.
export interface IPropertyWithName extends Realm.ObjectSchemaProperty {
  name: string | null;
  readOnly: boolean;
}

interface IFocus {
  kind: string;
}

export interface IClassFocus extends IFocus {
  kind: 'class';
  className: string;
}

export type Focus = IClassFocus;

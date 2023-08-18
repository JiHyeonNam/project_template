import React, { type FC } from 'react';
import { SubjectStore } from './SubjectStore';
import { Provider } from 'mobx-react';

interface RootProviderProps {
  children: React.ReactNode;
}

const RootProvider: FC<RootProviderProps> = ({
  children,
}: RootProviderProps) => {
  const subjectStore = new SubjectStore();

  return <Provider subjectStore={subjectStore}>{children}</Provider>;
};

export default RootProvider;

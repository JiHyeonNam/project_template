import { inject, observer } from 'mobx-react';
import { type SubjectStore } from '../../stores/SubjectStore';

interface TodoListProps {
  subjectStore?: SubjectStore;
}

export const WebRouter: React.FC<TodoListProps> = inject('subjectStore')(
  observer(({ subjectStore }) => {
    return <div>여기{subjectStore?.count}</div>;
  })
);

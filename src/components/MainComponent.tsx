import RootProvider from '../stores/RootProvider';
import { WebRouter } from './Web';

export const MainComponent: React.FC = () => {
  return (
    <RootProvider>
      <WebRouter />
    </RootProvider>
  );
};

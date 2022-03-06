import { ReactElement, FC } from "react";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import { LayoutContainer } from "app/domains/Layout/containers/async";

const queryCache = new QueryCache();
const queryClient = new QueryClient({
  queryCache,
});

const AppMain: FC = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <LayoutContainer />
    </QueryClientProvider>
  );
};

export default AppMain;

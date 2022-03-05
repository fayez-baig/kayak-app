import { ReactElement, FC } from "react";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { LayoutContainer } from "app/domains/Layout/containers/async";

const queryCache = new QueryCache();
const queryClient = new QueryClient({
  queryCache,
});

const AppMain: FC = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <LayoutContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default AppMain;

import React, { FC } from 'react';

export type PromiseError = Record<string, any>;

export type PromiseDataRenderProps = {
  isLoading: boolean;
  isError: boolean;
  data: any;
  children: (props: { data: any }) => JSX.Element;
  loadingComponent?: () => JSX.Element;
  error?: PromiseError;
  errorComponent?: (error?: PromiseError) => JSX.Element;
};

const PromiseDataRender: FC<PromiseDataRenderProps> = ({
  isLoading,
  isError,
  data,
  children,
  loadingComponent,
  error,
  errorComponent,
}) => {
  if (isLoading) {
    return loadingComponent ? loadingComponent() : <div>Loading...</div>;
  }
  if (isError) {
    return errorComponent ? (
      errorComponent(error)
    ) : (
      <div>Error! {JSON.stringify(error)}</div>
    );
  }

  return children({ data });
};

export default PromiseDataRender;

import { useState } from '@storybook/addons';
import { Meta } from '@storybook/react';
import React from 'react';

import { PromiseDataRender } from '../src/index';

export default {
  component: PromiseDataRender,
  title: 'PromiseDataRender',
} as Meta;

const Template = (args) => (
  <PromiseDataRender {...args}>
    {({ data }) => <div>{data}</div>}
  </PromiseDataRender>
);

export const Interactive = Template.bind({});
Interactive.args = {
  isLoading: true,
  isError: false,
  data: 'Hello',
};

export const DefaultLoading = () => {
  return (
    <PromiseDataRender isLoading={true} isError={false} data={'anything'}>
      {({ data }) => <div>{data}</div>}
    </PromiseDataRender>
  );
};

export const DefaultError = () => {
  return (
    <PromiseDataRender isLoading={false} isError={true} data={'anything'}>
      {({ data }) => <div>{data}</div>}
    </PromiseDataRender>
  );
};

export const DefaultData = () => {
  return (
    <PromiseDataRender isLoading={false} isError={false} data={'anything'}>
      {({ data }) => <div>{data}</div>}
    </PromiseDataRender>
  );
};

export const CustomLoading = () => {
  return (
    <PromiseDataRender
      isLoading={true}
      isError={false}
      data={'anything'}
      loadingComponent={() => <div>🔄 Custom Loading...</div>}
    >
      {({ data }) => <div>{data}</div>}
    </PromiseDataRender>
  );
};

export const CustomError = () => {
  return (
    <PromiseDataRender
      isLoading={false}
      isError={true}
      data={'anything'}
      error={new Error('💥 Error!')}
      errorComponent={(error) => <div>Custom Error: {error.message}</div>}
    >
      {({ data }) => <div>{data}</div>}
    </PromiseDataRender>
  );
};

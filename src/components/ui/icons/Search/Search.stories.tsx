// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Search from '.';
import SearchIconDocs from './Search.mdx';

export default {
  title: 'Icons/Search',
  parameters: {
    docs: {
      page: SearchIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Search
};

export const _Search = () => <Search width={text('width', '2rem')} />;
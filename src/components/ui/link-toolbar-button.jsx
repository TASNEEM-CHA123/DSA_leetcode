'use client';

import * as React from 'react';

import {
  useLinkToolbarButton,
  useLinkToolbarButtonState,
} from '@platejs/link/react';
import { Link } from 'lucide-react';

import { ToolbarButton } from './toolbar';

export function LinkToolbarButton(props) {
  const state = useLinkToolbarButtonState();
  const { props: buttonProps } = useLinkToolbarButton(state);

  return (
    <ToolbarButton {...props} {...buttonProps} data-plate-focus tooltip="Link">
      <Link />
    </ToolbarButton>
  );
}

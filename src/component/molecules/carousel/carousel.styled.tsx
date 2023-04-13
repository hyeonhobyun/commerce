import { styled } from 'styletron-react';
import { borderRadius } from 'polished';

export const Dot = styled<'li', { $isActive: boolean }>(
  'li',
  ({ $isActive }) => ({
    display: 'inline-block',
    backgroundColor: $isActive ? '#606060' : '#e0e0e0',
    width: '4px',
    height: '4px',
    transform: $isActive ? 'scale(1.5)' : 'scale(1)',
    transition: 'transform 0.4s ease-out',
    ...borderRadius('top', '100%'),
    ...borderRadius('bottom', '100%'),
    ':not(first-of-type)': {
      marginLeft: '6px',
    },
  }),
);

import { Link as CarbonLink } from '@carbon/react';
import NextLink from 'next/link';

export function Link({ children, ...rest }) {
  return (
    <NextLink {...rest}>
      <CarbonLink>{children}</CarbonLink>
    </NextLink>
  );
}

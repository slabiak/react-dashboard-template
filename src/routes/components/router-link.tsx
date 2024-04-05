import { forwardRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface Props extends Omit<LinkProps, 'to'> {
  href: string;
}

const RouterLink = forwardRef<HTMLAnchorElement, Props>(({ href, ...other }, ref) => (
  <Link ref={ref} to={href} {...other} />
));

export default RouterLink;

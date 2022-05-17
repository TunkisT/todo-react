import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  align-items: center;
  background: #e8edea;
  color: #333634;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 5rem;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
`;

export const Link = styled(NavLink)`
  background: #cfd1d0;
  border-radius: 0.5rem;
  color: grey;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  text-transform: uppercase;
`;

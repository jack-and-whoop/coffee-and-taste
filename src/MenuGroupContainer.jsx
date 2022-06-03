import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';
import axios from 'axios';

const MenuGroupContainerStyle = styled.ul({
  // display: 'flex',
  margin: '40px 0',
  padding: '0',
  listStyle: 'none',
});

const MenuGroup = styled.li({
  marginRight: '1em',
  textDecoration: 'none',
  fontSize: '1.5em',
});

export default function MenuGroupContainer() {
  const [menuGroups, setMenuGroups] = useState([]);

  const BASE_URL = 'https://coffee-and-taste.kro.kr/api';

  useEffect(() => {
    axios.get(`${BASE_URL}/menu-groups`)
      .then((response) => setMenuGroups(response.data));
  }, []);

  return (
    <MenuGroupContainerStyle>
      {
        menuGroups.map((menuGroup) => (
          <MenuGroup key={menuGroup.id}>
            <Link to={`/menu-groups/${menuGroup.id}`}>
              {menuGroup.name}
            </Link>
          </MenuGroup>
        ))
      }
    </MenuGroupContainerStyle>
  );
}

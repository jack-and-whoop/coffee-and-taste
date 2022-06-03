import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';
import axios from 'axios';

const MenuGroupContainerStyle = styled.div({
  margin: '40px 0',
  paddingTop: '150px',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '1rem',
});

const MenuGroup = styled.div({

});

const MenuGroupImage = styled.div(
  {
    margin: '50px auto 30px auto',
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    border: '2px solid green',
  },
  (props) => ({
    background: `url("${props.url}") center/100% no-repeat`,
  }),
);

const MenuGroupName = styled.div({
  margin: '10px 0',
  fontSize: '16px',
  textAlign: 'center',
});

export default function MenuGroupContainer() {
  const [menuGroups, setMenuGroups] = useState([]);

  const BASE_URL = 'https://coffee-and-taste.kro.kr/api';

  useEffect(() => {
    axios.get(`${BASE_URL}/categories/1/menu-groups`)
      .then((response) => {
        setMenuGroups(response.data.menuGroups);
      });
  }, []);

  return (
    <MenuGroupContainerStyle>
      {
        menuGroups.map((menuGroup) => (
          <MenuGroup key={menuGroup.id}>
            <MenuGroupImage />
            <MenuGroupName>
              <Link to={`/menu-groups/${menuGroup.id}`}>
                {menuGroup.name}
              </Link>
            </MenuGroupName>
          </MenuGroup>
        ))
      }
    </MenuGroupContainerStyle>
  );
}

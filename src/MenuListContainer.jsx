import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const MenuContainerStyle = styled.div({
  margin: '40px 0',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '1rem',
});

const Menu = styled.div({
});

const MenuImage = styled.div(
  {
    margin: '50px auto 30px auto',
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    border: '2px solid orange',
  },
  (props) => ({
    background: `url("https://coffee-and-taste.kro.kr/${props.url}") center/100% no-repeat`,
  }),
);

const MenuName = styled.div({
  margin: '10px 0',
  fontSize: '16px',
  textAlign: 'center',
});

export default function MenuListContainer() {
  const [menuList, setMenuList] = useState([]);
  const { menuGroupId } = useParams();

  const BASE_URL = 'https://coffee-and-taste.kro.kr/api';

  useEffect(() => {
    axios.get(`${BASE_URL}/menu-groups/${menuGroupId}/menus`)
      .then((response) => {
        setMenuList(response.data.menus);
      });
  }, []);

  return (
    <MenuContainerStyle>
      {menuList.map((menu) => (
        <Menu key={menu.name}>
          <MenuImage url={menu.imagePath} />
          <MenuName>{menu.name}</MenuName>
        </Menu>
      ))}
    </MenuContainerStyle>
  );
}

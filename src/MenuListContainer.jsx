import styled from '@emotion/styled';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMenuList } from './store';

const MenuContainerStyle = styled.div({
  margin: '40px 0',
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridGap: '1rem',
});

const Menu = styled.div({

});

const MenuImage = styled.div(
  {
    margin: '50px auto 20px auto',
    borderRadius: '50%',
    width: '200px',
    height: '200px',
  },
  (props) => ({
    background: `url("https://coffee-and-taste.kro.kr/${props.url}") center/100% no-repeat`,
  }),
);

const MenuName = styled.div({
  margin: '10px 0',
  fontSize: '16px',
  textAlign: 'center',
  wordBreak: 'keep-all',
  '& a': {
    fontSize: '1.1rem',
    color: '#555555',
    textDecoration: 'none',
    '&:hover': {
      color: '#000',
    },
  },
});

const NoMenu = styled.h1({
  margin: '150px 0',
  textAlign: 'center',
  fontSize: '2rem',
});

export default function MenuListContainer() {
  const { menuGroupId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMenuList(menuGroupId));
  }, []);

  const menus = useSelector((state) => state.menus);

  if (menus.length === 0) {
    return (
      <Menu>
        <NoMenu>메뉴를 준비중입니다!</NoMenu>
      </Menu>
    );
  }

  return (
    <MenuContainerStyle>
      {menus.map((menu) => (
        <Menu key={menu.name}>
          <MenuImage url={menu.imagePath} />
          <MenuName>
            <Link to={`/menu-groups/${menuGroupId}/menus/${menu.id}`}>
              {menu.name}
            </Link>
          </MenuName>
        </Menu>
      ))}
    </MenuContainerStyle>
  );
}

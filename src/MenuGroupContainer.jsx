import { Link, useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';
import { useEffect } from 'react';
import { loadMenuGroups, selectCategory } from './store';

const MenuGroupContainerStyle = styled.div({
  margin: '40px 0',
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
  textAlign: 'center',
  '& a': {
    fontSize: '1.3rem',
    color: '#555555',
    textDecoration: 'none',
    '&:hover': {
      color: '#000',
    },
  },
});

export default function MenuGroupContainer() {
  const { categoryId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectCategory({ categoryId }));
    dispatch(loadMenuGroups(categoryId));
  }, [categoryId]);

  const menuGroups = useSelector((state) => state.menuGroups);

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

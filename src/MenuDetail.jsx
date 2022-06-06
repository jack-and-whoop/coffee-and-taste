import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMenu } from './store';

const MenuImage = styled.div(
  {
    margin: '100px auto 30px auto',
    borderRadius: '50%',
    width: '300px',
    height: '300px',
  },
  (props) => ({
    background: `url("https://coffee-and-taste.kro.kr/${props.url}") center/100% no-repeat`,
  }),
);

export default function MenuDetail() {
  const { menuId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMenu(menuId));
  }, []);

  const menu = useSelector((state) => state.menu);

  return (
    <>
      <MenuImage url={menu.imagePath} />
      <h2>{menu.name}</h2>
      <span>{menu.englishName}</span>
      <hr />
      <p>
        {menu.description}
      </p>
      <h3>{menu.price}</h3>
      <button type="button">주문하기</button>
    </>
  );
}

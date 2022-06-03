import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

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

  const [menu, setMenu] = useState({});

  const BASE_URL = 'https://coffee-and-taste.kro.kr/api';

  useEffect(() => {
    axios.get(`${BASE_URL}/menus/${menuId}`)
      .then((response) => {
        setMenu(response.data);
      });
  }, []);

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

import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMenu } from './store';

const MenuDetailStyle = styled.div({
  paddingTop: '1rem',
});

const MenuImage = styled.div(
  {
    margin: '50px auto 30px auto',
    borderRadius: '50%',
    width: '300px',
    height: '300px',
  },
  (props) => ({
    background: `url("https://coffee-and-taste.kro.kr/${props.url}") center/100% no-repeat`,
  }),
);

const MenuName = styled.h1({
  fontSize: '1.7rem',
  paddingBottom: '.5rem',
});

const MenuEnglishName = styled.h2({
  fontSize: '1.5rem',
  paddingBottom: '.5rem',
});

const MenuDescription = styled.p({
  fontSize: '1.2rem',
  paddingTop: '.5rem',
  lineHeight: '1.6rem',
});

const MenuPrice = styled.h3({
  fontSize: '1.3rem',
  padding: '1rem 0',
});

const OrderButton = styled.button({
  fontSize: '1.1rem',
  borderRadius: '10%',
  color: 'white',
  backgroundColor: '#006633',
  padding: '0.5rem',
});

export default function MenuDetail() {
  const { menuId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMenu(menuId));
  }, []);

  const menu = useSelector((state) => state.menu);

  return (
    <MenuDetailStyle>
      <MenuImage url={menu.imagePath} />
      <MenuName>{menu.name}</MenuName>
      <MenuEnglishName>{menu.englishName}</MenuEnglishName>
      <hr />
      <MenuDescription>
        {menu.description.split('\\n').map((line) => (
          <span>
            {line}
            <br />
          </span>
        ))}
      </MenuDescription>
      <MenuPrice>
        {menu.price}
        원
      </MenuPrice>
      <OrderButton>주문하기</OrderButton>
    </MenuDetailStyle>
  );
}

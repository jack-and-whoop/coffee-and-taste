import styled from '@emotion/styled';

// import icedCaffeAmericano from './images/iced-caffe-americano.jpg';
// import icedCappuccino from './images/iced-cappuccino.jpg';
// import icedDolceLatte from './images/iced-dolce-latte.jpg';
// import icedCaffeMocha from './images/iced-caffe-mocha.jpg';
// import icedCaffeLatte from './images/iced-caffe-latte.jpg';
// import icedWhiteChocolateMocha from './images/iced-white-chocolate-mocha.jpg';
// import icedCaramelMacchiato from './images/iced-caramel-macchiato.jpg';
// import espressoConPanna from './images/espresso-con-panna.jpg';

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
    background: `url("${props.url}") center/100% no-repeat`,
  }),
);

const MenuName = styled.div({
  margin: '10px 0',
  fontSize: '16px',
  textAlign: 'center',
});

const menuList = [
  {
    name: '아이스 카페 아메리카노',
    imageURL: './images/iced-caffe-americano.jpg',
  },
  {
    name: '아이스 카푸치노',
    imageURL: './images/iced-cappuccino.jpg',
  },
  {
    name: '아이스 돌체 라떼',
    imageURL: './images/iced-dolce-latte.jpg',
  },
  {
    name: '아이스 카페 모카',
    imageURL: './images/iced-caffe-mocha.jpg',
  },
  {
    name: '아이스 카페 라떼',
    imageURL: './images/iced-caffe-latte.jpg',
  },
  {
    name: '아이스 화이트 초콜릿 모카',
    imageURL: './images/iced-white-chocolate-mocha.jpg',
  },
  {
    name: '아이스 카라멜 마끼아또',
    imageURL: './images/iced-caramel-macchiato.jpg',
  },
  {
    name: '에스프레소 콘 파나',
    imageURL: './images/espresso-con-panna.jpg',
  },

];

export default function MenuContainer() {
  return (
    <MenuContainerStyle>
      {menuList.map((menu) => (
        <Menu key={menu.name}>
          <MenuImage url={menu.imageURL} />
          <MenuName>{menu.name}</MenuName>
        </Menu>
      ))}
    </MenuContainerStyle>
  );
}

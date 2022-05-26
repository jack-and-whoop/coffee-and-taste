import styled from '@emotion/styled';

import icedCaffeAmericano from './images/iced-caffe-americano.jpg';
import icedCappuccino from './images/iced-cappuccino.jpg';
import icedDolceLatte from './images/iced-dolce-latte.jpg';
import icedCaffeMocha from './images/iced-caffe-mocha.jpg';
import icedCaffeLatte from './images/iced-caffe-latte.jpg';
import icedWhiteChocolateMocha from './images/iced-white-chocolate-mocha.jpg';
import icedCaramelMacchiato from './images/iced-caramel-macchiato.jpg';
import espressoConPanna from './images/espresso-con-panna.jpg';

const MenuContainerStyle = styled.div({
  margin: '40px 0',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '1rem',
});

const Menu = styled.div({
});

// const MenuImage = styled.div({
//   margin: '0 auto',
//   borderRadius: '50%',
//   width: '100px',
//   height: '100px',
//   background: `url(${icedCaffeAmericano}) center/100% no-repeat`,
// });

const MenuName = styled.div({
  margin: '10px 0',
  fontSize: '16px',
  textAlign: 'center',
});

export default function MenuContainer() {
  return (
    <MenuContainerStyle>
      <Menu>
        <div style={{
          margin: '50px auto 30px auto',
          borderRadius: '50%',
          width: '150px',
          height: '150px',
          background: `url(${icedCaffeAmericano}) center/100% no-repeat`,
        }}
        />
        <MenuName>아이스 아메리카노</MenuName>
      </Menu>
      <Menu>
        <div style={{
          margin: '50px auto 30px auto',
          borderRadius: '50%',
          width: '150px',
          height: '150px',
          background: `url(${icedCappuccino}) center/100% no-repeat`,
        }}
        />
        <MenuName>아이스 카푸치노</MenuName>
      </Menu>
      <Menu>
        <div style={{
          margin: '50px auto 30px auto',
          borderRadius: '50%',
          width: '150px',
          height: '150px',
          background: `url(${icedDolceLatte}) center/100% no-repeat`,
        }}
        />
        <MenuName>아이스 돌체 라떼</MenuName>
      </Menu>
      <Menu>
        <div style={{
          margin: '50px auto 30px auto',
          borderRadius: '50%',
          width: '150px',
          height: '150px',
          background: `url(${icedCaffeMocha}) center/100% no-repeat`,
        }}
        />
        <MenuName>아이스 카페 모카</MenuName>
      </Menu>
      <Menu>
        <div style={{
          margin: '50px auto 30px auto',
          borderRadius: '50%',
          width: '150px',
          height: '150px',
          background: `url(${icedCaffeLatte}) center/100% no-repeat`,
        }}
        />
        <MenuName>아이스 카페 라떼</MenuName>
      </Menu>
      <Menu>
        <div style={{
          margin: '50px auto 30px auto',
          borderRadius: '50%',
          width: '150px',
          height: '150px',
          background: `url(${icedWhiteChocolateMocha}) center/100% no-repeat`,
        }}
        />
        <MenuName>아이스 화이트 초콜릿 모카</MenuName>
      </Menu>
      <Menu>
        <div style={{
          margin: '50px auto 30px auto',
          borderRadius: '50%',
          width: '150px',
          height: '150px',
          background: `url(${icedCaramelMacchiato}) center/100% no-repeat`,
        }}
        />
        <MenuName>아이스 카라멜 마끼아또</MenuName>
      </Menu>
      <Menu>
        <div style={{
          margin: '50px auto 30px auto',
          borderRadius: '50%',
          width: '150px',
          height: '150px',
          background: `url(${espressoConPanna}) center/100% no-repeat`,
        }}
        />
        <MenuName>에스프레소 콘 파나</MenuName>
      </Menu>
    </MenuContainerStyle>
  );
}

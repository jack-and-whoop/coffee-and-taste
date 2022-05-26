import icedCaffeAmericano from './images/iced-caffe-americano.jpg';

export default function MenuDetail() {
  return (
    <>
      <div style={{
        margin: '100px auto 30px auto',
        borderRadius: '50%',
        width: '300px',
        height: '300px',
        background: `center/100% url(${icedCaffeAmericano}) no-repeat`,
      }}
      />
      <h2>아이스 카페 아메리카노</h2>
      <span>Iced Caffe Americano</span>
      <hr />
      <p>
        진한 에스프레소에 시원한 정수물과 얼음을 더하여 깔끔하고
        강렬한 에스프레소를 가장 부드럽고 시원하게 즐길 수 있는 커피
      </p>
      <h3>4,000원</h3>
      <button type="button">주문하기</button>
    </>
  );
}

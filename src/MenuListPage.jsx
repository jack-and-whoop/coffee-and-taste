import { useParams } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function MenuListContainer({ menuGroupId }) {
  return (
    <>
      <div>{menuGroupId}</div>
      <div>테스트</div>
    </>
  );
}

// eslint-disable-next-line react/prop-types
export default function MenuListPage({ params }) {
  const { id } = params || useParams();

  return (
    <MenuListContainer menuGroupId={id} />
  );
}

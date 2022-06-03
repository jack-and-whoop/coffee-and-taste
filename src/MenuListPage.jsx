import { useParams } from 'react-router-dom';

function MenuListContainer({ menuGroupId }) {
  return (
    <>
      <div>{menuGroupId}</div>
      <div>테스트</div>
    </>
  );
}

export default function MenuListPage() {
  const { menuGroupId } = useParams();

  return (
    <MenuListContainer menuGroupId={menuGroupId} />
  );
}

import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const MenuGroupStyle = styled.div({
  margin: '40px 0',
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridGap: '1rem',
});

const MenuGroupImage = styled.div(
  {
    margin: '50px auto 30px auto',
    borderRadius: '50%',
    width: '200px',
    height: '200px',
  },
  (props) => {
    if (props.url) {
      return ({
        background: `url("https://coffee-and-taste.kro.kr${props.url}") center/100% no-repeat`,
      });
    }

    return ({
      border: '2px solid green',
      backgroundColor: '#1E3932',
    });
  },
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

export default function MenuGroup({ menuGroups }) {
  return (
    <MenuGroupStyle>
      {
        menuGroups.map((menuGroup) => (
          <div key={menuGroup.id}>
            <MenuGroupImage url={menuGroup.representativeImagePath} />
            <MenuGroupName>
              <Link to={`/menu-groups/${menuGroup.id}`}>
                {menuGroup.name}
              </Link>
            </MenuGroupName>
          </div>
        ))
      }
    </MenuGroupStyle>
  );
}

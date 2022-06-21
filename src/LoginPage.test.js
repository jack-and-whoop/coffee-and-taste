import { render } from '@testing-library/react';

describe('LoginPage', () => {
  function renderLoginPage() {
    return render(
      <LoginPage />,
    );
  }

  it('renders title ', () => {
    const { container } = renderLoginPage();

    expect(container).toHaveTextContent('Login');
  });
});

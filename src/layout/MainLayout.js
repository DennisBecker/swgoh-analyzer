import { Route, Link } from 'react-router-dom';

const MainLayout = ({ children, ...rest }) => {
  return (
    <div className='page page-dashboard'>
      <header>
        <h1>SWGoH Progress</h1>
        <nav><li><Link to={"/"}>Home</Link></li></nav>
        <nav><li><Link to={"/f2pguide"}>F2P Guide</Link></li></nav>
      </header>
      <section>
        <article>{children}</article>
      </section>
    </div>
  );
};

const MainLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <MainLayout>
          <Component {...props} />
        </MainLayout>
      )}
    />
  );
};

export default MainLayoutRoute;
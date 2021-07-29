import { wrapper } from '../store/store.js';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);

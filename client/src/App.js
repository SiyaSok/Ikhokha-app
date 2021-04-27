import './App.css';

import Footer from './component/Layout/Footer';
import Header from './component/Layout/Header';
import Home from './component/Pages/Home';
import Products from './component/Pages/Products';
import Blogs from './component/Pages/Blogs';
import Contact from './component/Pages/Contact';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PostBlog from './component/admin/PostBlog';
import PostProducts from './component/admin/PostProduct';
import BlogContextProvider from './context/BlogContext';
import ProductContextProvider from './context/ProductContext';
import BlogDisplayPage from './component/Pages/BlogDisplayPage';
import ProductDisplayPage from './component/Pages/ProductDisplayPage';
import SignIn from './component/Pages/SignIn';
import AuthContextProvider from './context/AuthContext';
import BlogSection from './component/Pages/LandingPage/BlogSection';
import Slider from './component/util/Slider';

function App() {
  return (
    <ProductContextProvider>
      <BlogContextProvider>
        <AuthContextProvider>
          <Router>
            <div id="ikhokha" className="ikhokha container-fluid p-0">
              <Header />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/products" exact component={Products} />
                <Route path="/products/:id" component={ProductDisplayPage} />
                <Route path="/blogs" exact component={Blogs} />
                <Route path="/blogs/:id" component={BlogDisplayPage} />
                <Route path="/contact" component={Contact} />
                <Route path="/post-blog" exact component={PostBlog} />
                <Route path="/post-blog/:id" component={PostBlog} />
                <Route path="/post-product" exact component={PostProducts} />
                <Route path="/post-product/:id" component={PostProducts} />
                <Route path="/sign-in" component={SignIn} />
                <BlogSection />
                <Slider />
              </Switch>
              <Footer />
            </div>
          </Router>
        </AuthContextProvider>
      </BlogContextProvider >
    </ProductContextProvider >
  );
}

export default App;

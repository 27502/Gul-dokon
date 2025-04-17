import { Layout, Row, Col } from 'antd';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ background: '#F6F6F6', padding: '40px 50px' }}>
      <Row gutter={[32, 32]}>
        <Col xs={24} md={6}>
          <h3 style={{ color: '#46A358' }}>GREENSHOP</h3>
          <p>We help you grow your plants and green your space.</p>
        </Col>
        <Col xs={12} md={6}>
          <h4>My Account</h4>
          <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
            <li>My Account</li>
            <li>Our Stores</li>
            <li>Contact Us</li>
          </ul>
        </Col>
        <Col xs={12} md={6}>
          <h4>Help & Guide</h4>
          <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
            <li>Shipping</li>
            <li>Returns</li>
            <li>FAQ</li>
          </ul>
        </Col>
        <Col xs={24} md={6}>
          <h4>Categories</h4>
          <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
            <li>House Plants</li>
            <li>Seeds</li>
            <li>Accessories</li>
          </ul>
        </Col>
      </Row>
    </Footer>
  );
};

export default AppFooter;

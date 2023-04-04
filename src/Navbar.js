import React from "react";
import { BrowserRouter,  Routes, Route, Link } from "react-router-dom";
import classes from "./Navbar.css";
import { Breadcrumb, Layout, Menu, theme, Button, Space } from "antd";
// import SignIn from "./SignIn";
import Home from "./Home";
import FormV2 from "./components/FormV2.js";
import DataPropFile from "./components/states/DataPropFile";
import NotFound from "./NotFound";

const { Header, Content, Footer } = Layout;

export default function Navbar() {
  return (
    <>
      <Layout>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Space wrap>
              <Button type="primary" href="/SignIn">
                SignIn
              </Button>
              <Button type="primary" href="/State">
                Update
              </Button>
            </Space>
          </Menu>
        </Header>

        <Content
          className="site-layout"
          style={{
            padding: "0 50px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 380,
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unc hanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like ectronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </Content>
      </Layout>
      <BrowserRouter>
        <div>
          
            <Link to={"/SignIn"}>SIGNIN </Link> 
          
        </div>
        <div>
          <Link to={"/Home"}> </Link>
        </div>
        <div>
          <Link to={"/State"}> </Link>
        </div>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/SignIn" element={<FormV2 />}></Route>
          <Route path="/State" element={<DataPropFile />}></Route>
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

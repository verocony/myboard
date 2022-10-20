// import React from "react";
// import "./style.css";

// const Layout = (props) => {
//   return <div className="layout">{props.children}</div>;
// };

// export default Layout;


import React from "react";
import styled from "styled-components";
import Header from "./Header";


const Layout = ({children}) => {
    return (
        <>
        <Header />
        <LayoutContainer>
            {children}
        </LayoutContainer>
        </>
    );
};

export default Layout;


const LayoutContainer = styled.div`
  height: calc(100vh - 45px);
  background-color: #fff;
  padding: 24px;
  width: 1000px;
  margin: 0 auto;
`;

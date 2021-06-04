import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PeopleConsumer } from "./Context/context";
import { FaArrowsAltH } from "react-icons/fa";

export default function SecondSidebar() {
  const [button, setButton] = React.useState(false);
  return (
    <PeopleConsumer>
      {(value) => {
        const { secondLinks, secondSidebarOpen, handleSecondSideBar } = value;
        return (
          <SidebarWrapper show={secondSidebarOpen}>
            <ul>
              <FaArrowsAltH
                className="nav-icon"
                onClick={handleSecondSideBar}
                show={() => setButton(true)}
              />
              {secondLinks.map((item) => {
                return (
                  <li>
                    <Link
                      to={item.path}
                      key={item.id}
                      className="sidebar-link"
                      onClick={handleSecondSideBar}
                    >
                      {item.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SidebarWrapper>
        );
      }}
    </PeopleConsumer>
  );
}

const SidebarWrapper = styled.nav`
  position: fixed;
  top: 100px;
  left: 0px;
  width: 20%;
  height: 50%auto;
  background: transparent;
  z-index: 1;
  border-right: 4px solid var(--mainBrown);
  transition: var(--mainTransition);
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")};
  opacity: ${(props) => (props.show ? "1" : "0.7")};
  ul {
    list-style-type: none;
    padding: 0;
  }
  .sidebar-link {
    display: block;
    font-size: 1.5rem;
    text-transform: capitalize;
    color: var(--mainBlack);
    padding: 1rem 0.5rem 1rem 1.5rem;
    background: transparent;
    transition: var(--mainTransition);
    text-decoration: none;
  }

  .sidebar-link:hover {
    border-radius: 4px;
    background: var(--mainGold);
    color: var(--mainWhite);
    padding: 1rem 0.5rem 1rem 2.3rem;
  }

  @media only screen and (max-width: 600px) {
    width: 30%;
  }

  .nav-icon {
    color: var(--mainBrown);

    cursor: pointer;
    padding-left: 3px;
    top: 4.5rem;
    position: absolute;
    left: ${(props) => (props.show ? "100%" : "100%")};
    transition: var(--mainTransition);
    font-size: 2rem;
  }
  .nav-icon:hover {
    color: var(--mainGold);
  }
`;

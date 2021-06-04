import React from "react";
import { PeopleConsumer } from "./Context/context";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <PeopleConsumer>
      {(value) => {
        const { sidebarOpen, links, handleSideBar } = value;
        console.log(sidebarOpen);
        return (
          <SideBarWrapper show={sidebarOpen}>
            <ul>
              {links.map((link) => {
                return (
                  <li>
                    <Link
                      to={link.path}
                      key={link.id}
                      className="sidebar-link"
                      onClick={handleSideBar}
                    >
                      {link.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SideBarWrapper>
        );
      }}
    </PeopleConsumer>
  );
}

const SideBarWrapper = styled.nav`
  position: fixed;
  top: 100px;
  right: 0px;
  width: 20%;
  height: 50%auto;
  background: transparent;
  z-index: 1;
  border-left: 4px solid #301f30;
  transition: var(--mainTransition);
  transform: ${(props) => (props.show ? "translateX(100%)" : "translateX(0)")};
  ul {
    list-style-type: none;
    padding: 0;
  }

  .sidebar-link {
    display: block;
    text-transform: capitalize;
    font-size: 1rem;
    color: #301f30;
    padding: 1rem 3rem;
    background: transparent;
    text-decoration: none;
    transition: var(--mainTransition);
  }
  .sidebar-link:hover {
    background: #f9a602;
    color: #fff;
    padding: 1rem 3rem 1rem 4rem;
  }

  @media only screen and (max-width: 600px) {
    width: 30%;
    height: 30%;
    .sidebar-link {
      font-size: 1rem;
      padding: 0rem 1.5rem 0.5rem 1.5rem;
    }

    .sidebar-link:hover {
      padding: 0.5rem 1.5rem 0.5rem 1.5rem;
    }
  }
  @media only screen and (max-width: 99vh) {
    width: 30%;
  }
`;

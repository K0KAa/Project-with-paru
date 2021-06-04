import { FaSearch } from "react-icons/fa";
import { GoX } from "react-icons/go";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Title from "./Title";
import { PeopleConsumer } from "./Context/context";

export default function Nav() {
  return (
    <PeopleConsumer>
      {(value) => {
        const { handleSideBar, sidebarOpen, falseSecondSideBar } = value;
        return (
          <NavWrapper burger>
            <div className="nav-center">
              <div className="logo">
                <Link to="" className="title">
                  <Title title="OurSite" />
                </Link>
              </div>
              <div className="search-box">
                <input
                  className="search-txt"
                  type="text"
                  name=""
                  placeholder="Search Here..."
                />
                <Link className="search-btn" to="/search">
                  <FaSearch />
                </Link>
              </div>

              <GoX className="nav-icon" onClick={handleSideBar} />
              {console.log(sidebarOpen)}
            </div>
          </NavWrapper>
        );
      }}
    </PeopleConsumer>
  );
}

const NavWrapper = styled.nav`
  position: --webkit-sticky;
  position: sticky;
  width: 100%;
  background: #301f30;
  border-radius: 8px;
  .title {
    text-decoration: none;
  }
  .nav-center {
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 8vh;
    font-family: "Oswald", sans-serif;
    position: relative;
    /* background-color: #301f30; */
  }

  .logo {
    color: rgb(226, 226, 226);
    text-transform: capitalize;
    letter-spacing: 5px;
    font-size: 20px;
  }

  /*search box css*/

  .search-box {
    background: #301f30;
    display: flex;
    justify-content: flex-start;
    width: 10%;
    opacity: 0.5;
    transition: 0.2s ease-in;
  }

  .search-btn {
    width: 3rem;
    margin-top: 0.8rem;
    margin-left: ${window.innerWidth / 2};
    color: #f9a602;
    font-size: 2rem;
    transition: 0.2s ease-in;
  }
  .search-box:hover {
    width: 40%;
    transition: all 0.2s ease-in;
    .search-txt {
      opacity: 1;
      width: 100%;
      background: #230629;
    }
    .search-btn {
      color: white;
      transition: all 0.2s ease-in;
    }
  }

  .search-txt {
    border: none;
    background: none;
    outline: dashed;
    outline-color: #f9a602;
    opacity: 0;
    padding: 5px;
    color: rgb(219, 214, 214);
    font-size: 16px;
    transition: 0.4s;
    line-height: 35px;
    width: 10%;
  }

  .nav-icon {
    font-size: 2rem;
    color: rgb(226, 226, 226);
    margin: 5px;
    cursor: pointer;
    transition: all 0.2s ease;
    animation: wobble 1s 1;
  }

  @media (max-width: 600px) {
    .search-box {
      width: 10%;
    }
    .search-box:hover {
      width: 50%;
      height: 70%;
    }
  }
`;

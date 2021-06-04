import React, { Component } from "react";
import items from "./data";
import { linkdata } from "./linkData";
import { SocialData } from "./SocialData";
import { secondLinkdata } from "./secondLinkdata";

const PeopleContext = React.createContext();

export default class PeopleProvider extends Component {
  state = {
    secondLinks: secondLinkdata,
    secondSidebarOpen: false,
    people: [],
    sidebarOpen: false,
    links: linkdata,
    socialIcons: SocialData,
    sortedPeople: [],
    featuredPeople: [],
    soloPeoople: {},
    loading: false,
    relationType: "all",
    pets: false,
  };
  // falseSideBar() {
  //   this.setState({
  //     sidebarOpen: false,
  //   });
  // }
  // falseSecondSideBar() {
  //   this.setState({
  //     secondSidebarOpen: false,
  //   });
  // }
  handleSecondSideBar = () => {
    this.setState({
      secondSidebarOpen: !this.state.secondSidebarOpen,
    });
  };

  componentDidMount() {
    this.setState({ people: this.setFunctions(items) });
  }

  setFunctions(items) {
    const peopleData = items.map((item) => {
      const { id } = item.sys.id;
      const { slug } = item.fields.slug;
      const { image } = item.fields.images;
      const person = { id, image, slug, ...item };
      return person;
    });

    let featuredPeople = peopleData.filter(
      (person) => person.featured === true
    );

    this.setState({
      sortedPeople: peopleData,
      featuredPeople,
    });
  }

  handleSideBar = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen,
    });
  };

  getPeople = (slug) => {
    let tempPeople = [this.state.people];
    const people = tempPeople.filter((person) => person.slug === slug);
    return people;
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value,
      },
      this.filterPeople
    );
  };

  filterPeople = () => {
    let { name, type, house, pets } = this.state.sortedPeople;
    let tempPeople = { ...this.state.people };
    if (type !== "all") {
      tempPeople = tempPeople.filter((people) => people.type === type);
    }
    if (pets) {
      tempPeople = tempPeople.filter((people) => people.pets === true);
    }
    tempPeople = tempPeople.filter((people) => people.name === name);
    tempPeople = tempPeople.filter((people) => people.house === house);

    this.setState({
      sortedPeople: tempPeople,
    });
  };

  render() {
    return (
      <PeopleContext.Provider
        value={{
          ...this.state,
          handleChange: this.handleChange,
          getPeople: this.getPeople,
          handleSideBar: this.handleSideBar,
          handleSecondSideBar: this.handleSecondSideBar,
          falseSidebar: this.falseSideBar,
          falseSecondSideBar: this.falseSecondSideBar,
        }}
      >
        {this.props.children}
      </PeopleContext.Provider>
    );
  }
}

const PeopleConsumer = PeopleContext.Consumer;

export { PeopleConsumer, PeopleProvider };

import React, { Component } from "react";
import menu1 from "../../../resources/images/menu/menu1.jpg";
import menu2 from "../../../resources/images/menu/menu2.jpg";
import menu3 from "../../../resources/images/menu/menu3.jpg";
import menu4 from "../../../resources/images/menu/menu4.jpg";
import menu5 from "../../../resources/images/menu/menu5.jpg";
import menu6 from "../../../resources/images/menu/menu6.jpg";
import menu7 from "../../../resources/images/menu/menu7.jpg";
import menu8 from "../../../resources/images/menu/menu8.jpg";
import menu9 from "../../../resources/images/menu/menu9.jpg";
import menu10 from "../../../resources/images/menu/menu10.jpg";
import menu11 from "../../../resources/images/menu/menu11.jpg";
import menu12 from "../../../resources/images/menu/menu12.jpg";
import menu13 from "../../../resources/images/menu/menu13.jpg";
import menu14 from "../../../resources/images/menu/menu14.jpg";
let i = 0;
class Menu extends Component {
  state = {
    titles: [
      <h4>Omellete Mariachi</h4>,
      <h4>Pecan Pancakes</h4>,
      <h4>Sunrise Sampler</h4>,
      <h4>Meatloaf Potatoes</h4>,
      <h4>Margherita Pizza</h4>,
      <h4>Lemon Pepper Prout</h4>,
      <h4>Chicken Burger</h4>,
      <h4>Grilled Pork Chips</h4>,
      <h4>Omellete Mariachi</h4>,
      <h4>Pecan Pancakes</h4>,
      <h4>Sunrise Sampler</h4>,
      <h4>Meatloaf Potatoes</h4>,
      <h4>Margherita Pizza</h4>,
      <h4>Lemon Pepper Prout</h4>,
      <h4>Chicken Burger</h4>,
      <h4>Grilled Pork Chips</h4>,
      <h4>Super Mocktail Mariachi</h4>,
      <h4>Takila Shots</h4>,
      <h4>Juicy Wine</h4>,
      <h4>Lemon Cocktail</h4>,
      <h4>Margherita Shot</h4>,
      <h4>Lemon Pepper Tail</h4>,
      <h4>Black Lemon Tail</h4>,
      <h4>Jimador chull</h4>
    ],
    prices: [
      <span>$120</span>,
      <span>$135</span>,
      <span>$75</span>,
      <span>$110</span>,
      <span>$145</span>,
      <span>$180</span>,
      <span>$80</span>,
      <span>$240</span>,
      <span>$120</span>,
      <span>$135</span>,
      <span>$75</span>,
      <span>$110</span>,
      <span>$145</span>,
      <span>$180</span>,
      <span>$80</span>,
      <span>$240</span>,
      <span>$120</span>,
      <span>$135</span>,
      <span>$75</span>,
      <span>$110</span>,
      <span>$145</span>,
      <span>$180</span>,
      <span>$80</span>,
      <span>$240</span>
    ],
    images: [
      menu1,
      menu2,
      menu3,
      menu4,
      menu5,
      menu6,
      menu7,
      menu8,
      menu1,
      menu2,
      menu3,
      menu4,
      menu5,
      menu6,
      menu7,
      menu8,
      menu9,
      menu10,
      menu11,
      menu12,
      menu13,
      menu14,
      menu7,
      menu8
    ]
  };
  showMenu = () => {
    if(i >= 24) i = 0
    const titles = this.state.titles.slice(i, i + 8);
    i += 8;
    return titles.map((el, i) => (
      <div className="col-md-6" key={i}>
        <div className="menu-item">
          <div className="menu-image">
            <img src={this.state.images[i]} alt="Menu" />
          </div>
          <div className="menu-content">
            {el}
            {this.state.prices[i]}
            <p>Jalapeños, bell pepper, mushroom & coriander.</p>
          </div>
        </div>
      </div>
    ));
  };
  hideList = e => {
    e.preventDefault();
    document.querySelectorAll(`.isotopeContainer .row`).forEach(el => {
      el.classList.remove("filter-shown");
      el.classList.add("filter-hide");
      setTimeout(() => {
        el.classList.remove("displayBlock");
        el.classList.add("displayNone");
      }, 1000);
    });
    document
      .querySelectorAll(`.isotopeContainer ${e.target.dataset.filter}.row`)
      .forEach(filtered => {
        filtered.classList.remove("filter-hide");
        filtered.classList.add("filter-shown");
        setTimeout(() => {
          filtered.classList.remove("displayNone");
          filtered.classList.add("displayBlock");
        }, 1005);
      });
  };
  render() {
    return (
      <section className="menu gallery">
        <div className="container">
          <div className="section-title title-white">
            <h2>
              Our <span>Menu</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex
              neque, sodales accumsan sapien et, auctor vulputate quam donec
              vitae consectetur turpis
            </p>
          </div>
          <div className="menu-outer" data-ref="container-1">
            <div className="row">
              <div className="col-md-12">
                <div className="mt_filter mar-bottom-50">
                  <ul className="list-inline text-center filter">
                    <li className="active">
                      <a href="/" onClick={this.hideList} data-filter="*">
                        All
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={this.hideList}
                        href="/"
                        data-filter=".breakfast"
                      >
                        Breakfast
                      </a>
                    </li>
                    <li>
                      <a onClick={this.hideList} href="/" data-filter=".lunch">
                        Lunch
                      </a>
                    </li>
                    <li>
                      <a onClick={this.hideList} href="/" data-filter=".drink">
                        Drink
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="isotopeContainer" >
              <div className="row isotopeSelector breakfast ">{this.showMenu()}</div>
              <div className="row isotopeSelector lunch">{this.showMenu()}</div>
              <div className="row isotopeSelector drink">{this.showMenu()}</div>
            </div>
          </div>
        </div>
        <div className="overlay"></div>
      </section>
    );
  }
}

export default Menu;

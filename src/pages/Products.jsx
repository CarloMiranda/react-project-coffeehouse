import React, { useEffect, useRef } from 'react';
import Beverages from '../menus/Beverages/';
import PopularItems from '../menus/PopularItems';
import Meals from '../menus/Meals';
import OrderItems from '../menus/OrderItems';
import { BEVERAGES } from '../menus/Beverage';
import { MEALS } from '../menus/Meal';

function Products(){    
    const menuRef = useRef(null);

    const showCategory = (categoryName) => {
        const categories = document.getElementsByClassName("category");
        for (let i = 0; i < categories.length; i++) {
            categories[i].style.display = "none";
        }

        if (categoryName === 'all') {
            for (let i = 0; i < categories.length; i++) {
                categories[i].style.display = "block";
            }
        } else {
            const categoryElement = document.getElementById(categoryName);
            if (categoryElement) {
                categoryElement.style.display = "block";
            }
        }
    };
    
      useEffect(() => {
        const menu = menuRef.current;
        const stickyClass = 'sticky-top';
        const menuTop = menu.offsetTop;
    
        const handleScroll = () => {
          if (window.pageYOffset >= menuTop) {
            menu.classList.add(stickyClass);
          } else {
            menu.classList.remove(stickyClass);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    return(
    <section className='items'>
        <div className="container justify-content-center">
            <header>
                <div>
                    <img src="./images/header.png" alt="coffee image" className="img-fluid" />
                </div>
            </header>

            <div className="menu text-center bg-primary p-3" ref={menuRef} id="menu-top">
                <button onClick={() => showCategory('all')} className="menu-button p-1 col-2 border rounded-3" data-aos="fade-right">
                    All
                </button>
                <button onClick={() => showCategory('popular')} data-id="popularitems" className="menu-button p-1 border col-md-2 rounded-3 ms-3" data-aos="fade-right">
                    Popular Items
                </button>
                <button onClick={() => showCategory('beverages')} data-id="beverages" className="menu-button p-1 border col-md-2 rounded-3 ms-3" data-aos="fade-left">
                    Beverages
                </button>
                <button onClick={() => showCategory('meals')} data-id="meals" className="menu-button p-1 border col-md-2 rounded-3 ms-3" data-aos="fade-left">
                    Meals
                </button>
            </div>

        <div className="all-menu">
            <div id="all" className="category mt-4">
                    <h2><strong>All Items</strong></h2>
                    <hr />
                </div>
                
                <div id="popular" className="category">
                    <h3>Popular Items</h3>
                    <hr />
                        <PopularItems />
                </div>
                
                <div id="beverages" className="category">
                    <h3>Beverages</h3>
                    <hr />
                    <div className="products">
                        {BEVERAGES.map((product) => (
                            <Beverages key={product.id} data={product}/>
                        ))}
                    </div>
                </div>

                <div id="meals" className="category">
                    <h3>Meals</h3>
                    <hr />
                    <div className="products">
                        {MEALS.map((product) => (
                            <Meals key={product.id} data={product}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        < OrderItems />              
    </section>
    )
}

export default Products;
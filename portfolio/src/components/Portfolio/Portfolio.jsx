import React, { useState } from "react";
import PortfolioStyles from './Portfolio.css'
import Card from '../Card/Card'
import portfolioData from '../data/portfolioData.json'



export default function Portfolio() {
  const [cardList, setSelectedCard] = useState(portfolioData);
  return (
    <div className='portfolio-container'>
      
      
      <section className="portfolio-card-container">
      <div className="portfolio-title-holder">
      <h2 className="portfolio-title">Projects</h2>
      </div>
      {cardList.map((card) => {
          return (
            <Card
              name={card.name}
              key={card.name}
              description={card.description}
              github={card.github}
              deployment={card.deployment}
              tech={card.tech}
            />
          );
        })}
        </section>
      </div>
  )
}

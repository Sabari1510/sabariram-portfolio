import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './App.css';

const GET_PORTFOLIO_SECTIONS = gql`
  {
    portfolioSectionCollection {
      items {
        sectionTitle
        content {
          json
        }
        image {
          url
        }
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_PORTFOLIO_SECTIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>SABARIRAM RAMPRAKASH PREMA</h1>
        <p>Junior Web developer</p>
            </header>
      <main>
        {data.portfolioSectionCollection.items.map((section, index) => (
          <section key={index} className="portfolio-section">
            <h2>{section.sectionTitle}</h2>
            {section.image && <img src={section.image.url} alt={section.sectionTitle} className="section-image" />}
            <div className="content">
              {documentToReactComponents(section.content.json)}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;
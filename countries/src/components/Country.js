import React from 'react'

const Country = ({ country }) => {
  const { name, capital, population, languages, flag } = country
  return (
    <section>
      <h2>{name}</h2>
      <p>capital {capital}</p>
      <p>population {population}</p>
      <h3>languages</h3>
      <ul>
        {languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <p>
        <img src={flag} alt={`Flag of ${name}`} width={100} />
      </p>
    </section>
  )
}

export default Country

function RatingSelect({select, selected}) {

  const handleChange = (e) => {
    // e.currentTarget.value is a string so added + to convert it to a number
    select(+e.currentTarget.value)
  }
  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`} >
          <input
            type='radio'
            id={`num${i + 1}`}
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect
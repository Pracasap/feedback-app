import PropTypes from 'prop-types'

// It's a styled component and will be shared by multiple components

function Card({children, reverse}) {
  //Conditional Class
  return (
    <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  )

  //Conditional Styling
  // return (
  //   <div className="card" style={{backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff', color: reverse? '#fff' : '#000'}}>
  //     {children}
  //   </div>
  // ) 
}

Card.defaultProps = {
  reverse: false,
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  //node is anything that can be rendered by React
  reverse: PropTypes.bool,
}

export default Card
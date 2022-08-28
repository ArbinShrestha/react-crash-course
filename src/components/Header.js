import PropTypes from 'prop-types'

export const Header = ({title}) => {
  return (
    <header>
      <h1 >{title}</h1>
    </header>
  )
}

//CSS in JS
// const headerStyle = {color:'red', backgroundColor:'black'}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}


export default Header
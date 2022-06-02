import PropTypes from 'prop-types'
import Button from './Button';

const Header = () => {
  return (
    // <header style={{color:"red"}}>
    <header className='header'>
        <h1>React Task Tracker</h1>
        <Button color='green' text='Add' />
    </header>
  )
}

Header.defaultProps = {
    title: "Hello myDefault"
};

Header.propTypes = {
    title: PropTypes.string   // this is strongly typing the title to be a string
}

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header

import styles from './Button.module.css'
import PropTypes from 'prop-types';
function Button({children ,type}) {

    Button.propTypes = {
        children:  PropTypes.string.isRequired,
        type:PropTypes.string.isRequired
    }
  return (
    <div>
        <button className={`${styles.btn} ${styles[type]}`}>{children}</button>
    </div>
  )
}

export default Button
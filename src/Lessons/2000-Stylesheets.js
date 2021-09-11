import React from 'react'
import './2000-myStyles.css'
// import styles from './Lessons/2000-myStyles.module.css'

const heading = {
    fontSize: '48px',
    color: 'blue'
};

function Stylesheets(props) {
    let primary = props.useStyle === true ? 'primary' : '';
    return (
        <div>
            <h1 className='primary'>Use explicit stylesheet</h1>
            <h1 className={primary}>Use conditional stylesheet</h1>
            <h1 className={`${props.headingClassName} font-xl`}>Use variabled stylesheet</h1>
            <h1 style={heading}>Inline style</h1>
            {/* <h1 className={styles.success}>Module success style</h1> */}
            <h1 className='error'>Module error style</h1>
        </div>
    );
}

export default Stylesheets

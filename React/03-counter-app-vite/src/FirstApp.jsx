import PropTypes from 'prop-types';

/*export const FirstApp = () => 
    <>
    <h1>Andrea</h1>
    <p>Soyandreagonzález</p>
    </>
*/


export const FirstApp = ({ title, subTitle }) => {
    return (
        <>
            <h1>{title}</h1>
            <p>{subTitle}</p>
        </> 
    )
}


FirstApp.propTypes={
    title: PropTypes.string.isRequired
}
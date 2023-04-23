const Title = ({ title, subtTitle }) => {
    return (
        <div className='section-title'>
            <h2>
                {title} <span>{subtTitle}</span>
            </h2>
        </div>
    );
};
export default Title;

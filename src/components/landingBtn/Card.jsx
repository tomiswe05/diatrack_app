import '../landingBtn/Card.css';
function Card ({purpose,number,unit, use1, use2,desc1,desc2,desc3}) {
    return(
        <>
        <div className="card-contain">
            <div className="purple-box">
                <p className='blood-sugar'>{purpose}</p>

                <p className="num-para">{number} <span className="unit-para">{unit}</span></p>
            </div>

          <div className="title">
                <p>{use1} <br />{use2}</p>
            </div>

             <div className="describe">
                <p>{desc1} <br /> {desc2} <br /> {desc3}</p>

            </div>
        </div>
        </>
    )
}
export default Card
import './Project.css'
export function Project({ title, pageLink, promoRef, serialNo }) {
   

    return (
        <div className='project-block'>
            <div className='head'>
                <div className='head-left'>
                    <span className='project-serial-number'>{serialNo < 10 ? `0${serialNo++}` : serialNo++}</span>
                    <span className='project-block-title'>{title}</span>
                </div>
                <div className='head-right'>
                    <a href={pageLink} target='_blank'><button className='show-button'>Open</button></a>
                </div>
            </div>
            <div className='bottom'>
                <video className='project-video' src={promoRef} alt="promo-video" autoPlay loop />
            </div>
        </div>
    )
}
import './portfolio.css'

export function Portfolio(){
    return <>

    <div className="mainPortfolio">
        <h1 className="textPortfolio"> Portfolio </h1>
        <div className="portfolioTop">
            <div className="webDesign">
                <h3>Web Design</h3>
                <hr className='line' />
            </div>
            <div className="mobileDesign">
                <h3>Mobile Design</h3>
                <hr className='line' />
                {/* <hr /> */}
            </div>
            <div className="logoDesign">
                <h3>Logo Design</h3>
                <hr className='line' />
                {/* <hr /> */}
            </div>
        </div>


        <div className="portfolioDown">
        <div className="webApplication">
                <h3>Web Application Development</h3>
                {/* <hr /> */}
            </div>
        <div className="mobileApplication">
                <h3>Mobile Application Development</h3>
                {/* <hr /> */}
            </div>
        <div className="pwaDevelopment">
                <h3>PWA Development</h3>
                {/* <hr /> */}
            </div>

        </div>
    </div>
    </>
}

import './Icon.css'
export function Icon({ setProjectData, projectState, setProjectAll, setInput }) {

    function openHtmlCssProject() {
        setProjectAll(true)
        setProjectData([
            {
                title: "Login Page",
                pageLink: "All-Projects/1.LoginPage/loginPage.html",
                promoRef: "promos/HTML-CSS/1.loginPage.mp4",

            },
            {
                title: "Playful Button",
                pageLink: "All-Projects/2.PlayfulButton/PlayButton.html",
                promoRef: "promos/HTML-CSS/2.playfulButton.mp4",

            },
            {
                title: "Liquid Navbar",
                pageLink: "All-Projects/3.OceanNavbar/OceanGlassNavBar.html",
                promoRef: "promos/HTML-CSS/3.liquidNavbar.mp4",

            },
            {
                title: "Facebook Card",
                pageLink: "All-Projects/4.FacebookCard/FacebookPostCard.html",
                promoRef: "promos/HTML-CSS/4.facebookPost.mp4",

            },
            {
                title: "Professional Navbar",
                pageLink: "All-Projects/5.ResponsiveNavbar/officeNavbar.html",
                promoRef: "promos/HTML-CSS/5.navbarResponsive.mp4",

            },
            {
                title: "Gradient Navbar",
                pageLink: "All-Projects/6.WebsiteNavbar/WebsiteNavbar.html",
                promoRef: "promos/HTML-CSS/6.gradientNavbar.mp4",

            },
            {
                title: "Basic HTML Form",
                pageLink: "All-Projects/7.BasicForm/BasicForm.html",
                promoRef: "promos/HTML-CSS/7.basicHtmlForm.mp4",

            },
            {
                title: "Glass Navbar",
                pageLink: "All-Projects/8.GlassNavbar/glassNavbar.html",
                promoRef: "promos/HTML-CSS/8.glassNavbar.mp4",

            },
        ])

        setInput("")
    }
    function openJsProject() {
        setProjectAll(true)
        setProjectData([
            {
                title: "Mini Calculator",
                pageLink: "All-Projects/9.MiniCalculator/calculator.html",
                promoRef: "promos/JS/9.miniCalculator.mp4",

            },
            {
                title: "Cool Clock",
                pageLink: "All-Projects/10.Clock/clock.html",
                promoRef: "promos/JS/10.coolClock.mp4",

            },
            {
                title: "QR Code Generator",
                pageLink: "All-Projects/11.QrcGenerator/qrcGenerator.html",
                promoRef: "promos/JS/11.qrcGenerator.mp4",

            },
        ])

        setInput("")
    }
    function openFigmaProject() {
        setProjectAll(true)
        setProjectData([
            {
                title: "Pizza Animation",
                pageLink: "https://www.figma.com/proto/e0DHxWEnGjdlA4zBUY1jrb/Pizza-Design?node-id=1-2&starting-point-node-id=8%3A61&scaling=contain",
                promoRef: "promos/Figma/12.pizzaAnimation.mp4",

            },
            {
                title: "Planets Animation",
                pageLink: "https://www.figma.com/proto/YsT3HGC5BMAJQqPZltRvmv/Planet-Prototype?node-id=15-254&starting-point-node-id=1%3A2",
                promoRef: "promos/Figma/13.planetAnimation.mp4",

            },
            {
                title: "Smoothie Animation",
                pageLink: "https://www.figma.com/proto/MsP3vC5UjjuFIyLs1Bn130/Smoothee-protype?t=kabcrzsJi3te3KE4-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=38-16&starting-point-node-id=1%3A2",
                promoRef: "promos/Figma/14.smoothieAnimation.mp4",

            },
            {
                title: "Watches Animation",
                pageLink: "https://www.figma.com/proto/SgYrGxElDX9DEp5UR7DqCd/Watch-prototype?node-id=3-34&t=kabcrzsJi3te3KE4-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
                promoRef: "promos/Figma/15.watchAnimation.mp4",

            },
            {
                title: "Cool Name Animation",
                pageLink: "https://www.figma.com/proto/wjBOgi41UjCDWqJPZsmSfi/FIGMA-ANIME?node-id=76-48&t=RoscCkxOvSFVkAwR-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=76%3A48",
                promoRef: "promos/Figma/16.nameAnimation.mp4",

            },
            {
                title: "Gradient Phone Wallpaper",
                pageLink: "https://www.figma.com/proto/npkH0Kjlf3yPLPNhkQdYPc/gradient-blur?node-id=4-30&p=f&t=kabcrzsJi3te3KE4-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
                promoRef: "promos/Figma/17.gradientWallpaper.mp4",

            },
        ])

        setInput("")
    }
    function openBootstrapProject() {
        setProjectAll(true)
        setProjectData([
            {
                title: "Basic Laptop Website",
                pageLink: "All-Projects/12.LaptopWebsite/laptopWebsite.html",
                promoRef: "promos/Bootstrap/18.laptopWebsite.mp4",

            },
            {
                title: "Bootstrap Login Page",
                pageLink: "All-Projects/13.LoginPageBootstrap/loginPage.html",
                promoRef: "promos/Bootstrap/19.loginPage.mp4",

            },
            {
                title: "Apple Product Page",
                pageLink: "All-Projects/14.ApplePage/ApplePage.html",
                promoRef: "promos/Bootstrap/20.applePage.mp4",

            },
            {
                title: "Professional Login Page",
                pageLink: "All-Projects/15.GoogleLoginPage/LoginPage.html",
                promoRef: "promos/Bootstrap/21.loginPage.mp4",

            },
            {
                title: "Zara Product Page",
                pageLink: "All-Projects/16.ZaraPage/zaraPage.html",
                promoRef: "promos/Bootstrap/22.zaraPage.mp4",

            },
        ])

        setInput("")
    }
    function showAllProject() {
        setProjectAll(false)
        setProjectData([
            {
                title: "Login Page",
                pageLink: "All-Projects/1.LoginPage/loginPage.html",
                promoRef: "promos/HTML-CSS/1.loginPage.mp4",

            },
            {
                title: "Playful Button",
                pageLink: "All-Projects/2.PlayfulButton/PlayButton.html",
                promoRef: "promos/HTML-CSS/2.playfulButton.mp4",

            },
            {
                title: "Liquid Navbar",
                pageLink: "All-Projects/3.OceanNavbar/OceanGlassNavBar.html",
                promoRef: "promos/HTML-CSS/3.liquidNavbar.mp4",

            },
            {
                title: "Facebook Card",
                pageLink: "All-Projects/4.FacebookCard/FacebookPostCard.html",
                promoRef: "promos/HTML-CSS/4.facebookPost.mp4",

            },
            {
                title: "Professional Navbar",
                pageLink: "All-Projects/5.ResponsiveNavbar/officeNavbar.html",
                promoRef: "promos/HTML-CSS/5.navbarResponsive.mp4",

            },
            {
                title: "Gradient Navbar",
                pageLink: "All-Projects/6.WebsiteNavbar/WebsiteNavbar.html",
                promoRef: "promos/HTML-CSS/6.gradientNavbar.mp4",

            },
            {
                title: "Basic HTML Form",
                pageLink: "All-Projects/7.BasicForm/BasicForm.html",
                promoRef: "promos/HTML-CSS/7.basicHtmlForm.mp4",

            },
            {
                title: "Glass Navbar",
                pageLink: "All-Projects/8.GlassNavbar/glassNavbar.html",
                promoRef: "promos/HTML-CSS/8.glassNavbar.mp4",

            },
            {
                title: "Mini Calculator",
                pageLink: "All-Projects/9.MiniCalculator/calculator.html",
                promoRef: "promos/JS/9.miniCalculator.mp4",

            },
            {
                title: "Cool Clock",
                pageLink: "All-Projects/10.Clock/clock.html",
                promoRef: "promos/JS/10.coolClock.mp4",

            },
            {
                title: "QR Code Generator",
                pageLink: "All-Projects/11.QrcGenerator/qrcGenerator.html",
                promoRef: "promos/JS/11.qrcGenerator.mp4",

            },
            {
                title: "Pizza Animation",
                pageLink: "https://www.figma.com/proto/e0DHxWEnGjdlA4zBUY1jrb/Pizza-Design?node-id=1-2&starting-point-node-id=8%3A61&scaling=contain",
                promoRef: "promos/Figma/12.pizzaAnimation.mp4",

            },
            {
                title: "Planets Animation",
                pageLink: "https://www.figma.com/proto/YsT3HGC5BMAJQqPZltRvmv/Planet-Prototype?node-id=15-254&starting-point-node-id=1%3A2",
                promoRef: "promos/Figma/13.planetAnimation.mp4",

            },
            {
                title: "Smoothie Animation",
                pageLink: "https://www.figma.com/proto/MsP3vC5UjjuFIyLs1Bn130/Smoothee-protype?t=kabcrzsJi3te3KE4-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=38-16&starting-point-node-id=1%3A2",
                promoRef: "promos/Figma/14.smoothieAnimation.mp4",

            },
            {
                title: "Watches Animation",
                pageLink: "https://www.figma.com/proto/SgYrGxElDX9DEp5UR7DqCd/Watch-prototype?node-id=3-34&t=kabcrzsJi3te3KE4-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
                promoRef: "promos/Figma/15.watchAnimation.mp4",

            },
            {
                title: "Cool Name Animation",
                pageLink: "https://www.figma.com/proto/wjBOgi41UjCDWqJPZsmSfi/FIGMA-ANIME?node-id=76-48&t=RoscCkxOvSFVkAwR-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=76%3A48",
                promoRef: "promos/Figma/16.nameAnimation.mp4",

            },
            {
                title: "Gradient Phone Wallpaper",
                pageLink: "https://www.figma.com/proto/npkH0Kjlf3yPLPNhkQdYPc/gradient-blur?node-id=4-30&p=f&t=kabcrzsJi3te3KE4-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
                promoRef: "promos/Figma/17.gradientWallpaper.mp4",

            },
            {
                title: "Basic Laptop Website",
                pageLink: "All-Projects/12.LaptopWebsite/laptopWebsite.html",
                promoRef: "promos/Bootstrap/18.laptopWebsite.mp4",

            },
            {
                title: "Bootstrap Login Page",
                pageLink: "All-Projects/13.LoginPageBootstrap/loginPage.html",
                promoRef: "promos/Bootstrap/19.loginPage.mp4",

            },
            {
                title: "Apple Product Page",
                pageLink: "All-Projects/14.ApplePage/ApplePage.html",
                promoRef: "promos/Bootstrap/20.applePage.mp4",

            },
            {
                title: "Professional Login Page",
                pageLink: "All-Projects/15.GoogleLoginPage/LoginPage.html",
                promoRef: "promos/Bootstrap/21.loginPage.mp4",

            },
            {
                title: "Zara Product Page",
                pageLink: "All-Projects/16.ZaraPage/zaraPage.html",
                promoRef: "promos/Bootstrap/22.zaraPage.mp4",

            },
        ])
    }

    return (
        <>
            <div className='icon-container'>
                <div className='icons'>
                    <div className='icon-block html-css' id="html-css" onClick={openHtmlCssProject}>
                        <img className='icon-image html' src="icons/html.png" alt="icon-image" />
                        <img className='icon-image css' src='icons/css.png' alt='icon-image' />
                    </div>

                    <div className='icon-block js' id='js' onClick={openJsProject}>
                        <img className='icon-image js' src="icons/js.png" alt="icon-image" />
                    </div>

                    <div className='icon-block figma' id='figma' onClick={openFigmaProject}>
                        <img className='icon-image figma' src="icons/figma.png" alt="icon-image" />
                    </div>

                    <div className='icon-block bootstrap' id='bootstrap' onClick={openBootstrapProject}>
                        <img className='icon-image bootstrap' src="icons/bootstrap.png" alt="icon-image" />
                    </div>
                </div>
                {
                    projectState === true ? <button onClick={showAllProject} className='show-all-button'>Show all projects</button> : <button className='hide-all-button'></button>
                }
            </div>

        </>
    )
}
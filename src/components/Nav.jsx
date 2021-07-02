import React from 'react'

const Nav = () => {
    return (
        <div className="header w-100 h3">
            <div className="flex headflex justify-between items-center w-90 center">
                <div className="logoheader w4">
                    <a className="link" href="https://a12baghel2.github.io">
                        <img className="Logo" src="https://app.moyyn.com/static/media/Logo.ed17c448.png" alt="Moyyn" />
                    </a>
                </div>
                <div className="navbar w-50-l w-80 w-75-m ">
                    <ul className="flex nav navlist pa0 ma0 justify-between items-center">
                        <li className="list fw5 f7 f6-l"><a className="link white dim dib" href="https://a12baghel2.github.io"><p>Link 1</p></a></li>
                        <li className="list fw5 f7 f6-l"><a className="link white dim dib" href="https://a12baghel2.github.io"><p>Link 1</p></a></li>
                        <li className="list fw5 f7 f6-l"><a className="link white dim dib" href="https://a12baghel2.github.io"><p>Link 1</p></a></li>
                        <li className="list fw5 f7 f6-l"><a className="link white dim dib" href="https://a12baghel2.github.io"><p>Link 1</p></a></li>
                        <li className="list fw5 f7 f6-l"><a className="link white dim dib" href="https://a12baghel2.github.io"><p>Link 1</p></a></li>
                        <li className="list fw5 f7 f6-l"><a className="link white dim dib" href="https://a12baghel2.github.io"><p>Link 1</p></a></li>
                    </ul>
                </div>
                <div className="burger mb2 ">
                    <div className="line1" ></div>
                    <div className="line2" ></div>
                    <div className="line3" ></div>
                </div>
            </div>
        </div>
    )
}

export default Nav

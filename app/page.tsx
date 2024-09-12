import React from "react";
export default function Home() {
    return (
        <div>
            <header className="header">
                <div className="header-top">
                    <a href="/" className="logo">
                    </a>
                    <button className="header-menu-btn" type="button"
                            onClick="popup_show('go_auth',{tab: 'registration'})">
                        <svg xmlns="http://www.w3.org/2000/svg" style={{height: '19px'}} viewBox="0 0 21 19"
                             className="icon">
                            <g fill="none" fill-rule="evenodd">
                                <g fill="#FFF">
                                    <path
                                        d="M19.5 16a1.5 1.5 0 010 3h-18a1.5 1.5 0 010-3h18zm0-8a1.5 1.5 0 010 3h-18a1.5 1.5 0 010-3h18zm0-8a1.5 1.5 0 010 3h-18a1.5 1.5 0 010-3h18z"></path>
                                </g>
                            </g>
                        </svg>
                    </button>
                </div>
                <div className="header-bottom">
                    <button className="header-login button" onClick="popup_show('go_auth',{tab: 'registration'})">
                        Войти
                    </button>
                    <button className="header-registration button"
                            onClick="popup_show('go_auth',{tab: 'registration'})">
                        &nbsp;Регистрация
                    </button>
                </div>
            </header>
            <div className="nav">
                <section className="nav-bar">
                    <a href="/gamehall" className="nav-bar-item">
                        Игровой зал </a>
                    <a href="/tournaments" className="nav-bar-item">
                        Турниры </a>
                    <a href="/gamehall/slots/jackpot" className="nav-bar-item">
                        Джекпоты </a>
                    <a href="/lottery" className="nav-bar-item">
                        Лотерея </a>
                    <a href="/stock" className="nav-bar-item">
                        Акции и бонусы </a>
                    <a href="/shop" className="nav-bar-item">
                        Магазин </a>
                    <a href="/achievements" className="nav-bar-item">
                        Достижения </a>
                    <a href="/vip_club" className="nav-bar-item">
                        VIP-клуб </a>
                </section>
            </div>
            <div id="main_gallery" className="home-slider">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img className="swiper-slide-img"
                             src="../../../Downloads/saveweb2zip-com-1wbrz-top/1ZDpfma2utCg.top/uploads/pictures/500_i18_m.8f7c0c9d-760%20(1).png"
                             alt=""/>
                        <div className="slider-item-img-content">
                            <div className="slider-item-img-title" style={{fontSize: '19px'}}>
                                Бонус на депозит до 500%
                            </div>
                            <div className="slider-item-img-desc" style={{fontSize: '14px'}}>
                                Получай до 500% от депозита на бонусные счета казино и ставок
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="promo">
                <a href="javascript:void(0)" className="promo-free js-show-auth-mobile">
            <span className="promo-free-img"
                  style={{backgroundImage: 'url(../../../Downloads/saveweb2zip-com-1wbrz-top/1ZDpfma2utCg.top/static/home/img/free-money-link-image.png)'}}></span>
                    <span className="promo-free-img-coin"
                          style={{backgroundImage: 'url(../../../Downloads/saveweb2zip-com-1wbrz-top/1ZDpfma2utCg.top/static/home/img/free-money-link-coin.png)'}}></span>
                    <span className="promo-free-flare2 promo-free-flare"></span>
                    <span className="promo-free-flare1 promo-free-flare"></span>
                    <span className="promo-free-txt1">Free money</span>
                    <span className="promo-free-txt2">Бесплатный кэш!</span>
                </a>
                <a href="javascript:void(0)" className="header-top-right-promo js-show-auth-mobile">
                    <svg viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M4.462 1.662c-.035-.503.341-.916.909-.887C5.9.8 6.705 1.232 7.462 2.62H7.146c-.47.026-1.173-.006-1.754-.177-.611-.18-.908-.449-.93-.782zm3.522.37C7.188.686 6.257.072 5.408.03 4.402-.02 3.652.758 3.719 1.714c.059.842.805 1.252 1.464 1.445.684.2 1.472.234 1.994.207H8.798c.528.027 1.327-.006 2.02-.207.664-.192 1.421-.6 1.481-1.445.068-.961-.695-1.733-1.707-1.684-.856.043-1.8.654-2.608 2.002zm3.572-.37c.035-.497-.343-.916-.927-.887-.541.026-1.358.46-2.125 1.846H8.829c.478.026 1.192-.006 1.782-.177.623-.18.922-.452.946-.782z"
                              fill="#E8B2FF"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M4.322 4.178A2.484 2.484 0 001.84 6.662v5.747a2.484 2.484 0 002.483 2.483h7.355a2.484 2.484 0 002.483-2.483V6.662a2.484 2.484 0 00-2.483-2.484H4.322zm5.328 6.137l.864-.875a.573.573 0 00.137-.58.542.542 0 00-.437-.382L9.02 8.297 8.486 7.17a.538.538 0 00-.485-.314H8a.54.54 0 00-.486.314L6.98 8.297l-1.192.18a.546.546 0 00-.44.383.576.576 0 00.138.58l.864.875-.204 1.238a.572.572 0 00.216.552.527.527 0 00.318.109.523.523 0 00.251-.067L8 11.563l1.066.584a.517.517 0 00.571-.042.569.569 0 00.217-.552l-.204-1.238z"
                              fill="#fff"></path>
                    </svg>
                    <div className="header-top-right-promo-txt">
                        <div className="header-top-right-promo-txt1">Акции</div>
                        <div className="header-top-right-promo-txt2">и бонусы</div>
                    </div>
                    <img
                        src="../../../Downloads/saveweb2zip-com-1wbrz-top/1ZDpfma2utCg.top/static/home/img/present-with-light.png"
                        className="header-top-right-promo_img"/>
                </a></div>
            <div className="home-offers">
                <div className="home-offers-section">
                    <a href="javascript:void(0)" onClick="popup_show('go_auth',{tab: 'registration'})"
                       className="home-offers-section-header js-show-auth-mobile">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"
                             className="icon">
                            <rect width="30" height="30" rx="8" fill="url(#section-casino_svg__paint0_linear)"></rect>
                            <rect width="30" height="30" rx="8" fill="url(#section-casino_svg__paint1_linear)"></rect>
                            <rect width="30" height="30" rx="8" fill="url(#section-casino_svg__paint2_linear)"></rect>
                            <g opacity=".8" fill-rule="evenodd" clip-rule="evenodd">
                                <path
                                    d="M23.7 15a9 9 0 11-18 0 9 9 0 0118 0zM7.2 15a7.5 7.5 0 1015 0 7.5 7.5 0 00-15 0z"
                                    fill="url(#section-casino_svg__paint3_linear)"></path>
                                <path
                                    d="M23.7 15a9 9 0 11-18 0 9 9 0 0118 0zM7.2 15a7.5 7.5 0 1015 0 7.5 7.5 0 00-15 0z"
                                    fill="#fff"></path>
                            </g>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M14.7 21c-3.308 0-6-2.692-6-6s2.692-6 6-6c3.309 0 6 2.692 6 6s-2.691 6-6 6zm-1.616-3.364a1.893 1.893 0 01-1.898-1.888c0-1.611 2.245-3.37 3.146-4.01a.63.63 0 01.736 0c.901.64 3.146 2.399 3.146 4.01 0 1.043-.85 1.888-1.897 1.888a1.896 1.896 0 01-1.536-.782c-.009-.012.23.728.362 1.135a.2.2 0 01-.19.262h-.505a.2.2 0 01-.19-.262c.132-.408.37-1.148.36-1.134-.344.473-.902.78-1.534.78z"
                                  fill="#fff"></path>
                            <defs>
                                <linearGradient id="section-casino_svg__paint0_linear" x1="0" y1="0" x2="35.845"
                                                y2="11.063"
                                                gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0095FF"></stop>
                                    <stop offset="1" stop-color="#0855C4"></stop>
                                </linearGradient>
                                <linearGradient id="section-casino_svg__paint1_linear" x1="-43.144" y1="7.28" x2="6.283"
                                                y2="54.714"
                                                gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#F0DA4B"></stop>
                                    <stop offset="1" stop-color="#FF005E"></stop>
                                </linearGradient>
                                <linearGradient id="section-casino_svg__paint2_linear" x1="11.724" y1="-16.155"
                                                x2="-37.997"
                                                y2="20.396" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FF1764"></stop>
                                    <stop offset="1" stop-color="#5484F2"></stop>
                                </linearGradient>
                                <linearGradient id="section-casino_svg__paint3_linear" x1="12.735" y1="-3.693"
                                                x2="-17.098"
                                                y2="18.238" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FF1764"></stop>
                                    <stop offset="1" stop-color="#5484F2"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="home-offers-section-header-txt"> Казино</div>
                        <div className="home-offers-section-header-linkP js-show-auth-mobile"
                             onClick="popup_show('go_auth',{tab: 'registration'})">
                            Все
                        </div>
                    </a>
                    <div className="home-offers-section-list">
                        <div className="home-offers-section-list-item js-show-auth-mobile">
                            <div className="home-offers-game">
                                <picture className="image">
                                    <img
                                        src="../../../Downloads/saveweb2zip-com-1wbrz-top/1ZDpfma2utCg.top/uploads/slot-logo/gonzosquest.jpg"
                                        loading="lazy"/>
                                </picture>
                            </div>
                            <div className="info">
                                <div className="name">Gonzo&prime;s Quest</div>
                            </div>
                        </div>
                        <div className="home-offers-section-list-item js-show-auth-mobile">
                            <div className="home-offers-game">
                                <picture className="image">
                                    <img
                                        src="../../../Downloads/saveweb2zip-com-1wbrz-top/1ZDpfma2utCg.top/uploads/slot-logo/mbl_reelrush.jpg"
                                        loading="lazy"/>
                                </picture>
                            </div>
                            <div className="info">
                                <div className="name">Reel Rush</div>
                            </div>
                        </div>
                        <div className="home-offers-section-list-item js-show-auth-mobile">
                            <div className="home-offers-game">
                                <picture className="image">
                                    <img
                                        src="../../../Downloads/saveweb2zip-com-1wbrz-top/1ZDpfma2utCg.top/uploads/slot-logo/mbl_bookofradeluxe10.jpg"
                                        loading="lazy"/>
                                </picture>
                            </div>
                            <div className="info">
                                <div className="name">BOOK OF RA™ DELUXE 10</div>
                            </div>
                        </div>
                        <div className="home-offers-section-list-item js-show-auth-mobile">
                            <div className="home-offers-game">
                                <picture className="image">
                                    <img
                                        src="../../../Downloads/saveweb2zip-com-1wbrz-top/1ZDpfma2utCg.top/uploads/slot-logo/mbl_secretsofchristmas.jpg"
                                        loading="lazy"/>
                                </picture>
                            </div>
                            <div className="info">
                                <div className="name">Secrets Of Christmas</div>
                            </div>
                        </div>
                        <div className="home-offers-section-list-item js-show-auth-mobile">
                            <div className="home-offers-game">
                                <picture className="image">
                                    <img
                                        src="../../../Downloads/saveweb2zip-com-1wbrz-top/1ZDpfma2utCg.top/uploads/slot-logo/bookofratempleofgold.jpg"
                                        loading="lazy"/>
                                </picture>
                            </div>
                            <div className="info">
                                <div className="name">Book of Ra: Temple of Gold</div>
                            </div>
                        </div>
                        <div className="home-offers-section-list-item js-show-auth-mobile">
                            <div className="home-offers-game">
                                <picture className="image">
                                    <img
                                        src="../../../Downloads/saveweb2zip-com-1wbrz-top/1ZDpfma2utCg.top/uploads/slot-logo/mbl_wildotron.jpg"
                                        loading="lazy"/>
                                </picture>
                            </div>
                            <div className="info">
                                <div className="name">Wild-O-Tron 3000</div>
                            </div>
                        </div>
                        <div className="home-offers-section-list-item js-show-auth-mobile">
                            <div className="home-offers-game">
                                <picture className="image">
                                    <img
                                        src="../../../Downloads/saveweb2zip-com-1wbrz-top/1ZDpfma2utCg.top/uploads/slot-logo/c2g_allways_fruits_original.jpg"
                                        loading="lazy"/>
                                </picture>
                            </div>
                            <div className="info">
                                <div className="name">Allways Fruits</div>
                            </div>
                        </div>
                        <div className="home-offers-section-list-item js-show-auth-mobile">
                            <div className="home-offers-game">
                                <picture className="image">
                                    <img
                                        src="../../../Downloads/saveweb2zip-com-1wbrz-top/1ZDpfma2utCg.top/uploads/slot-logo/resident.jpg"
                                        loading="lazy"/>
                                </picture>
                            </div>
                            <div className="info">
                                <div className="name">Resident</div>
                            </div>
                        </div>
                        <div className="home-offers-section-list-item js-show-auth-mobile">
                            <div className="home-offers-game">
                                <picture className="image">
                                    <img
                                        src="../../../Downloads/saveweb2zip-com-1wbrz-top/1ZDpfma2utCg.top/uploads/slot-logo/mbl_starburst.jpg"
                                        loading="lazy"/>
                                </picture>
                            </div>
                            <div className="info">
                                <div className="name">Starburst</div>
                            </div>
                        </div>
                        <div className="home-offers-section-list-item js-show-auth-mobile">
                            <div className="home-offers-game">
                                <picture className="image">
                                    <img
                                        src="../../../Downloads/saveweb2zip-com-1wbrz-top/1ZDpfma2utCg.top/uploads/slot-logo/c2g_100_joker_staxx_ps_html.jpg"
                                        loading="lazy"/>
                                </picture>
                            </div>
                            <div className="info">
                                <div className="name">100 Joker Staxx</div>
                            </div>
                        </div>
                        <div className="home-offers-section-list-item js-show-auth-mobile">
                            <div className="home-offers-game">
                                <picture className="image">
                                    <img
                                        src="../../../Downloads/saveweb2zip-com-1wbrz-top/1ZDpfma2utCg.top/uploads/slot-logo/gnome.jpg"
                                        loading="lazy"/>
                                </picture>
                            </div>
                            <div className="info">
                                <div className="name">Gnome</div>
                            </div>
                        </div>
                        <div className="home-offers-section-list-item js-show-auth-mobile">
                            <div className="home-offers-game">
                                <picture className="image">
                                    <img
                                        src="../../../Downloads/saveweb2zip-com-1wbrz-top/1ZDpfma2utCg.top/uploads/slot-logo/fruit.jpg"
                                        loading="lazy"/>
                                </picture>
                            </div>
                            <div className="info">
                                <div className="name">Fruit Cocktail</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="home-offers-section">
                    <a href="javascript:void(0)" onClick="popup_show('go_auth',{tab: 'registration'})"
                       className="home-offers-section-header js-show-auth-mobile">
                        <svg xmlns="http://www.w3.org/2000/svg" src="http://www.w3.org/1999/xlink" viewBox="0 0 18 18"
                             className="icon">
                            <defs>
                                <linearGradient id="section-livegames_svg__a" x1="-64.759%" x2="100%" y1="-58.111%"
                                                y2="100%">
                                    <stop offset="0%" stop-color="#F0DA4B"></stop>
                                    <stop offset="100%" stop-color="#FF005E"></stop>
                                </linearGradient>
                                <filter id="section-livegames_svg__b" width="227.3%" height="228.7%" x="-63.6%" y="-46%"
                                        filterUnits="objectBoundingBox">
                                    <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                                    <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1"
                                                    stdDeviation="2"></feGaussianBlur>
                                    <feColorMatrix in="shadowBlurOuter1"
                                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"></feColorMatrix>
                                </filter>
                                <path id="section-livegames_svg__c"
                                      d="M5.778.019c.155.02.284.05.53.122l2.726.817c.558.168.848.304 1.14.54.282.23.497.52.636.856.143.347.19.664.19 1.246v3.677c0 .582-.047.899-.19 1.246-.14.337-.354.625-.637.855-.291.237-.58.373-1.139.54l-2.63.79c-.31.093-.451.127-.626.15a2.07 2.07 0 01-.556 0 3.202 3.202 0 01-.53-.122L1.967 9.92c-.558-.168-.848-.304-1.14-.54a2.17 2.17 0 01-.636-.856c-.132-.32-.182-.615-.19-1.117V3.6c0-.582.047-.899.19-1.246.14-.337.354-.625.637-.855.291-.237.58-.373 1.139-.54l2.63-.79c.31-.093.451-.127.626-.15a2.07 2.07 0 01.556 0zm-.436.908l-.065.01c-.067.012-.142.03-.27.067l-2.778.832c-.492.148-.659.24-.824.374a1.238 1.238 0 00-.367.494l-.03.079c-.061.173-.091.372-.091.817v3.677l.002.188c.009.375.048.538.119.708.08.196.203.36.367.494l.067.052c.137.1.303.18.663.293l2.871.86c.171.05.249.066.336.078.108.014.208.014.316 0l.065-.01c.067-.012.142-.03.27-.067l2.778-.832c.492-.148.659-.24.824-.374.164-.134.286-.298.367-.494l.03-.079c.061-.173.091-.372.091-.817V3.6l-.002-.188c-.009-.375-.048-.538-.119-.708a1.229 1.229 0 00-.367-.494l-.067-.052c-.137-.1-.303-.18-.663-.293l-2.871-.86a2.12 2.12 0 00-.336-.078 1.194 1.194 0 00-.316 0zm.527.996l.09.032v6.967a1.278 1.278 0 01-.921.01l-2.6-.975-.133-.053a.808.808 0 01-.25-.149.615.615 0 01-.168-.241.927.927 0 01-.053-.353V3.792c0-.245.017-.334.053-.429a.626.626 0 01.168-.242l.052-.042c.065-.048.152-.092.33-.159l2.6-.975c.268-.1.561-.107.832-.022zM2.865 6.126c-.165 0-.298.205-.298.458s.133.459.298.459c.164 0 .297-.206.297-.459s-.133-.458-.297-.458zm4.537-.458c.165 0 .298.205.298.458s-.133.458-.298.458c-.164 0-.298-.205-.298-.458s.134-.458.298-.458zm-3.62-.917c-.165 0-.299.205-.299.458s.134.459.298.459c.165 0 .298-.206.298-.459s-.133-.458-.298-.458zm4.537-.458c.164 0 .298.205.298.458s-.134.458-.298.458c-.165 0-.298-.205-.298-.458s.133-.458.298-.458zm-3.621-.917c-.165 0-.298.205-.298.458s.133.459.298.459c.164 0 .298-.206.298-.459s-.134-.458-.298-.458z"></path>
                            </defs>
                            <g fill="none" fill-rule="evenodd">
                                <path fill="url(#section-livegames_svg__a)"
                                      d="M5.128 0h6.744c1.783 0 2.43.186 3.082.534.652.349 1.163.86 1.512 1.512.348.652.534 1.299.534 3.082v6.744c0 1.783-.186 2.43-.534 3.082a3.637 3.637 0 01-1.512 1.512c-.652.348-1.299.534-3.082.534H5.128c-1.783 0-2.43-.186-3.082-.534a3.637 3.637 0 01-1.512-1.512C.186 14.302 0 13.655 0 11.872V5.128c0-1.783.186-2.43.534-3.082A3.637 3.637 0 012.046.534C2.698.186 3.345 0 5.128 0z"
                                      transform="translate(1)"></path>
                                <g transform="translate(4 3)">
                                    <use fill="#000" filter="url(#section-livegames_svg__b)"
                                         src="#section-livegames_svg__c"></use>
                                    <use fill="#FFF" src="#section-livegames_svg__c"></use>
                                </g>
                            </g>
                        </svg>
                        <div className="home-offers-section-header-txt js-show-auth-mobile"> Live-games</div>
                        <div className="home-offers-section-header-linkP js-show-auth-mobile"
                             onClick="popup_show('go_auth',{tab: 'registration'})">
                            Все
                        </div>
                    </a>
                    <div className="home-offers-section-list">
                        <div className="home-offers-section-list-item js-show-auth-mobile">
                            <div className="home-offers-game">
                                <picture className="image">
                                    <img
                                        src="../../../Downloads/saveweb2zip-com-1wbrz-top/1ZDpfma2utCg.top/uploads/slot-logo/bookofra.jpg"
                                        loading="lazy"/>
                                </picture>
                            </div>
                            <div className="info">
                                <div className="name">Book of Ra</div>
                            </div>
                        </div>
                        <div className="home-offers-section-list-item js-show-auth-mobile">
                            <div className="home-offers-game">
                                <picture className="image">
                                    <img
                                        src="../../../Downloads/saveweb2zip-com-1wbrz-top/1ZDpfma2utCg.top/uploads/slot-logo/c2g_alwayshotdeluxe_gt_html.jpg"
                                        loading="lazy"/>
                                </picture>
                            </div>
                            <div className="info">
                                <div className="name">Always Hot Deluxe</div>
                            </div>
                        </div>
                        <div className="home-offers-section-list-item js-show-auth-mobile">
                            <div className="home-offers-game">
                                <picture className="image">
                                    <img
                                        src="../../../Downloads/saveweb2zip-com-1wbrz-top/1ZDpfma2utCg.top/uploads/slot-logo/c2g_redlady_gt_html.jpg"
                                        loading="lazy"/>
                                </picture>
                            </div>
                            <div className="info">
                                <div className="name">Red Lady</div>
                            </div>
                        </div>
                        <div className="home-offers-section-list-item js-show-auth-mobile">
                            <div className="home-offers-game">
                                <picture className="image">
                                    <img
                                        src="../../../Downloads/saveweb2zip-com-1wbrz-top/1ZDpfma2utCg.top/uploads/slot-logo/c2g_diamond_cats_original.jpg"
                                        loading="lazy"/>
                                </picture>
                            </div>
                            <div className="info">
                                <div className="name">Diamond Cats</div>
                            </div>
                        </div>
                        <div className="home-offers-section-list-item js-show-auth-mobile">
                            <div className="home-offers-game">
                                <picture className="image">
                                    <img
                                        src="../../../Downloads/saveweb2zip-com-1wbrz-top/1ZDpfma2utCg.top/uploads/slot-logo/fruit.jpg"
                                        loading="lazy"/>
                                </picture>
                            </div>
                            <div className="info">
                                <div className="name">Fruit Cocktail</div>
                            </div>
                        </div>
                        <div className="home-offers-section-list-item js-show-auth-mobile">
                            <div className="home-offers-game">
                                <picture className="image">
                                    <img
                                        src="../../../Downloads/saveweb2zip-com-1wbrz-top/1ZDpfma2utCg.top/uploads/slot-logo/kingofcards.jpg"
                                        loading="lazy"/>
                                </picture>
                            </div>
                            <div className="info">
                                <div className="name">King of Cards</div>
                            </div>
                        </div>
                        <div className="home-offers-section-list-item js-show-auth-mobile">
                            <div className="home-offers-game">
                                <picture className="image">
                                    <img
                                        src="../../../Downloads/saveweb2zip-com-1wbrz-top/1ZDpfma2utCg.top/uploads/slot-logo/c2g_qso_leprechaunhills.jpg"
                                        loading="lazy"/>
                                </picture>
                            </div>
                            <div className="info">
                                <div className="name">Leprechaun Hills</div>
                            </div>
                        </div>
                        <div className="home-offers-section-list-item js-show-auth-mobile">
                            <div className="home-offers-game">
                                <picture className="image">
                                    <img
                                        src="../../../Downloads/saveweb2zip-com-1wbrz-top/1ZDpfma2utCg.top/uploads/slot-logo/mbl_deadoralive2fb.jpg"
                                        loading="lazy"/>
                                </picture>
                            </div>
                            <div className="info">
                                <div className="name">Dead or Alive 2 Feature Buy</div>
                            </div>
                        </div>
                        <div className="home-offers-section-list-item js-show-auth-mobile">
                            <div className="home-offers-game">
                                <picture className="image">
                                    <img
                                        src="../../../Downloads/saveweb2zip-com-1wbrz-top/1ZDpfma2utCg.top/uploads/slot-logo/gonzosquest.jpg"
                                        loading="lazy"/>
                                </picture>
                            </div>
                            <div className="info">
                                <div className="name">Gonzo&prime;s Quest</div>
                            </div>
                        </div>
                        <div className="home-offers-section-list-item js-show-auth-mobile">
                            <div className="home-offers-game">
                                <picture className="image">
                                    <img
                                        src="../../../Downloads/saveweb2zip-com-1wbrz-top/1ZDpfma2utCg.top/uploads/slot-logo/mbl_bookofradeluxe10.jpg"
                                        loading="lazy"/>
                                </picture>
                            </div>
                            <div className="info">
                                <div className="name">BOOK OF RA™ DELUXE 10</div>
                            </div>
                        </div>
                        <div className="home-offers-section-list-item js-show-auth-mobile">
                            <div className="home-offers-game">
                                <picture className="image">
                                    <img
                                        src="../../../Downloads/saveweb2zip-com-1wbrz-top/1ZDpfma2utCg.top/uploads/slot-logo/mbl_scruffyduck.jpg"
                                        loading="lazy"/>
                                </picture>
                            </div>
                            <div className="info">
                                <div className="name">Scruffy Duck</div>
                            </div>
                        </div>
                        <div className="home-offers-section-list-item js-show-auth-mobile">
                            <div className="home-offers-game">
                                <picture className="image">
                                    <img
                                        src="../../../Downloads/saveweb2zip-com-1wbrz-top/1ZDpfma2utCg.top/uploads/slot-logo/mbl_invisibleman.jpg"
                                        loading="lazy"/>
                                </picture>
                            </div>
                            <div className="info">
                                <div className="name">Invisible Man</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home_content">
                <h1>1 Вин ставки на спорт</h1>
                <p>Общеизвестная игровая веб платформа 1 Вин ставки на спорт предлагает геймерам из разных стран.
                    Основалась
                    компания в 2018 году под названием FirstBet. Подтверждает законный статус лицензия, выданная
                    комиссией
                    острова Кюрасао. Для русскоязычных пользователей в БК 1 Win ставки на спорт затруднены из-за
                    блокирования
                    государственными органами азартного контента. Для того чтобы нивелировать запрет, необходимо
                    применять
                    специальные программы, разыскивать зеркальные ресурсы.</p>
                <p>В числе конкурентноспособных преимуществ площадки 1Win ставки на спорт и киберспорт, огромный
                    ассортимент
                    развлекательных предложений и политика бонусных поощрений. Кроме того, гости имеют возможность
                    посетить
                    онлайн casino, стать участником турнира по покеру, открыть кейс с солидным (50 тысяч рублей)
                    призом.</p>
                <h2>Этапы регистрации на портале БК 1 Вин</h2>
                <p>Для пользователей из �&nbsp;оссийской Федерации и стран СНГ, букмекер 1 Вин ставки на спорт
                    предлагает
                    после регистрации, которая происходит 2 способами: обычный и с использованием уже созданного
                    учетного
                    профиля в популярных социальных площадках. Процедура активации профиля предполагает обычные для
                    большинства
                    БК шаги. От новичка потребуется только правильное написание регистрационных полей и 5-7 минут
                    времени.</p>
                <h3>Правила регистрация и вход на сайт 1Win</h3>
                <p>Войти в аккаунт на интернет-ресурсе и делать в БК 1 Вин ставки на спорт удастся после окончания
                    регистрационной процедуры. Создание нового аккаунта  простой механизм, не вызывающий
                    сложностей.</p>
                <p>Пошаговая инструкция по входу на портал через соцсети:</p>
                <ol>
                    <li>Зайти на основную страницу БК 1 Вин во всемирной сети.</li>
                    <li>Кликнуть по кнопке с надписью &quot;Р&nbsp;егистрация&quot;.</li>
                    <li>Определиться с методом: с авторизацией через соцсети.</li>
                    <li>Авторизоваться в аккаунте в любой социальной платформе: Телеграмм, Yandex, Mail, Google, ВК,
                        ОК.
                    </li>
                    <li>Определить основную валюту.</li>
                    <li>Дать согласие соблюдать правила ресурса.</li>
                    <li>Завершить процедуру.</li>
                </ol>
                <p>Ускоренная регистрация в букмекерской конторе 1 Вин ставки на спорт делает удобнее:</p>
                <ol>
                    <li>Открыть веб-сайт 1 Вин.</li>
                    <li>Кликнуть вверху надпись ��&nbsp;егистрация�  �Быстрая�.</li>
                    <li>Определить игровую валюту.</li>
                    <li>Ввести номер мобильного и email ящика.</li>
                    <li>Придумать password.</li>
                    <li>Согласиться с правилами.</li>
                </ol>
                <p>Промокод в бланке для регистрации указывается по желанию. Промокод дает право на получение
                    приветственного
                    бонуса. �&nbsp;абочие промокоды расположены на официальном ресурсе БК, направляются на адрес email
                    почты
                    клиентам, которые заказали подписку на новости платформы.</p>
                <h3>Способы входа в личный кабинет беттора 1 Win</h3>
                <p>Каждому авторизованному беттору в БК 1 Вин ставки на спорт предлагается заключать в персональном
                    кабинете
                    на главном портале. Персональная страница клиента аккумулирует только конфиденциальные данные
                    посетителя и
                    дает возможность применять всю ресурсную базу.</p>
                <p>В персональный кабинет включены такие рубрики:</p>
                <ol>
                    <li>Финансовые операции (ввод и вывод денег). Меню для оформления финансовых переводов.</li>
                    <li>История ставок. Здесь опубликована статистика по оформленным пари за период времени.</li>
                    <li>Настройки. Подкатегория для внесения изменений в конфиденциальные данные пользователя учетной
                        карточки.
                    </li>
                    <li>Ваучер. Категория для активации и учета подарочных фрибетов и других подарков, которые
                        предоставляются в
                        случае предъявления секретного кода и подлежат отыгрышу в соответствии с внутренним распорядком
                        БК.
                    </li>
                    <li>Детализация. Содержит данные по движению денежных потоков в границах аккаунта.</li>
                </ol>
                <p>Поскольку виртуальная букмекерская контора 1 Вин ставки на спорт принимает по лицензии иностранного
                    регулятора, требования российской юрисдикции на нее оказывают влияния. Посетители платформы не
                    проходят
                    идентификацию личности посредством Единого ЦУПИС и не обязаны платить подоходный налог со своих
                    призовых.</p>
                <h2>Коэффициенты и линии событий</h2>
                <p>Игроки с опытом считают, что на официальном сайте 1 Win ставки на спорт наиболее популярные и
                    прибыльные.
                    Высокие коэффициенты на большую часть пари дают возможность прокачать банк быстро с минимальными
                    вложениями.
                    Линия, особенно категории Live, насыщена событиями сполна.</p>
                <p>Контора 1 Вин ставки на спорт принимает на 21 вид спорта и категории киберспорта. Это классические
                    дисциплины  football, хоккей, баскетбол и редкие малоизвестные спортивные развлечения (kabaddi -
                    командные
                    тактические соревнования с элементами борьбы, флорбол - тип хоккея с мячом). Букмекер 1Win в
                    категории
                    �Киберспорт� предлагает делать ставки такие спорт бестселлеры как: Counter-Strike, Дота 2, LOL.</p>
                <p>На веб-ресурсе букмекера создана система ускоренного поиска по событию, разделу, спортивной
                    дисциплине.
                    Знаковые мероприятия выделены пиктограммой с изображением пламени. Для прошедших авторизацию
                    клиентов
                    функционирует матч-центр с экспертными мнениями, детальной статистикой, и расписанием прямых
                    трансляций.</p>
                <h2>1 Win ставки на спорт</h2>
                <p>В букмекерской конторе 1 Вин ставки на спорт размещаются максимально просто и интуитивно понятно.
                    Клиент
                    следит за информацией на мониторе и следует предложенным инструкциям.</p>
                <p>Алгоритм действий при денежных ставках на спорт на официальном сайте 1Win:</p>
                <ol>
                    <li>Пройти регистрацию.</li>
                    <li>Зайти на свою персональную страницу (ЛК).</li>
                    <li>Пополнить игровой счет (достаточно минимальной суммы).</li>
                    <li>Избрать событие и исход в ряду.</li>
                    <li>Оплатить размер ставки в купоне.</li>
                    <li>Подтвердить правомочность своего решения.</li>
                </ol>
                <p>�&nbsp;асчет выигрыша формируется за считанные секунды после окончания события. Итоги спортивных пари
                    сразу
                    же отображаются в купоне. Букмекер поддерживает равный подход ко всей клиентской базе, соблюдение
                    установленных правил и быструю выдачу выигрышных денег, независимо от суммы.</p>
                <h2>Как проходят финансовые транзакции в БК 1 Вин</h2>
                <p>БК 1 Вин ставки на спорт предлагает посетителям после внесения средств на счет. Предусмотрено
                    несколько
                    распространенных вариантов пополнения счета. Один раз избранный оператор, в последствии, применяется
                    для
                    выплаты призовых.</p>
                <p>В список предлагаемых финансовых инструментов входят:</p>
                <ul>
                    <li>виртуальные платежные системы: WebMoney, AdvCash, Яндекс. Деньги, Киви;</li>
                    <li>карты банков Виза и Мастеркард;</li>
                    <li>платежи через терминалы мобильных операторов или с баланса телефона;</li>
                </ul>
                <p>Выведенные деньги в банк прибывают мгновенно, и БК 1Win ставки на спорт принимает без ограничений.
                    Минимальная сумма для взноса и вывода не превышает сто рублей. Максимум для одного перевода
                    определяет
                    платежный оператор. Так, на банковские карты позволено пересылать не более 75 000 рублей, на
                    кошельки
                    электронных систем  в пределах 15 000 руб. Комиссия за выплату со стороны БК отсутствует. Однако,
                    оператор
                    перевода вполне может взыскивать часть суммы за свои услуги. �&nbsp;азмер комиссии следует узнавать
                    заблаговременно.</p>
                <h3>Как проводится вывод денежных средств</h3>
                <p>Посетители после того, как в БК 1 Вин ставки на спорт заключены и рассчитаны, создают заявку на
                    выплату в
                    персональном кабинете, в компьютерной программе и в мобильном софте для телефонов. Выплаты на сайте
                    и в
                    программе для ПК проводятся по единому алгоритму:</p>
                <ol>
                    <li>Заход на сайт и авторизация в учетной записи.</li>
                    <li>Переход во вкладку &quot;Вывод средств&quot;.</li>
                    <li>Выбор привычного платёжного способа, ввод суммы и своих финансовых реквизитов.</li>
                    <li>Клик по надписи &quot;Вывести&quot;.</li>
                </ol>
                <p>Скачать приложение на мобилу и заключать в БК 1 Вин ставки на спорт клиенты могут на страницах
                    портала.
                    Вывод денег в телефоне требует исполнения простых шагов:</p>
                <ol>
                    <li>Заход в свой профиль.</li>
                    <li>Переход во вкладку &quot;Вывести&quot;.</li>
                    <li>Выбор подходящего метода для вывода, ввод денежной суммы и реквизитов кредитки либо кошелька.
                    </li>
                    <li>Клик по надписи &quot;Продолжить&quot;.</li>
                </ol>
                <p>Узнать детали заявки на вывод легко можно на вкладке &quot;Детализация&quot;.</p>
                <h3>Пределы лимитов на выведение средств</h3>
                <p>Букмекерская контора 1 Вин ставки на спорт рассчитывает и разрешает выводить средства с некоторыми
                    лимитами. Зависят они от определенного метода:</p>
                <ul>
                    <li>банковские карты  от 1500 до 50 тысяч;</li>
                    <li>электронные кошельки Яндекс. Деньги, Киви  от 3 до 15 тысяч;</li>
                    <li>кошельки FKWallet  от 1,5 до 100 тысяч рублей;</li>
                </ul>
                <p>Лимиты на крипту зависят от вида токена и его текущего курса к рублю.</p>
                <h3>Как быстро поступают на карту деньги</h3>
                <p>По условиям букмекера 1 Вин ставки на спорт и заявки на выплату рассматриваются не более одних суток.
                    При
                    желании вывода на карты банков, время вывода может удлиняться до 2 дней. В случаях, когда БК просит
                    клиента
                    пройти верификацию, срок одобрения заявки становится больше.</p>
                <h3>Налогообложение и комиссионные сборы</h3>
                <p>Букмекерская контора 1Win не занимается налогообложением пользователей. Пользователи, проживающие в
                    �&nbsp;оссийской Федерации, обязаны сами заниматься подачей декларации и вносить 13% от прибыли,
                    полученной
                    в процессе игры. Согласно текущему налоговому кодексу �&nbsp;Ф, налогом не облагается прибыль до
                    4000 рублей
                    в год.</p>
                <p>В букмекерской конторе 1 Вин ставки на спорт и выплаты происходят без комиссий. Но нередко их взимают
                    некоторые банки-эмитенты.</p>
                <h3>Главные особенности выплат в букмекерской конторе 1 Вин</h3>
                <p>Перед тем как в БК 1 Вин ставки на спорт будут сделаны, членам конторы нужно изучить основные
                    тонкости
                    выплаты средств.</p>
                <ol>
                    <li>До итогового создания заявки на выплату требуется выставить сумму крайнего перевода в полном
                        объёме с
                        множителем не ниже 1,10.
                    </li>
                    <li>Букмекер вправе попросить клиента пройти подтверждение особы. Обычно это происходит при выводе
                        внушительных денежных сумм либо при возникновении подозрений в нарушении условий сотрудничества.
                    </li>
                    <li>Вывод делается на банковские карты и кошельки международных платежных систем, оформленные на те
                        же
                        данные, что и аккаунт на сайте букмекера.
                    </li>
                </ol>
                <h3>Почему выигрышные средства невозможно вывести</h3>
                <p>Иногда при выводе у бетторов образуются трудности, которые не дают закончить перевод. �&nbsp;ешить их
                    достаточно просто.</p>
                <p>Оценим самые распространенные проблемы, когда в БК 1 Вин ставки на спорт выигрывают, но выигрыш не
                    получается забрать, и способы их нивелирования:</p>
                <ol>
                    <li>БК 1Win закрыла вывод ввиду малой активности игрока. Проставьте сумму крайнего депозита с
                        коэффициентом
                        не менее 1,10.
                    </li>
                    <li>Процесс выплат на чужую карточку остановлен. Следует подать запрос на карту, оформленную только
                        на
                        вас.
                    </li>
                    <li>Пришла заявка на верификационную процедуру. Отправьте на адрес электронной почты букмекера
                        запрошенные
                        документы.
                    </li>
                    <li>Вписанная сумма не вписывается в границы лимита. Впишите иной размер выплаты или подберите
                        другой способ
                        осуществления транзакции.
                    </li>
                </ol>
                <p>При появлении трудностей, затрагивающих вывод 1 Вин, проконсультируйтесь с специалистами, направив
                    свой
                    вопрос в онлайн-чат на основном портале.</p>
                <h2>Как обойти блокирование ресурса</h2>
                <p>Деятельность букмекеров из-за рубежа в русскоязычном российском интернете находится под запретом
                    законодательства. В букмекерской конторе 1 Вин ставки на спорт, даже не беря во внимание имеющуюся
                    лицензию,
                    периодически запрещаются органами надзора. Это факт уменьшает шансы бетторов, находящихся на
                    территории
                    �&nbsp;оссии, посещать сайты, заключать пари в надежных конторах по всем регионам. Для обхода
                    запрета,
                    разработано несколько актуальных методов, которые постоянно используют бетторы с опытом.</p>
                <h3>Где отыскать ссылку на зеркало БК 1 Вин</h3>
                <p>При трудностях с входом в портал 1Win, посетители разыскивают действующее зеркало конторы. Это
                    обычный
                    сайт, по структуре и опциям повторяющий официальный ресурс, но с другим доменом. Букмекеры, которые
                    не
                    входят в перечень законных на интернет-просторах �&nbsp;оссийской Федерации, создали сайты-клоны,
                    что
                    позволяет выдать клиентам постоянный и надежный доступ к личному кабинету. В компании 1 Вин ставки
                    на спорт
                    осуществляются также.</p>
                <p>Найти зеркальный ресурс 1 Вин удастся несколькими методами:</p>
                <ol>
                    <li>Поиск сайтов, где часто выкладываются ссылки на рабочие зеркальные сайты.</li>
                    <li>Обращение к консультантам компании по телефонному номеру или ящик e-mail почте.</li>
                    <li>Слежение за группой БК в соцсетях.</li>
                    <li>Подключение прог-м VPN, позволяющих изменить IP адрес, а следовательно, и локацию входа.</li>
                </ol>
                <p>Внимание! Самостоятельный метод достаточно рискованный. Мошенники могут предлагать URL-ссылки,
                    предназначенные для кражи денег, переводимых в качестве пополнения депозита в контору.</p>
                <h3>Особенности использования зеркала виртуального букмекера 1 Вин</h3>
                <p>Доступ к аккаунту в режиме 24/7 без проблем и выгодные в БК 1 Вин ставки на спорт предлагает
                    актуальное
                    зеркало 1 Вин, характеризующееся такими свойствами:</p>
                <ol>
                    <li>�&nbsp;оспись и линия полностью аналогичны тем, что имеются на основном веб-сайте.</li>
                    <li>Целостность баланса и истории пользовательского счета при входе в личный кабинет с различных
                        зеркальных
                        сайтов.
                    </li>
                    <li>При блокировке одного клонированного сайта-зеркала пользователь без сложностей найдет
                        аналогичные
                        клоны-порталы.
                    </li>
                    <li>Высокая степень безопасности и надежность хранения личных данных.</li>
                </ol>
                <p>Положить депозит и обналичить свои выигрыши просто  для этого доступны все финансово-платежные
                    системы,
                    имеющиеся на главном веб-сайте.</p>
                <p>Поклонники спртивных и киберспортивных ставок, которые предпочитают зеркальные сайты могут быть на
                    100%
                    убеждены в безопасном игровом процессе, и не думать о том, что столкнутся с мошенниками. Все
                    проблемные
                    ситуации, относящиеся к процессу игры, в рабочем режиме разбираются при обращении в службу
                    саппорта.</p>
                <p>Но всё это выполняется только в моментах, когда в БК 1 Вин ставки на спорт проводятся на основном
                    зеркале.
                    Это значит, желательно подробно ознакомиться с интерфейсом изучаемого ресурса. В случае если он даже
                    минимально отличается от официального ресурса, откажитесь от использования. Спрашивайте url-адреса
                    зеркального портала у букмекера в представительских профилях социальных сетей, отправив запрос на
                    почтовый
                    ящик БК или обратившись в онлайн-чат и попросив прислать ссылку на зеркало 1Win.</p>
                <h3>Иные способы ухода от блокирования 1 Вин</h3>
                <p>Запасные способы входа на сайт, подвергшийся блокировке:</p>
                <ol>
                    <li>Собственное мобильное приложение конторы. Это прога, которая устанавливается в память или на
                        рабочий
                        стол любого устройства и позволяет посещать личный кабинет, игнорируя браузер. Загрузка проходит
                        бесплатно
                        с официального сайта букмекера. Управление и функционал программы не отличается от основного
                        ресурса.
                    </li>
                    <li>ВПН, proxy сервера. Технологии кодирования информации, дающие возможность спрятать настоящий
                        номер IP
                        клиента и имитировать заход в сеть интернет из другой страны.
                    </li>
                </ol>
                <h2>Бонусы при ставках на спорт в 1Win</h2>
                <p>Виртуальная букмекерская контора 1 Вин ставки на спорт предлагает огромной по охвату целевой
                    аудитории.
                    Движущий фактор в маркетинговой стратегии работы  эксклюзивная бонусная программа. БК выдает
                    солидный пакет
                    презентов новичкам и опытным посетителям площадки. Постоянно функционируют предложения, которых нет
                    ни у
                    кого. Это приветственный бонус, вознаграждение за ставки по типу �экспресс�.</p>
                <h3>Первоначальный бонус за прохождение регистрации 1 Вин</h3>
                <p>Новые клиенты - в приоритете! Данное высказывание подходит для прошедших регистрацию игроков 1 Вин.
                    Заведение предоставляет эксклюзивный презент новым клиентам  500% к первоначальному депозиту. Для
                    получения
                    подарка понадобится заранее пройти регистрацию на веб-сайте и пополнить депозитный счет суммой не
                    более 15
                    тысяч рублей, одним платежом. Подаренная сумма плюс 500 процентов к взносу будет на бонусном счету
                    автоматически. Максимальный лимит подарка  75 000 руб.</p>
                <p>Для того чтобы в БК 1 Вин ставки на спорт гарантировали бонусный выигрыш требуется отыгрыш.
                    Учитываются
                    сыгравшие ординарные пари с коэффициентом до трех. Если ставка сыграла деньги со счета для бонусов
                    переведутся на основной и моментально станут доступны для дальнейших ставок или вывода. Если же по
                    ставке
                    был сделан возврат или коэффициент составил меньше 3  они в зачет отыгрыша не принимаются.</p>
                <p>Такая опция дается только новым клиентам БК, не имеющим профиля на площадке. БК Букмекер может
                    попросить
                    документы, подтверждающие особу игрока, в любой момент, пока функционирует акция и отвести
                    пользователя от
                    участия в ней.</p>
                <h3>Другие бонусные предложения букмекера 1 Вин</h3>
                <p>Пользователи нередко отмечают разовые акции:</p>
                <ol>
                    <li>Денежные подарки и free спины за принятие участия в платном формате игр казино.</li>
                    <li>Поощрения за лидирующие позиции в акциях спонсоров, турнирах, тематических лотереях.</li>
                    <li>Награда за установку мобильного приложения  5 тысяч рублей при первом входе.</li>
                </ol>
                <h3>Презент на экспресс пари</h3>
                <p>БК 1 Вин ставки на спорт вида �Экспресс� всегда поощряет подарком. К выигрышу пользователя плюсуется
                    от 7%
                    до 15%, если в карточке отмечалось более 5 мероприятий с коэффициентом от 1,3. Чем больше отмечено
                    событий,
                    тем больший процентный показатель бонуса.</p>
                <h3>Программа лояльности</h3>
                <p>Для преданных клиентов портала, которые долго и часто играют и делают много ставок, существует
                    программа
                    лояльности. В пределах установленных правил беттор зарабатывает игровые монеты  coins, которые
                    позже
                    предлагается обменивать на настоящие деньги по внутреннему курсу платформы. Игровые деньги поступают
                    за
                    букмекерские ставки, независимо от исхода события, и участие в спинах казино, кроме игр с живым
                    крупье,
                    рулетки и блэкджек.</p>
                <h2>1 Вин ставки на спорт со смартфонов и саппорт</h2>
                <p>Мобильные ресурсы  немаловажное правило для отличного беттинга. Перестроенная под мобилки версия
                    сайта
                    открывается в самом браузере и позволяет ставить на спорт без использования домашнего ПК.
                    �&nbsp;азработанное программное обеспечение БК 1 Вин скачивается на рабочий стол и запускается
                    самостоятельно.</p>
                <p>Использование приложения 1 Вин ставки на спорт делает еще более удобными и плюсовыми:</p>
                <ol>
                    <li>После стартовой авторизации в приложении каждый пользователь получает бонус 5 тысяч руб.</li>
                    <li>Программа подходит для различных марок устройств, совместима с устройствами андроид и айфон.
                    </li>
                    <li>Наличие приложения гарантирует свободный доступ на веб-ресурс в режиме 24/7, освобождает от
                        потребности
                        поиска рабочих зеркал в момент блокирования официального домена.
                    </li>
                    <li>Прога занимает немного места в памяти, отличается высокой скоростью соединения даже при не
                        стабильном
                        сигнале.
                    </li>
                </ol>
                <p>Служба техподдержки букмекера 1 Вин предоставляет помощь целые сутки. В область обязанностей
                    операторов
                    саппорта включены такие услуги: устранение технических проблем, оказание помощи по проблемам
                    функционирования веб-портала, информирование по исполнению запросов на обналичивание заработанных
                    денег. В
                    качестве каналов для обратной связи используется: горячая линия, онлайн-чат на сайте, ящик
                    электронной
                    почты.</p>
                <h2>Плюсы и минусы БК 1 Вин</h2>
                <p>По совокупности всех факторов, сайт БК 1Win ставки на спорт предлагает всем взрослым гостям
                    круглосуточно с
                    любого мобильного устройства. Веб-сайт объединяет в себе опции спортивного букмекера и
                    онлайн-казино,
                    работает по лицензии легально, обеспечивает честные розыгрыши и мгновенный вывод средств. Портал
                    предлагает
                    обширную роспись исходов и множители выше средних по рынку. Новые клиенты имеют шанс получить
                    начальный
                    презент, а регуляры участвуют в акциях и турнирах с солидным и ценным фондом. Еще одним плюсом для
                    россиян
                    считается отсутствие налогов на выигрыши.</p>
                <p>Из минусов, пользователи выделяют только небольшие сложности с доступом на сайт, в период блокировки
                    основного домена. �&nbsp;ешение этой проблемы давно найдено. Достаточно включать ВПН соединение при
                    входе на
                    портал или бесплатно загрузить на смартфон мобильный софт, и тогда букмекер 1 Вин ставки на спорт
                    сделает
                    азартнее, интереснее и прибыльнее.</p></div>

            <footer>
                <div className="footer-logo">
                    <a href="/" className="logo">
                        <svg viewBox="0 0 970 493" style={{width: '62px'}}>
                            <use src="static/home/img/svg-sprite.svg#ico-logo"></use>
                        </svg>
                    </a>
                    <div className="footer-logo-line"></div>
                </div>
                <div className="footer-menu">
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <div className="footer-menu-title">Информация</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="footer-col">
                                    <a href="/about" className="">О нас</a>
                                    <a href="/security" className="">Конфиденциальность</a>
                                    <a href="/responsible" className="">Ответственная игра</a>
                                    <a href="/agreement" className="">Положения</a>
                                    <a href="https://inkeytarowetrust.ru/bPzvkk" className="">Партнерская программа</a>
                                    <a href="/support/faq" className="">FAQ</a>
                                    <a href="/avoid_blocking" className="">Обход блокировок</a>
                                    <a href="/support" className="">Поддержка</a>
                                    <a href="/sitemap" className="">Карта сайта</a>
                                    <a href="/go/default" className="">Вулкан официальный сайт</a>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="footer-separator"></div>
                <div className="footer-apps">
                    <div className="footer-apps-item" onClick="popup_show('go_auth',{tab: 'registration'})">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 23" className="icon"
                             style={{fontSize: '23px', width: '27px'}}>
                            <path
                                d="M15.86 11.93c-.01-1.85.827-3.246 2.52-4.275-.947-1.355-2.379-2.101-4.269-2.247-1.789-.141-3.744 1.043-4.46 1.043-.756 0-2.49-.993-3.85-.993C2.989 5.503 0 7.701 0 12.171c0 1.32.242 2.686.726 4.092.645 1.85 2.973 6.386 5.402 6.31 1.27-.03 2.167-.902 3.82-.902 1.603 0 2.435.902 3.85.902 2.45-.035 4.557-4.158 5.172-6.012-3.286-1.547-3.11-4.536-3.11-4.632zm-2.852-8.276C14.384 2.02 14.258.534 14.218 0c-1.215.07-2.621.827-3.423 1.759-.882.998-1.4 2.233-1.29 3.623 1.315.101 2.515-.574 3.503-1.728z"></path>
                        </svg>
                        <div className="footer-apps-item-txt">
                            <div className="footer-apps-item-txt1">Приложение</div>
                            <div className="footer-apps-item-txt2">для iOS</div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" className="icon icon-arr-right"
                             style={{fontSize: '7px'}}>
                            <path
                                d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path>
                        </svg>
                    </div>
                    <div className="footer-apps-item" onClick="popup_show('go_auth',{tab: 'registration'})">
                        <svg viewBox="0 0 27 23" fill="none" color="#61DA84" xmlns="http://www.w3.org/2000/svg"
                             className="icon"
                             style={{fontSize: '23px', width: '27px'}}>
                            <path
                                d="M1.883 19.019c-.928 0-1.883.726-1.883 1.997 0 1.162.84 1.982 1.883 1.982.861 0 1.245-.564 1.245-.564v.246c0 .116.113.246.252.246h.623v-3.82h-.875v.485s-.387-.572-1.245-.572zm.156.781c.764 0 1.165.656 1.165 1.215 0 .624-.476 1.215-1.164 1.216-.574 0-1.15-.455-1.15-1.224 0-.694.495-1.207 1.149-1.207zM5.218 22.927c-.135 0-.252-.094-.252-.246v-3.574h.875v.473c.198-.291.585-.561 1.18-.561.971 0 1.488.756 1.488 1.463v2.445h-.607a.265.265 0 01-.267-.26V20.67c0-.392-.246-.868-.815-.868-.614 0-.98.566-.98 1.1v2.025h-.622zM11.062 19.022c-.928 0-1.883.726-1.883 1.996 0 1.162.84 1.983 1.883 1.983.861 0 1.245-.565 1.245-.565v.246c0 .117.113.246.252.246h.623v-5.73h-.875v2.395s-.387-.571-1.245-.571zm.156.78c.764 0 1.165.657 1.165 1.216 0 .623-.476 1.215-1.164 1.215-.574 0-1.15-.454-1.15-1.223 0-.694.495-1.207 1.149-1.207zM14.396 22.924c-.135 0-.252-.094-.252-.246v-3.574h.874v.637c.15-.357.476-.68 1.053-.68.16 0 .311.029.311.029v.882s-.188-.072-.415-.072c-.614 0-.949.566-.949 1.099v1.925h-.622zM21.69 22.928c-.135 0-.253-.094-.253-.246v-3.574h.875v3.82h-.622zM24.88 19.022c-.929 0-1.883.726-1.883 1.996 0 1.162.84 1.983 1.883 1.983.861 0 1.245-.565 1.245-.565v.246c0 .117.113.246.252.246H27v-5.73h-.875v2.395s-.387-.571-1.245-.571zm.156.78c.764 0 1.165.657 1.165 1.216 0 .623-.476 1.215-1.164 1.215-.575 0-1.15-.454-1.15-1.223 0-.694.495-1.207 1.149-1.207zM21.87 18.282c.319 0 .578-.252.578-.564a.572.572 0 00-.579-.565.572.572 0 00-.578.565c0 .312.259.564.578.564zM18.69 19.019c-.971 0-2.04.708-2.04 1.991 0 1.17.91 1.99 2.039 1.99 1.39 0 2.07-1.091 2.07-1.982 0-1.093-.875-1.999-2.068-1.999zm.004.797c.672 0 1.174.53 1.174 1.197 0 .679-.532 1.203-1.172 1.203-.594 0-1.17-.471-1.17-1.192 0-.732.548-1.208 1.168-1.208zM20.086 4.449L22.325.665A.438.438 0 0022.16.06a.455.455 0 00-.617.16l-2.267 3.833c-1.73-.77-3.678-1.2-5.772-1.2-2.094 0-4.042.43-5.772 1.2L5.465.221a.458.458 0 00-.62-.16.436.436 0 00-.164.604L6.919 4.45A13.03 13.03 0 00.013 14.765h26.982A13.026 13.026 0 0020.086 4.45zM7.31 11.068c-.625 0-1.13-.496-1.13-1.104 0-.61.508-1.104 1.13-1.104.626 0 1.131.496 1.131 1.104.003.608-.505 1.104-1.13 1.104zm12.387 0c-.626 0-1.131-.496-1.131-1.104 0-.61.508-1.104 1.13-1.104.626 0 1.132.496 1.132 1.104.002.608-.506 1.104-1.131 1.104z"
                                fill="currentColor"></path>
                        </svg>
                        <div className="footer-apps-item-txt">
                            <div className="footer-apps-item-txt1">Приложение</div>
                            <div className="footer-apps-item-txt2">для Android</div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" className="icon icon-arr-right"
                             style={{fontSize: '7px'}}>
                            <path
                                d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path>
                        </svg>
                    </div>
                </div>
                <div className="footer-support">
                    <div className="footer-support-txt">
                        <div className="footer-support-txt1"><span>Поддержка 24/7</span></div>
                        <div className="footer-support-txt2"> Напишите, если у Вас остались вопросы!</div>
                    </div>
                    <div className="footer-support-actions" onClick="popup_show('go_auth',{tab: 'registration'})">
                        <div className="footer-support-actions-chat">Чат</div>
                        <div className="footer-support-actions-tel">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon"
                                 style={{fontSize: '10px'}}>
                                <path
                                    d="M497.39 361.8l-112-48a24 24 0 00-28 6.9l-49.6 60.6A370.66 370.66 0 01130.6 204.11l60.6-49.6a23.94 23.94 0 006.9-28l-48-112A24.16 24.16 0 00122.6.61l-104 24A24 24 0 000 48c0 256.5 207.9 464 464 464a24 24 0 0023.4-18.6l24-104a24.29 24.29 0 00-14.01-27.6z"></path>
                            </svg>
                        </div>
                    </div>
                    <button className="footer-support-actions-arr"
                            onClick="popup_show('go_auth',{tab: 'registration'})">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="icon"
                             style={{height: '10px'}}>
                            <path
                                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                        </svg>
                    </button>
                </div>
                <div className="footer-sport-row">
                    <svg viewBox="0 0 61 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon"
                         style={{fontSize: '15px'}}>
                        <path
                            d="M59.371 13.482A40.604 40.604 0 0046.091 4.5a40.74 40.74 0 00-15.733-3.133 40.73 40.73 0 00-15.732 3.132 40.61 40.61 0 00-13.28 8.98l-.987-.951a42 42 0 0113.734-9.283A42.12 42.12 0 0130.358 0c5.764 0 11.26 1.155 16.267 3.247a41.968 41.968 0 0113.734 9.284l-.988.95zM47.63 24.99a23.501 23.501 0 00-7.848-5.574 23.545 23.545 0 00-9.427-1.953c-3.358 0-6.549.7-9.433 1.956A23.48 23.48 0 0013.072 25l-1.019-.925a24.861 24.861 0 018.314-5.905 24.913 24.913 0 019.988-2.074c3.548 0 6.926.74 9.98 2.07a24.844 24.844 0 018.307 5.9l-1.012.924z"
                            fill="#fff"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M11.16 9.498l3.003 3.85c1.753 2.248.813 4.207-1.066 5.645-1.988 1.523-4.14 1.706-5.777-.392l-3.01-3.86 1.707-1.307 3.042 3.899c.76.975 1.932 1.016 2.916.263.905-.692 1.374-1.798.427-3.01l-2.949-3.78 1.707-1.308zm16.707 3.386l-6.242 1.324-1.815-8.383 6.157-1.305.332 1.536-4.046.857.38 1.759 3.86-.818.333 1.535-3.86.819.435 2.017 4.134-.877.332 1.536zm12.741-5.7l-3.738-.721-.369 1.875 3.738.72-.301 1.543-3.739-.72-.677 3.455-2.12-.406 1.651-8.417L40.91 5.64l-.302 1.543zm9.37 8.924l-2.19-1.504 2.96-2.022-.77 3.526zm2.95-4.521l-2.054-1.412-7.801 5.076 1.877 1.29 1.507-1.03 3.182 2.185-.391 1.796 1.908 1.312 1.772-9.217z"
                              fill="#fff"></path>
                    </svg>
                    <svg viewBox="0 0 74 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon"
                         style={{fontSize: '15px'}}>
                        <g clip-path="url(#ufc_svg__clip0)" fill="#FA4031">
                            <path
                                d="M6.013.307H15.4l-4.926 16.562c-.346 1.162.388 2.12 1.596 2.12 1.209 0 2.454-.958 2.799-2.12L19.795.307h8.324L22.43 21.479c-.502 1.867-2.497 3.396-4.433 3.396H3.596c-2.3 0-3.696-1.816-3.1-4.037L6.014.307zM38.56 9.354h9.639l-1.751 5.735h-9.643l-2.677 9.786h-9.062l4.431-15.52h9.063zM57.315.058h12.259c1.793 0 4.837 1.437 4.214 3.722l-.245.9h-10.94c-.562 0-1.147.45-1.298 1l-3.4 12.313c-.152.55.183 1 .745 1h10.99l-.797 2.922C68.38 23.608 66.563 25 64.77 25H51.828c-2.28 0-3.682-1.767-3.114-3.925l4.774-18.118c.42-1.594 2.142-2.899 3.827-2.899zM49.166 6.007h-9.62l-.004.017h-9.063L32.224 0h18.679l-1.736 6.007z"></path>
                        </g>
                        <defs>
                            <clipPath id="ufc_svg__clip0">
                                <path fill="#fff" transform="translate(.359)" d="M0 0h73.512v25H0z"></path>
                            </clipPath>
                        </defs>
                    </svg>
                    <svg viewBox="0 0 34 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon"
                         style={{fontSize: '15px'}}>
                        <g clip-path="url(#wta_svg__clip0)">
                            <path
                                d="M27.193 15.161c0 .593-.482 1.074-1.077 1.074s-1.077-.481-1.077-1.074c0-.592.482-1.073 1.077-1.073s1.077.48 1.077 1.073z"
                                fill="#F3ED0E"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M1.642 11.096c1.81-3.94 5.946-7.423 11.062-9.318C15.327.808 18.102.294 20.727.294c5.82 0 10.408 2.445 11.974 6.381.886 2.226.746 4.726-.405 7.23-1.811 3.94-5.946 7.423-11.062 9.316-2.624.972-5.398 1.485-8.024 1.485-5.82 0-10.407-2.445-11.973-6.38-.886-2.227-.746-4.726.405-7.23zm20.767-2.315c.545.027.951.387.951.921 0 .533-.424.921-.96.936a2.119 2.119 0 01-.174.005h-2.47v4.42l-.007.149c-.022.556-.403.981-.96.981-.538 0-.96-.437-.976-.98l-.007-.142V10.64h-2.47s-2.121 4.634-2.188 4.767c-.062.122-.117.22-.145.26-.22.32-.418.524-.83.524-.397 0-.636-.202-.827-.518a3.38 3.38 0 01-.133-.236c-.035-.07-1.567-3.426-1.567-3.426l-1.506 3.3s-.096.212-.147.3c-.227.392-.523.58-.887.58-.351 0-.65-.204-.86-.577l-.012-.022c-.039-.069-.079-.139-.117-.224l-1.198-2.61-1.118-2.436c-.04-.088-.05-.112-.067-.155l-.002-.005c-.198-.49-.083-.778.002-.923.17-.288.5-.486.851-.466.48.026.727.292.935.73l.071.134 1.514 3.305S8.56 9.755 8.615 9.64l.095-.191c.275-.53.57-.677.934-.677.39 0 .696.203.94.697 0 0 .05.094.1.207l1.49 3.268 1.589-3.475s.036-.083.095-.182a.908.908 0 01.828-.513h.008c.065-.002.088-.002.212-.002h7.32a1.694 1.694 0 01.183.01zm7.612 5.695l.06.108.002.003c.123.223.233.423.233.662 0 .534-.422.94-.956.94-.352 0-.653-.213-.875-.553l-.068-.105-2.287-3.976-2.29 3.959-.085.131c-.225.333-.517.545-.87.544a.939.939 0 01-.954-.944c0-.24.096-.416.22-.643l.094-.16 2.945-4.99.099-.15c.204-.321.472-.529.84-.537.369.008.628.207.832.52l.095.147 2.965 5.044z"
                                  fill="#C755FF"></path>
                        </g>
                        <defs>
                            <clipPath id="wta_svg__clip0">
                                <path fill="#fff" transform="translate(.359)" d="M0 0h33.333v25H0z"></path>
                            </clipPath>
                        </defs>
                    </svg>
                    <svg viewBox="0 0 55 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon"
                         style={{fontSize: '15px'}}>
                        <path
                            d="M5.567 5.266v5.13h6.963v4.55H5.567V25H.692V2.258c0-1.235.48-1.711 1.714-1.711h11.535v4.72H5.567zM15.583 25V2.258c0-1.232.486-1.711 1.72-1.711h3.155V25h-4.875zM32.68 7.657c0 1.986-1.166 2.976-2.85 2.976H27.7V4.679h2.13c1.684 0 2.85.995 2.85 2.978zm4.975 10.364c0-3.319-1.785-4.889-3.09-5.337 1.166-.542 2.918-1.912 2.918-5.677 0-3.419-2.334-6.463-7.312-6.463h-5.522c-1.236 0-1.72.48-1.72 1.711v22.743h7.45c4.186 0 7.276-2.329 7.276-6.977zm-4.91-.27c0 2.051-1.199 3.044-2.882 3.044H27.7v-6.093h2.162c1.683 0 2.882.993 2.882 3.049zM49.15 12.21h-4.527V7.181c0-1.028.34-2.772 2.265-2.772 1.922 0 2.263 1.744 2.263 2.772v5.03zM54.027 25V6.632c0-1.88-1.03-6.632-7.138-6.632-6.114 0-7.14 4.752-7.14 6.632V25h4.875v-8.242h4.528V25h4.874z"
                            fill="#fff"></path>
                    </svg>
                    <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon"
                         style={{fontSize: '15px'}}>
                        <g clip-path="url(#nhl_svg__clip0)" fill="#fff">
                            <path
                                d="M22.028 6.216l.857-1.87-2.02-.573c-.615-.175-1.068-.634-1.346-1.364L18.627.062l-1.99 1.585c-.528.42-1.063.633-1.59.633-.705 0-1.507-.33-2.044-.84L11.721.22 10.44 1.44c-.536.51-1.339.84-2.043.84-.527 0-1.062-.213-1.59-.633L4.816.062 3.923 2.41c-.277.73-.73 1.188-1.346 1.363l-2.019.573.857 1.87c.396.863.596 1.764.596 2.677 0 2.528-1.34 3.103-1.34 5.911 0 4.045 3.252 6.692 6.275 7.44 1.528.358 1.989.382 3.368.709l1.407 1.456 1.408-1.456c1.379-.327 1.84-.351 3.368-.709 3.022-.748 6.276-3.395 6.276-7.44 0-2.808-1.341-3.383-1.341-5.91 0-.914.2-1.815.596-2.678zm-.22 5.67c.323.777.635 1.588.635 2.918 0 3.695-2.862 6.35-6.029 7.133-1.565.38-2.295.417-3.462.732-.152.153-1.23 1.274-1.23 1.274s-1.078-1.121-1.23-1.274c-1.167-.315-1.897-.352-3.462-.732-2.447-.605-4.71-2.326-5.613-4.78A6.766 6.766 0 011 14.804c0-2.76 1.34-3.282 1.34-5.91 0-1.077-.268-2.031-.624-2.806l-.704-1.54 1.658-.47c.722-.205 1.248-.73 1.563-1.559L4.965.594l1.63 1.298c.537.427 1.15.706 1.801.706.873 0 1.736-.419 2.276-.932l1.05-.999 1.05.999c.54.513 1.403.932 2.275.932.65 0 1.264-.28 1.8-.706l1.63-1.298.732 1.925c.315.83.84 1.354 1.563 1.559l1.658.47-.704 1.54a6.74 6.74 0 00-.625 2.806c0 1.361.36 2.157.707 2.992z"></path>
                            <path
                                d="M21.391 5.018s-2.56-.215-3.253-3.207c0 0-1.535 1.52-3.09 1.52-2.006 0-3.326-1.64-3.326-1.64s-1.32 1.64-3.326 1.64c-1.556 0-3.09-1.52-3.09-1.52-.694 2.993-3.254 3.207-3.254 3.207s1.041 1.771 1.041 3.87c0 .275-.014.529-.04.768-.22 2.095-1.299 2.936-1.299 5.148 0 2.713 1.933 5.562 5.463 6.42 1.677.408 2.834.512 3.686.807.11.099.819.838.819.838s.709-.74.818-.838c.852-.295 2.01-.4 3.686-.807 3.53-.858 5.463-3.707 5.463-6.42 0-2.464-1.339-3.225-1.339-5.917 0-2.098 1.041-3.87 1.041-3.87zm-.455 9.786c0 3.136-2.541 5.133-4.898 5.708-1.866.456-3.086.508-3.905.888 0 0-.299.262-.411.383-.114-.121-.411-.383-.411-.383-.82-.38-2.04-.432-3.906-.888-2.356-.575-4.898-2.572-4.898-5.708 0-2.243 1.339-3.067 1.339-5.917 0-1.92-.755-3.4-.755-3.4S4.833 5.15 5.645 3.03c0 0 1.156 1.038 2.751 1.038 1.999 0 3.326-1.35 3.326-1.35s1.327 1.35 3.325 1.35c1.596 0 2.752-1.038 2.752-1.038.811 2.12 2.554 2.459 2.554 2.459s-.756 1.48-.756 3.4c0 2.85 1.34 3.673 1.34 5.916z"></path>
                            <path
                                d="M15.047 4.889c-1.492 0-2.659-.626-3.326-1.097-.667.47-1.833 1.097-3.325 1.097-.985 0-1.824-.32-2.415-.639a4.684 4.684 0 01-1.79 1.687c.236.68.51 1.732.51 2.95 0 2.346-.833 3.445-1.185 4.773l12.218-8.823c-.219.033-.449.052-.687.052zM18.741 8.888c0-1.218.275-2.27.511-2.951a4.638 4.638 0 01-1.545-1.329L3.364 14.965c.07 2.037 1.438 3.52 3.002 4.292l12.479-9.01a8.608 8.608 0 01-.104-1.36zm-9 7.017l-1.11.8-1.196-1.761v2.627l-1.05.758v-3.716c0-.525-.521-.539-.521-.539L7.352 13l1.34 1.973v-2.94l1.05-.759v4.63zm4.235-3.057l-1.027.741v-1.693l-1.185.855v1.694l-1.078.778v-3.715c0-.525-.521-.54-.521-.54l1.6-1.154v1.711l1.184-.855V8.959l1.027-.742v4.63zm3.873-2.798l-2.978 2.15V8.486c0-.525-.52-.539-.52-.539l1.599-1.155v3.449l1.9-1.371s-.065.44 0 1.181zM7.448 19.671c.056.016.112.03.168.044 1.478.361 3.286.547 3.832.847.123.087.274.24.274.24s.15-.153.274-.24c.546-.3 2.354-.486 3.832-.847 2.048-.501 4.254-2.25 4.254-4.911 0-1.327-.605-2.2-1.002-3.532l-11.632 8.4z"></path>
                        </g>
                        <defs>
                            <clipPath id="nhl_svg__clip0">
                                <path fill="#fff" transform="translate(.026)" d="M0 0h23.333v25H0z"></path>
                            </clipPath>
                        </defs>
                    </svg>
                    <svg viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon"
                         style={{fontSize: '15px'}}>
                        <g clip-path="url(#atp_svg__clip0)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M2.693 0h15.332c.354.001.692.138.942.382.25.243.39.573.392.917v22.403a1.287 1.287 0 01-.392.916c-.249.243-.586.38-.94.382H2.694c-.354 0-.692-.138-.942-.38a1.285 1.285 0 01-.392-.918V1.3C1.36.955 1.5.625 1.75.382 2 .138 2.339 0 2.693 0zm2.792 19.987l1.356-1.704.36 1.704H5.485zm1.909.894c.066.262.096.379.564.4l.004-.002h.668l-.966-3.703h-.669c-.664 0-.719.023-1.078.456L3.204 21.28h.21c.658 0 .897.001 1.07-.105.1-.061.177-.157.299-.307l.006-.008.21-.26h2.33l.06.26.005.02zm5.633-2.907a.417.417 0 01-.17.201c-.12.073-.329.086-.728.086h-.649l-.888 3.02c-1.027 0-1.104-.022-.937-.577l.718-2.448H8.907c.189-.622.238-.673.966-.673h3.274c-.033.13-.073.258-.12.382v.009zm1.615.281h.869c.996 0 .987.31.907.564-.168.591-.18.591-1.187.591h-.929l.34-1.155zm-.529 1.806h.9l-.002.006c2.056 0 2.395-.715 2.554-1.243.159-.529.15-1.228-1.886-1.228h-1.486c-.502.037-.561.243-.637.505l-.021.073-.739 2.52c-.09.298-.1.435 0 .515.145.091.578.084.833.08l.114-.001.18-.592.19-.635zM3.997 9.618l-.067-.043a.308.308 0 00-.13-.241V8.83c0-.034.02-.037.037-.035a.607.607 0 01.116.09.998.998 0 00.242.157c.082.053.178.08.276.08h.095a.114.114 0 01.064.03c.01.01.01.023 0 .051a.505.505 0 01-.093.1l-.047.039c-.078.064-.233.191-.322.272l-.17.004zm.036-3.252c.175-.424.812-1.614 1.778-1.188.856.38.799 1.543.455 2.27-.5 1.053-1.27 1.727-1.997 1.335-.774-.419-.512-1.749-.236-2.421v.004zm14.145 4.155c-.026-.096-.178-.148-.178-.148 0-.118-.174-.157-.174-.157l-.01-.012c-.034-.134-.186-.102-.186-.102v-.03c-.026-.088-.17-.059-.17-.059-.065-.106-.192-.012-.192-.012a.141.141 0 01-.117.071c-.186.01-.204.107-.204.107l-.049.134c-.117.238-.052.33-.052.33.023.044.043.09.06.135.016.117.045.232.088.343-.101.018-.118.135-.118.135-.032.11-.374.473-.374.473-.091.047-.026.162-.026.162a2.766 2.766 0 01-.497.403 6.31 6.31 0 00-1.211 1.014 2.891 2.891 0 00-.966.03v-.06a3.085 3.085 0 00-.627.239.387.387 0 01-.214 0c-.463-.239-1.289-.166-1.289-.166-.177.035-.351.08-.523.135l-.807.035-.049-.135c-.016-.038-.079-.06-.079-.06h-.008a.522.522 0 00-.018-.135l-.02-.48.207-.269c.062 0-.049-.651-.049-.651.02-.1-.152-.473-.152-.473a.543.543 0 00-.156-.474.885.885 0 01-.138-.24c-.023-.096-.321-.25-.526-.32-.204-.068-.577 0-1.01.27-.434.269-.514.838-.514.922 0 .045.044.185.083.308.034.11.064.205.055.207a.04.04 0 01-.01.001c-.026.001-.08.003-.027.215.06.24.363.423.363.423.065.02.19.443.24.622l-.056.021-.046.085-.105.076c-.08.016-.162.024-.244.026a2.834 2.834 0 00-1.174-.03l-.634-.312-.042.064a1.57 1.57 0 00-.572-.068s-.454-.889-.87-1.21v-.032c.026-.017.016-.065.008-.11-.004-.02-.008-.04-.008-.054 0-.047-.13-.19-.13-.19l-.18-.281s-.06-.135-.083-.222a.056.056 0 00-.012-.027.058.058 0 00-.056-.02.058.058 0 00-.028.012c-.033-.093-.042-.19-.01-.214.083-.219.148-.443.195-.672.008-.06-.08-.254-.132-.371l-.035-.078c.185-.16.533-.455.623-.506.69-.404 1.298-.923 1.584-1.673.448-1.177.227-2.187-.553-2.573l-.03-.015-.037-.017-.033-.015c-.747-.247-1.6.17-2.127 1.305-.338.727-.353 1.5-.17 2.315.044.24.057.482.04.724v.051l-.218.036c-.088.04-.066.099-.066.099l.057.32-.01.01a.13.13 0 00-.08.048.124.124 0 00-.026.087l-.01.01c-.113.02-.106.186-.106.186a.14.14 0 00-.099.07.132.132 0 00-.003.119c-.1.063-.042.147-.003.204l.018.027c.033.055.185.386.185.386l-.19.485-.444 1.045a.084.084 0 01-.033.04l-.025.015s-.02.015-.025.064c.066.07.148.125.24.158.12.06.17.069.213.062.03-.036.03-.053.028-.063v-.019-.01a.09.09 0 010-.048l.357-.858.138-.32.03.038a.049.049 0 00-.032.05c0 .007.003.014.007.02l.015.045c.01.029.016.048.036.068.03.025.05.06.058.1a.4.4 0 01.008.088c0 .038.001.073.014.089l.037.055a.517.517 0 00.024.085c.012.037.026.078.034.129.014.091.046.06.046.06h.016l.046.111c.186.452.58 1.413 1.12 1.9.156.032.303.094.434.182l-.012.018-.044.073s.149.073.268.145c.3.181.612.344.933.488l.164.832c-1.3.343-2.489.862-3.513 1.52 2.04-.916 4.526-1.454 7.207-1.454 2.68 0 5.167.538 7.211 1.46-1.535-.988-3.441-1.665-5.542-1.902.154-.303.472-.446.472-.446.109-.073 1.053-.175 1.053-.175v-.071c1.171-.254 1.751-.683 1.751-.683.235-.038.261-.097.261-.097.05-.053.106-.102.166-.146.67-.44 1.38-1.663 1.38-1.663a.14.14 0 00.161-.041.134.134 0 00.026-.052c.056-.077.384-.487.384-.487.095-.085.038-.152.038-.152l-.048-.059.018-.017a.702.702 0 00.077-.14c.021-.046.04-.087.054-.103a2.13 2.13 0 00.127-.238c.036-.091.076-.181.122-.268a.275.275 0 00.056-.225v-.01zM5.254 21.776H3.949c-.26.019-.291.14-.333.309l-.008.03-.39 1.478c-.042.164-.046.243 0 .285.072.053.298.049.432.046h.063l.24-.901h1.27c.099-.36.078-.386-.325-.386h-.836l.12-.47h1.37c.025-.072.044-.147.058-.222.02-.17-.132-.169-.32-.168h-.036v-.001zm.436 1.817l.487-1.817c.541 0 .588.014.504.319l-.488 1.829c-.546 0-.588-.012-.503-.331zm3.582-1.523l-.326 1.22-.77-1.287c-.134-.232-.186-.232-.493-.231H7.375l-.362 1.362-.125.453c-.084.323-.043.335.502.335l.415-1.53.775 1.279.007.012c.12.207.138.24.497.24h.289l.577-2.153c-.541 0-.6.009-.67.298l-.008.002zm4.537 1.468h.604c.214 0 .31.013.352.055.057.052.014.194-.014.286l-.013.045h-1.117c-.43 0-.502 0-.414-.335l.482-1.813h.066c.137-.003.361-.008.432.046.053.041.048.126 0 .294l-.378 1.422zm1.702-1.12c-.106.447.372.517.797.578l.17.026c.168.03.477.105.428.285l-.003.013c-.011.05-.038.162-.096.185a3.38 3.38 0 01-.54.02h-.524c-.21 0-.32.008-.383.054-.063.045-.1.126-.157.348h.966c.876 0 1.243-.319 1.32-.642.128-.471-.374-.55-.834-.621a3.808 3.808 0 01-.371-.07c-.152-.043-.199-.113-.182-.18l.001-.006.004-.017c.013-.057.04-.177.098-.199.165-.025.332-.034.499-.026h.566c.399 0 .43-.025.53-.394h-.976c-.786 0-1.217.24-1.316.646h.003zm-3.607-.646h.35l.513 2.148h-.352c-.246-.012-.262-.08-.297-.23l-.003-.013-.032-.15H10.86l-.11.15-.005.008c-.067.089-.108.144-.163.18-.095.06-.227.06-.586.06h-.085l1.427-1.884c.189-.255.22-.269.566-.269zm-.079.402l-.714.99h.903l-.189-.99zm6.193 1.983h-.11l.013-.065h.296l-.014.065h-.107l-.06.284h-.078l.06-.284zm.346-.063h-.108l-.07.348h.073l.052-.277.035.277h.06l.149-.277-.064.277h.073l.075-.348h-.11l-.137.251-.028-.251z"
                                  fill="#78D6FF"></path>
                        </g>
                        <defs>
                            <clipPath id="atp_svg__clip0">
                                <path fill="#fff" transform="translate(.026)" d="M0 0h20v25H0z"></path>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="footer-separator"></div>
                <div className="footer-social">
                    <div className="footer-social-title"> Социальные сети</div>
                    <div className="footer-social-links">
                        <a className="footer-social-links-tg" rel="noopener" target="_blank" href="#"
                           onClick="popup_show('go_auth',{tab: 'registration'})">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="21" viewBox="0 0 25 21"
                                 className="icon"
                                 style={{fontSize: '18px'}}>
                                <defs>
                                    <linearGradient id="telegram_svg__a" x1="66%" x2="85.1%" y1="43.7%" y2="80.2%">
                                        <stop offset="0%" stop-color="#EFF7FC"></stop>
                                        <stop offset="100%" stop-color="#FFF"></stop>
                                    </linearGradient>
                                </defs>
                                <g fill="none" fill-rule="evenodd">
                                    <g fill-rule="nonzero">
                                        <g>
                                            <g>
                                                <g>
                                                    <path fill="#C8DAEA"
                                                          d="M9.554 19.148c-.709 0-.588-.267-.833-.942l-2.082-6.852 16.028-9.509"></path>
                                                    <path fill="#A9C9DD"
                                                          d="M9.554 19.148c.546 0 .787-.25 1.092-.546l2.914-2.834-3.635-2.192"></path>
                                                    <path fill="url(#telegram_svg__a)"
                                                          d="M9.311 13.156l8.808 6.507c1.005.555 1.73.267 1.98-.933l3.586-16.895c.367-1.472-.56-2.14-1.522-1.703L1.11 8.25C-.327 8.826-.32 9.628.848 9.985l5.402 1.687L18.758 3.78c.59-.359 1.133-.166.688.229"
                                                          transform="translate(.614 .421)"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </a>
                        <a className="footer-social-links-yt" rel="noopener" target="_blank" href="#"
                           onClick="popup_show('go_auth',{tab: 'registration'})">
                            <svg width="22" height="15" viewBox="0 0 22 15" fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="icon" style={{fontSize: '15px'}}>
                                <path
                                    d="M21.067 2.45A2.631 2.631 0 0019.217.6C17.573.15 11 .15 11 .15s-6.573 0-8.217.432a2.685 2.685 0 00-1.85 1.869C.5 4.094.5 7.5.5 7.5s0 3.426.432 5.052a2.63 2.63 0 001.851 1.85c1.661.45 8.217.45 8.217.45s6.573 0 8.217-.432a2.631 2.631 0 001.85-1.851c.433-1.643.433-5.051.433-5.051s.017-3.425-.433-5.068z"
                                    fill="#fff"></path>
                                <path d="M14.373 7.501L8.907 4.353v6.296l5.466-3.148z" fill="#F96057"></path>
                            </svg>
                        </a>
                        <a className="footer-social-links-vk" rel="noopener" target="_blank" href="#"
                           onClick="popup_show('go_auth',{tab: 'registration'})">
                            <svg width="22" height="20" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg"
                                 className="icon "
                                 style={{fontSize: '36px'}}>
                                <g fill="none" fill-rule="evenodd">
                                    <g>
                                        <g fill="#FFF">
                                            <path
                                                d="M10.762 16.502h1.315s.398-.044.6-.263c.187-.2.181-.578.181-.578s-.025-1.766.793-2.024c.808-.256 1.845 1.706 2.943 2.46.831.57 1.463.446 1.463.446l2.939-.041s1.537-.095.808-1.304c-.06-.1-.424-.894-2.185-2.528-1.843-1.71-1.596-1.434.624-4.392 1.352-1.801 1.892-2.901 1.723-3.372-.161-.449-1.156-.33-1.156-.33l-3.308.02a.751.751 0 00-.424.076c-.178.107-.292.353-.292.353s-.524 1.395-1.222 2.58c-1.473 2.502-2.063 2.635-2.303 2.479-.56-.362-.42-1.455-.42-2.23 0-2.425.367-3.436-.716-3.698-.36-.086-.625-.141-1.545-.153-1.18-.013-2.18.003-2.745.282-.376.185-.667.595-.49.619.219.029.714.133.977.49.34.462.327 1.498.327 1.498s.195 2.855-.455 3.209c-.446.243-1.06-.253-2.371-2.523-.446-.79-.84-1.608-1.181-2.448a.983.983 0 00-.273-.37 1.367 1.367 0 00-.508-.205l-3.144.021s-.472.014-.645.22c-.154.183-.012.56-.012.56s2.46 5.761 5.247 8.658c2.558 2.664 5.455 2.489 5.455 2.489"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </a>
                        <a className="footer-social-links-inst" rel="noopener" target="_blank" href="#"
                           onClick="popup_show('go_auth',{tab: 'registration'})">
                            <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon"
                                 style={{fontSize: '18px'}}>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M6.171.063C7.291.011 7.648 0 10.5 0c2.852 0 3.21.012 4.328.063 1.119.05 1.882.23 2.55.488.7.264 1.335.677 1.86 1.212a5.129 5.129 0 011.21 1.859c.26.668.438 1.431.489 2.548.051 1.122.063 1.479.063 4.33 0 2.852-.012 3.21-.063 4.329-.05 1.117-.23 1.88-.489 2.549a5.15 5.15 0 01-1.21 1.86 5.149 5.149 0 01-1.86 1.21c-.668.26-1.431.438-2.548.489-1.12.051-1.478.063-4.33.063-2.852 0-3.21-.012-4.329-.063-1.117-.05-1.88-.23-2.549-.489a5.152 5.152 0 01-1.86-1.21 5.147 5.147 0 01-1.211-1.86C.292 16.71.115 15.947.063 14.83.011 13.708 0 13.35 0 10.5c0-2.852.012-3.21.063-4.328.05-1.119.23-1.882.488-2.55a5.15 5.15 0 011.212-1.86A5.147 5.147 0 013.622.551C4.29.292 5.053.115 6.17.063h.001zm8.572 1.89c-1.107-.05-1.44-.061-4.243-.061-2.803 0-3.136.01-4.243.061-1.024.047-1.58.218-1.95.362-.49.19-.84.417-1.208.784a3.257 3.257 0 00-.784 1.208c-.144.37-.315.926-.362 1.95-.05 1.107-.061 1.44-.061 4.243 0 2.803.01 3.136.061 4.243.047 1.024.218 1.58.362 1.95.168.455.436.869.784 1.208a3.26 3.26 0 001.208.784c.37.144.926.315 1.95.362 1.107.05 1.439.061 4.243.061 2.805 0 3.136-.01 4.243-.061 1.024-.047 1.58-.218 1.95-.362.49-.19.84-.417 1.208-.784a3.26 3.26 0 00.784-1.208c.144-.37.315-.926.362-1.95.05-1.107.061-1.44.061-4.243 0-2.803-.01-3.136-.061-4.243-.047-1.024-.218-1.58-.362-1.95a3.26 3.26 0 00-.784-1.208 3.258 3.258 0 00-1.208-.784c-.37-.144-.926-.315-1.95-.362zM9.159 13.737a3.503 3.503 0 102.521-6.535 3.503 3.503 0 00-2.521 6.535zM6.684 6.684a5.397 5.397 0 117.632 7.632 5.397 5.397 0 01-7.632-7.632zm10.41-.777a1.277 1.277 0 10-1.752-1.857 1.277 1.277 0 001.752 1.857z"
                                      fill="#fff"></path>
                            </svg>
                        </a>
                        <a className="footer-social-links-fb" rel="noopener" target="_blank" href="#"
                           onClick="popup_show('go_auth',{tab: 'registration'})">
                            <svg viewBox="5 4 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon"
                                 style={{fontSize: '18px'}}>
                                <g filter="url(#facebook-2_svg__filter0_d)">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M5 12.55c0 4.475 3.25 8.195 7.5 8.95V15h-2.25v-2.5h2.25v-2C12.5 8.25 13.95 7 16 7c.65 0 1.35.1 2 .2v2.3h-1.15c-1.1 0-1.35.55-1.35 1.25v1.75h2.4l-.4 2.5h-2v6.5c4.25-.755 7.5-4.474 7.5-8.95 0-4.978-4.05-9.05-9-9.05s-9 4.072-9 9.05z"
                                          fill="#fff"></path>
                                </g>
                                <defs>
                                    <filter id="facebook-2_svg__filter0_d" x="0" y=".5" width="28" height="28"
                                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                        <feColorMatrix in="SourceAlpha"
                                                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                                        <feOffset dy="2"></feOffset>
                                        <feGaussianBlur stdDeviation="2.5"></feGaussianBlur>
                                        <feColorMatrix
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix>
                                        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                                        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                                    </filter>
                                </defs>
                            </svg>
                        </a></div>
                </div>
                <div className="footer-separator"></div>
                <div className="footer-payments">
                    <svg viewBox="0 0 54 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon"
                         style={{fontSize: '15px'}}>
                        <g fill="#fff" className="visa_svg__color">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M53.487 16.752h.104l-.057-.277-.076-.366c-.194-.932-.39-1.864-.585-2.795l-.584-2.796c-.168-.798-.334-1.599-.5-2.399l-.502-2.399-1.11-5.33c-.018-.075-.041-.104-.122-.104h-3.513c-.099 0-.203.006-.301.023-.747.122-1.256.538-1.546 1.233l-3.163 7.553c-1.054 2.517-2.11 5.035-3.162 7.552a1.258 1.258 0 01-.04.105H42.691c.07 0 .1-.024.123-.087.277-.764.555-1.528.827-2.292.017-.058.046-.081.11-.081h5.301c.07 0 .099.023.11.087l.21.998c.089.423.178.847.265 1.27.017.087.052.105.133.105h3.716zM47.16 4.76c.428 2.048.857 4.097 1.285 6.164-1.187 0-2.361 0-3.548.005.747-2.066 1.487-4.115 2.234-6.17h.029z"></path>
                            <path
                                d="M.872.76C.907.598.936.448.97.292h7.183c1.024 0 1.811.636 2.014 1.637.197 1.007.382 2.015.573 3.022.202 1.088.41 2.176.613 3.264.197 1.059.4 2.118.596 3.171l.024.116c.069-.18.133-.336.196-.492 1.4-3.536 2.796-7.072 4.19-10.603.035-.086.076-.115.168-.115 1.407.005 2.813 0 4.22.005h.121c-.017.04-.023.07-.035.099-2.274 5.428-4.549 10.851-6.823 16.28-.023.064-.052.093-.122.087H9.56c-.029 0-.052 0-.087-.006-.098-.388-.202-.77-.3-1.157L6.48 5.182l-.503-1.916c-.134-.492-.429-.839-.874-1.076a11.388 11.388 0 00-2.101-.845C2.319 1.142 1.624.975.942.789.923.772.9.766.871.76zM38.566 4.198a9.138 9.138 0 00-1.412-.503 8.021 8.021 0 00-2.315-.267c-.52.018-1.03.099-1.499.348-.307.162-.561.376-.694.706-.162.393-.081.74.185 1.059.243.29.556.503.88.683.596.335 1.198.648 1.8.978.671.37 1.313.787 1.852 1.343.578.59.966 1.279 1.105 2.1.07.423.075.846.029 1.274a5.029 5.029 0 01-.602 1.968c-.515.92-1.262 1.591-2.176 2.095-.776.428-1.609.688-2.483.85-.793.145-1.591.203-2.396.18-1.285-.04-2.546-.214-3.773-.608-.232-.075-.452-.162-.69-.249.261-1.204.516-2.402.77-3.605.047.017.082.034.116.052.608.29 1.221.55 1.875.717a8.245 8.245 0 001.638.255c.429.023.851.035 1.274-.023.561-.075 1.094-.22 1.54-.59.433-.354.595-.903.422-1.395a1.4 1.4 0 00-.388-.562 4.493 4.493 0 00-1.013-.694c-.498-.266-1.007-.515-1.505-.787-.723-.394-1.395-.868-1.95-1.488-.492-.55-.84-1.175-.967-1.904-.115-.654-.058-1.302.11-1.939.307-1.128.973-2.014 1.899-2.702.85-.631 1.811-1.019 2.841-1.25A10.58 10.58 0 0135.84.013c1.158.052 2.28.295 3.369.683.075.029.087.052.075.133-.237 1.1-.474 2.2-.706 3.299.006.011 0 .034-.012.07zM19.201 16.746l.174-.828c.335-1.563.665-3.12 1.001-4.682.341-1.586.677-3.177 1.019-4.763l1.024-4.77c.093-.44.185-.879.284-1.319.011-.052.017-.098.098-.098 1.366.006 2.732 0 4.098 0h.07a8.701 8.701 0 01-.094.445c-.55 2.576-1.1 5.157-1.655 7.733-.544 2.535-1.088 5.07-1.626 7.604-.046.209-.087.412-.133.62-.012.046-.03.064-.075.064h-4.144c-.012.005-.024 0-.04-.006z"></path>
                        </g>
                        <g fill="#34405E" className="visa_svg__mono">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M53.487 16.752h.104l-.057-.277-.076-.366c-.194-.932-.39-1.863-.585-2.795l-.584-2.796c-.168-.798-.334-1.599-.5-2.399l-.502-2.399-1.11-5.33c-.018-.075-.041-.104-.122-.104h-3.513c-.099 0-.203.006-.301.023-.747.122-1.256.538-1.546 1.233l-3.162 7.552-3.163 7.553a1.258 1.258 0 01-.04.105H42.691c.07 0 .1-.024.123-.087.277-.764.555-1.528.827-2.292.017-.058.046-.081.11-.081h5.301c.07 0 .099.023.11.087l.21.998c.089.423.178.847.265 1.27.017.087.052.105.133.105h3.716zM47.16 4.76c.428 2.048.857 4.097 1.285 6.164-1.187 0-2.361 0-3.548.005.747-2.066 1.487-4.115 2.234-6.17h.029z"></path>
                            <path
                                d="M.872.76C.907.598.936.448.97.292h7.183c1.024 0 1.811.636 2.014 1.637.197 1.007.382 2.015.573 3.022.202 1.088.41 2.176.613 3.264.197 1.059.4 2.118.596 3.171l.024.116c.069-.18.133-.336.196-.492 1.4-3.536 2.796-7.072 4.19-10.603.035-.086.076-.115.168-.115 1.407.005 2.813 0 4.22.005h.121c-.017.04-.023.07-.035.099-2.274 5.428-4.549 10.851-6.823 16.28-.023.064-.052.093-.122.087H9.56c-.029 0-.052 0-.087-.006-.098-.388-.202-.77-.3-1.157L6.48 5.182l-.503-1.916c-.134-.492-.429-.839-.874-1.076a11.388 11.388 0 00-2.101-.845C2.319 1.142 1.624.975.942.789.923.772.9.766.871.76zM38.566 4.198a9.138 9.138 0 00-1.412-.503 8.021 8.021 0 00-2.315-.267c-.52.018-1.03.099-1.499.348-.307.162-.561.376-.694.706-.162.393-.081.74.185 1.059.243.29.556.503.88.683.596.335 1.198.648 1.8.978.671.37 1.313.787 1.852 1.343.578.59.966 1.279 1.105 2.1.07.423.075.846.029 1.274a5.029 5.029 0 01-.602 1.968c-.515.92-1.262 1.591-2.176 2.095-.776.428-1.609.688-2.483.85-.793.145-1.591.203-2.396.18-1.285-.04-2.546-.214-3.773-.608-.232-.075-.452-.162-.69-.249.261-1.204.516-2.402.77-3.605.047.017.082.034.116.052.608.29 1.221.55 1.875.717a8.245 8.245 0 001.638.255c.429.023.851.035 1.274-.023.561-.075 1.094-.22 1.54-.59.433-.354.595-.903.422-1.395a1.4 1.4 0 00-.388-.562 4.493 4.493 0 00-1.013-.694c-.498-.266-1.007-.515-1.505-.787-.723-.394-1.395-.868-1.95-1.488-.492-.55-.84-1.175-.967-1.904-.115-.654-.058-1.302.11-1.939.307-1.128.973-2.014 1.899-2.702.85-.631 1.811-1.019 2.841-1.25A10.58 10.58 0 0135.84.013c1.158.052 2.28.295 3.369.683.075.029.087.052.075.133-.237 1.1-.474 2.2-.706 3.299.006.011 0 .034-.012.07zM19.201 16.746l.174-.828c.335-1.563.665-3.12 1.001-4.682.341-1.586.677-3.177 1.019-4.763l1.024-4.77c.093-.44.185-.879.284-1.319.011-.052.017-.098.098-.098 1.366.006 2.732 0 4.098 0h.07a8.701 8.701 0 01-.094.445c-.55 2.576-1.1 5.157-1.655 7.733-.544 2.535-1.088 5.07-1.626 7.604-.046.209-.087.412-.133.62-.012.046-.03.064-.075.064h-4.144c-.012.005-.024 0-.04-.006z"></path>
                        </g>
                    </svg>
                    <svg viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon"
                         style={{fontSize: '15px'}}>
                        <g className="mastercard_svg__color">
                            <path fill="#FF5F00" d="M10.625 1.925H18.5v14.15h-7.875z"></path>
                            <path
                                d="M11.125 9a9.024 9.024 0 013.425-7.075A8.945 8.945 0 009 0C4.025 0 0 4.025 0 9s4.025 9 9 9c2.1 0 4.025-.725 5.55-1.925A8.986 8.986 0 0111.125 9z"
                                fill="#EB001B"></path>
                            <path
                                d="M29.125 9c0 4.975-4.025 9-9 9-2.1 0-4.025-.725-5.55-1.925A8.949 8.949 0 0018 9a9.024 9.024 0 00-3.425-7.075A8.945 8.945 0 0120.125 0c4.975 0 9 4.05 9 9z"
                                fill="#F79E1B"></path>
                        </g>
                        <g className="mastercard_svg__mono">
                            <path fill="#455279" d="M10.625 1.925H18.5v14.15h-7.875z"></path>
                            <path
                                d="M11.125 9a9.024 9.024 0 013.425-7.075A8.945 8.945 0 009 0C4.025 0 0 4.025 0 9s4.025 9 9 9c2.1 0 4.025-.725 5.55-1.925A8.986 8.986 0 0111.125 9z"
                                fill="#1F2639"></path>
                            <path
                                d="M29.125 9c0 4.975-4.025 9-9 9-2.1 0-4.025-.725-5.55-1.925A8.949 8.949 0 0018 9a9.024 9.024 0 00-3.425-7.075A8.945 8.945 0 0120.125 0c4.975 0 9 4.05 9 9z"
                                fill="#34405E"></path>
                        </g>
                    </svg>
                    <svg viewBox="0 0 46 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon"
                         style={{fontSize: '15px'}}>
                        <g className="googlepay_svg__color">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M22.122 14.07V8.793h2.764c1.139 0 2.096-.37 2.872-1.11a3.61 3.61 0 001.2-2.765 3.627 3.627 0 00-1.2-2.75 4.01 4.01 0 00-2.872-1.128H20.45v13.03h1.672zm-.002-6.877V2.644h2.805a2.18 2.18 0 011.655.69 2.221 2.221 0 010 3.185 2.21 2.21 0 01-1.655.674H22.12zM35.74 5.856c-.716-.661-1.692-.992-2.928-.992-1.588 0-2.788.582-3.598 1.747l1.473.928c.544-.789 1.284-1.183 2.218-1.183a2.368 2.368 0 011.615.61c.44.365.694.91.69 1.482v.382c-.642-.364-1.46-.545-2.453-.545-1.164 0-2.094.274-2.79.819-.698.545-1.046 1.278-1.046 2.2a2.79 2.79 0 00.991 2.184c.66.582 1.482.873 2.463.873 1.15 0 2.071-.51 2.764-1.528h.072v1.237h1.6V8.576c.001-1.152-.356-2.059-1.072-2.72zm-4.538 6.577a1.337 1.337 0 01-.554-1.092c0-.485.227-.89.685-1.223.454-.327 1.02-.491 1.7-.491.933 0 1.66.208 2.182.623 0 .703-.277 1.316-.832 1.838-.498.5-1.175.78-1.88.781a2.04 2.04 0 01-1.3-.436z"
                                  fill="#fff"></path>
                            <path
                                d="M45.995 5.155L40.41 18h-1.726l2.072-4.494-3.672-8.35h1.818l2.654 6.404h.037l2.581-6.405h1.821z"
                                fill="#fff"></path>
                            <path
                                d="M15.363 7.657c0-.51-.043-1.02-.129-1.522H8.18v2.883h4.04a3.465 3.465 0 01-1.494 2.274v1.872h2.412c1.411-1.303 2.225-3.23 2.225-5.507z"
                                fill="#FBBC04"></path>
                            <path
                                d="M8.18 14.972c2.018 0 3.718-.664 4.957-1.807l-2.411-1.872c-.671.456-1.536.716-2.546.716-1.952 0-3.608-1.316-4.2-3.09H1.496v1.928a7.48 7.48 0 006.684 4.125z"
                                fill="#34A853"></path>
                            <path d="M3.98 8.918a4.488 4.488 0 010-2.865V4.125H1.496a7.49 7.49 0 000 6.722L3.98 8.919z"
                                  fill="#FBBC04"></path>
                            <path
                                d="M8.18 2.963a4.06 4.06 0 012.869 1.123l2.135-2.136A7.184 7.184 0 008.18 0a7.48 7.48 0 00-6.684 4.125L3.98 6.053c.593-1.773 2.249-3.09 4.2-3.09z"
                                fill="#34A853"></path>
                        </g>
                        <g fill="#34405E" className="googlepay_svg__mono">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M22.122 14.07V8.793h2.764c1.139 0 2.096-.37 2.872-1.11a3.61 3.61 0 001.2-2.765 3.627 3.627 0 00-1.2-2.75 4.01 4.01 0 00-2.872-1.128H20.45v13.03h1.672zm-.002-6.877V2.644h2.805a2.18 2.18 0 011.655.69 2.222 2.222 0 010 3.185 2.21 2.21 0 01-1.655.674H22.12zM35.74 5.856c-.716-.661-1.692-.992-2.928-.992-1.588 0-2.788.582-3.598 1.747l1.473.928c.544-.789 1.284-1.183 2.218-1.183a2.368 2.368 0 011.615.61c.44.365.694.91.69 1.482v.382c-.642-.364-1.46-.545-2.453-.545-1.164 0-2.094.274-2.79.819-.698.545-1.046 1.278-1.046 2.2a2.79 2.79 0 00.991 2.184c.66.582 1.482.873 2.463.873 1.15 0 2.071-.51 2.764-1.528h.072v1.237h1.6V8.576c.001-1.152-.356-2.059-1.072-2.72zm-4.538 6.577a1.337 1.337 0 01-.554-1.092c0-.485.227-.89.685-1.223.454-.327 1.02-.491 1.7-.491.933 0 1.66.208 2.182.623 0 .703-.277 1.316-.832 1.838-.498.5-1.175.78-1.88.781a2.04 2.04 0 01-1.3-.436z"></path>
                            <path
                                d="M45.995 5.155L40.41 18h-1.726l2.072-4.494-3.672-8.35h1.818l2.654 6.404h.037l2.581-6.405h1.821zM15.363 7.657c0-.51-.043-1.02-.129-1.522H8.18v2.883h4.04a3.465 3.465 0 01-1.494 2.274v1.872h2.412c1.412-1.303 2.225-3.23 2.225-5.507z"></path>
                            <path
                                d="M8.18 14.972c2.018 0 3.718-.664 4.957-1.807l-2.411-1.872c-.671.456-1.536.716-2.546.716-1.952 0-3.608-1.316-4.2-3.09H1.496v1.928a7.48 7.48 0 006.684 4.125z"></path>
                            <path
                                d="M3.98 8.918a4.488 4.488 0 010-2.865V4.125H1.496a7.49 7.49 0 000 6.722L3.98 8.919z"></path>
                            <path
                                d="M8.18 2.963a4.06 4.06 0 012.869 1.123l2.135-2.136A7.184 7.184 0 008.18 0a7.48 7.48 0 00-6.684 4.125L3.98 6.053c.593-1.773 2.249-3.09 4.2-3.09z"></path>
                        </g>
                    </svg>
                    <svg viewBox="0 0 45 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon"
                         style={{fontSize: '15px'}}>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M9.345 2.28c-.505.596-1.312 1.067-2.12 1-.1-.807.295-1.665.757-2.195C8.487.47 9.37.034 10.085 0c.084.841-.244 1.665-.74 2.28zm.731 1.16c-.71-.041-1.36.214-1.884.42-.338.132-.623.244-.84.244-.244 0-.542-.118-.876-.25-.438-.175-.938-.373-1.463-.364-1.202.017-2.32.698-2.935 1.783-1.261 2.17-.328 5.383.892 7.149.597.875 1.312 1.833 2.254 1.8.414-.016.712-.142 1.02-.273.356-.15.725-.307 1.3-.307.557 0 .91.152 1.249.298.322.14.63.273 1.09.265.976-.017 1.59-.875 2.187-1.75.644-.938.927-1.854.97-1.993l.005-.016a.239.239 0 00-.023-.011c-.215-.1-1.862-.853-1.877-2.874-.016-1.697 1.306-2.556 1.514-2.692l.025-.016c-.841-1.245-2.153-1.38-2.608-1.413zm6.754 10.673V1h4.92c2.54 0 4.314 1.75 4.314 4.306 0 2.557-1.808 4.323-4.381 4.323h-2.818v4.483H16.83zm2.035-11.396h2.347c1.766 0 2.775.942 2.775 2.598 0 1.657-1.009 2.608-2.784 2.608h-2.338V2.717zm13.92 9.823c-.539 1.026-1.725 1.674-3.003 1.674-1.892 0-3.213-1.128-3.213-2.826 0-1.682 1.278-2.65 3.642-2.793l2.54-.151v-.723c0-1.068-.698-1.649-1.943-1.649-1.026 0-1.775.53-1.926 1.338h-1.834c.06-1.7 1.657-2.936 3.819-2.936 2.33 0 3.843 1.22 3.843 3.112v6.527h-1.884V12.54h-.042zm-2.456.118c-1.085 0-1.775-.522-1.775-1.32 0-.825.664-1.304 1.934-1.38l2.263-.143v.74c0 1.228-1.043 2.103-2.422 2.103zm10.63 1.968c-.816 2.296-1.749 3.053-3.734 3.053-.151 0-.656-.017-.774-.05v-1.574c.127.017.438.034.597.034.9 0 1.405-.378 1.716-1.362l.185-.58L35.501 4.6h2.128l2.397 7.746h.042L42.465 4.6h2.069l-3.575 10.026z"
                              fill="#fff" className="applepay_svg__color"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M9.345 2.28c-.505.596-1.312 1.067-2.12 1-.1-.807.295-1.665.757-2.195C8.487.47 9.37.034 10.085 0c.084.841-.244 1.665-.74 2.28zm.731 1.16c-.71-.041-1.36.214-1.884.42-.338.132-.623.244-.84.244-.244 0-.542-.118-.876-.25-.438-.175-.938-.373-1.463-.364-1.202.017-2.32.698-2.935 1.783-1.261 2.17-.328 5.383.892 7.149.597.875 1.312 1.833 2.254 1.8.414-.016.712-.142 1.02-.273.356-.15.725-.307 1.3-.307.557 0 .91.152 1.249.298.322.14.63.273 1.09.265.976-.017 1.59-.875 2.187-1.75.644-.938.927-1.854.97-1.993l.005-.016a.239.239 0 00-.023-.011c-.215-.1-1.862-.853-1.877-2.874-.016-1.697 1.306-2.556 1.514-2.692l.025-.016c-.841-1.245-2.153-1.38-2.608-1.413zm6.754 10.673V1h4.92c2.54 0 4.314 1.75 4.314 4.306 0 2.557-1.808 4.323-4.381 4.323h-2.818v4.483H16.83zm2.035-11.396h2.347c1.766 0 2.775.942 2.775 2.598 0 1.657-1.009 2.608-2.784 2.608h-2.338V2.717zm13.92 9.823c-.539 1.026-1.725 1.674-3.003 1.674-1.892 0-3.213-1.128-3.213-2.826 0-1.682 1.278-2.65 3.642-2.793l2.54-.151v-.723c0-1.068-.698-1.649-1.943-1.649-1.026 0-1.775.53-1.926 1.338h-1.834c.06-1.7 1.657-2.936 3.819-2.936 2.33 0 3.843 1.22 3.843 3.112v6.527h-1.884V12.54h-.042zm-2.456.118c-1.085 0-1.775-.522-1.775-1.32 0-.825.664-1.304 1.934-1.38l2.263-.143v.74c0 1.228-1.043 2.103-2.422 2.103zm10.63 1.968c-.816 2.296-1.749 3.053-3.734 3.053-.151 0-.656-.017-.774-.05v-1.574c.127.017.438.034.597.034.9 0 1.405-.378 1.716-1.362l.185-.58L35.501 4.6h2.128l2.397 7.746h.042L42.465 4.6h2.069l-3.575 10.026z"
                              fill="#34405E" className="applepay_svg__mono"></path>
                    </svg>
                    <svg viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon"
                         style={{fontSize: '15px'}}>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M7.81 17.73c5.02 1.203 10.102-1.731 11.353-6.553C20.415 6.356 17.361 1.471 12.342.27 7.324-.933 2.24 2.002.99 6.824c-1.252 4.82 1.803 9.705 6.82 10.907zm4.337-12.283c1.298.43 2.247 1.073 2.06 2.27-.135.877-.64 1.302-1.312 1.45.922.462 1.392 1.17.944 2.395-.554 1.523-1.872 1.652-3.625 1.333l-.425 1.638-1.028-.246.42-1.616a40.797 40.797 0 01-.82-.204l-.42 1.623-1.027-.246.425-1.64-.29-.073-.443-.11-1.337-.32.51-1.13s.757.194.747.18c.29.068.42-.114.471-.235l.672-2.59.074.018.035.009a.876.876 0 00-.107-.033l.48-1.848c.012-.21-.063-.475-.48-.575.017-.01-.746-.178-.746-.178l.273-1.055 1.418.34-.001.005c.213.051.432.1.656.149l.421-1.622 1.028.246-.413 1.59c.276.06.553.121.823.186l.41-1.58 1.028.247-.421 1.622zm-3.25 5.881c.838.213 2.67.678 2.962-.447.299-1.15-1.479-1.533-2.346-1.72l-.253-.056-.564 2.173.2.05zm3.28-3.628c-.266 1.023-1.792.632-2.49.453l-.17-.043.512-1.971c.059.014.13.029.212.046.724.154 2.207.47 1.935 1.515z"
                              fill="#F7931A" className="btc_svg__color"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M7.81 17.73c5.02 1.203 10.102-1.731 11.353-6.553C20.415 6.356 17.361 1.471 12.342.27 7.324-.933 2.24 2.002.99 6.824c-1.252 4.82 1.803 9.705 6.82 10.907zm4.337-12.283c1.298.43 2.247 1.073 2.06 2.27-.135.877-.64 1.302-1.312 1.45.922.462 1.392 1.17.944 2.395-.554 1.523-1.872 1.652-3.625 1.333l-.425 1.638-1.028-.246.42-1.616a40.814 40.814 0 01-.82-.204l-.42 1.623-1.027-.246.425-1.64a80.458 80.458 0 01-.289-.073l-.444-.11-1.337-.32.51-1.13s.757.194.747.18c.291.068.42-.114.471-.235l.672-2.59.074.018.035.009a.876.876 0 00-.107-.033l.48-1.848c.012-.21-.063-.475-.48-.575.017-.01-.746-.178-.746-.178l.273-1.055 1.418.34-.001.005c.213.051.432.1.656.149l.421-1.622 1.028.246-.413 1.59c.276.06.553.121.823.186l.41-1.58 1.028.247-.42 1.622zm-3.25 5.881c.838.213 2.67.678 2.962-.447.299-1.15-1.479-1.533-2.346-1.72l-.253-.056-.564 2.173.2.05zm3.28-3.628c-.266 1.023-1.792.632-2.49.453l-.17-.043.512-1.971c.059.014.13.029.212.046.724.154 2.207.47 1.935 1.515z"
                              fill="#34405E" className="btc_svg__mono"></path>
                    </svg>
                    <svg viewBox="0 0 41 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon"
                         style={{fontSize: '15px'}}>
                        <g className="qiwi_svg__color">
                            <g clip-path="url(#qiwi_svg__a)">
                                <path
                                    d="M19.863 10.18h.616v1.38h.445l.798-1.38h.674l-.959 1.62v.011l1.016 1.768h-.696l-.822-1.483h-.444v1.483h-.616v-3.4h-.012v.001zm3.97.901c.74 0 1.346.536 1.346 1.278 0 .753-.593 1.277-1.335 1.277s-1.335-.524-1.335-1.277c-.01-.753.582-1.278 1.324-1.278zm1.825.057h.581v1.917h.765v-1.916h.581v1.916h.764v-1.916h.582v2.44h-3.25v-2.44h-.024zm4.996-.057c.695 0 1.083.514 1.083 1.153-.002.08-.01.16-.022.239h-1.677c.034.422.365.65.73.65.25 0 .502-.114.695-.262l.24.433a1.566 1.566 0 01-.98.354c-.81 0-1.313-.582-1.313-1.278 0-.764.513-1.289 1.244-1.289zm1.368 1.985c.297-.046.514-.296.514-1.164v-.763h1.78v2.44h-.606v-1.95h-.593v.273c0 1.06-.285 1.677-1.095 1.7v-.536zm4.027-1.985c.695 0 1.083.514 1.083 1.153-.002.08-.01.16-.023.239h-1.676c.034.422.365.65.73.65.25 0 .502-.114.696-.262l.24.433a1.566 1.566 0 01-.982.354c-.81 0-1.311-.582-1.311-1.278 0-.764.513-1.289 1.243-1.289zm1.585.057h.605v.936h.296l.594-.935h.672l-.775 1.163v.011l.866 1.266h-.706l-.64-.992h-.318v.992h-.605v-2.44h.011zm-13.801 1.974c.399 0 .73-.308.73-.765 0-.444-.331-.764-.73-.764-.4 0-.719.309-.719.764 0 .457.32.765.719.765zm7.288-1.061c0-.32-.217-.513-.49-.513-.308 0-.536.205-.593.513h1.083zm5.395 0c0-.32-.216-.513-.49-.513-.308 0-.536.205-.593.513h1.083z"
                                    fill="#2D3540"></path>
                                <path
                                    d="M19.863 10.18h.616v1.38h.445l.798-1.38h.674l-.959 1.62v.011l1.016 1.768h-.696l-.822-1.483h-.444v1.483h-.616v-3.4h-.012v.001zm3.97.901c.74 0 1.346.536 1.346 1.278 0 .753-.593 1.277-1.335 1.277s-1.335-.524-1.335-1.277c-.01-.753.582-1.278 1.324-1.278zm1.825.057h.581v1.917h.765v-1.916h.581v1.916h.764v-1.916h.582v2.44h-3.25v-2.44h-.024zm4.996-.057c.695 0 1.083.514 1.083 1.153-.002.08-.01.16-.022.239h-1.677c.034.422.365.65.73.65.25 0 .502-.114.695-.262l.24.433a1.566 1.566 0 01-.98.354c-.81 0-1.313-.582-1.313-1.278 0-.764.513-1.289 1.244-1.289zm1.368 1.985c.297-.046.514-.296.514-1.164v-.763h1.78v2.44h-.606v-1.95h-.593v.273c0 1.06-.285 1.677-1.095 1.7v-.536zm4.027-1.985c.695 0 1.083.514 1.083 1.153-.002.08-.01.16-.023.239h-1.676c.034.422.365.65.73.65.25 0 .502-.114.696-.262l.24.433a1.566 1.566 0 01-.982.354c-.81 0-1.311-.582-1.311-1.278 0-.764.513-1.289 1.243-1.289zm1.585.057h.605v.936h.296l.594-.935h.672l-.775 1.163v.011l.866 1.266h-.706l-.64-.992h-.318v.992h-.605v-2.44h.011zm-13.801 1.974c.399 0 .73-.308.73-.765 0-.444-.331-.764-.73-.764-.4 0-.719.309-.719.764 0 .457.32.765.719.765zm7.288-1.061c0-.32-.217-.513-.49-.513-.308 0-.536.205-.593.513h1.083zm5.395 0c0-.32-.216-.513-.49-.513-.308 0-.536.205-.593.513h1.083z"
                                    fill="#BCBCBC"></path>
                                <path
                                    d="M28.384 2.778v5.76a.158.158 0 01-.046.114.156.156 0 01-.114.045H27.05a.156.156 0 01-.16-.16v-5.76a.155.155 0 01.099-.148.156.156 0 01.061-.01h1.175a.156.156 0 01.16.159zm9.17-.16a.27.27 0 01.16.069c.034.034.034.09.023.136l-1.94 5.772a.162.162 0 01-.147.103H34.6c-.068 0-.125-.035-.148-.103l-1.13-3.365-1.13 3.365a.162.162 0 01-.147.102h-1.05c-.068 0-.125-.034-.148-.102l-1.939-5.772c-.011-.045-.011-.091.023-.136.023-.046.08-.069.125-.069h1.312c.068 0 .125.045.148.114l1.038 3.41 1.14-3.41a.163.163 0 01.15-.103h.923c.068 0 .125.034.148.103l1.141 3.41 1.038-3.41a.157.157 0 01.148-.114h1.312zm1.985 0c.08 0 .148.069.16.16v5.76a.158.158 0 01-.046.114.156.156 0 01-.114.045h-1.175a.156.156 0 01-.16-.16v-5.76a.155.155 0 01.098-.148.156.156 0 01.062-.01h1.175zM26.205 8.492c.069.08.012.194-.091.194h-1.438a.184.184 0 01-.148-.068l-.239-.297a3.217 3.217 0 01-1.723.514 3.184 3.184 0 010-6.365 3.184 3.184 0 013.183 3.182c0 .628-.183 1.22-.502 1.722l.958 1.118zm-12.01 2.795c.296.114.41.558.433.752.045.354-.057.491-.171.491-.114 0-.274-.137-.445-.41-.171-.274-.24-.582-.148-.742.056-.103.182-.148.33-.091zm-1.735 1.289a.89.89 0 01.57.24c.354.296.457.638.275.889a.6.6 0 01-.468.205.814.814 0 01-.536-.194c-.32-.273-.41-.73-.206-.98a.442.442 0 01.365-.16zM8.47 15.872A7.847 7.847 0 01.62 8.025a7.847 7.847 0 1115.695 0c0 1.47-.41 2.851-1.106 4.026-.023.034-.08.023-.092-.023-.273-1.927-1.448-2.989-3.16-3.308-.148-.023-.17-.114.024-.136.524-.046 1.266-.035 1.653.034A5.194 5.194 0 008.48 2.823a5.194 5.194 0 00-5.19 5.19 5.194 5.194 0 005.19 5.19h.24a7.002 7.002 0 01-.103-1.403c.012-.32.08-.365.217-.114.719 1.243 1.746 2.361 3.753 2.806 1.642.365 3.285.787 5.053 3.034.16.194-.08.4-.262.24-1.802-1.597-3.445-2.122-4.94-2.122-1.676.011-2.817.228-3.969.228zm14.884-8.657l-.627-.765c-.068-.08-.011-.205.091-.205h1.323c.069-.182.103-.388.103-.593 0-.946-.707-1.768-1.677-1.768-.969 0-1.676.822-1.676 1.768 0 .947.707 1.757 1.676 1.757.274.011.548-.069.787-.194z"
                                    fill="#FF8C00"></path>
                            </g>
                            <defs>
                                <clipPath id="qiwi_svg__a">
                                    <path fill="#fff" transform="translate(.444)" d="M0 0h39.626v18H0z"></path>
                                </clipPath>
                            </defs>
                        </g>
                        <g className="qiwi_svg__mono">
                            <g clip-path="url(#qiwi_svg__b)" fill="#34405E">
                                <path
                                    d="M19.863 10.18h.616v1.38h.445l.798-1.38h.674l-.959 1.62v.011l1.016 1.768h-.696l-.822-1.483h-.444v1.483h-.616v-3.4h-.012v.001zm3.97.901c.74 0 1.346.536 1.346 1.278 0 .753-.593 1.277-1.335 1.277-.741 0-1.335-.524-1.335-1.277-.01-.753.582-1.278 1.324-1.278zm1.825.057h.581v1.917h.765v-1.916h.581v1.916h.764v-1.916h.582v2.44h-3.25v-2.44h-.023zm4.996-.057c.695 0 1.083.514 1.083 1.153-.002.08-.01.16-.022.239h-1.677c.034.422.365.65.73.65.25 0 .502-.114.695-.262l.24.433a1.566 1.566 0 01-.98.354c-.81 0-1.313-.582-1.313-1.278 0-.764.514-1.289 1.244-1.289zm1.368 1.985c.297-.046.514-.296.514-1.164v-.763h1.78v2.44h-.605v-1.95h-.594v.273c0 1.06-.285 1.677-1.095 1.7v-.536zm4.027-1.985c.695 0 1.083.514 1.083 1.153-.002.08-.01.16-.022.239h-1.677c.034.422.365.65.73.65.25 0 .502-.114.696-.262l.24.433a1.566 1.566 0 01-.982.354c-.81 0-1.311-.582-1.311-1.278 0-.764.513-1.289 1.243-1.289zm1.585.057h.605v.936h.297l.593-.935h.672l-.775 1.163v.011l.867 1.266h-.707l-.64-.992h-.318v.992h-.605v-2.44h.011zm-13.801 1.974c.4 0 .73-.308.73-.765 0-.444-.33-.764-.73-.764-.4 0-.719.309-.719.764 0 .457.32.765.719.765zm7.288-1.061c0-.32-.216-.513-.49-.513-.308 0-.536.205-.593.513h1.083zm5.396 0c0-.32-.217-.513-.49-.513-.31 0-.537.205-.594.513h1.084z"></path>
                                <path
                                    d="M19.863 10.18h.616v1.38h.445l.798-1.38h.674l-.959 1.62v.011l1.016 1.768h-.696l-.822-1.483h-.444v1.483h-.616v-3.4h-.012v.001zm3.97.901c.74 0 1.346.536 1.346 1.278 0 .753-.593 1.277-1.335 1.277-.741 0-1.335-.524-1.335-1.277-.01-.753.582-1.278 1.324-1.278zm1.825.057h.581v1.917h.765v-1.916h.581v1.916h.764v-1.916h.582v2.44h-3.25v-2.44h-.023zm4.996-.057c.695 0 1.083.514 1.083 1.153-.002.08-.01.16-.022.239h-1.677c.034.422.365.65.73.65.25 0 .502-.114.695-.262l.24.433a1.566 1.566 0 01-.98.354c-.81 0-1.313-.582-1.313-1.278 0-.764.514-1.289 1.244-1.289zm1.368 1.985c.297-.046.514-.296.514-1.164v-.763h1.78v2.44h-.605v-1.95h-.594v.273c0 1.06-.285 1.677-1.095 1.7v-.536zm4.027-1.985c.695 0 1.083.514 1.083 1.153-.002.08-.01.16-.022.239h-1.677c.034.422.365.65.73.65.25 0 .502-.114.696-.262l.24.433a1.566 1.566 0 01-.982.354c-.81 0-1.311-.582-1.311-1.278 0-.764.513-1.289 1.243-1.289zm1.585.057h.605v.936h.297l.593-.935h.672l-.775 1.163v.011l.867 1.266h-.707l-.64-.992h-.318v.992h-.605v-2.44h.011zm-13.801 1.974c.4 0 .73-.308.73-.765 0-.444-.33-.764-.73-.764-.4 0-.719.309-.719.764 0 .457.32.765.719.765zm7.288-1.061c0-.32-.216-.513-.49-.513-.308 0-.536.205-.593.513h1.083zm5.396 0c0-.32-.217-.513-.49-.513-.31 0-.537.205-.594.513h1.084zM28.384 2.778v5.76a.157.157 0 01-.16.16H27.05a.156.156 0 01-.16-.16v-5.76a.156.156 0 01.16-.16h1.175a.156.156 0 01.16.16zm9.17-.16a.27.27 0 01.16.069c.034.034.034.09.023.136l-1.94 5.772a.163.163 0 01-.147.103H34.6c-.068 0-.125-.035-.148-.103l-1.13-3.365-1.129 3.365a.162.162 0 01-.148.102h-1.05c-.068 0-.125-.034-.148-.102l-1.939-5.772c-.011-.045-.011-.091.023-.136.023-.046.08-.069.125-.069h1.312c.068 0 .126.045.149.114l1.037 3.41 1.141-3.41a.162.162 0 01.148-.103h.924c.069 0 .126.034.148.103l1.141 3.41 1.038-3.41a.157.157 0 01.148-.114h1.312zm1.985 0c.08 0 .148.069.16.16v5.76a.157.157 0 01-.16.16h-1.175a.156.156 0 01-.16-.16v-5.76a.156.156 0 01.16-.16h1.175zM26.205 8.492c.069.08.012.194-.091.194h-1.438a.184.184 0 01-.148-.068l-.239-.297a3.217 3.217 0 01-1.723.514 3.184 3.184 0 010-6.365 3.184 3.184 0 013.183 3.182 3.2 3.2 0 01-.502 1.722l.958 1.118zm-12.01 2.795c.296.114.41.558.433.752.045.354-.057.491-.171.491-.114 0-.274-.137-.445-.41-.171-.274-.24-.582-.148-.742.056-.103.182-.148.33-.091zm-1.735 1.289a.89.89 0 01.57.24c.354.296.457.638.275.889a.6.6 0 01-.468.205.814.814 0 01-.536-.194c-.32-.273-.41-.73-.206-.98a.442.442 0 01.365-.16zM8.47 15.872A7.847 7.847 0 01.62 8.025a7.847 7.847 0 0115.695 0c0 1.47-.41 2.851-1.106 4.026-.023.034-.08.023-.092-.023-.273-1.927-1.448-2.989-3.16-3.308-.148-.023-.17-.114.024-.136.524-.046 1.266-.035 1.653.034A5.194 5.194 0 008.48 2.823a5.194 5.194 0 00-5.19 5.19 5.194 5.194 0 005.191 5.19h.24a7.002 7.002 0 01-.104-1.403c.012-.32.08-.365.217-.114.72 1.243 1.746 2.361 3.753 2.806 1.643.365 3.285.787 5.053 3.034.16.194-.08.4-.262.24-1.802-1.597-3.445-2.122-4.94-2.122-1.676.011-2.817.228-3.969.228zm14.885-8.657l-.628-.765c-.068-.08-.011-.205.091-.205h1.323c.069-.182.103-.388.103-.593 0-.946-.707-1.768-1.677-1.768-.969 0-1.676.822-1.676 1.768 0 .947.707 1.757 1.676 1.757.274.011.548-.069.788-.194z"></path>
                            </g>
                            <defs>
                                <clipPath id="qiwi_svg__b">
                                    <path fill="#fff" transform="translate(.444)" d="M0 0h39.626v18H0z"></path>
                                </clipPath>
                            </defs>
                        </g>
                    </svg>
                    <svg viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon"
                         style={{fontSize: '15px'}}>
                        <g className="ethereum_svg__color">
                            <path d="M9.068 0l-.121.41v11.902l.121.12 5.548-3.265L9.068 0z" fill="#343434"></path>
                            <path d="M9.068 0L3.52 9.167l5.548 3.266V0z" fill="#8C8C8C"></path>
                            <path d="M9.068 13.479L9 13.562v4.24l.068.198 5.552-7.785-5.552 3.264z"
                                  fill="#3C3C3B"></path>
                            <path d="M9.068 18v-4.521L3.52 10.215 9.068 18z" fill="#8C8C8C"></path>
                            <path d="M9.068 12.433l5.548-3.266-5.548-2.511v5.777z" fill="#141414"></path>
                            <path d="M3.52 9.167l5.548 3.266V6.656L3.52 9.167z" fill="#393939"></path>
                        </g>
                        <g className="ethereum_svg__mono">
                            <path d="M9.068 0l-.121.41v11.902l.121.12 5.548-3.265L9.068 0z" fill="#414653"></path>
                            <path d="M9.068 0L3.52 9.167l5.548 3.266V0z" fill="#34405E"></path>
                            <path d="M9.068 13.479L9 13.562v4.24l.068.198 5.552-7.785-5.552 3.264z"
                                  fill="#414653"></path>
                            <path d="M9.068 18v-4.521L3.52 10.215 9.068 18z" fill="#34405E"></path>
                            <path d="M9.068 12.433l5.548-3.266-5.548-2.511v5.777z" fill="#2E3038"></path>
                            <path d="M3.52 9.167l5.548 3.266V6.656L3.52 9.167z" fill="#3B3E49"></path>
                        </g>
                    </svg>
                    <svg viewBox="0 0 58 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon"
                         style={{fontSize: '15px'}}>
                        <g className="tether_svg__color">
                            <path d="M8.723 16.682a7.514 7.514 0 100-15.028 7.514 7.514 0 000 15.028z"
                                  fill="#26A17B"></path>
                            <path
                                d="M9.524 9.862V9.86c-.052.003-.32.019-.917.019-.477 0-.811-.013-.93-.02v.002c-1.835-.081-3.204-.4-3.204-.783 0-.382 1.37-.702 3.204-.783v1.248c.12.008.464.029.939.029.57 0 .855-.024.908-.029V8.297c1.832.082 3.197.401 3.197.783s-1.367.7-3.197.783v-.001zm0-1.694V7.052h2.555V5.35H5.123v1.702h2.555v1.116c-2.076.096-3.637.506-3.637 1 0 .492 1.562.903 3.637 1v3.578h1.848v-3.579c2.072-.095 3.63-.506 3.63-.999 0-.491-1.558-.903-3.63-.999"
                                fill="#fff"></path>
                            <path
                                d="M22.62 5.815V7.62h1.754v1.354h-1.766v2.746c0 .606.334.902.825.902.245 0 .529-.077.76-.193l.44 1.34c-.451.18-.826.258-1.303.271-1.38.052-2.282-.734-2.282-2.32V8.974h-1.186V7.62h1.186V5.983l1.572-.168zm30.241 1.72l.116.735c.49-.787 1.148-.903 1.793-.903.657 0 1.289.257 1.637.605l-.71 1.367c-.322-.27-.618-.413-1.134-.413-.825 0-1.586.438-1.586 1.611v3.352h-1.573V7.534l1.457.002zm-3.855 2.437c-.103-.825-.748-1.239-1.65-1.239-.85 0-1.548.414-1.78 1.239h3.43zm-3.455 1.302c.103.787.786 1.354 1.895 1.354.58 0 1.342-.22 1.703-.593l1.005.993c-.67.696-1.766 1.032-2.734 1.032-2.192 0-3.495-1.354-3.495-3.391 0-1.934 1.316-3.327 3.379-3.327 2.127 0 3.456 1.315 3.211 3.932h-4.964zm-6.937-6.409v3.533c.568-.735 1.264-.955 1.986-.955 1.805 0 2.605 1.225 2.605 3.095v3.353h-1.573v-3.34c0-1.16-.606-1.65-1.445-1.65-.929 0-1.573.787-1.573 1.741v3.25h-1.572V4.867l1.572-.002zm-4.177.877v1.805h1.754v1.354h-1.766v2.746c0 .607.336.903.825.903.245 0 .53-.078.761-.194l.439 1.341c-.451.18-.826.258-1.303.271-1.38.052-2.282-.736-2.282-2.32V8.9H31.68V7.547h1.186V5.91l1.572-.168zm-4.345 4.23c-.103-.825-.748-1.239-1.65-1.239-.851 0-1.548.414-1.78 1.239h3.43zm-3.455 1.302c.102.787.786 1.354 1.895 1.354.58 0 1.341-.22 1.702-.593l1.005.993c-.67.696-1.766 1.032-2.734 1.032-2.192 0-3.494-1.354-3.494-3.391 0-1.934 1.315-3.327 3.377-3.327 2.128 0 3.455 1.315 3.211 3.932h-4.962z"
                                fill="#5B5A5D"></path>
                            <path
                                d="M22.62 5.815V7.62h1.754v1.354h-1.766v2.746c0 .606.334.902.825.902.245 0 .529-.077.76-.193l.44 1.34c-.451.18-.826.258-1.303.271-1.38.052-2.282-.734-2.282-2.32V8.974h-1.186V7.62h1.186V5.983l1.572-.168zm30.241 1.72l.116.735c.49-.787 1.148-.903 1.793-.903.657 0 1.289.257 1.637.605l-.71 1.367c-.322-.27-.618-.413-1.134-.413-.825 0-1.586.438-1.586 1.611v3.352h-1.573V7.534l1.457.002zm-3.855 2.437c-.103-.825-.748-1.239-1.65-1.239-.85 0-1.548.414-1.78 1.239h3.43zm-3.455 1.302c.103.787.786 1.354 1.895 1.354.58 0 1.342-.22 1.703-.593l1.005.993c-.67.696-1.766 1.032-2.734 1.032-2.192 0-3.495-1.354-3.495-3.391 0-1.934 1.316-3.327 3.379-3.327 2.127 0 3.456 1.315 3.211 3.932h-4.964zm-6.937-6.409v3.533c.568-.735 1.264-.955 1.986-.955 1.805 0 2.605 1.225 2.605 3.095v3.353h-1.573v-3.34c0-1.16-.606-1.65-1.445-1.65-.929 0-1.573.787-1.573 1.741v3.25h-1.572V4.867l1.572-.002zm-4.177.877v1.805h1.754v1.354h-1.766v2.746c0 .607.336.903.825.903.245 0 .53-.078.761-.194l.439 1.341c-.451.18-.826.258-1.303.271-1.38.052-2.282-.736-2.282-2.32V8.9H31.68V7.547h1.186V5.91l1.572-.168zm-4.345 4.23c-.103-.825-.748-1.239-1.65-1.239-.851 0-1.548.414-1.78 1.239h3.43zm-3.455 1.302c.102.787.786 1.354 1.895 1.354.58 0 1.341-.22 1.702-.593l1.005.993c-.67.696-1.766 1.032-2.734 1.032-2.192 0-3.494-1.354-3.494-3.391 0-1.934 1.315-3.327 3.377-3.327 2.128 0 3.455 1.315 3.211 3.932h-4.962z"
                                fill="#BCBCBC"></path>
                        </g>
                        <g fill="#34405E" className="tether_svg__mono">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M16.237 9.168a7.514 7.514 0 11-15.028 0 7.514 7.514 0 0115.028 0zm-6.713.693v.002c1.83-.082 3.197-.401 3.197-.783s-1.365-.7-3.197-.783v1.247c-.053.005-.338.029-.908.029-.475 0-.82-.02-.939-.029V8.296c-1.834.081-3.204.401-3.204.783 0 .383 1.37.702 3.204.783V9.86c.119.006.453.019.93.019.597 0 .865-.016.917-.02zm0-2.81v1.117l.002.001c2.072.096 3.63.508 3.63 1s-1.558.903-3.63.998v3.579H7.678v-3.579c-2.075-.096-3.637-.507-3.637-1s1.56-.903 3.637-.999V7.052H5.123V5.35h6.956v1.702H9.524z"></path>
                            <path
                                d="M22.62 5.815V7.62h1.754v1.354h-1.766v2.746c0 .606.334.902.825.902.245 0 .529-.077.76-.193l.44 1.34c-.451.18-.826.258-1.303.271-1.38.052-2.282-.734-2.282-2.32V8.974h-1.186V7.62h1.186V5.983l1.572-.168zm30.241 1.72l.116.735c.49-.787 1.148-.903 1.793-.903.657 0 1.289.257 1.637.605l-.71 1.367c-.322-.27-.618-.413-1.134-.413-.825 0-1.586.438-1.586 1.611v3.352h-1.573V7.534l1.457.002zm-3.855 2.437c-.103-.825-.748-1.239-1.65-1.239-.85 0-1.548.414-1.78 1.239h3.43zm-3.455 1.302c.103.787.786 1.354 1.895 1.354.58 0 1.342-.22 1.703-.593l1.005.993c-.67.696-1.766 1.032-2.734 1.032-2.192 0-3.495-1.354-3.495-3.391 0-1.934 1.316-3.327 3.379-3.327 2.127 0 3.456 1.315 3.211 3.932h-4.964zm-6.937-6.409v3.533c.568-.735 1.264-.955 1.986-.955 1.805 0 2.605 1.225 2.605 3.095v3.353h-1.573v-3.34c0-1.16-.606-1.65-1.445-1.65-.929 0-1.573.787-1.573 1.741v3.25h-1.572V4.867l1.572-.002zm-4.177.877v1.805h1.754v1.354h-1.766v2.746c0 .607.336.903.825.903.245 0 .53-.078.761-.194l.439 1.341c-.451.18-.826.258-1.303.271-1.38.052-2.282-.736-2.282-2.32V8.9H31.68V7.547h1.186V5.91l1.572-.168zm-4.345 4.23c-.103-.825-.748-1.239-1.65-1.239-.851 0-1.548.414-1.78 1.239h3.43zm-3.455 1.302c.102.787.786 1.354 1.895 1.354.58 0 1.341-.22 1.702-.593l1.005.993c-.67.696-1.766 1.032-2.734 1.032-2.192 0-3.494-1.354-3.494-3.391 0-1.934 1.315-3.327 3.377-3.327 2.128 0 3.455 1.315 3.211 3.932h-4.962z"></path>
                            <path
                                d="M22.62 5.815V7.62h1.754v1.354h-1.766v2.746c0 .606.334.902.825.902.245 0 .529-.077.76-.193l.44 1.34c-.451.18-.826.258-1.303.271-1.38.052-2.282-.734-2.282-2.32V8.974h-1.186V7.62h1.186V5.983l1.572-.168zm30.241 1.72l.116.735c.49-.787 1.148-.903 1.793-.903.657 0 1.289.257 1.637.605l-.71 1.367c-.322-.27-.618-.413-1.134-.413-.825 0-1.586.438-1.586 1.611v3.352h-1.573V7.534l1.457.002zm-3.855 2.437c-.103-.825-.748-1.239-1.65-1.239-.85 0-1.548.414-1.78 1.239h3.43zm-3.455 1.302c.103.787.786 1.354 1.895 1.354.58 0 1.342-.22 1.703-.593l1.005.993c-.67.696-1.766 1.032-2.734 1.032-2.192 0-3.495-1.354-3.495-3.391 0-1.934 1.316-3.327 3.379-3.327 2.127 0 3.456 1.315 3.211 3.932h-4.964zm-6.937-6.409v3.533c.568-.735 1.264-.955 1.986-.955 1.805 0 2.605 1.225 2.605 3.095v3.353h-1.573v-3.34c0-1.16-.606-1.65-1.445-1.65-.929 0-1.573.787-1.573 1.741v3.25h-1.572V4.867l1.572-.002zm-4.177.877v1.805h1.754v1.354h-1.766v2.746c0 .607.336.903.825.903.245 0 .53-.078.761-.194l.439 1.341c-.451.18-.826.258-1.303.271-1.38.052-2.282-.736-2.282-2.32V8.9H31.68V7.547h1.186V5.91l1.572-.168zm-4.345 4.23c-.103-.825-.748-1.239-1.65-1.239-.851 0-1.548.414-1.78 1.239h3.43zm-3.455 1.302c.102.787.786 1.354 1.895 1.354.58 0 1.341-.22 1.702-.593l1.005.993c-.67.696-1.766 1.032-2.734 1.032-2.192 0-3.494-1.354-3.494-3.391 0-1.934 1.315-3.327 3.377-3.327 2.128 0 3.455 1.315 3.211 3.932h-4.962z"></path>
                        </g>
                    </svg>
                    <svg viewBox="0 0 59 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon"
                         style={{fontSize: '15px'}}>
                        <g className="skrill_svg__color">
                            <g clip-path="url(#skrill_svg__a)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M41.668 4.666c1.312 0 2.376-.907 2.376-2.026 0-1.12-1.064-2.028-2.376-2.028-1.31 0-2.374.908-2.374 2.028 0 1.119 1.063 2.026 2.374 2.026zM23.47 5.761c-.107.23-.879 2.09-2.745 4.018V1.535l-4.973.838v14.944h4.973v-4.62c1.44 1.845 2.151 4.62 2.151 4.62h5.957c-.59-2.09-3.167-5.945-3.167-5.945 2.313-2.503 3.33-5.17 3.49-5.611H23.47zm13.073-.156c-4.454.122-6.715 1.827-6.715 5.217v6.495h4.86v-5.296c0-2.03.311-2.9 3.133-2.983V5.664c-.474-.086-1.278-.06-1.278-.06zM7.413 7.406c-.61-.034-2.02-.112-2.02-1.195 0-1.308 2.03-1.308 2.792-1.308 1.339 0 3.073.338 4.311.654 0 0 .69.208 1.279.42l.054.013V2.41l-.075-.02c-1.461-.436-3.16-.855-6.311-.855-5.432 0-7.357 2.7-7.357 5.014 0 1.334.67 4.473 6.891 4.835.527.028 1.927.097 1.927 1.216 0 .925-1.146 1.47-3.073 1.47-2.112 0-4.161-.46-5.406-.896v3.688c1.863.417 3.963.625 6.425.625 5.311 0 7.69-2.555 7.69-5.088 0-2.872-2.662-4.738-7.128-4.993zm31.846 9.911h4.82V5.774h-4.82v11.543zM53.155 2.271v15.046h4.82V1.535l-4.82.736zm-7.034 0l4.816-.736v15.782H46.12V2.271z"
                                      fill="url(#skrill_svg__b)"></path>
                            </g>
                            <defs>
                                <linearGradient id="skrill_svg__b" x1="15.741" y1=".612" x2="18.936" y2="21.602"
                                                gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#6B195F"></stop>
                                    <stop offset="1" stop-color="#4C255B"></stop>
                                </linearGradient>
                                <clipPath id="skrill_svg__a">
                                    <path fill="#fff" transform="translate(.086)" d="M0 0h58v18H0z"></path>
                                </clipPath>
                            </defs>
                        </g>
                        <g className="skrill_svg__mono">
                            <g clip-path="url(#skrill_svg__c)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M42.068 4.666c1.313 0 2.376-.907 2.376-2.026 0-1.12-1.064-2.028-2.376-2.028-1.31 0-2.374.908-2.374 2.028 0 1.119 1.063 2.026 2.374 2.026zM23.87 5.761c-.107.23-.879 2.09-2.745 4.018V1.535l-4.973.838v14.944h4.973v-4.62c1.44 1.845 2.151 4.62 2.151 4.62h5.957c-.59-2.09-3.167-5.945-3.167-5.945 2.313-2.503 3.33-5.17 3.491-5.611H23.87zm13.073-.156c-4.454.122-6.715 1.827-6.715 5.217v6.495h4.86v-5.296c0-2.03.311-2.9 3.134-2.983V5.664c-.475-.086-1.279-.06-1.279-.06zM7.814 7.406c-.61-.034-2.02-.112-2.02-1.195 0-1.308 2.03-1.308 2.792-1.308 1.339 0 3.073.338 4.311.654 0 0 .69.208 1.279.42l.054.013V2.41l-.075-.02c-1.461-.436-3.16-.855-6.311-.855-5.432 0-7.357 2.7-7.357 5.014 0 1.334.67 4.473 6.891 4.835.527.028 1.927.097 1.927 1.216 0 .925-1.146 1.47-3.073 1.47-2.112 0-4.161-.46-5.406-.896v3.688c1.863.417 3.964.625 6.425.625 5.312 0 7.69-2.555 7.69-5.088 0-2.872-2.662-4.738-7.128-4.993zm31.846 9.911h4.82V5.774h-4.82v11.543zM53.555 2.271v15.046h4.82V1.535l-4.82.736zm-7.034 0l4.816-.736v15.782h-4.816V2.271z"
                                      fill="#34405E"></path>
                            </g>
                            <defs>
                                <clipPath id="skrill_svg__c">
                                    <path fill="#fff" transform="translate(.486)" d="M0 0h58v18H0z"></path>
                                </clipPath>
                            </defs>
                        </g>
                    </svg>
                    <svg viewBox="0 0 48 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon"
                         style={{fontSize: '15px'}}>
                        <g className="paytm_svg__color">
                            <path
                                d="M36.813 4.812l.373-.298c1.297-1.1 2.957-.98 4.067.326.112.131.168.14.28.028.074-.084.158-.149.233-.233.867-.849 2.014-1.1 3.087-.625 1.128.504 1.734 1.39 1.744 2.63.018 2.677.01 5.344.01 8.021 0 .951-.588 1.548-1.53 1.548-.373 0-.747-.028-1.12.01-.382.037-.494-.084-.494-.485.019-2.612.01-5.223.01-7.835v-.326c-.01-.606-.252-.858-.83-.886-.523-.028-.887.29-.943.82-.009.122 0 .253 0 .374v6.761c0 .99-.569 1.567-1.557 1.558-.504-.01-1.185.224-1.474-.103-.252-.28-.084-.942-.084-1.436V7.713c0-.82-.531-1.24-1.221-.96-.43.176-.57.522-.57.97.01 2.163 0 4.317 0 6.481v.513c-.027.905-.606 1.474-1.5 1.483-.374.01-.747-.028-1.12.01-.401.037-.522-.075-.513-.504.019-3.666.01-7.33.01-11.006 0-.158.009-.307 0-.466-.02-.205.065-.27.27-.27.858.009 1.706.009 2.564 0 .215 0 .318.056.299.289-.019.168 0 .317.01.56z"
                                fill="#02B9EF"></path>
                            <path
                                d="M17.041 9.867v3.824c-.01 1.66-.877 2.518-2.537 2.528-.727 0-1.464.01-2.191 0-1.474-.019-2.556-.998-2.63-2.472a29.97 29.97 0 01-.01-3.17c.075-1.512 1.231-2.575 2.76-2.593.402-.01.812 0 1.213 0 .392-.01.541-.234.532-.607 0-.373-.168-.54-.541-.522-.42.01-.84.01-1.26 0-1.025-.019-1.594-.578-1.585-1.585 0-.41-.186-.961.084-1.204.234-.205.765-.074 1.166-.074 1.045-.01 2.08 0 3.124 0 1.11 0 1.866.755 1.875 1.874.01 1.325 0 2.668 0 4.001zm-2.854 2.118v-.467c0-.951 0-.951-.951-.914-.476.019-.737.261-.746.756-.01.391-.01.774 0 1.165.01.672.308.85 1.277.877.719.019.355-.485.42-.765.038-.205-.01-.438 0-.652zM25.342 8.85c0 1.428.019 2.864-.01 4.291-.018 1.1-.28 2.098-1.342 2.686-.43.233-.896.364-1.38.373-1.073.019-2.146 0-3.218.019-.261 0-.317-.093-.308-.327.019-.391-.01-.774.01-1.165a1.36 1.36 0 011.333-1.343c.485-.02.96-.01 1.445 0 .392 0 .607-.159.607-.579 0-.429-.205-.578-.597-.587-.653-.019-1.306.074-1.95-.112-1.11-.327-1.92-1.25-1.949-2.397-.056-1.819-.018-3.637-.028-5.456 0-.205.066-.27.27-.261.766.01 1.521.019 2.286 0 .336-.01.289.177.289.382v4.104c0 .597.28.914.802.933.616.018.886-.234.886-.858 0-1.38.01-2.77-.01-4.15 0-.327.085-.42.411-.411.681.028 1.371.037 2.052 0 .373-.019.429.121.42.448-.028 1.464-.019 2.937-.019 4.41zM1.578 10.968v-4.57c0-1.492.914-2.425 2.416-2.406.979.01 1.958-.112 2.928.074 1.24.243 2.024 1.204 2.033 2.481.01 1.353 0 2.705 0 4.057 0 1.698-.998 2.733-2.695 2.78-.513.018-1.026.009-1.539 0-.233-.01-.336.065-.326.317.018.373.009.746 0 1.119-.02.802-.588 1.38-1.38 1.39-.467.009-1.055.195-1.353-.075-.28-.252-.075-.849-.084-1.297-.01-1.287 0-2.583 0-3.87zm2.817-2.285v.886c0 1.054 0 1.054 1.053.96.457-.037.672-.26.681-.717.01-.523-.018-1.054.01-1.577.056-1.51-.224-1.361-1.455-1.37-.224 0-.299.065-.299.289.019.503.01 1.016.01 1.53z"
                                fill="#06306F"></path>
                            <path
                                d="M27.981 10.987c0-1.24-.01-2.49.01-3.731 0-.29-.066-.41-.383-.401-.42.019-.98.14-1.212-.065-.29-.27-.066-.849-.103-1.297V5.4c0-.438-.14-.951.047-1.278.186-.326.755-.12 1.156-.224.793-.205 1.39-.662 1.875-1.296.335-.429.755-.737 1.296-.84.29-.055.466-.018.448.355-.028.522 0 1.054-.01 1.586-.009.223.075.298.299.289.373-.01.746.01 1.12-.01.223-.009.297.075.288.299-.01.765-.01 1.52 0 2.285 0 .214-.056.326-.289.298-.047-.009-.093 0-.14 0-.41.038-.98-.186-1.194.094-.205.26-.074.802-.074 1.221 0 2.537-.01 5.065.01 7.601 0 .355-.094.467-.448.439-.336-.028-.681 0-1.026-.01-1.008-.037-1.67-.718-1.67-1.725v-3.497z"
                                fill="#02B9EF"></path>
                        </g>
                        <g fill="#34405E" className="paytm_svg__mono">
                            <path
                                d="M37.213 4.812l.373-.298c1.297-1.1 2.957-.98 4.067.326.112.131.168.14.28.028.074-.084.158-.149.233-.233.867-.849 2.014-1.1 3.087-.625 1.128.504 1.734 1.39 1.744 2.63.019 2.677.01 5.344.01 8.021 0 .951-.588 1.548-1.53 1.548-.373 0-.746-.028-1.12.01-.382.037-.494-.084-.494-.485.019-2.612.01-5.223.01-7.835v-.326c-.01-.606-.252-.858-.83-.886-.523-.028-.887.29-.943.82-.009.122 0 .253 0 .374v6.761c0 .99-.569 1.567-1.557 1.558-.504-.01-1.184.224-1.474-.103-.252-.28-.084-.942-.084-1.436V7.713c0-.82-.531-1.24-1.221-.96-.43.176-.57.522-.57.97.01 2.163 0 4.317 0 6.481v.513c-.027.905-.605 1.474-1.5 1.483-.374.01-.747-.028-1.12.01-.401.037-.522-.075-.513-.504.019-3.666.01-7.33.01-11.006 0-.158.009-.307 0-.466-.02-.205.065-.27.27-.27.858.009 1.707.009 2.565 0 .214 0 .317.056.298.289-.019.168 0 .317.01.56zM17.441 9.867v3.824c-.01 1.66-.877 2.518-2.537 2.528-.727 0-1.464.01-2.191 0-1.474-.019-2.556-.998-2.63-2.472a29.974 29.974 0 01-.01-3.17c.075-1.512 1.231-2.575 2.76-2.593.402-.01.812 0 1.213 0 .392-.01.541-.234.532-.607 0-.373-.168-.54-.541-.522-.42.01-.84.01-1.259 0-1.026-.019-1.595-.578-1.585-1.585 0-.41-.187-.961.083-1.204.234-.205.765-.074 1.166-.074 1.045-.01 2.08 0 3.125 0 1.11 0 1.865.755 1.874 1.874.01 1.325 0 2.668 0 4.001zm-2.854 2.118v-.467c0-.951 0-.951-.951-.914-.476.019-.737.261-.746.756-.01.391-.01.774 0 1.165.01.672.308.85 1.278.877.718.019.354-.485.42-.765.037-.205-.01-.438 0-.652zM25.742 8.85c0 1.428.019 2.864-.01 4.291-.018 1.1-.279 2.098-1.342 2.686a2.998 2.998 0 01-1.38.373c-1.073.019-2.146 0-3.218.019-.261 0-.317-.093-.308-.327.019-.391-.01-.774.01-1.165a1.36 1.36 0 011.333-1.343c.485-.02.96-.01 1.446 0 .391 0 .606-.159.606-.579 0-.429-.205-.578-.597-.587-.653-.019-1.306.074-1.95-.112-1.11-.327-1.92-1.25-1.948-2.397-.056-1.819-.02-3.637-.029-5.456 0-.205.066-.27.271-.261.765.01 1.52.019 2.285 0 .336-.01.29.177.29.382v4.104c0 .597.279.914.801.933.616.018.886-.234.886-.858 0-1.38.01-2.77-.01-4.15 0-.327.085-.42.411-.411.681.028 1.371.037 2.052 0 .373-.019.429.121.42.448-.028 1.464-.019 2.937-.019 4.41zM1.978 10.968v-4.57c0-1.492.914-2.425 2.416-2.406.979.01 1.958-.112 2.928.074 1.24.243 2.024 1.204 2.033 2.481.01 1.353 0 2.705 0 4.057 0 1.698-.998 2.733-2.695 2.78-.513.018-1.026.009-1.539 0-.233-.01-.336.065-.326.317.018.373.009.746 0 1.119-.019.802-.588 1.38-1.38 1.39-.467.009-1.055.195-1.353-.075-.28-.252-.075-.849-.084-1.297-.01-1.287 0-2.583 0-3.87zm2.817-2.285v.886c0 1.054 0 1.054 1.054.96.457-.037.671-.26.68-.717.01-.523-.018-1.054.01-1.577.056-1.51-.224-1.361-1.455-1.37-.224 0-.299.065-.299.289.019.503.01 1.016.01 1.53zM28.381 10.987c0-1.24-.01-2.49.01-3.731 0-.29-.066-.41-.383-.401-.42.019-.98.14-1.212-.065-.29-.27-.066-.849-.103-1.297V5.4c0-.438-.14-.951.047-1.278.186-.326.755-.12 1.156-.224.793-.205 1.39-.662 1.875-1.296.336-.429.755-.737 1.296-.84.29-.055.467-.018.448.355-.028.522 0 1.054-.01 1.586-.009.223.075.298.299.289.373-.01.746.01 1.12-.01.223-.009.298.075.288.299-.009.765-.009 1.52 0 2.285 0 .214-.056.326-.289.298-.046-.009-.093 0-.14 0-.41.038-.979-.186-1.194.094-.205.26-.074.802-.074 1.221 0 2.537-.01 5.065.01 7.601 0 .355-.094.467-.448.439-.336-.028-.681 0-1.026-.01-1.008-.037-1.67-.718-1.67-1.725v-3.497z"></path>
                        </g>
                    </svg>
                    <svg viewBox="0 0 73 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon"
                         style={{fontSize: '15px'}}>
                        <g fill-rule="evenodd" clip-rule="evenodd" className="payeer_svg__color">
                            <path
                                d="M20.28 3.271c.366 1.128.731 2.257 1.065 3.258.413 1.223.834 2.454 1.255 3.686.42 1.231.842 2.462 1.255 3.686.19.557.38 1.13.573 1.712.258.78.52 1.573.793 2.355h-3.368l-1.303-3.781-5.879.032L13.402 18H10L16.005.014h3.21c.333 1.001.699 2.13 1.064 3.257zm-2.685 1.827l-1.97 6.134h4.004l-2.034-6.133zM10.02.65c1.367.667 2.098 1.875 2.384 3.336.35 1.78.286 3.528-.445 5.18-.54 1.112-1.462 1.811-2.606 2.256-1.36.521-3.25.515-4.753.51l-.426-.001V17.968H.837V.014h5.53c1.525 0 2.478.127 3.654.636zM6.653 8.912c.922-.127 1.525-.668 1.843-1.557.286-.763.223-1.59.096-2.415-.064-.636-.35-1.24-.954-1.621-.89-.54-3.463-.477-3.463-.477V9.04s1.684-.032 2.478-.127zM31.578.014L28.464 6.56 25.35.014h-3.686c.89 1.97 1.843 4.068 2.7 5.942.7 1.494 2.32 5.244 2.32 5.244l-.031 6.768h3.495V11.2c1.176-2.543 2.415-5.275 3.59-7.818.477-1.048 1.05-2.256 1.526-3.368-1.207 0-2.542-.032-3.686 0z"
                                fill="#fff"></path>
                            <path
                                d="M51.272 10.232h5.37V7.213h-5.37V3.02h6.038V0h-9.406v17.955h10.423v-3.02h-7.055v-4.703zM39.43 10.232h5.37V7.213h-5.37V3.02h6.037V0h-9.406v17.955h10.391v-3.02H39.43v-4.703zM71.568 5.307c0 2.351-1.494 4.226-3.464 4.989l4.226 7.658h-4.004l-4.003-7.277h-1.335v7.277h-3.4V0h6.705c2.923 0 5.275 1.907 5.275 5.307zm-8.58 2.447h2.573c1.176 0 2.13-1.113 2.13-2.447 0-1.526-1.05-2.352-2.32-2.352h-2.383v4.799z"
                                fill="#0095FF"></path>
                        </g>
                        <g fill-rule="evenodd" clip-rule="evenodd" fill="#34405E" className="payeer_svg__mono">
                            <path
                                d="M19.68 3.271c.366 1.128.731 2.257 1.065 3.258.413 1.223.834 2.454 1.255 3.686.421 1.231.842 2.462 1.255 3.686.19.557.38 1.13.573 1.712.258.78.52 1.573.794 2.355h-3.369l-1.303-3.781-5.878.032L12.8 18H9.4L15.405.014h3.21c.333 1.001.699 2.13 1.064 3.257zm-2.685 1.827l-1.97 6.134h4.004l-2.034-6.133zM9.42.65c1.367.667 2.098 1.875 2.384 3.336.35 1.78.286 3.528-.445 5.18-.54 1.112-1.462 1.811-2.606 2.256-1.36.521-3.25.515-4.753.51l-.426-.001V17.968H.237V.014h5.53c1.525 0 2.478.127 3.654.636zM6.053 8.912c.922-.127 1.526-.668 1.843-1.557.286-.763.223-1.59.096-2.415-.064-.636-.35-1.24-.954-1.621-.89-.54-3.463-.477-3.463-.477V9.04s1.684-.032 2.478-.127zM30.978.014L27.864 6.56 24.75.014h-3.686c.89 1.97 1.843 4.068 2.7 5.942.7 1.494 2.32 5.244 2.32 5.244l-.031 6.768h3.495V11.2c1.176-2.543 2.415-5.275 3.591-7.818.477-1.048 1.049-2.256 1.525-3.368-1.207 0-2.542-.032-3.686 0zM50.672 10.232h5.37V7.213h-5.37V3.02h6.038V0h-9.406v17.955h10.423v-3.02h-7.054v-4.703zM38.83 10.232h5.37V7.213h-5.37V3.02h6.037V0h-9.406v17.955h10.391v-3.02H38.83v-4.703zM70.968 5.307c0 2.351-1.494 4.226-3.464 4.989l4.226 7.658h-4.004l-4.004-7.277h-1.334v7.277h-3.4V0h6.705c2.923 0 5.275 1.907 5.275 5.307zm-8.58 2.447h2.574c1.175 0 2.129-1.113 2.129-2.447 0-1.526-1.049-2.352-2.32-2.352h-2.383v4.799z"></path>
                        </g>
                    </svg>
                    <svg width="84" height="18" viewBox="0 0 84 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                         className="icon" style={{fontSize: '15px'}}>
                        <g clip-path="url(#muchbetter_svg__clip0)" className="muchbetter_svg__color">
                            <path
                                d="M5.983 14.526a1.16 1.16 0 01-.963-.544L.332 5.902a1.156 1.156 0 01.419-1.548 1.156 1.156 0 011.548.418l4.689 8.037a1.156 1.156 0 01-.419 1.55c-.21.125-.377.167-.586.167z"
                                fill="#F69220"></path>
                            <path
                                d="M17.788 10.13c0-.586-.21-1.13-.544-1.716-.503-.92-1.089-1.507-1.884-1.884-.67-.334-1.423-.502-2.177-.418.251-.544.419-1.089.46-1.675.084-.837-.209-1.59-.711-2.511a4.204 4.204 0 00-1.214-1.34c-.502-.293-1.005-.502-1.59-.544a6.64 6.64 0 00-1.8.126c-.21.042-.42.125-.629.167l-.25.126c-.377.125-1.34.67-1.675.879l-1.633.963H4.1a1.332 1.332 0 00-.46 1.758 1.261 1.261 0 001.716.46h.042l2.637-1.507a2.66 2.66 0 01.754-.251c.25-.042.502 0 .753.042.251.084.46.21.712.377.21.167.377.376.544.628.126.25.251.502.293.795.042.293.042.544 0 .795s-.126.46-.293.67c-.126.21-.335.377-.544.502l-1.59.963-.67.377-.42.251c-.585.335-.753 1.047-.418 1.633.21.376.628.586 1.047.586.209 0 .418-.042.586-.168l.879-.502 2.26-1.214c.252-.126.46-.21.712-.21.251 0 .502.042.712.126.25.084.46.21.67.377.209.167.376.377.543.628.126.251.21.502.252.753.042.252.042.544-.042.796-.042.25-.168.46-.335.711-.168.21-.377.377-.628.544l-3.893 2.22h-.21l-.71.418-1.382.753c-.586.335-.838 1.088-.503 1.675.21.418.628.67 1.089.67.209 0 .418-.043.586-.168l3.349-1.8 2.72-1.465a7.617 7.617 0 001.591-1.214c.46-.46.796-.963 1.005-1.465.251-.586.377-1.13.335-1.717zM52.448 12.307c-.25 0-.544 0-.753-.21-.21-.208-.21-.501-.21-.753V5.065c0-.25 0-.544.21-.753.21-.21.502-.21.753-.21h2.344c1.633 0 2.554.921 2.554 2.303 0 .92-.586 1.507-1.047 1.716.503.251 1.13.754 1.13 1.842 0 1.549-1.046 2.386-2.511 2.386h-2.47v-.042zm.67-6.781V7.41h1.59c.67 0 1.047-.377 1.047-.963s-.377-.963-1.046-.963h-1.591v.042zm1.674 5.358c.712 0 1.089-.46 1.089-1.005 0-.544-.335-1.004-1.089-1.004h-1.674v2.009h1.674zM59.983 9.754c0 .795.46 1.34 1.34 1.34.377 0 .753-.084 1.046-.335.251-.168.377-.21.544-.21.293 0 .587.293.587.628 0 .293-.252.544-.587.754-.418.293-.962.418-1.632.418-1.423 0-2.805-.628-2.805-3.098 0-1.967 1.047-3.097 2.637-3.097 1.633 0 2.554 1.172 2.638 2.679 0 .251-.042.502-.21.67-.209.209-.418.209-.67.209h-2.888v.042zm2.177-1.675c-.167-.376-.502-.628-1.005-.628-.502 0-.837.252-1.004.628-.084.21-.126.377-.126.67h2.302a2.606 2.606 0 00-.167-.67zM65.216 7.619h-.168c-.293 0-.377 0-.502-.084a.533.533 0 01-.293-.502c0-.21.084-.419.293-.502.125-.084.21-.084.502-.084h.168V5.65c0-.376 0-.502.083-.67a.74.74 0 01.67-.376c.293 0 .544.126.67.377.084.167.084.293.084.67v.795h.46c.293 0 .377 0 .502.084a.533.533 0 01.293.502c0 .21-.083.418-.292.502-.126.084-.21.084-.503.084h-.46v2.888c0 .293.083.503.502.545.21 0 .335.041.46.083.168.084.293.251.293.544 0 .252-.125.46-.292.545-.126.083-.335.083-.628.083h-.084c-1.256 0-1.758-.837-1.758-1.716V7.619zM69.276 7.619h-.167c-.293 0-.377 0-.503-.084a.533.533 0 01-.293-.502c0-.21.084-.419.293-.502.126-.084.21-.084.503-.084h.167V5.65c0-.376 0-.502.084-.67a.74.74 0 01.67-.376c.293 0 .544.126.67.377.083.167.083.293.083.67v.795h.46c.294 0 .377 0 .503.084a.533.533 0 01.293.502c0 .21-.084.418-.293.502-.126.084-.21.084-.502.084h-.46v2.888c0 .293.083.503.501.545.21 0 .335.041.46.083.168.084.294.251.294.544 0 .252-.126.46-.293.545-.126.083-.335.083-.628.083h-.084c-1.256 0-1.758-.837-1.758-1.716V7.619zM74.132 9.754c0 .795.46 1.34 1.34 1.34.376 0 .753-.084 1.046-.335.251-.168.377-.21.544-.21.293 0 .586.293.586.628 0 .293-.25.544-.586.754-.418.293-.963.418-1.632.418-1.424 0-2.805-.628-2.805-3.098 0-1.967 1.046-3.097 2.637-3.097 1.633 0 2.554 1.172 2.637 2.679 0 .251-.041.502-.209.67-.21.209-.418.209-.67.209h-2.888v.042zm2.177-1.675c-.168-.376-.503-.628-1.005-.628-.502 0-.837.252-1.005.628-.083.21-.125.377-.125.67h2.302c-.084-.293-.084-.46-.167-.67zM81.96 6.195c.46 0 .753.084 1.046.293.21.168.377.377.377.628 0 .21-.084.419-.21.544a.772.772 0 01-.502.21c-.167 0-.293-.042-.502-.168-.167-.083-.376-.167-.586-.167-.502 0-1.004.335-1.004 1.088v2.68c0 .376 0 .502-.084.67a.74.74 0 01-.67.376c-.335 0-.544-.126-.67-.377-.084-.167-.084-.293-.084-.67v-4.06c0-.377 0-.503.126-.67a.738.738 0 01.628-.335.67.67 0 01.46.168c.126.125.21.25.21.46.335-.335.879-.67 1.465-.67z"
                                fill="#606060"></path>
                            <path
                                d="M26.578 10.13L25.24 7.493v3.684c0 .377 0 .502-.126.712a.813.813 0 01-.711.376.812.812 0 01-.712-.377c-.084-.209-.125-.334-.125-.711V5.023c0-.335.041-.586.25-.753a.796.796 0 01.545-.21c.21 0 .335.042.46.126.168.084.293.293.419.502l2.051 3.893 2.051-3.893c.084-.209.252-.376.419-.502a.844.844 0 01.46-.125c.21 0 .377.083.545.209.209.21.25.418.25.753v6.196c0 .376 0 .502-.125.711a.813.813 0 01-.712.377.813.813 0 01-.711-.377c-.084-.209-.126-.335-.126-.711V7.535l-1.214 2.595c-.209.377-.376.544-.753.544s-.586-.125-.796-.544z"
                                fill="#F69220"></path>
                            <path
                                d="M30.262 12.349c-.335 0-.628-.167-.753-.419-.126-.209-.126-.335-.126-.711V7.786l-1.214 2.386c-.21.377-.377.586-.837.586-.419 0-.628-.209-.837-.586L25.28 7.786v3.433c0 .377 0 .502-.126.711-.125.252-.418.419-.753.419s-.628-.167-.754-.419c-.125-.209-.125-.376-.125-.711V5.023c0-.334.042-.586.25-.837a.76.76 0 01.587-.25c.21 0 .377.04.502.125.21.125.335.376.419.502l1.967 3.767 1.968-3.767c.083-.126.209-.377.418-.502.126-.084.293-.126.503-.126a.76.76 0 01.586.251c.209.21.25.46.25.837v6.196c0 .377 0 .502-.125.711.042.252-.25.419-.586.419zm-.753-5.107v3.977c0 .377 0 .502.084.67.125.209.376.334.627.334.293 0 .503-.125.628-.335.084-.167.084-.293.084-.67V5.024c0-.334-.042-.544-.21-.711a.693.693 0 00-.502-.21.954.954 0 00-.46.126c-.126.084-.251.251-.377.46L27.29 8.666 25.197 4.69c-.125-.21-.251-.377-.377-.46a.752.752 0 00-.46-.127.693.693 0 00-.502.21c-.168.167-.21.418-.21.711v6.196c0 .377 0 .502.084.67.126.209.377.334.628.334.293 0 .502-.125.628-.335.21-.167.21-.293.21-.67V7.243l1.464 2.846c.21.42.377.545.712.545.335 0 .502-.126.712-.544l1.423-2.847zM34.616 12.307c-.586 0-1.089-.209-1.423-.544-.503-.502-.628-1.046-.628-1.716V7.2c0-.376 0-.502.083-.67.126-.209.335-.334.628-.334s.544.125.628.335c.084.167.084.293.084.67v2.637c0 .795.502 1.088 1.005 1.088.46 0 1.004-.251 1.004-1.088V7.2c0-.376 0-.502.084-.67.125-.209.335-.334.628-.334s.544.125.628.335c.083.167.083.293.083.67v4.018c0 .377 0 .502-.125.67a.738.738 0 01-.628.335.67.67 0 01-.46-.168c-.126-.125-.168-.25-.21-.418-.251.46-.837.67-1.381.67z"
                                fill="#F69220"></path>
                            <path
                                d="M34.616 12.391c-.586 0-1.089-.21-1.465-.544-.419-.419-.628-.963-.628-1.758V7.242c0-.377 0-.502.083-.711.126-.252.377-.377.712-.377.335 0 .586.125.712.377.083.167.083.334.083.711V9.88c0 .921.712 1.005.921 1.005.21 0 .921-.084.921-1.005V7.242c0-.377 0-.502.084-.711.126-.252.377-.377.712-.377.335 0 .586.125.711.377.084.167.084.334.084.711v4.019c0 .377 0 .502-.126.711a.813.813 0 01-.711.377.694.694 0 01-.503-.21c-.125-.083-.167-.208-.209-.334-.293.377-.837.586-1.381.586zM33.36 6.279c-.293 0-.502.126-.586.335-.084.126-.084.293-.084.628v2.847c0 .753.168 1.255.586 1.632.335.335.795.503 1.382.503.544 0 1.088-.21 1.465-.628l.083-.084.042.125c.042.21.084.294.21.42.125.083.25.167.418.167.251 0 .503-.126.586-.293.084-.168.084-.252.084-.628V7.284c0-.377 0-.502-.084-.628-.084-.21-.335-.335-.586-.335-.251 0-.502.126-.586.335-.084.126-.084.293-.084.628v2.637c0 .838-.544 1.13-1.046 1.13s-1.047-.293-1.047-1.13V7.284c0-.377 0-.502-.083-.628-.21-.251-.419-.377-.67-.377zM42.611 6.488c.335.168.712.46.712.837 0 .21-.084.335-.21.503-.083.125-.292.209-.46.209-.167 0-.293-.042-.502-.21-.252-.167-.419-.25-.712-.25-.335 0-.628.125-.837.376-.21.293-.335.67-.335 1.298s.084 1.046.335 1.34c.21.25.502.376.837.376.293 0 .46-.084.712-.25.209-.168.335-.21.502-.21.168 0 .335.084.46.21.126.125.21.292.21.501 0 .377-.377.67-.712.838-.335.209-.711.293-1.172.293-1.172 0-2.679-.628-2.679-3.056s1.465-3.056 2.68-3.056a1.87 1.87 0 011.171.251z"
                                fill="#F69220"></path>
                            <path
                                d="M41.397 12.39a2.952 2.952 0 01-1.842-.627c-.586-.544-.92-1.382-.92-2.47 0-1.13.292-1.926.92-2.47.586-.544 1.34-.628 1.842-.628.46 0 .837.084 1.214.293.335.168.754.46.754.88 0 .209-.084.376-.21.544a.772.772 0 01-.502.209c-.167 0-.335-.042-.544-.21-.251-.167-.419-.25-.67-.25a.972.972 0 00-.795.376c-.21.293-.335.67-.335 1.256 0 .628.084 1.005.335 1.298.209.25.46.376.795.376.251 0 .46-.083.67-.25.21-.126.335-.252.544-.252.167 0 .377.084.502.21.168.167.21.334.21.544 0 .335-.252.628-.754.92a2.733 2.733 0 01-1.214.252zm.042-6.111c-.795 0-2.595.293-2.595 2.972 0 2.721 1.8 3.014 2.595 3.014.46 0 .795-.084 1.13-.293.46-.251.67-.502.67-.795 0-.168-.084-.293-.21-.46a.64.64 0 00-.418-.168c-.167 0-.293.042-.46.21-.252.208-.46.25-.754.25-.377 0-.67-.125-.879-.418-.251-.293-.335-.712-.335-1.34 0-.628.126-1.046.335-1.34.21-.25.502-.418.88-.418.334 0 .502.084.753.251.209.126.335.21.46.21.168 0 .293-.084.419-.168a.672.672 0 00.209-.46c0-.377-.419-.67-.67-.796-.335-.167-.67-.251-1.13-.251zM49.225 11.93c-.126.21-.335.335-.628.335s-.544-.125-.628-.335c-.083-.167-.083-.293-.083-.67V8.623c0-.795-.503-1.088-1.005-1.088-.502 0-1.005.251-1.005 1.088v2.638c0 .376 0 .502-.084.67-.125.209-.334.334-.627.334s-.545-.125-.628-.335c-.084-.167-.084-.293-.084-.67V5.066c0-.377 0-.502.084-.67.125-.209.335-.334.628-.334s.544.125.627.334c.084.168.084.293.084.67v1.758c.377-.376.796-.628 1.465-.628.586 0 1.089.21 1.424.545.502.502.627 1.046.627 1.716v2.846c-.041.335-.083.46-.167.628z"
                                fill="#F69220"></path>
                            <path
                                d="M48.597 12.35c-.335 0-.586-.126-.712-.378-.083-.167-.083-.335-.083-.711V8.624c0-.921-.712-1.005-.921-1.005-.21 0-.921.084-.921 1.005v2.637c0 .377 0 .502-.084.711-.125.252-.377.377-.711.377-.335 0-.586-.125-.712-.377-.084-.167-.084-.335-.084-.711V5.065c0-.376 0-.502.084-.711.126-.251.377-.377.712-.377.334 0 .586.126.711.377.084.167.084.335.084.711v1.633c.419-.377.837-.544 1.381-.544.586 0 1.089.21 1.465.544.42.419.628.963.628 1.758v2.847c0 .376 0 .502-.083.711-.168.21-.419.335-.754.335zm-1.716-4.857c.502 0 1.046.293 1.046 1.13v2.638c0 .377 0 .502.084.628.084.209.335.335.586.335.251 0 .502-.126.586-.335.084-.126.084-.293.084-.628V8.414c0-.753-.168-1.256-.586-1.632-.335-.335-.795-.503-1.381-.503-.587 0-1.005.168-1.424.586l-.125.126V5.065c0-.376 0-.502-.084-.627-.084-.21-.335-.335-.586-.335-.293 0-.502.125-.586.335-.084.125-.084.293-.084.627v6.238c0 .376 0 .502.084.627.084.21.335.335.586.335.251 0 .502-.125.586-.335.084-.125.084-.293.084-.627V8.665c.041-.879.586-1.172 1.13-1.172z"
                                fill="#F69220"></path>
                        </g>
                        <g clip-path="url(#muchbetter_svg__clip0)" className="muchbetter_svg__mono">
                            <path
                                d="M5.983 14.526a1.16 1.16 0 01-.963-.544L.332 5.902a1.156 1.156 0 01.419-1.548 1.156 1.156 0 011.548.418l4.689 8.037a1.156 1.156 0 01-.419 1.55c-.21.125-.377.167-.586.167z"
                                fill="#4A5370"></path>
                            <path
                                d="M17.788 10.13c0-.586-.21-1.13-.544-1.716-.503-.92-1.089-1.507-1.884-1.884-.67-.334-1.423-.502-2.177-.418.251-.544.419-1.089.46-1.675.084-.837-.209-1.59-.711-2.511a4.204 4.204 0 00-1.214-1.34c-.502-.293-1.005-.502-1.59-.544a6.64 6.64 0 00-1.8.126c-.21.042-.42.125-.629.167l-.25.126c-.377.125-1.34.67-1.675.879l-1.633.963H4.1a1.332 1.332 0 00-.46 1.758 1.261 1.261 0 001.716.46h.042l2.637-1.507a2.66 2.66 0 01.754-.251c.25-.042.502 0 .753.042.251.084.46.21.712.377.21.167.377.376.544.628.126.25.251.502.293.795.042.293.042.544 0 .795s-.126.46-.293.67c-.126.21-.335.377-.544.502l-1.59.963-.67.377-.42.251c-.585.335-.753 1.047-.418 1.633.21.376.628.586 1.047.586.209 0 .418-.042.586-.168l.879-.502 2.26-1.214c.252-.126.46-.21.712-.21.251 0 .502.042.712.126.25.084.46.21.67.377.209.167.376.377.543.628.126.251.21.502.252.753.042.252.042.544-.042.796-.042.25-.168.46-.335.711-.168.21-.377.377-.628.544l-3.893 2.22h-.21l-.71.418-1.382.753c-.586.335-.838 1.088-.503 1.675.21.418.628.67 1.089.67.209 0 .418-.043.586-.168l3.349-1.8 2.72-1.465a7.613 7.613 0 001.591-1.214 4.59 4.59 0 001.005-1.465c.251-.586.377-1.13.335-1.717zM52.448 12.307c-.25 0-.544 0-.753-.21-.21-.208-.21-.501-.21-.753V5.065c0-.25 0-.544.21-.753.21-.21.502-.21.753-.21h2.344c1.633 0 2.554.921 2.554 2.303 0 .92-.586 1.507-1.047 1.716.503.251 1.13.754 1.13 1.842 0 1.549-1.046 2.386-2.511 2.386h-2.47v-.042zm.67-6.781V7.41h1.59c.67 0 1.047-.377 1.047-.963s-.377-.963-1.046-.963h-1.591v.042zm1.674 5.358c.712 0 1.089-.46 1.089-1.005 0-.544-.335-1.004-1.089-1.004h-1.674v2.009h1.674zM59.983 9.754c0 .795.46 1.34 1.34 1.34.377 0 .753-.084 1.046-.335.251-.168.377-.21.544-.21.293 0 .587.293.587.628 0 .293-.252.544-.587.754-.418.293-.962.418-1.632.418-1.423 0-2.805-.628-2.805-3.098 0-1.967 1.047-3.097 2.637-3.097 1.633 0 2.554 1.172 2.638 2.679 0 .251-.042.502-.21.67-.209.209-.418.209-.67.209h-2.888v.042zm2.177-1.675c-.167-.376-.502-.628-1.005-.628-.502 0-.837.252-1.004.628-.084.21-.126.377-.126.67h2.302a2.606 2.606 0 00-.167-.67zM65.216 7.619h-.168c-.293 0-.377 0-.502-.084a.533.533 0 01-.293-.502c0-.21.084-.419.293-.502.125-.084.21-.084.502-.084h.168V5.65c0-.376 0-.502.083-.67a.74.74 0 01.67-.376c.293 0 .544.126.67.377.084.167.084.293.084.67v.795h.46c.293 0 .377 0 .502.084a.533.533 0 01.293.502c0 .21-.083.418-.292.502-.126.084-.21.084-.503.084h-.46v2.888c0 .293.083.503.502.545.21 0 .335.041.46.083.168.084.293.251.293.544 0 .252-.125.46-.292.545-.126.083-.335.083-.628.083h-.084c-1.256 0-1.758-.837-1.758-1.716V7.619zM69.276 7.619h-.167c-.293 0-.377 0-.503-.084a.533.533 0 01-.293-.502c0-.21.084-.419.293-.502.126-.084.21-.084.503-.084h.167V5.65c0-.376 0-.502.084-.67a.74.74 0 01.67-.376c.293 0 .544.126.67.377.083.167.083.293.083.67v.795h.46c.294 0 .377 0 .503.084a.533.533 0 01.293.502c0 .21-.084.418-.293.502-.126.084-.21.084-.502.084h-.46v2.888c0 .293.083.503.501.545.21 0 .335.041.46.083.168.084.294.251.294.544 0 .252-.126.46-.293.545-.126.083-.335.083-.628.083h-.084c-1.256 0-1.758-.837-1.758-1.716V7.619zM74.132 9.754c0 .795.46 1.34 1.34 1.34.376 0 .753-.084 1.046-.335.251-.168.377-.21.544-.21.293 0 .586.293.586.628 0 .293-.25.544-.586.754-.418.293-.963.418-1.632.418-1.424 0-2.805-.628-2.805-3.098 0-1.967 1.046-3.097 2.637-3.097 1.633 0 2.554 1.172 2.637 2.679 0 .251-.041.502-.209.67-.21.209-.418.209-.67.209h-2.888v.042zm2.177-1.675c-.168-.376-.503-.628-1.005-.628-.502 0-.837.252-1.005.628-.083.21-.125.377-.125.67h2.302c-.084-.293-.084-.46-.167-.67zM81.96 6.195c.46 0 .753.084 1.046.293.21.168.377.377.377.628 0 .21-.084.419-.21.544a.772.772 0 01-.502.21c-.167 0-.293-.042-.502-.168-.167-.083-.376-.167-.586-.167-.502 0-1.004.335-1.004 1.088v2.68c0 .376 0 .502-.084.67a.74.74 0 01-.67.376c-.335 0-.544-.126-.67-.377-.084-.167-.084-.293-.084-.67v-4.06c0-.377 0-.503.126-.67a.738.738 0 01.628-.335.67.67 0 01.46.168c.126.125.21.25.21.46.335-.335.879-.67 1.465-.67z"
                                fill="#34405E"></path>
                            <path
                                d="M26.578 10.13L25.24 7.493v3.684c0 .377 0 .502-.126.712a.813.813 0 01-.711.376.812.812 0 01-.712-.377c-.084-.209-.125-.334-.125-.711V5.023c0-.335.041-.586.25-.753a.796.796 0 01.545-.21c.21 0 .335.042.46.126.168.084.293.293.419.502l2.051 3.893 2.051-3.893c.084-.209.252-.376.419-.502a.844.844 0 01.46-.125c.21 0 .377.083.545.209.209.21.25.418.25.753v6.196c0 .376 0 .502-.125.711a.813.813 0 01-.712.377.813.813 0 01-.711-.377c-.084-.209-.126-.335-.126-.711V7.535l-1.214 2.595c-.209.377-.376.544-.753.544s-.586-.125-.796-.544z"
                                fill="#4A5370"></path>
                            <path
                                d="M30.262 12.349c-.335 0-.628-.167-.753-.419-.126-.209-.126-.335-.126-.711V7.786l-1.214 2.386c-.21.377-.377.586-.837.586-.419 0-.628-.209-.837-.586L25.28 7.786v3.433c0 .377 0 .502-.126.711-.125.252-.418.419-.753.419s-.628-.167-.754-.419c-.125-.209-.125-.376-.125-.711V5.023c0-.334.042-.586.25-.837a.76.76 0 01.587-.25c.21 0 .377.04.502.125.21.125.335.376.419.502l1.967 3.767 1.968-3.767c.083-.126.209-.377.418-.502.126-.084.293-.126.503-.126a.76.76 0 01.586.251c.209.21.25.46.25.837v6.196c0 .377 0 .502-.125.711.042.252-.25.419-.586.419zm-.753-5.107v3.977c0 .377 0 .502.084.67.125.209.376.334.627.334.293 0 .503-.125.628-.335.084-.167.084-.293.084-.67V5.024c0-.334-.042-.544-.21-.711a.693.693 0 00-.502-.21.954.954 0 00-.46.126c-.126.084-.251.251-.377.46L27.29 8.666 25.197 4.69c-.125-.21-.251-.377-.377-.46a.752.752 0 00-.46-.127.693.693 0 00-.502.21c-.168.167-.21.418-.21.711v6.196c0 .377 0 .502.084.67.126.209.377.334.628.334.293 0 .502-.125.628-.335.21-.167.21-.293.21-.67V7.243l1.464 2.846c.21.42.377.545.712.545.335 0 .502-.126.712-.544l1.423-2.847zM34.616 12.307c-.586 0-1.089-.209-1.423-.544-.503-.502-.628-1.046-.628-1.716V7.2c0-.376 0-.502.083-.67.126-.209.335-.334.628-.334s.544.125.628.335c.084.167.084.293.084.67v2.637c0 .795.502 1.088 1.005 1.088.46 0 1.004-.251 1.004-1.088V7.2c0-.376 0-.502.084-.67.125-.209.335-.334.628-.334s.544.125.628.335c.083.167.083.293.083.67v4.018c0 .377 0 .502-.125.67a.738.738 0 01-.628.335.67.67 0 01-.46-.168c-.126-.125-.168-.25-.21-.418-.251.46-.837.67-1.381.67z"
                                fill="#4A5370"></path>
                            <path
                                d="M34.616 12.391c-.586 0-1.089-.21-1.465-.544-.419-.419-.628-.963-.628-1.758V7.242c0-.377 0-.502.083-.711.126-.252.377-.377.712-.377.335 0 .586.125.712.377.083.167.083.334.083.711V9.88c0 .921.712 1.005.921 1.005.21 0 .921-.084.921-1.005V7.242c0-.377 0-.502.084-.711.126-.252.377-.377.712-.377.335 0 .586.125.711.377.084.167.084.334.084.711v4.019c0 .377 0 .502-.126.711a.813.813 0 01-.711.377.694.694 0 01-.503-.21c-.125-.083-.167-.208-.209-.334-.293.377-.837.586-1.381.586zM33.36 6.279c-.293 0-.502.126-.586.335-.084.126-.084.293-.084.628v2.847c0 .753.168 1.255.586 1.632.335.335.795.503 1.382.503.544 0 1.088-.21 1.465-.628l.083-.084.042.125c.042.21.084.294.21.42.125.083.25.167.418.167.251 0 .503-.126.586-.293.084-.168.084-.252.084-.628V7.284c0-.377 0-.502-.084-.628-.084-.21-.335-.335-.586-.335-.251 0-.502.126-.586.335-.084.126-.084.293-.084.628v2.637c0 .838-.544 1.13-1.046 1.13s-1.047-.293-1.047-1.13V7.284c0-.377 0-.502-.083-.628-.21-.251-.419-.377-.67-.377zM42.611 6.488c.335.168.712.46.712.837 0 .21-.084.335-.21.503-.083.125-.293.209-.46.209-.167 0-.293-.042-.502-.21-.252-.167-.419-.25-.712-.25-.335 0-.628.125-.837.376-.21.293-.335.67-.335 1.298s.084 1.046.335 1.34c.21.25.502.376.837.376.293 0 .46-.084.712-.25.209-.168.334-.21.502-.21.167 0 .335.084.46.21.126.125.21.292.21.501 0 .377-.377.67-.712.838-.335.209-.712.293-1.172.293-1.172 0-2.68-.628-2.68-3.056s1.466-3.056 2.68-3.056a1.87 1.87 0 011.172.251z"
                                fill="#4A5370"></path>
                            <path
                                d="M41.397 12.39a2.952 2.952 0 01-1.842-.627c-.586-.544-.92-1.382-.92-2.47 0-1.13.292-1.926.92-2.47.586-.544 1.34-.628 1.842-.628.46 0 .837.084 1.214.293.335.168.754.46.754.88 0 .209-.084.376-.21.544a.772.772 0 01-.502.209c-.168 0-.335-.042-.544-.21-.252-.167-.419-.25-.67-.25a.972.972 0 00-.795.376c-.21.293-.335.67-.335 1.256 0 .628.083 1.005.335 1.298.209.25.46.376.795.376.251 0 .46-.083.67-.25.209-.126.335-.252.544-.252.167 0 .377.084.502.21.168.167.21.334.21.544 0 .335-.252.628-.754.92a2.733 2.733 0 01-1.214.252zm.042-6.111c-.795 0-2.595.293-2.595 2.972 0 2.721 1.8 3.014 2.595 3.014.46 0 .795-.084 1.13-.293.46-.251.67-.502.67-.795 0-.168-.084-.293-.21-.46a.64.64 0 00-.418-.168c-.167 0-.293.042-.46.21-.252.208-.46.25-.754.25-.377 0-.67-.125-.879-.418-.251-.293-.335-.712-.335-1.34 0-.628.126-1.046.335-1.34.21-.25.502-.418.88-.418.334 0 .501.084.753.251.209.126.334.21.46.21.168 0 .293-.084.419-.168a.672.672 0 00.209-.46c0-.377-.419-.67-.67-.796-.335-.167-.67-.251-1.13-.251zM49.225 11.93c-.126.21-.335.335-.628.335s-.544-.125-.628-.335c-.083-.167-.083-.293-.083-.67V8.623c0-.795-.503-1.088-1.005-1.088-.502 0-1.005.251-1.005 1.088v2.638c0 .376 0 .502-.084.67-.125.209-.334.334-.627.334s-.545-.125-.628-.335c-.084-.167-.084-.293-.084-.67V5.066c0-.377 0-.502.084-.67.125-.209.335-.334.628-.334s.544.125.627.334c.084.168.084.293.084.67v1.758c.377-.376.796-.628 1.465-.628.586 0 1.089.21 1.424.545.502.502.627 1.046.627 1.716v2.846c-.041.335-.083.46-.167.628z"
                                fill="#4A5370"></path>
                            <path
                                d="M48.597 12.35c-.335 0-.586-.126-.712-.378-.083-.167-.083-.335-.083-.711V8.624c0-.921-.712-1.005-.921-1.005-.21 0-.921.084-.921 1.005v2.637c0 .377 0 .502-.084.711-.125.252-.377.377-.711.377-.335 0-.586-.125-.712-.377-.084-.167-.084-.335-.084-.711V5.065c0-.376 0-.502.084-.711.126-.251.377-.377.712-.377.334 0 .586.126.711.377.084.167.084.335.084.711v1.633c.419-.377.837-.544 1.381-.544.586 0 1.089.21 1.465.544.42.419.628.963.628 1.758v2.847c0 .376 0 .502-.083.711-.168.21-.419.335-.754.335zm-1.716-4.857c.502 0 1.046.293 1.046 1.13v2.638c0 .377 0 .502.084.628.084.209.335.335.586.335.251 0 .502-.126.586-.335.084-.126.084-.293.084-.628V8.414c0-.753-.168-1.256-.586-1.632-.335-.335-.795-.503-1.381-.503-.587 0-1.005.168-1.424.586l-.125.126V5.065c0-.376 0-.502-.084-.627-.084-.21-.335-.335-.586-.335-.293 0-.502.125-.586.335-.084.125-.084.293-.084.627v6.238c0 .376 0 .502.084.627.084.21.335.335.586.335.251 0 .502-.125.586-.335.084-.125.084-.293.084-.627V8.665c.041-.879.586-1.172 1.13-1.172z"
                                fill="#4A5370"></path>
                        </g>
                        <defs>
                            <clipPath id="muchbetter_svg__clip0">
                                <path fill="#fff" transform="translate(.08)" d="M0 0h83.302v18H0z"></path>
                            </clipPath>
                        </defs>
                    </svg>
                    <svg viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon "
                         style={{fontSize: '15px'}}>
                        <g className="jbc_svg__color">
                            <g clip-path="url(#jbc_svg__a)">
                                <path
                                    d="M23.536 14.325a3.602 3.602 0 01-3.598 3.597H.367V3.675A3.602 3.602 0 013.963.078h19.573v14.247z"
                                    fill="#fff"></path>
                                <path
                                    d="M17.163 10.67h1.487c.042 0 .141-.014.184-.014a.663.663 0 00.524-.665c0-.34-.241-.595-.524-.666-.043-.014-.128-.014-.184-.014h-1.487v1.36z"
                                    fill="url(#jbc_svg__b)"></path>
                                <path
                                    d="M18.48 1.281a2.578 2.578 0 00-2.578 2.578v2.676h3.64c.085 0 .184 0 .255.015.821.042 1.43.467 1.43 1.203 0 .581-.41 1.077-1.175 1.176v.028c.835.057 1.473.524 1.473 1.246 0 .78-.708 1.29-1.643 1.29h-3.994v5.24h3.781a2.578 2.578 0 002.578-2.578V1.28H18.48z"
                                    fill="url(#jbc_svg__c)"></path>
                                <path
                                    d="M19.174 7.923c0-.34-.241-.566-.524-.609-.029 0-.1-.014-.142-.014h-1.345v1.247h1.345c.043 0 .128 0 .142-.015a.602.602 0 00.524-.609z"
                                    fill="url(#jbc_svg__d)"></path>
                                <path
                                    d="M4.233 1.281A2.578 2.578 0 001.655 3.86v6.359c.722.354 1.473.58 2.224.58.892 0 1.373-.538 1.373-1.274V6.52h2.21V9.51c0 1.16-.723 2.11-3.173 2.11-1.487 0-2.648-.326-2.648-.326v5.424h3.781A2.578 2.578 0 008 14.141V1.28H4.233z"
                                    fill="url(#jbc_svg__e)"></path>
                                <path
                                    d="M11.356 1.281A2.578 2.578 0 008.78 3.86v3.37c.651-.552 1.784-.906 3.611-.821.977.042 2.025.312 2.025.312v1.09a4.903 4.903 0 00-1.954-.566c-1.388-.1-2.224.58-2.224 1.77 0 1.204.836 1.884 2.224 1.77.807-.057 1.43-.311 1.954-.566v1.09s-1.034.27-2.025.312c-1.827.085-2.96-.27-3.611-.822v5.949h3.781a2.578 2.578 0 002.578-2.578V1.28h-3.782z"
                                    fill="url(#jbc_svg__f)"></path>
                            </g>
                            <defs>
                                <linearGradient id="jbc_svg__b" x1="15.9" y1="9.993" x2="22.264" y2="9.993"
                                                gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#007940"></stop>
                                    <stop offset=".229" stop-color="#00873F"></stop>
                                    <stop offset=".743" stop-color="#40A737"></stop>
                                    <stop offset="1" stop-color="#5CB531"></stop>
                                </linearGradient>
                                <linearGradient id="jbc_svg__c" x1="15.9" y1="9.001" x2="22.264" y2="9.001"
                                                gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#007940"></stop>
                                    <stop offset=".229" stop-color="#00873F"></stop>
                                    <stop offset=".743" stop-color="#40A737"></stop>
                                    <stop offset="1" stop-color="#5CB531"></stop>
                                </linearGradient>
                                <linearGradient id="jbc_svg__d" x1="15.9" y1="7.922" x2="22.264" y2="7.922"
                                                gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#007940"></stop>
                                    <stop offset=".229" stop-color="#00873F"></stop>
                                    <stop offset=".743" stop-color="#40A737"></stop>
                                    <stop offset="1" stop-color="#5CB531"></stop>
                                </linearGradient>
                                <linearGradient id="jbc_svg__e" x1="1.652" y1="9.001" x2="8.115" y2="9.001"
                                                gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#1F286F"></stop>
                                    <stop offset=".475" stop-color="#004E94"></stop>
                                    <stop offset=".826" stop-color="#0066B1"></stop>
                                    <stop offset="1" stop-color="#006FBC"></stop>
                                </linearGradient>
                                <linearGradient id="jbc_svg__f" x1="8.742" y1="9.001" x2="15.019" y2="9.001"
                                                gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#6C2C2F"></stop>
                                    <stop offset=".173" stop-color="#882730"></stop>
                                    <stop offset=".573" stop-color="#BE1833"></stop>
                                    <stop offset=".859" stop-color="#DC0436"></stop>
                                    <stop offset="1" stop-color="#E60039"></stop>
                                </linearGradient>
                                <clipPath id="jbc_svg__a">
                                    <path fill="#fff" transform="translate(.289)" d="M0 0h23.325v18H0z"></path>
                                </clipPath>
                            </defs>
                        </g>
                        <g className="jbc_svg__mono">
                            <g clip-path="url(#jbc_svg__g)">
                                <path
                                    d="M23.535 14.325a3.602 3.602 0 01-3.597 3.597H.366V3.675A3.602 3.602 0 013.963.078h19.572v14.247z"
                                    fill="#1D2438"></path>
                                <path
                                    d="M17.162 10.67h1.487c.043 0 .142-.014.184-.014a.664.664 0 00.525-.665c0-.34-.241-.595-.524-.666-.043-.014-.128-.014-.185-.014h-1.487v1.36z"
                                    fill="#4A5370"></path>
                                <path
                                    d="M18.48 1.281a2.578 2.578 0 00-2.578 2.578v2.676h3.64c.085 0 .184 0 .255.015.821.042 1.43.467 1.43 1.203 0 .581-.41 1.077-1.175 1.176v.028c.835.057 1.472.524 1.472 1.246 0 .78-.708 1.29-1.642 1.29h-3.994v5.24h3.781a2.578 2.578 0 002.578-2.578V1.28H18.48z"
                                    fill="#4A5370"></path>
                                <path
                                    d="M19.173 7.923c0-.34-.24-.566-.524-.609-.028 0-.099-.014-.141-.014h-1.346v1.247h1.346c.042 0 .127 0 .141-.015a.603.603 0 00.524-.609zM4.232 1.281A2.578 2.578 0 001.655 3.86v6.359c.722.354 1.473.58 2.223.58.892 0 1.374-.538 1.374-1.274V6.52h2.21V9.51c0 1.16-.723 2.11-3.173 2.11-1.487 0-2.648-.326-2.648-.326v5.424h3.781A2.578 2.578 0 008 14.141V1.28H4.232zM11.356 1.281A2.578 2.578 0 008.778 3.86v3.37c.652-.552 1.785-.906 3.612-.821.977.042 2.025.312 2.025.312v1.09a4.903 4.903 0 00-1.954-.566c-1.388-.1-2.224.58-2.224 1.77 0 1.204.836 1.884 2.224 1.77.807-.057 1.43-.311 1.954-.566v1.09s-1.034.27-2.025.312c-1.827.085-2.96-.27-3.612-.822v5.949h3.782a2.578 2.578 0 002.577-2.578V1.28h-3.781z"
                                    fill="#4A5370"></path>
                            </g>
                            <defs>
                                <clipPath id="jbc_svg__g">
                                    <path fill="#fff" transform="translate(.288)" d="M0 0h23.325v18H0z"></path>
                                </clipPath>
                            </defs>
                        </g>
                    </svg>
                    <svg viewBox="0 0 94 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon"
                         style={{fontSize: '15px'}}>
                        <g className="discover_svg__color">
                            <g clip-path="url(#discover_svg__a)">
                                <path
                                    d="M4.98.561H.84v14.461h4.124a7.489 7.489 0 005.177-1.674A7.222 7.222 0 0012.73 7.8C12.746 3.572 9.553.561 4.98.561zm3.296 10.863c-.888.777-2.036 1.148-3.857 1.148h-.767v-9.56h.759c1.82 0 2.925.327 3.857 1.173a4.85 4.85 0 011.561 3.598 4.961 4.961 0 01-1.553 3.641zM16.862.561H14.04v14.461h2.822V.561zM23.756 6.11c-1.726-.622-2.192-1.036-2.192-1.821 0-.785.889-1.58 2.105-1.58a2.908 2.908 0 012.27 1.166l1.475-1.933A6.299 6.299 0 0023.17.328a4.245 4.245 0 00-4.513 4.108c0 1.993.915 3.01 3.564 3.96.675.22 1.326.51 1.941.863a1.725 1.725 0 01.863 1.493 2.054 2.054 0 01-2.183 2.036 3.34 3.34 0 01-3.08-1.924l-1.82 1.725a5.609 5.609 0 005.004 2.753c2.933 0 4.987-1.95 4.987-4.746-.017-2.269-.984-3.313-4.176-4.487zM28.803 7.8a7.489 7.489 0 007.637 7.55 7.81 7.81 0 003.537-.862v-3.305a4.513 4.513 0 01-3.451 1.587 4.72 4.72 0 01-4.85-4.987 4.804 4.804 0 014.764-4.97 4.728 4.728 0 013.529 1.622V1.122a7.24 7.24 0 00-3.452-.863A7.601 7.601 0 0028.803 7.8zM62.325 10.268L58.468.561h-3.072l6.135 14.832h1.51L69.288.561h-3.054l-3.909 9.707zM70.565 15.022h7.999v-2.45h-5.177v-3.9h4.987v-2.45h-4.987v-3.21h5.177V.56h-7.999v14.461zM89.729 4.832c0-2.71-1.864-4.271-5.117-4.271h-4.167v14.461h2.821V9.215h.363l3.908 5.807h3.452l-4.556-6.091a3.848 3.848 0 003.296-4.099zm-5.66 2.39h-.863V2.84h.863c1.725 0 2.718.742 2.718 2.148 0 1.407-.915 2.235-2.718 2.235zM91.972 1.32c0-.25-.172-.388-.483-.388h-.405v1.269h.302v-.492l.362.492h.371l-.457-.527a.336.336 0 00.31-.354zm-.534.173h-.052v-.328h.06c.147 0 .225.052.225.164 0 .112-.078.164-.234.164z"
                                    fill="#D8D8D8"></path>
                                <path
                                    d="M91.558.449a1.113 1.113 0 10-.034 2.225A1.113 1.113 0 0091.558.45zm0 2.028a.863.863 0 01-.863-.915.863.863 0 111.726 0 .862.862 0 01-.871.915h.008z"
                                    fill="#D8D8D8"></path>
                                <path d="M56.199 7.775a7.662 7.662 0 11-15.325.017A7.662 7.662 0 0156.2 7.775z"
                                      fill="url(#discover_svg__b)"></path>
                                <path opacity=".65"
                                      d="M56.199 7.775a7.662 7.662 0 11-15.325.017A7.662 7.662 0 0156.2 7.775z"
                                      fill="url(#discover_svg__c)" style={{mixBlendMode: 'multiply'}}></path>
                            </g>
                            <g clip-path="url(#discover_svg__a)">
                                <path
                                    d="M4.98.561H.84v14.461h4.124a7.489 7.489 0 005.177-1.674A7.222 7.222 0 0012.73 7.8C12.746 3.572 9.553.561 4.98.561zm3.296 10.863c-.888.777-2.036 1.148-3.857 1.148h-.767v-9.56h.759c1.82 0 2.925.327 3.857 1.173a4.85 4.85 0 011.561 3.598 4.961 4.961 0 01-1.553 3.641zM16.862.561H14.04v14.461h2.822V.561zM23.756 6.11c-1.726-.622-2.192-1.036-2.192-1.821 0-.785.889-1.58 2.105-1.58a2.908 2.908 0 012.27 1.166l1.475-1.933A6.299 6.299 0 0023.17.328a4.245 4.245 0 00-4.513 4.108c0 1.993.915 3.01 3.564 3.96.675.22 1.326.51 1.941.863a1.725 1.725 0 01.863 1.493 2.054 2.054 0 01-2.183 2.036 3.34 3.34 0 01-3.08-1.924l-1.82 1.725a5.609 5.609 0 005.004 2.753c2.933 0 4.987-1.95 4.987-4.746-.017-2.269-.984-3.313-4.176-4.487zM28.803 7.8a7.489 7.489 0 007.637 7.55 7.81 7.81 0 003.537-.862v-3.305a4.513 4.513 0 01-3.451 1.587 4.72 4.72 0 01-4.85-4.987 4.804 4.804 0 014.764-4.97 4.728 4.728 0 013.529 1.622V1.122a7.24 7.24 0 00-3.452-.863A7.601 7.601 0 0028.803 7.8zM62.325 10.268L58.468.561h-3.072l6.135 14.832h1.51L69.288.561h-3.054l-3.909 9.707zM70.565 15.022h7.999v-2.45h-5.177v-3.9h4.987v-2.45h-4.987v-3.21h5.177V.56h-7.999v14.461zM89.729 4.832c0-2.71-1.864-4.271-5.117-4.271h-4.167v14.461h2.821V9.215h.363l3.908 5.807h3.452l-4.556-6.091a3.848 3.848 0 003.296-4.099zm-5.66 2.39h-.863V2.84h.863c1.725 0 2.718.742 2.718 2.148 0 1.407-.915 2.235-2.718 2.235zM91.972 1.32c0-.25-.172-.388-.483-.388h-.405v1.269h.302v-.492l.362.492h.371l-.457-.527a.336.336 0 00.31-.354zm-.534.173h-.052v-.328h.06c.147 0 .225.052.225.164 0 .112-.078.164-.234.164z"
                                    fill="#D8D8D8"></path>
                                <path
                                    d="M91.558.449a1.113 1.113 0 10-.034 2.225A1.113 1.113 0 0091.558.45zm0 2.028a.863.863 0 01-.863-.915.863.863 0 111.726 0 .862.862 0 01-.871.915h.008z"
                                    fill="#D8D8D8"></path>
                                <path d="M56.199 7.775a7.662 7.662 0 11-15.325.017A7.662 7.662 0 0156.2 7.775z"
                                      fill="url(#discover_svg__b)"></path>
                                <path opacity=".65"
                                      d="M56.199 7.775a7.662 7.662 0 11-15.325.017A7.662 7.662 0 0156.2 7.775z"
                                      fill="url(#discover_svg__c)" style={{mixBlendMode: 'multiply'}}></path>
                            </g>
                            <defs>
                                <linearGradient id="discover_svg__b" x1="52.454" y1="13.909" x2="47.156" y2="5.609"
                                                gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FF9800"></stop>
                                    <stop offset=".22" stop-color="#FF9300"></stop>
                                    <stop offset=".47" stop-color="#FF8600"></stop>
                                    <stop offset=".62" stop-color="#FF7A00"></stop>
                                    <stop offset=".79" stop-color="#FF6D00"></stop>
                                    <stop offset="1" stop-color="#FF6100"></stop>
                                </linearGradient>
                                <linearGradient id="discover_svg__c" x1="51.617" y1="13.797" x2="43.877" y2="-1.346"
                                                gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FF7A00" stop-opacity="0"></stop>
                                    <stop offset=".19" stop-color="#FB6A00" stop-opacity=".22"></stop>
                                    <stop offset=".37" stop-color="#F85C00" stop-opacity=".41"></stop>
                                    <stop offset=".55" stop-color="#F55200" stop-opacity=".55"></stop>
                                    <stop offset=".71" stop-color="#F34A00" stop-opacity=".66"></stop>
                                    <stop offset=".86" stop-color="#F24600" stop-opacity=".72"></stop>
                                    <stop offset=".98" stop-color="#F24400" stop-opacity=".74"></stop>
                                </linearGradient>
                                <clipPath id="discover_svg__a">
                                    <path fill="#fff" transform="translate(.254)" d="M0 0h93.129v18H0z"></path>
                                </clipPath>
                            </defs>
                        </g>
                        <g className="discover_svg__mono">
                            <g clip-path="url(#discover_svg__d)">
                                <path
                                    d="M4.98.561H.84v14.461h4.124a7.49 7.49 0 005.177-1.674A7.222 7.222 0 0012.728 7.8C12.747 3.572 9.553.561 4.98.561zm3.296 10.863c-.888.777-2.036 1.148-3.857 1.148h-.768v-9.56h.76c1.82 0 2.925.327 3.857 1.173a4.85 4.85 0 011.561 3.598 4.962 4.962 0 01-1.553 3.641zM16.861.561H14.04v14.461h2.822V.561zM23.756 6.11c-1.726-.622-2.192-1.036-2.192-1.821 0-.785.889-1.58 2.105-1.58a2.907 2.907 0 012.27 1.166l1.475-1.933A6.299 6.299 0 0023.17.328a4.245 4.245 0 00-4.513 4.108c0 1.993.915 3.01 3.564 3.96.675.22 1.325.51 1.941.863a1.726 1.726 0 01.863 1.493 2.054 2.054 0 01-2.183 2.036 3.34 3.34 0 01-3.08-1.924l-1.82 1.725a5.608 5.608 0 005.004 2.753c2.933 0 4.987-1.95 4.987-4.746-.017-2.269-.984-3.313-4.176-4.487zM28.803 7.8a7.489 7.489 0 007.637 7.55 7.81 7.81 0 003.537-.862v-3.305a4.513 4.513 0 01-3.451 1.587 4.72 4.72 0 01-4.85-4.987 4.806 4.806 0 014.764-4.97 4.728 4.728 0 013.529 1.622V1.122a7.24 7.24 0 00-3.452-.863A7.601 7.601 0 0028.803 7.8zM62.325 10.268L58.468.561h-3.072l6.135 14.832h1.51L69.288.561h-3.054l-3.91 9.707zM70.565 15.022h7.999v-2.45h-5.177v-3.9h4.987v-2.45h-4.987v-3.21h5.177V.56h-7.999v14.461zM89.729 4.832c0-2.71-1.864-4.271-5.117-4.271h-4.167v14.461h2.821V9.215h.363l3.908 5.807h3.452l-4.556-6.091a3.848 3.848 0 003.296-4.099zm-5.66 2.39h-.863V2.84h.863c1.725 0 2.718.742 2.718 2.148 0 1.407-.915 2.235-2.718 2.235zM91.972 1.32c0-.25-.172-.388-.483-.388h-.406v1.269h.302v-.492l.363.492h.37l-.456-.527a.337.337 0 00.31-.354zm-.535.173h-.052v-.328h.06c.148 0 .225.052.225.164 0 .112-.077.164-.233.164z"
                                    fill="#34405E"></path>
                                <path
                                    d="M91.558.449a1.113 1.113 0 10-.034 2.226 1.113 1.113 0 00.034-2.226zm0 2.028a.863.863 0 01-.863-.915.863.863 0 111.726 0 .863.863 0 01-.872.915h.01z"
                                    fill="#251F20"></path>
                                <path d="M56.199 7.775a7.662 7.662 0 11-15.323.017 7.662 7.662 0 0115.323-.017z"
                                      fill="#4A5370"></path>
                            </g>
                            <defs>
                                <clipPath id="discover_svg__d">
                                    <path fill="#fff" transform="translate(.254)" d="M0 0h93.129v18H0z"></path>
                                </clipPath>
                            </defs>
                        </g>
                    </svg>
                    <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon"
                         style={{fontSize: '15px'}}>
                        <g fill="#4A5370" className="interac_svg__mono">
                            <path
                                d="M22.562.426a2.013 2.013 0 012.012 2.012v20.124a2.012 2.012 0 01-2.012 2.012H2.438a2.011 2.011 0 01-2.012-2.012V2.438A2.012 2.012 0 012.438.426h20.124zm0-.426H2.438A2.441 2.441 0 000 2.438v20.124A2.441 2.441 0 002.438 25h20.124A2.44 2.44 0 0025 22.562V2.438A2.441 2.441 0 0022.562 0"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M22.561.426H2.438A2.012 2.012 0 00.426 2.438v20.125a2.012 2.012 0 002.012 2.012H22.56a2.012 2.012 0 002.013-2.013V2.438A2.013 2.013 0 0022.56.426zm-8.654 8.011l.002 4.324 1.194-.278-.001-2.387c0-.549.21-.908.627-1.073.187-.079.388-.12.591-.123V7.797a.65.65 0 00-.314.021c-.678.173-.97.918-.97.918V8.17l-1.13.267zm-5.947 5.73s-.184-.275-.184-1.248v-2.153l-.58.138v-.886l.581-.138v-.967l1.2-.283v.967l.848-.202v.886l-.848.201v2.192c0 .997.265 1.189.265 1.189l-1.282.304zm2.335-4.332c-.235.43-.344.991-.344 1.76 0 1.26.381 2.134 1.812 1.794 1.51-.357 1.63-1.386 1.64-1.8.002-.1-.001-.19-.001-.19l-1.086.26s-.003.128-.008.178c-.032.31-.143.56-.543.644-.462.098-.615-.248-.615-.978v-.038l2.32-.545s-.003-.182.004-.556c.019-1.045-.456-1.824-1.773-1.525-.668.153-1.126.485-1.406.996zm.86.899c.009-.625.21-1.002.594-1.09.427-.097.572.152.574.624 0 .097 0 .16-.002.188l-1.166.278zm9.227-1.668c-.045-1.316.296-2.361 1.765-2.694.937-.213 1.292.03 1.473.266.173.225.24.528.24.952v.078l-1.149.273v-.16c0-.503-.14-.695-.505-.603-.435.11-.61.522-.61 1.342V8.903c0 .833.115 1.215.616 1.11.434-.09.494-.471.5-.806.002-.052.004-.22.004-.22l1.147-.272s.002.085.002.18c-.003 1.093-.58 1.781-1.659 2.033-1.487.348-1.778-.511-1.824-1.862zm-2.504.16c-.883.366-1.47.682-1.47 1.684 0 .736.46 1.274 1.326 1.07.826-.195 1.065-.798 1.065-.798.038.135.087.266.147.393l1.093-.259s-.172-.136-.172-1.062V8.34c-.001-.808-.396-1.328-1.581-1.055-.912.21-1.44.614-1.618 1.213a2.216 2.216 0 00-.077.658l1.114-.263a2.055 2.055 0 01.007-.222.597.597 0 01.479-.566c.395-.1.507.105.502.345-.003.286-.02.449-.815.777zm.226.657c.203-.098.397-.212.581-.34v.602c0 .458-.245.788-.599.878-.33.081-.511-.111-.511-.404 0-.339.165-.558.529-.736zM1.685 17.198a.695.695 0 01-.581-1.072l.007-.01.014-.003 1.632-.385v1.24l-.026.005c-.37.09-.812.19-.904.21a.68.68 0 01-.142.015zm-.49 1.383a.693.693 0 00.632.19c.092-.019.534-.122.904-.21l.026-.007v-1.24l-1.632.386-.014.003-.007.012a.693.693 0 00.092.866zm.49 1.791a.693.693 0 01-.581-1.07l.007-.012 1.646-.388v1.24l-.026.007c-.39.094-.825.192-.904.21a.716.716 0 01-.142.013zm-.193-11.63v6.937l1.265-.3V8.445l-1.265.299zm3.15 6.347a.78.78 0 00-1.56 0l.001 6.482a2.115 2.115 0 002.111 2.113l2.209-.003v-2.704l.001-3.016a1.02 1.02 0 00-.454-.85l-1.968-1.337v3.035a.168.168 0 11-.336 0v-.435l-.004-3.285zm.396-4.525c.194-.15.419-.256.658-.312.9-.211 1.19.314 1.19 1.067v3.102l-1.199.281V11.77c0-.46-.216-.551-.473-.495-.343.076-.582.46-.582.942v2.01a1.165 1.165 0 00-1.199-.21l-.001-3.113 1.138-.27v.488c.114-.217.274-.408.468-.558z"></path>
                        </g>
                        <g className="interac_svg__color">
                            <path
                                d="M2.438.426H22.56a2.012 2.012 0 012.013 2.012v20.124a2.012 2.012 0 01-2.013 2.013H2.438a2.012 2.012 0 01-2.012-2.012V2.438A2.012 2.012 0 012.438.426z"
                                fill="#FDB913"></path>
                            <path
                                d="M22.562.426a2.013 2.013 0 012.012 2.012v20.124a2.012 2.012 0 01-2.012 2.012H2.438a2.011 2.011 0 01-2.012-2.012V2.438A2.012 2.012 0 012.438.426h20.124zm0-.426H2.438A2.44 2.44 0 000 2.438v20.124A2.441 2.441 0 002.438 25h20.124A2.44 2.44 0 0025 22.562V2.438A2.44 2.44 0 0022.562 0"
                                fill="#FDB913"></path>
                            <path
                                d="M13.909 12.761l-.002-4.324 1.129-.267v.566s.292-.745.97-.918a.65.65 0 01.314-.021V8.9a1.581 1.581 0 00-.591.123c-.417.165-.627.524-.627 1.073v2.387l-1.193.278zM7.96 14.167s-.184-.275-.184-1.248v-2.153l-.58.138v-.886l.581-.138v-.967l1.2-.283v.967l.848-.202v.886l-.848.201v2.192c0 .997.265 1.189.265 1.189l-1.282.304zM9.95 11.595c0-.769.11-1.33.345-1.76.28-.51.738-.843 1.406-.996 1.317-.299 1.792.48 1.774 1.525-.008.374-.006.556-.006.556l-2.32.545v.038c0 .73.154 1.076.617.978.4-.084.51-.335.542-.644.005-.05.008-.177.008-.177l1.086-.26s.003.088.001.188c-.01.415-.13 1.444-1.64 1.801-1.43.34-1.812-.534-1.812-1.794zm1.8-1.95c-.385.087-.586.464-.595 1.089l1.167-.278c.002-.028.002-.09.002-.188-.002-.472-.148-.72-.575-.623zM20.382 9.066c-.045-1.316.296-2.361 1.765-2.694.937-.213 1.292.03 1.473.266.173.225.24.528.24.952v.078l-1.149.273v-.16c0-.503-.14-.695-.505-.603-.435.11-.61.522-.61 1.342v.383c0 .833.115 1.215.616 1.11.434-.09.494-.471.5-.806.002-.052.004-.22.004-.22l1.147-.272s.002.085.002.18c-.003 1.093-.58 1.781-1.659 2.033-1.487.348-1.778-.511-1.824-1.862zM16.409 10.91c0-1.002.586-1.318 1.47-1.684.793-.328.81-.491.814-.777.005-.24-.107-.446-.502-.345a.597.597 0 00-.479.566 2.055 2.055 0 00-.007.222l-1.114.263a2.217 2.217 0 01.077-.658c.178-.6.706-1.002 1.618-1.213 1.185-.273 1.58.247 1.581 1.055v1.915c0 .927.172 1.062.172 1.062l-1.093.259a2.38 2.38 0 01-.147-.393s-.24.603-1.064.797c-.867.205-1.326-.333-1.326-1.07zm2.276-1.368c-.184.13-.378.243-.581.34-.364.179-.53.398-.53.737 0 .293.182.485.512.404.354-.09.6-.42.6-.878v-.603zM1.685 17.198a.695.695 0 01-.581-1.072l.007-.01.014-.003 1.632-.385v1.24l-.026.005c-.37.09-.812.19-.904.21a.68.68 0 01-.142.015zM1.685 18.784a.693.693 0 01-.581-1.07l.007-.011.014-.003 1.632-.386v1.24l-.026.007c-.37.088-.812.191-.904.21a.739.739 0 01-.142.012zM1.685 20.372a.693.693 0 01-.581-1.07l.007-.012 1.646-.388v1.24l-.026.007c-.39.094-.825.192-.904.21a.716.716 0 01-.142.013zM1.493 15.679V8.743l1.264-.299v6.936l-1.264.299zM4.642 15.089a.78.78 0 00-1.56 0l.001 6.482a2.115 2.115 0 002.111 2.113l2.209-.003v-2.704l.001-3.016a1.021 1.021 0 00-.454-.85l-1.968-1.337v3.035a.168.168 0 11-.336 0l-.004-3.72zM5.696 10.252a1.707 1.707 0 00-1.126.87v-.487l-1.138.27.001 3.112a1.165 1.165 0 011.199.21v-2.01c0-.482.24-.866.582-.942.257-.056.472.036.472.495l.001 2.932 1.2-.281v-3.102c0-.753-.29-1.278-1.191-1.067z"
                                fill="#231F20"></path>
                        </g>
                    </svg>
                    <svg width="91" height="25" viewBox="0 0 91 25" fill="none" xmlns="http://www.w3.org/2000/svg"
                         className="icon " style={{fontSize: '15px'}}>
                        <g className="astropay_svg__color">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M59.465 1.497c2.133 0 3.784.496 4.865 1.475 1.023.921 1.593 2.265 1.608 3.8 0 1.578-.468 2.864-1.403 3.828-1.198 1.242-3.083 1.929-5.304 1.929-.351 0-.702-.015-1.038-.044v6.254h-3.288V1.891l.512-.088a25.302 25.302 0 014.047-.306zm-.19 8.124c1.256 0 3.36-.35 3.36-2.747 0-2.075-1.71-2.513-3.112-2.513-.555 0-.994.014-1.315.058v5.144c.292.043.643.058 1.067.058zM1 18.74L6.845 1.614h3.332l5.86 17.126h-3.508l-1.695-4.997H6.085L4.434 18.74H1zm5.933-7.847H10L8.73 7.167c-.064-.174-.117-.343-.169-.51-.03-.098-.061-.196-.094-.294-.055.186-.117.372-.182.563l-.066.197-1.286 3.77z"
                                  fill="#fff"></path>
                            <path
                                d="M20.055 9.563c0 .453.175.745 1.753 1.373 1.447.54 3.39 1.55 3.39 3.99 0 2.425-1.958 4.062-4.866 4.062-1.271 0-2.557-.322-3.521-.892l-.424-.248.877-2.762.672.395c.555.336 1.534.716 2.44.716.585 0 1.564-.132 1.564-1.067 0-.497-.132-.906-1.695-1.49-1.579-.57-3.449-1.696-3.449-3.814 0-2.31 1.914-3.975 4.56-3.975 1.183 0 2.352.292 3.126.804l.41.263L24 9.636l-.672-.424a3.871 3.871 0 00-2.002-.585c-.79 0-1.271.351-1.271.936zM30.356 3.133l-3.273.994v1.958h-1.768v2.82h1.768v5.597c0 1.563.307 2.674.965 3.42.643.686 1.592 1.08 2.703 1.08.994 0 1.71-.204 2.046-.321l.438-.146-.175-2.835-.76.22c-.22.058-.482.116-1.023.116-.395 0-.935 0-.935-1.593V8.905h2.966v-2.82h-2.952V3.133zM40.702 5.88l.6.088.014 3.288-.76-.16c-.146-.03-.307-.03-.57-.03-1.11 0-1.929.819-2.177 2.134-.03.219-.059.54-.059.847v6.693h-3.317v-8.475c0-1.433-.044-2.543-.102-3.522l-.044-.658h3.069l.044.92c.73-.744 1.68-1.168 2.718-1.168.233 0 .409.015.584.044z"
                                fill="#fff"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M47.336 5.851c-3.697 0-6.283 2.733-6.283 6.663 0 3.829 2.498 6.488 6.093 6.488 3.04 0 6.298-2.09 6.298-6.678.015-3.813-2.499-6.473-6.108-6.473zm2.762 6.547c0 2.206-1.198 3.813-2.835 3.813s-2.82-1.592-2.82-3.755c0-1.403.599-3.785 2.864-3.785 2.206-.029 2.79 2.426 2.79 3.727zM76.006 15.378v-4.266c0-3.405-1.768-5.26-4.954-5.26-1.476 0-3.025.408-4.091 1.08l-.424.263.891 2.63.672-.452c.687-.468 1.68-.746 2.645-.746.672-.014 1.155.147 1.476.453.263.263.424.658.482 1.155-2.586.073-4.471.687-5.64 1.841-.804.804-1.213 1.812-1.213 3.025 0 1.943 1.403 3.901 4.12 3.901 1.155 0 2.237-.365 3.084-1.008l.088.76h3.141l-.117-.716c-.102-.701-.16-1.593-.16-2.66zm-5.524.848c-.497 0-1.315-.175-1.315-1.359 0-.453.132-.818.424-1.096.38-.38 1.242-.818 3.17-.848v1.36c0 .102-.014.277-.058.452-.234.687-.95 1.49-2.22 1.49z"
                                  fill="#fff"></path>
                            <path
                                d="M82.727 13.202l2.411-7.117h3.507l-3.433 8.973c-1.403 3.682-2.47 5.947-4.077 7.379-1.345 1.125-2.514 1.403-2.85 1.461l-.54.102-.848-2.834.585-.19c.277-.073.95-.322 1.607-.892l.015-.014c.584-.468 1.169-1.257 1.563-2.09l.023-.058c.026-.067.057-.146.08-.19 0-.03-.03-.117-.103-.263l-.014-.03-4.53-11.354h3.609l2.63 7.146c.073.16.132.336.19.511.03-.087.059-.179.088-.27l.087-.27z"
                                fill="#fff"></path>
                            <path
                                d="M13.1 6.319c2.133-2.177 5.756-3.478 9.687-3.478 1.534 0 3.025.19 4.442.585l.117.029 2.514-.76-1.126-.438C26.586 1.438 24.117 1 21.574 1c-3.697 0-7.145.891-9.702 2.513l-.278.176L12.661 6.8l.438-.482z"
                                fill="red"></path>
                        </g>
                        <g fill="#34405E" className="astropay_svg__mono">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M59.465 1.497c2.133 0 3.784.496 4.865 1.475 1.023.921 1.593 2.265 1.608 3.8 0 1.578-.468 2.864-1.403 3.828-1.198 1.242-3.083 1.929-5.304 1.929-.351 0-.702-.015-1.038-.044v6.254h-3.288V1.891l.512-.088a25.302 25.302 0 014.047-.306zm-.19 8.124c1.256 0 3.36-.35 3.36-2.747 0-2.075-1.71-2.513-3.112-2.513-.555 0-.994.014-1.315.058v5.144c.292.043.643.058 1.067.058zM1 18.74L6.845 1.614h3.332l5.86 17.126h-3.508l-1.695-4.997H6.085L4.434 18.74H1zm5.933-7.847H10L8.73 7.167c-.064-.174-.117-.343-.169-.51-.03-.098-.061-.196-.094-.294-.055.186-.117.372-.182.563l-.066.197-1.286 3.77z"></path>
                            <path
                                d="M20.055 9.563c0 .453.175.745 1.753 1.373 1.447.54 3.39 1.55 3.39 3.99 0 2.425-1.958 4.062-4.866 4.062-1.271 0-2.557-.322-3.521-.892l-.424-.248.877-2.762.672.395c.555.336 1.534.716 2.44.716.585 0 1.564-.132 1.564-1.067 0-.497-.132-.906-1.695-1.49-1.579-.57-3.449-1.696-3.449-3.814 0-2.31 1.914-3.975 4.56-3.975 1.183 0 2.352.292 3.126.804l.41.263L24 9.636l-.672-.424a3.871 3.871 0 00-2.002-.585c-.79 0-1.271.351-1.271.936zM30.356 3.133l-3.273.994v1.958h-1.768v2.82h1.768v5.597c0 1.563.307 2.674.965 3.42.643.686 1.592 1.08 2.703 1.08.994 0 1.71-.204 2.046-.321l.438-.146-.175-2.835-.76.22c-.22.058-.482.116-1.023.116-.395 0-.935 0-.935-1.593V8.905h2.966v-2.82h-2.952V3.133zM40.702 5.88l.6.088.014 3.288-.76-.16c-.146-.03-.307-.03-.57-.03-1.11 0-1.929.819-2.177 2.134-.03.219-.059.54-.059.847v6.693h-3.317v-8.475c0-1.433-.044-2.543-.102-3.522l-.044-.658h3.069l.044.92c.73-.744 1.68-1.168 2.718-1.168.233 0 .409.015.584.044z"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M47.336 5.851c-3.697 0-6.283 2.733-6.283 6.663 0 3.829 2.498 6.488 6.093 6.488 3.04 0 6.298-2.09 6.298-6.678.015-3.813-2.499-6.473-6.108-6.473zm2.762 6.547c0 2.206-1.198 3.813-2.835 3.813s-2.82-1.592-2.82-3.755c0-1.403.599-3.785 2.864-3.785 2.206-.029 2.79 2.426 2.79 3.727zM76.006 15.378v-4.266c0-3.405-1.768-5.26-4.954-5.26-1.476 0-3.025.408-4.091 1.08l-.424.263.891 2.63.672-.452c.687-.468 1.68-.746 2.645-.746.672-.014 1.155.147 1.476.453.263.263.424.658.482 1.155-2.586.073-4.471.687-5.64 1.841-.804.804-1.213 1.812-1.213 3.025 0 1.943 1.403 3.901 4.12 3.901 1.155 0 2.237-.365 3.084-1.008l.088.76h3.141l-.117-.716c-.102-.701-.16-1.593-.16-2.66zm-5.524.848c-.497 0-1.315-.175-1.315-1.359 0-.453.132-.818.424-1.096.38-.38 1.242-.818 3.17-.848v1.36c0 .102-.014.277-.058.452-.234.687-.95 1.49-2.22 1.49z"></path>
                            <path
                                d="M82.727 13.202l2.411-7.117h3.507l-3.433 8.973c-1.403 3.682-2.47 5.947-4.077 7.379-1.345 1.125-2.514 1.403-2.85 1.461l-.54.102-.848-2.834.585-.19c.277-.073.95-.322 1.607-.892l.015-.014c.584-.468 1.169-1.257 1.563-2.09l.023-.058c.026-.067.057-.146.08-.19 0-.03-.03-.117-.103-.263l-.014-.03-4.53-11.354h3.609l2.63 7.146c.073.16.132.336.19.511.03-.087.059-.179.088-.27l.087-.27zM13.1 6.319c2.133-2.177 5.756-3.478 9.687-3.478 1.534 0 3.025.19 4.442.585l.117.029 2.514-.76-1.126-.438C26.586 1.438 24.117 1 21.574 1c-3.697 0-7.145.891-9.702 2.513l-.278.176L12.661 6.8l.438-.482z"></path>
                        </g>
                    </svg>
                </div>
                <div className="footer-separator"></div>
                <div className="footer-license">
                    <div className="footer-license-col" onClick="popup_show('go_auth',{tab: 'registration'})">
                        <div className="footer-license-col-left">
                            <div className="footer-license-bookmaker">
                                <svg viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon"
                                     style={{fontSize: '22px'}}>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M19.964.263c0 .31-.153.372-.93.374-.52 0-.522.002-.522.276 0 .275.001.276.492.26.613-.02 1.02.142 1.191.475.16.31.167.545.027.852-.185.409-.503.54-1.4.581l-.826.038-.06-.845a26.177 26.177 0 01-.06-1.508V.102l.341-.036c.187-.02.657-.042 1.044-.05L19.964 0v.263zm1.78-.141c.007.008.104.281.216.607.313.907.294.902.716.19.324-.548.419-.645.627-.644.529.003.51.097-.253 1.28-.955 1.481-1.265 1.747-1.861 1.597-.178-.045-.227-.115-.227-.329 0-.23.035-.272.233-.272.319 0 .584-.156.584-.345 0-.086-.163-.587-.363-1.113-.2-.525-.363-.991-.363-1.035 0-.06.642-.001.692.064zm3.563.656c.025.026-.04.313-.144.637-.105.324-.176.59-.157.59.02 0 .346-.185.725-.41.757-.45.788-.457 1.216-.307l.294.103-.684.398c-.376.219-.702.429-.725.466-.022.038.094.512.258 1.053l.297.985-.285-.061c-.414-.09-.468-.158-.646-.838-.09-.338-.191-.648-.227-.688-.155-.174-.53.146-.642.548-.109.389-.127.405-.388.353-.15-.03-.294-.075-.319-.1-.024-.024.155-.683.398-1.464l.443-1.42.27.054c.147.03.29.075.316.101zm-6.59 1.014c-.063.025-.114.186-.114.357 0 .301.011.311.355.311.196 0 .42-.025.5-.055.169-.065.19-.408.034-.564-.108-.109-.559-.137-.776-.05zm-7.105.298c.152.286.12.33-.45.636-.3.16-.545.334-.545.387 0 .088.31.68.851 1.625.13.226.236.436.237.468 0 .031-.126.11-.28.174-.332.138-.221.27-1.089-1.313-.353-.645-.608-1.206-.566-1.247.098-.096 1.598-.903 1.683-.905.036 0 .107.078.159.175zm17.034-.041c.151.106.216.3.302.91.066.467.152.777.215.777.058 0 .411-.118.785-.263.619-.24.701-.251.929-.134.285.147.298.195.12.45-.07.101-.401.654-.735 1.227a44.982 44.982 0 01-.634 1.073c-.015.016-.155-.036-.31-.117l-.283-.147.247-.43c.136-.236.359-.612.495-.837.137-.224.236-.42.221-.436-.016-.016-.33.092-.698.239-.771.308-.74.33-.848-.602-.037-.313-.103-.546-.149-.518-.046.028-.27.377-.498.774-.229.398-.45.723-.494.723-.142 0-.546-.212-.52-.273.148-.354 1.5-2.548 1.57-2.55.051 0 .18.06.285.134zM8.92 4.123c.222.263.65.786.953 1.162l.548.683-.242.2-.242.2L9.52 5.9l-.416-.469-.469.397c-.258.218-.469.415-.469.438 0 .022.166.25.369.505l.368.465-.21.161c-.115.09-.25.16-.3.16-.05-.002-.438-.435-.862-.961-1.104-1.371-1.053-1.282-.86-1.495.233-.26.324-.23.68.226.174.224.342.408.372.41.074.005.988-.726.988-.789 0-.026-.161-.241-.358-.478l-.359-.43.197-.197c.109-.11.226-.198.26-.198.036 0 .246.215.468.478zm25.02 1.89c0 .035-.081.138-.181.229-.206.187-.202.19-.973-.537-.375-.354-.387-.358-.567-.195-.102.093-.184.2-.184.24 0 .04.193.255.429.48.425.403.428.408.258.596-.094.105-.195.19-.225.19s-.217-.163-.417-.36c-.2-.198-.401-.362-.448-.364-.047-.003-.18.086-.297.196l-.212.2.614.568.615.569-.196.2c-.23.236-.183.263-1.282-.73l-.65-.588.565-.6c.31-.33.783-.834 1.05-1.121l.484-.522.808.742c.445.408.81.771.81.807zM6.661 7.326l1.136.902-.186.262c-.212.299-.104.345-1.163-.5-.303-.241-.55-.411-.55-.378 0 .034.129.566.286 1.181l.287 1.12-.182.232-.182.232L5.1 9.57a51.237 51.237 0 00-1.214-.951l-.206-.145.238-.24.24-.24.562.445c.963.762.949.754.879.49-.55-2.06-.566-2.163-.385-2.364.095-.105.204-.18.242-.166.039.014.581.43 1.206.927zm28.349-.134l.196.267-.452.333c-.248.184-.452.37-.452.417 0 .046.154.083.34.084.188 0 .555.026.816.058.4.048.512.106.706.361l.231.305-.851-.057-.852-.056-.286.792c-.157.436-.286.821-.286.856a.562.562 0 01-.085.196c-.068.108-.115.092-.268-.092-.239-.288-.236-.409.031-1.147.122-.337.201-.646.176-.687-.092-.15-.525-.068-.814.153-.372.286-.45.285-.639-.004-.143-.22-.142-.24.021-.356.095-.068.642-.474 1.216-.903l1.05-.783c.002-.002.093.116.202.263zM3.486 9.597c.157.115.155.136-.027.495l-.19.375 1.078.57 1.078.57-.142.299-.143.3-1.016-.545c-.56-.3-1.063-.544-1.12-.544-.057 0-.172.143-.255.319-.168.353-.193.364-.518.215l-.226-.103.233-.466c.497-.996.867-1.605.973-1.605.061 0 .185.054.275.12zm34.308 2.419a.834.834 0 01-.273.138c-.157.048-.234-.045-.52-.627-.186-.376-.369-.682-.406-.68a.981.981 0 00-.264.114l-.194.11.201.417c.34.703.34.71.065.852l-.253.131-.289-.589c-.247-.503-.312-.575-.447-.498-.418.24-.417.221-.076.952.33.71.38.876.258.878-.038 0-.153.024-.257.052-.164.044-.25-.076-.667-.922-.295-.602-.445-1.005-.393-1.058.047-.047.653-.367 1.347-.712l1.263-.627.496.993c.315.63.464 1.024.409 1.076zm-34.68 1.017l1.347.399-.054.27c-.03.15-.074.291-.098.316-.024.024-.415-.069-.87-.206-.453-.136-.845-.228-.87-.204-.024.025.26.454.633.953.546.731.67.954.632 1.148-.025.132-.08.261-.121.287-.042.026-.714-.146-1.493-.382-1.4-.425-1.415-.433-1.358-.664.031-.129.087-.265.124-.303.037-.038.465.051.952.198l.886.267-.157-.24a31.8 31.8 0 00-.687-.958c-.29-.395-.529-.765-.528-.823.003-.253.122-.524.215-.492.056.02.707.215 1.448.434zm-2.39.153c.133.17.176.319.139.478-.066.285-.449.642-.688.642-.29 0-.2-.364.119-.482.168-.062.22-.393.07-.444-.102-.036-.017-.44.093-.44.04 0 .16.11.266.246zm37.846.762c.259.915.196 1.297-.265 1.608-.657.443-1.408.083-1.641-.788-.101-.377-.117-.39-.394-.34a5.799 5.799 0 00-.481.11c-.158.046-.212.003-.296-.24-.056-.162-.092-.305-.08-.316.06-.055 2.587-.752 2.756-.76.164-.008.222.097.4.726zm-20.166-.151c1.25.58 1.827 1.835 1.563 3.407-.228 1.355-1.037 2.486-2.142 2.994-.835.384-1.674.48-4.226.483-2.087.003-2.347-.013-2.515-.156l-.188-.16.577-3.201c.568-3.147.66-3.522.89-3.62.063-.028 1.319-.041 2.791-.031l2.677.018.573.266zm10.586-.165c.08.08.126.214.102.296-.024.083-.07.314-.101.515-.097.61-.23.953-.407 1.048-.258.14-6.92.121-7.06-.019-.134-.135-.135-.31-.006-1.056.172-.994-.093-.93 3.884-.93 3.04 0 3.46.017 3.588.146zm8.489.44c-.338.125-.362.238-.15.69.077.165.178.227.368.227.369 0 .477-.214.34-.675-.123-.412-.111-.406-.558-.242zm-22.87 1.988c0 .013-.081.454-.18.98-.1.526-.182.987-.182 1.025 0 .14 1.73.074 2.05-.078.415-.198.672-.64.672-1.156 0-.34-.043-.45-.239-.605-.207-.163-.366-.189-1.18-.189-.517 0-.94.01-.94.023zm-13.468.73c-.025.162-.07.531-.101.82l-.056.523h.324c.308 0 .324-.015.324-.307 0-.17.026-.436.057-.593.049-.243.097-.284.33-.284h.275l-.053.637c-.039.463-.024.639.055.64.06 0 .197.025.306.054.217.059.233.01.349-1.08.053-.499.068-.525.306-.525.138 0 .27.02.293.042.063.064-.14 2.123-.219 2.2-.07.07-2.768-.13-2.912-.215-.075-.044-.03-.954.091-1.822.052-.37.068-.387.365-.387.3 0 .31.01.266.296zm26.281.082c1.234.581 1.772 1.723 1.546 3.281-.237 1.634-1.05 2.692-2.515 3.272-.526.208-.647.217-3.472.248-2.922.032-2.927.032-2.999-.163-.104-.28 1.039-6.554 1.233-6.771.137-.153.343-.163 2.92-.137l2.771.028.516.242zm10.941-.148c.431.181.637.373.85.79.478.941-.056 2.124-1.06 2.352-1.261.286-2.315-1.032-1.805-2.256.188-.452.381-.655.813-.854.446-.206.767-.214 1.202-.032zm-.856.605c-.773.207-.909 1.332-.21 1.746.317.188.655.193 1 .014.336-.174.452-.393.452-.854 0-.646-.594-1.079-1.242-.906zm-13.913 1.733c0 .021-.082.485-.182 1.03a25.02 25.02 0 00-.181 1.066c0 .1 1.32.09 1.762-.014.554-.129.891-.53.939-1.114.035-.433.013-.509-.202-.71-.218-.204-.33-.23-1.188-.261-.522-.02-.948-.018-.948.003zm-21.538.997c.23.191.393.602.393.985v.37h1.089v.613l-1.455.119c-.888.072-1.488.085-1.539.034-.046-.046-.095-.44-.11-.873-.023-.684-.001-.824.163-1.048.332-.45 1.041-.548 1.459-.2zm-.926.596c-.111.112-.14.25-.105.51.026.195.066.373.089.396.022.022.212.013.421-.02l.381-.061-.061-.375c-.034-.206-.103-.426-.153-.489-.129-.16-.392-.142-.572.04zm36.746.226l1.441.197-.058.63c-.07.746-.232 1.176-.52 1.38-.308.215-.625.182-.915-.097-.14-.134-.255-.195-.255-.135s-.137.175-.304.255c-.28.134-.33.134-.623-.006a.885.885 0 01-.525-.826c0-.37.2-1.594.261-1.595.031 0 .706.088 1.498.197zm-1.145.92c-.051.487.056.706.345.706.25 0 .403-.276.403-.725 0-.27-.133-.368-.497-.368-.18 0-.216.055-.251.387zm-23.271-.03c.137.138-.117 1.553-.316 1.752-.147.147-.32.169-1.382.169-.937 0-1.238-.03-1.32-.13-.083-.1-.075-.302.035-.885.08-.416.18-.793.224-.838.044-.044.212-.108.373-.14.419-.087 2.284-.03 2.386.072zm24.602-.053c-.029.073-.039.271-.023.439.023.232.076.311.228.333.24.034.415-.248.374-.602-.022-.193-.083-.253-.278-.276-.157-.018-.27.021-.301.106zm-20.407 4.798c.07 0 .193.101.273.225.123.189.13.276.037.557-.093.282-.194.372-.666.591l-.557.26.528.003c.495.004.527.017.5.21-.028.191-.08.206-.79.231l-.761.027.058-.291c.078-.393.164-.48.741-.755.362-.172.496-.285.496-.421 0-.274-.25-.326-.487-.102-.18.17-.226.179-.378.067-.153-.112-.157-.144-.04-.287.167-.202.639-.413.799-.357a.901.901 0 00.247.042zm3.92.165c.157.2.141.575-.036.828-.081.117-.357.309-.612.425l-.464.212.51.005c.492.005.507.013.465.233-.042.22-.068.228-.759.228h-.715v-.257c0-.298.264-.577.726-.768.383-.158.583-.381.512-.568-.067-.176-.279-.177-.454-.002-.168.17-.512.18-.512.016 0-.16.363-.49.59-.534.288-.056.625.026.749.182zm-1.844-.021c.281.282.09 1.473-.286 1.77-.463.365-1.296.139-1.296-.352 0-.52.196-1.165.413-1.357.282-.248.947-.284 1.169-.061zm3.22.152c-.004.163-.076.625-.159 1.026-.134.648-.175.732-.369.76-.235.033-.236.018-.043-1.107.058-.335.052-.345-.168-.29-.166.043-.243.016-.287-.099-.07-.184-.1-.151.353-.388.536-.28.682-.259.673.099zm-4.06.186c-.082.1-.279.784-.286.996-.001.036.078.108.177.161.141.076.216.06.351-.075.223-.224.35-1.011.18-1.12-.172-.11-.31-.097-.422.038zm15.525 1.012c.2.153.197.229-.023.511-.098.125-.178.273-.18.327 0 .055.427.403.95.774.523.372.95.696.95.721 0 .026-.077.147-.17.27l-.172.223-.485-.327c-.266-.18-.716-.496-.999-.702l-.514-.374-.27.368-.27.369-.23-.21-.231-.209.652-.93c.358-.512.692-.931.742-.931.05 0 .163.053.25.12zm-28.01 1.034c.456.66.455 1.129-.002 1.55-.534.49-1.198.347-1.683-.364l-.222-.325-.396.273c-.38.262-.403.267-.57.114-.097-.087-.176-.21-.176-.27 0-.062.54-.506 1.202-.989l1.202-.877.157.206c.086.112.305.42.487.682zm-1.126.279l-.3.25.31.36c.289.334.327.352.55.25.15-.068.24-.182.24-.305 0-.203-.332-.812-.44-.808-.033.002-.195.115-.36.253zm27.453 1.038l.213.2-.567.575-.567.574.201.202.201.202.455-.45.455-.449.2.202.201.201-.448.457-.448.457.252.25.25.25.563-.623.563-.624.223.24.223.239-.814.817-.814.817-1.086-1.094-1.086-1.093.767-.775c.423-.426.787-.775.81-.775.022 0 .137.09.253.2zM8.436 31.383c.4.396.729.749.729.783 0 .035-.083.138-.185.23-.182.166-.194.16-.753-.398l-.57-.566-.215.232-.217.23.476.435.475.434-.236.223c-.14.132-.264.187-.302.134a6.782 6.782 0 00-.447-.446c-.373-.35-.385-.355-.565-.191-.101.092-.184.21-.184.264 0 .054.243.345.54.647l.541.549-.168.222-.168.222-.849-.802c-.467-.44-.842-.82-.833-.844.052-.14 2.055-2.13 2.122-2.107.044.016.409.353.81.749zm22.457 2.112c.284 1.611.265 1.922-.14 2.265-.341.288-.386.289-.569.009-.139-.213-.135-.235.087-.458.128-.128.22-.304.203-.39-.017-.097-.441-.37-1.097-.709l-1.069-.55.294-.219.294-.218.707.376c.388.206.706.335.706.285 0-.05-.066-.382-.147-.74l-.147-.651.243-.21c.134-.116.275-.21.314-.21.04 0 .184.639.321 1.42zm-20.64-.576c0 .038-.145.277-.324.532-.178.255-.308.48-.288.499.019.02.395-.064.835-.186l.8-.22.322.218c.347.237.346.238-.346.41-.225.055-.538.14-.696.19l-.287.09.051 1.044c.028.574.021 1.044-.016 1.044-.037 0-.182-.068-.323-.151-.241-.144-.256-.19-.286-.904-.017-.414-.06-.782-.095-.817-.141-.141-.514.067-.743.415l-.244.37-.27-.16c-.148-.088-.258-.186-.246-.218.013-.03.387-.611.83-1.29l.806-1.233.26.149c.143.081.26.18.26.218zm18.151 2.118c.423.92.511 1.053.674 1.014.157-.038.229.046.435.5l.247.546-.293.124c-.282.12-.297.116-.428-.136l-.136-.261-.59.272c-.325.15-.699.314-.832.365-.235.09-.239.103-.117.397.124.297.121.304-.146.415-.32.133-.273.169-.578-.442-.192-.382-.22-.513-.136-.615.234-.283.019-1.303-.475-2.25-.073-.141.04-.222.85-.603.514-.243.958-.428.987-.412.029.015.27.504.538 1.086zm-14.639-.311c.936.455 1.174 1.892.423 2.555-1.197 1.055-3.096.034-2.807-1.51.068-.366.418-.82.82-1.066.376-.23 1.066-.221 1.564.021zm13.3.192c-.241.119-.255.257-.062.632.079.152.17.516.205.81l.061.532.519-.244.518-.245-.349-.774c-.366-.812-.489-.91-.892-.711zm-14.299.263c-.555.153-.867.705-.695 1.228.348 1.06 1.905.815 1.903-.298 0-.207-.29-.847-.385-.847-.013 0-.146-.034-.296-.077a1.165 1.165 0 00-.527-.006zm12.59 1.456c.19.805.326 1.48.305 1.502-.021.022-.165.064-.32.096l-.282.056-.11-.559c-.06-.307-.136-.576-.17-.596-.046-.03-1.162.206-1.248.263-.01.006.047.268.125.581.079.314.125.59.102.612-.023.023-.166.067-.32.098l-.278.056-.328-1.37c-.36-1.509-.38-1.656-.214-1.658.063 0 .2-.024.306-.053.175-.047.203.004.307.554.07.374.152.59.215.566.056-.022.341-.093.633-.16l.532-.118-.055-.303c-.188-1.038-.22-.944.36-1.019.054-.007.251.645.44 1.452zm-9.128-.93c.066.082.216.334.333.56.418.806.378.8 1.058.183.587-.532.807-.629 1.06-.468.1.064.088.29-.07 1.297-.296 1.877-.252 1.75-.576 1.684-.154-.03-.294-.071-.313-.09-.018-.018.03-.434.11-.923.078-.49.13-.902.115-.917-.015-.014-.266.184-.558.44-.604.532-.578.54-1.018-.322-.123-.24-.257-.415-.299-.389-.041.026-.127.437-.19.915l-.114.867h-.29c-.16 0-.312-.02-.337-.045-.043-.043.34-2.685.426-2.941.051-.152.5-.05.663.15zm5.642.456c0 .246-.026.263-.477.318a8.662 8.662 0 01-.822.058c-.335 0-.345.01-.318.29l.029.29.6-.022c.594-.022.602-.02.65.234.027.141.031.275.009.298-.023.023-.305.058-.628.08l-.586.036v.628l.792-.019.792-.019.056.276.057.275-.544.057c-.3.031-.818.057-1.153.057h-.608l-.06-.834c-.094-1.336-.073-2.152.055-2.204.063-.025.573-.049 1.135-.053l1.02-.007v.26z"
                                          fill="#07E"></path>
                                </svg>
                            </div>
                            <div className="footer-license-icon">
                                <img
                                    src="../../../Downloads/saveweb2zip-com-1wbrz-top/1ZDpfma2utCg.top/static/home/img/casino-mentor.png"/>
                                <div className="footer-license-icon-separator"></div>
                            </div>
                            <div className="footer-license-icon">
                                <img
                                    src="../../../Downloads/saveweb2zip-com-1wbrz-top/1ZDpfma2utCg.top/static/home/img/best-bitcoin-casino.png"/>
                                <div className="footer-license-icon-separator"></div>
                            </div>
                            <div className="footer-license-icon">
                                <img
                                    src="../../../Downloads/saveweb2zip-com-1wbrz-top/1ZDpfma2utCg.top/static/home/img/casinos-analyzer.png"/>
                                <div className="footer-license-icon-separator"></div>
                            </div>
                            <div className="footer-license-icon">
                                <img
                                    src="../../../Downloads/saveweb2zip-com-1wbrz-top/1ZDpfma2utCg.top/static/home/img/cricket-betting-wali.png"/>
                                <div className="footer-license-icon-separator"></div>
                            </div>
                            <div className="footer-license-icon">
                                <img
                                    src="../../../Downloads/saveweb2zip-com-1wbrz-top/1ZDpfma2utCg.top/static/home/img/cricket-betting-guru.png"/>
                                <div className="footer-license-icon-separator"></div>
                            </div>
                            <div className="footer-license-18"> 18+</div>
                        </div>
                    </div>
                    <div className="footer-license-col" onClick="popup_show('go_auth',{tab: 'registration'})">
                        <div className="footer-license-desktop-icon">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="icon" style={{fontSize: "16px"}}>
                                <path
                                    d="M13.333 12c.734 0 1.327-.6 1.327-1.333l.007-7.334c0-.733-.6-1.333-1.334-1.333H2.667c-.734 0-1.334.6-1.334 1.333v7.334c0 .733.6 1.333 1.334 1.333H0c0 .733.6 1.333 1.333 1.333h13.334c.733 0 1.333-.6 1.333-1.333h-2.667zM2.667 3.333h10.666v7.334H2.667V3.333zM8 12.667A.669.669 0 017.333 12c0-.367.3-.667.667-.667.367 0 .667.3.667.667 0 .367-.3.667-.667.667z"
                                    fill="#fff"></path>
                            </svg>
                        </div>
                        <label className="footer-license-lang">
                            <div className="footer-license-lang-label">Ru</div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                 className="flag-icon footer-license-lang-icon">
                                <path fill="#f0f0f0" d="M 0 0 H 512 V 170.666 H 0 z"></path>
                                <path fill="#0052b4" d="M 0 170.666 H 512 V 341.333 H 0 z"></path>
                                <path fill="#d80027" d="M 0 341.333 H 512 V 512 H 0 z"></path>
                            </svg>
                        </label>
                        <div className="footer-license-desktop-icon">
                            <svg viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
                                <path opacity=".9" fill-rule="evenodd" clip-rule="evenodd"
                                      d="M8.193 5.511a1.111 1.111 0 00-1.57 0l-5.556 5.556a1.111 1.111 0 001.57 1.57l3.66-3.66v9.912a1.111 1.111 0 002.222 0V8.978l3.659 3.659a1.11 1.11 0 001.57-1.57L8.193 5.51zM13.704 2.222a1.111 1.111 0 000-2.222H1.11a1.111 1.111 0 000 2.222h12.593z"
                                      fill="#fff"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </footer>
            <nav className="mobile-tabs">
                <ul className="mobile-tabs__list">
                    <li className="mobile-tabs__list-item mobile-tabs__list-item--active">
                        <a href="/" className="mobile-tabs__link-content">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 16" className="icon">
                                <g fill="none" fill-rule="evenodd" transform="translate(.5)">
                                    <path fill="currentColor" fill-rule="nonzero"
                                          d="M2.998 5.546h7.179a1 1 0 011 1v5.772a1 1 0 01-1 1h-7.18a1 1 0 01-1-1V6.546a1 1 0 011-1zm-.294-3.532h3.832a.707.707 0 010 1.413H2.704a.707.707 0 110-1.413z"></path>
                                    <rect width="12" height="14.438" x=".5" y=".5" stroke="currentColor" rx="2"></rect>
                                </g>
                            </svg>
                            <span className="mobile-tabs__link-label" style={{color: '#fff'}}>Главная</span>
                        </a>
                    </li>
                    <li className="mobile-tabs__list-item">
                        <a href="javascript:void(0)" onClick="popup_show('go_auth',{tab: 'registration'})"
                           className="mobile-tabs__link-content">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="icon">
                                <path
                                    d="M18.97 3.677h-6.387c-.133-.399-.433-.698-.765-.898L14.213.584a.356.356 0 00.033-.466c-.1-.133-.333-.133-.466-.033L11.153 2.48c-.765-.2-1.53-.2-2.296 0L6.23.085c-.134-.133-.333-.1-.466.033s-.1.333.033.466l2.395 2.195a1.76 1.76 0 00-.798.898H1.007a.98.98 0 00-.998.998v11.31a.98.98 0 00.998.998H18.97a.98.98 0 00.998-.998V4.675a.98.98 0 00-.998-.998zm0 11.975c0 .2-.133.333-.333.333H1.34c-.2 0-.333-.133-.333-.333V5.008c0-.2.133-.333.333-.333h17.297c.2 0 .333.133.333.333v10.644zM14.313 18.646h-1.996v-.998H7.66v.998H5.997c-.932 0-1.664.067-1.664.998 0 .2.133.333.333.333h10.977c.2 0 .333-.133.333-.333 0-.931-.732-.998-1.663-.998z"></path>
                            </svg>
                            <span className="mobile-tabs__link-label">Live</span>
                        </a></li>
                    <li className="mobile-tabs__list-item mobile-tabs__list-item--coupon">
                        <a href="javascript:void(0)" onClick="popup_show('go_auth',{tab: 'registration'})"
                           className="mobile-tabs__link-content">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 18" className="icon">
                                <path
                                    d="M12.316 13.263V16a2 2 0 01-2 2H8.479a2.37 2.37 0 00-4.642 0H2a2 2 0 01-2-2v-2.737h2.368a.474.474 0 000-.947H0V2a2 2 0 012-2h1.837a2.37 2.37 0 004.642 0h1.837a2 2 0 012 2v10.316H9.947a.474.474 0 000 .947h2.369zm-8.053-.947a.474.474 0 100 .947h3.79a.474.474 0 000-.947h-3.79z"></path>
                            </svg>
                            <span className="mobile-tabs__link-label">0</span>
                        </a></li>
                    <li className="mobile-tabs__list-item">
                        <a href="/stock" className="mobile-tabs__link-content" noopener="" noreferrer=""
                           target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" className="icon">
                                <path
                                    d="M10.956 0C4.915 0 0 4.915 0 10.956c0 6.041 4.915 10.956 10.956 10.956 6.041 0 10.956-4.915 10.956-10.956C21.912 4.915 16.997 0 10.956 0zm-.881.853h1.7v1.7h-1.7v-1.7zm8.532 10.103c0 4.22-3.432 7.651-7.651 7.651-4.219 0-7.651-3.432-7.651-7.651 0-4.219 3.432-7.651 7.651-7.651 4.219 0 7.651 3.432 7.651 7.651zM4.413 3.211l1.202 1.202-1.202 1.202-1.202-1.202 1.202-1.202zm-1.892 8.595h-1.7v-1.7h1.7v1.7zM4.413 18.7l-1.202-1.202 1.202-1.202L5.615 17.5l-1.202 1.202zm7.361 2.358h-1.7v-1.7h1.7v1.7zm5.725-2.358l-1.202-1.202 1.202-1.202 1.202 1.202-1.202 1.202zm0-13.086l-1.202-1.202L17.5 3.211l1.202 1.202L17.5 5.615zm1.829 6.19v-1.699h1.7v1.7h-1.7z"></path>
                                <path
                                    d="M4.72 10.956a6.242 6.242 0 006.236 6.235 6.242 6.242 0 006.235-6.235 6.242 6.242 0 00-6.235-6.235 6.242 6.242 0 00-6.235 6.235zm9.217-.529a2.5 2.5 0 01.39 1.41c0 1.249-.882 1.92-1.884 1.92-.684 0-1.073-.323-1.286-.591l.363 1.284h-1.14l.355-1.255c-.219.26-.602.588-1.26.588-1.003 0-1.89-.685-1.89-1.934 0-.505.093-.943.387-1.422.459-.746 2.99-2.893 2.99-2.893s2.517 2.147 2.975 2.893z"></path>
                            </svg>
                            <span className="mobile-tabs__link-label">Акции</span>
                        </a></li>
                    <li className="mobile-tabs__list-item">
                        <a href="javascript:void(0)" onClick="popup_show('go_auth',{tab: 'registration'})"
                           className="mobile-tabs__link-content">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 13" className="icon">
                                <path
                                    d="M17.179 5.66C16.318 1.725 15.104.754 14.365.365 13.181-.258 11.81.105 11.354.34c-.517.265-.866.77-1.391.99-.607.253-1.433.321-2.054.016-.495-.243-.932-.763-1.531-.993-.76-.293-2.026-.703-3.28.193C2.802.758.688 2.526.054 8.047c-.392 3.405 1.48 4.5 1.41 4.45.482.345 1.56.927 3.02.015.977-.608 1.769-1.81 1.769-1.81s.353-.67.821-.954c.332-.201.829-.048.829-.048h1.756s.557-.07.949.102c.38.166.595.575.595.575s1.157 1.492 2.267 2.253c.472.323 2.37.695 3.35-.5.64-.781 1.077-3.184.359-6.47zm-9.383-.348c0 .299-.238.54-.532.54h-1.33v1.356c0 .3-.238.542-.532.542h-.4a.537.537 0 01-.531-.542V5.853H3.14a.536.536 0 01-.532-.541v-.406c0-.3.238-.543.532-.543h1.33V3.01c0-.3.239-.542.532-.542h.4c.293 0 .531.242.531.542v1.354h1.33c.295 0 .533.242.533.542v.406zm3.748 1.895c-.551 0-.998-.454-.998-1.016 0-.56.447-1.015.998-1.015.551 0 .998.454.998 1.015 0 .562-.447 1.016-.998 1.016zm1.83-2.256a.996.996 0 01-.987-1.005.995.995 0 01.986-1.003c.545 0 .987.45.987 1.003a.996.996 0 01-.987 1.005z"></path>
                            </svg>
                            <span className="mobile-tabs__link-label">Live-games</span>
                        </a></li>
                </ul>
            </nav>


        </div>
    );
}

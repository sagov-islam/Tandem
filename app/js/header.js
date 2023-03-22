let pathname = '/Tandem' + document.location.pathname

for (let i = (pathname.length - 1) ; i >= 0; --i) {
    if (pathname[i] === '/') {
        pathname = pathname.slice(i, -5);
        break
    }  
}


const Header = 
`<header class="header">
    <div class="header__content">
        <a href="index.html" class="logo"></a>
        <nav class="header__nav">
            <ul>
                <li class="${pathname === '/index' ? 'active' : ''}">
                    <a href="index.html">Главная</a>
                </li>
                <li class="${pathname === '/activities' ? 'active' : ''}">
                    <a href="activities.html">Виды деятельности</a>
                </li>
                <li class="${pathname === '/news' ? 'active' : ''}">
                    <a href="news.html">Новости</a>
                </li>
                <li class="${pathname === '/about-company' ? 'active' : ''}">
                    <a href="about-company.html">О компании</a>
                </li>
                <li class="${pathname === '/career' ? 'active' : ''}">
                    <a href="career.html">Карьера</a>
                </li>
                <li class="${pathname === '/contacts' ? 'active' : ''}">
                    <a href="contacts.html">Контакты</a>
                </li>
            </ul>
        </nav>
        <ul class="header__icons">
            <li>
                <a href="mailto:" class="btn-letter" aria-label="Написать письмо">
                    <svg width="26" height="26" viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29961 37.4H43.7996C46.0996 37.4 47.9996 35.5 47.9996 33.2V5C47.9996 2.7 46.0996 0.800003 43.7996 0.800003H4.29961C1.99961 0.800003 0.0996094 2.7 0.0996094 5V33.2C0.0996094 35.5 1.99961 37.4 4.29961 37.4ZM2.84255 4.53907C2.99321 3.92617 3.52538 3.5 4.19961 3.5H43.6996C44.3461 3.5 44.8619 3.89177 45.0361 4.46426L28.0004 21.5C25.8004 23.7 22.1004 23.7 19.9004 21.5L2.84255 4.53907ZM2.79961 8.29922V29.7008L13.5004 19L2.79961 8.29922ZM2.84194 33.4585L15.4004 20.9L18.0004 23.5C19.6004 25.1 21.7004 26 23.9004 26C26.1004 26 28.2004 25.1 29.8004 23.5L32.4004 20.9L45.0361 33.5357C44.8619 34.1082 44.3461 34.5 43.6996 34.5H4.19961C3.52447 34.5 2.99178 34.0727 2.84194 33.4585ZM45.0996 29.7992V8.20078L34.3004 19L45.0996 29.7992Z" fill=""/>
                    </svg>
                </a>
            </li>
            <li>
                <a href="tel:+" class="btn-phone" aria-label="Позвонить">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                        <path d="M153.62012 38.45117a6.00483 6.00483 0 0 1 7.3457-4.248 86.16039 86.16039 0 0 1 60.83106 60.83106 6.00022 6.00022 0 1 1-11.59376 3.09766 74.12757 74.12757 0 0 0-52.335-52.335 6.00032 6.00032 0 0 1-4.248-7.34572Zm-4.03612 38.2627a42.0663 42.0663 0 0 1 29.70213 29.70213 6.00022 6.00022 0 0 0 11.59375-3.09766 54.10244 54.10244 0 0 0-38.19824-38.19824 6.00022 6.00022 0 0 0-3.09764 11.59377Zm79.98829 98.11523A54.06881 54.06881 0 0 1 176 222C97.70117 222 34 158.29883 34 80a54.06881 54.06881 0 0 1 47.1709-53.57227 14.0284 14.0284 0 0 1 14.56348 8.3877l20.09082 46.87793a13.97116 13.97116 0 0 1-1.1543 13.18264l-16.63574 25.41892a1.92572 1.92572 0 0 0-.167 1.88672v.001a78.53419 78.53419 0 0 0 36.26954 36.10547 1.92279 1.92279 0 0 0 1.8916-.18164l25.03515-16.69434a13.95374 13.95374 0 0 1 13.28223-1.21973l46.83691 20.07324a14.0264 14.0264 0 0 1 8.38868 14.56346Zm-11.90629-1.5039a1.97274 1.97274 0 0 0-1.21-2.03028l-46.83593-20.07324a2.0042 2.0042 0 0 0-1.89844.1748l-25.03413 16.69434a13.96574 13.96574 0 0 1-13.7666 1.00391 90.591 90.591 0 0 1-41.8359-41.64649 13.98163 13.98163 0 0 1 .90918-13.72461l16.63574-25.41992a1.99737 1.99737 0 0 0 .165-1.88476L84.70508 39.543a1.99164 1.99164 0 0 0-1.80274-1.22363 1.7927 1.7927 0 0 0-.22754.01464A42.04507 42.04507 0 0 0 46 80a130.14675 130.14675 0 0 0 130 130 42.04507 42.04507 0 0 0 41.666-36.6748Z"/>
                    </svg>
                </a>
            </li>
        </ul>
        <div class="header__text" stlye="font-family: 'Bethoveen', cursive;">Это люди</div>
        <div class='burger'>
                <button aria-label="Меню" class="burger__btn">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div class="burger__content">
                    <div class="burger__text" stlye="font-family: 'Bethoveen', cursive;">Это люди</div>
                    <nav class="burger__nav">
                        <ul>
                            <li class="${pathname === '/index' ? 'active' : ''}">
                                <a href="index.html">Главная</a>
                            </li>
                            <li class="${pathname === '/activities' ? 'active' : ''}">
                                <a href="activities.html">Виды деятельности</a>
                            </li>
                            <li  class="${pathname === '/news' ? 'active' : ''}">
                                <a href="news.html">Новости</a>
                            </li>
                            <li  class="${pathname === '/about-company' ? 'active' : ''}">
                                <a href="about-company.html">О компании</a>
                            </li>
                            <li class="${pathname === '/career' ? 'active' : ''}">
                                <a href="career.html">Карьера</a>
                            </li>
                            <li  class="${pathname === '/contacts' ? 'active' : ''}">
                                <a href="contacts.html">Контакты</a>
                            </li>
                        </ul>
                    </nav>
                    <div class="burger__contacts">
                        <a href="mailto:">contact@company.com</a>
                        <a href="tel:+">8 800 000 00 00</a>
                    </div>
                </div>
        </div>
    </div>
</header>
`;

document.querySelector('body').insertAdjacentHTML('afterbegin', Header);

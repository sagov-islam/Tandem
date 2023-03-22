
// <div class="footer__support">
// <p>Мы развиваемся при поддержке:</p>
// <div><img src="images/support-organizations/organization-1.png" alt="" width="90" height="90"></div>
// <div class="org-2"><img src="images/support-organizations/organization-2.svg"  alt="" width="90" height="90"></div>
// </div>


const Footer = `
<footer>
    <div class="footer">
        <div class="container">
            <div class="footer__content">
                <div class="footer__company">
                    <div>
                        <a href="" class="logo"></a>
                        <p class="footer__company-motto">Тандем - это Люди!</p>
                    </div>
                    
                   
                </div>
                <nav class="footer__main-links">
                   
                    <ul>
                        <li><a href="activities.html">Главная</a></li>
                        <li><a href="activities.html">Виды деятельности</a></li>
                        <li><a href="index.html#partners">Партнеры</a></li>
                        <li><a href="news.html">Новости</a></li>
                    </ul>
                </nav>
                <nav class="footer__about-us-links">
            
                    
                    <ul>
                        <li><a href="about-company.html#team">О компании</a></li>
                        <li><a href="about-company.html#team">Наша команда</a></li>
                        <li><a href="career.html">Карьера</a></li>
                        <li><a href="career.html#vacancies-block">Вакансии</a></li>
                    </ul>
                </nav>
                <div class="contacts contacts--white">
                    <a href="/contacts"><strong>Контакты</strong></a>
                   
                    <a href="tel:+" class="contacts__phone">
                    <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                        <path d="M153.62012 38.45117a6.00483 6.00483 0 0 1 7.3457-4.248 86.16039 86.16039 0 0 1 60.83106 60.83106 6.00022 6.00022 0 1 1-11.59376 3.09766 74.12757 74.12757 0 0 0-52.335-52.335 6.00032 6.00032 0 0 1-4.248-7.34572Zm-4.03612 38.2627a42.0663 42.0663 0 0 1 29.70213 29.70213 6.00022 6.00022 0 0 0 11.59375-3.09766 54.10244 54.10244 0 0 0-38.19824-38.19824 6.00022 6.00022 0 0 0-3.09764 11.59377Zm79.98829 98.11523A54.06881 54.06881 0 0 1 176 222C97.70117 222 34 158.29883 34 80a54.06881 54.06881 0 0 1 47.1709-53.57227 14.0284 14.0284 0 0 1 14.56348 8.3877l20.09082 46.87793a13.97116 13.97116 0 0 1-1.1543 13.18264l-16.63574 25.41892a1.92572 1.92572 0 0 0-.167 1.88672v.001a78.53419 78.53419 0 0 0 36.26954 36.10547 1.92279 1.92279 0 0 0 1.8916-.18164l25.03515-16.69434a13.95374 13.95374 0 0 1 13.28223-1.21973l46.83691 20.07324a14.0264 14.0264 0 0 1 8.38868 14.56346Zm-11.90629-1.5039a1.97274 1.97274 0 0 0-1.21-2.03028l-46.83593-20.07324a2.0042 2.0042 0 0 0-1.89844.1748l-25.03413 16.69434a13.96574 13.96574 0 0 1-13.7666 1.00391 90.591 90.591 0 0 1-41.8359-41.64649 13.98163 13.98163 0 0 1 .90918-13.72461l16.63574-25.41992a1.99737 1.99737 0 0 0 .165-1.88476L84.70508 39.543a1.99164 1.99164 0 0 0-1.80274-1.22363 1.7927 1.7927 0 0 0-.22754.01464A42.04507 42.04507 0 0 0 46 80a130.14675 130.14675 0 0 0 130 130 42.04507 42.04507 0 0 0 41.666-36.6748Z"/>
                    </svg>
                        8 800 000 00 00
                    </a>
                    <a href="mailto:" class="contacts__mail">
                        <svg width="26" height="26" viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29961 37.4H43.7996C46.0996 37.4 47.9996 35.5 47.9996 33.2V5C47.9996 2.7 46.0996 0.800003 43.7996 0.800003H4.29961C1.99961 0.800003 0.0996094 2.7 0.0996094 5V33.2C0.0996094 35.5 1.99961 37.4 4.29961 37.4ZM2.84255 4.53907C2.99321 3.92617 3.52538 3.5 4.19961 3.5H43.6996C44.3461 3.5 44.8619 3.89177 45.0361 4.46426L28.0004 21.5C25.8004 23.7 22.1004 23.7 19.9004 21.5L2.84255 4.53907ZM2.79961 8.29922V29.7008L13.5004 19L2.79961 8.29922ZM2.84194 33.4585L15.4004 20.9L18.0004 23.5C19.6004 25.1 21.7004 26 23.9004 26C26.1004 26 28.2004 25.1 29.8004 23.5L32.4004 20.9L45.0361 33.5357C44.8619 34.1082 44.3461 34.5 43.6996 34.5H4.19961C3.52447 34.5 2.99178 34.0727 2.84194 33.4585ZM45.0996 29.7992V8.20078L34.3004 19L45.0996 29.7992Z" fill=""/>
                            </svg>
                            
                        contact@company.com
                    </a>
                    <span class="contacts__location">
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="28" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.625 10.5c0-2.55271-1.0141-5.00087-2.8191-6.8059C16.0009 1.88906 13.5527.875 11 .875c-2.55271 0-5.00087 1.01406-6.8059 2.8191C2.38906 5.49913 1.375 7.94729 1.375 10.5 1.375 19.25 11 27.125 11 27.125s9.625-7.875 9.625-16.625Z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 14.875c2.4162 0 4.375-1.9588 4.375-4.375 0-2.41625-1.9588-4.375-4.375-4.375-2.41625 0-4.375 1.95875-4.375 4.375 0 2.4162 1.95875 4.375 4.375 4.375Z"/></svg>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>


                    <span class="galaxy">Разработано в струдии: <a href="http://ongalaxy.ru/" target="_blank">Galaxy</a> </span>
                </div>
                <div class="footer__support" style='display: none;'>
                    <p>Мы развиваемся при поддержке:</p>
                    <div>
                        <div class="support"><img src="images/support-organizations/organization-1.png" alt="" width="90" height="90"></div>
                        <div class="support"><img src="images/support-organizations/organization-1.png" alt="" width="90" height="90"></div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</footer>
`

document.querySelector('main').insertAdjacentHTML('afterend', Footer);

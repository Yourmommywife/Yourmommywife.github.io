/* Global Styles */
body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    color: #1E1E1E;
    background-color: #F9F9F9;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}

/* Buttons */
.btn {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    border-radius: 5px;
    cursor: pointer;
}

.btn--primary {
    background-color: #226043; /* Originalna zelena boja */
    color: white;
}

.btn--secondary {
    background-color: #D5AF30; /* Zlatna boja za "Dodaj u korpu" */
    color: white;
}

/* Header */
.header {
    background-color: white;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.header__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
}

.logo h1 {
    color: #226043;
    font-size: 24px;
    font-weight: 700;
    margin: 0;
}

.nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 0;
}

.nav a {
    color: #1E1E1E;
    font-size: 18px;
    text-decoration: none;
    position: relative;
}

.nav a::after {
    content: '';
    width: 0%;
    height: 2px;
    background: #226043;
    position: absolute;
    left: 0;
    bottom: -5px;
    transition: all 0.3s ease-in-out;
}

.nav a:hover::after {
    width: 100%;
}

.search input {
    padding: 5px 10px;
    border-radius: 32px;
    border: 1px solid #CCC;
    width: 150px;
}

/* Hero Section */
.hero {
    background-color: white;
    padding: 50px 0;
}

.hero__container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.hero__text {
    flex: 1;
    max-width: 500px;
    animation: fadeInLeft 1s ease-in-out;
}

.hero__text h2 {
    color: #226043;
    font-size: 50px;
    font-weight: 600;
    margin-bottom: 20px;
}

.hero__text p {
    color: #1E1E1E;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 30px;
}

.hero__image {
    flex: 1;
    max-width: 600px;
    animation: fadeInRight 1s ease-in-out;
}

.hero__image img {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

/* Products Section */
.products {
    background-color: #F9F9F9;
    padding: 60px 0;
}

.products__container {
    position: relative;
}

.carousel {
    overflow: hidden;
    position: relative;
}

.carousel__item {
    display: none;
    align-items: center;
    flex-wrap: wrap;
    position: absolute;
    width: 100%;
    transition: opacity 0.8s ease-in-out;
}

.carousel__item.active {
    display: flex;
    position: relative;
    opacity: 1;
}

.carousel__item.inactive {
    opacity: 0;
}

.products__text {
    flex: 1;
    max-width: 500px;
    animation: fadeInUp 0.8s ease-in-out;
}

.products__text h2 {
    color: #226043;
    font-size: 50px;
    font-weight: 600;
    margin-bottom: 20px;
}

.products__text p {
    color: #1E1E1E;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 30px;
}

.products__image {
    flex: 1;
    max-width: 500px;
    animation: fadeInDown 0.8s ease-in-out;
}

.products__image img {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

.carousel__controls {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.carousel__control {
    background: rgba(255, 255, 255, 0.8);
    border: none;
    color: #226043;
    font-size: 30px;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 50%;
    margin: 0 10px;
}

.carousel__control:hover {
    background: rgba(255, 255, 255, 1);
}

.carousel__indicators {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.carousel__indicator {
    width: 15px;
    height: 15px;
    background-color: #CCC;
    margin: 0 5px;
    border-radius: 50%;
    cursor: pointer;
}

.carousel__indicator.active {
    background-color: #226043;
}

/* Social Proof Section */
.social-proof {
    background-color: #226043;
    color: white;
    padding: 60px 0;
    text-align: center;
}

.social-proof h2 {
    font-size: 36px;
    margin-bottom: 40px;
    animation: fadeIn 1s ease-in-out;
}

.testimonials {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.testimonial {
    background-color: #F9F9F9;
    color: #1E1E1E;
    padding: 20px;
    border-radius: 10px;
    max-width: 300px;
    animation: fadeInUp 0.8s ease-in-out;
}

.testimonial p {
    margin: 0 0 10px;
}

.testimonial strong {
    color: #226043;
}

/* Footer */
.footer {
    background-color: white;
    padding: 40px 0;
    color: #1E1E1E;
}

.footer__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.footer__logo-contact {
    flex: 1;
    min-width: 250px;
}

.footer__logo-contact h3 {
    color: #226043;
    font-size: 24px;
    font-weight: 700;
}

.footer__logo-contact p {
    color: #1E1E1E;
    font-size: 16px;
    line-height: 32px;
}

.footer__links {
    flex: 1;
    min-width: 250px;
}

.footer__links h4 {
    color: #226043;
    font-size: 18px;
    line-height: 28px;
}

.footer__links ul {
    list-style: none;
    padding: 0;
}

.footer__links a {
    color: #1E1E1E;
    font-size: 16px;
    text-decoration: none;
    display: block;
    margin-bottom: 10px;
}

.footer__links a:hover {
    color: #226043;
}

.footer__subscribe {
    flex: 1;
    min-width: 250px;
}

.footer__subscribe h4 {
    color: #226043;
    font-size: 18px;
    line-height: 28px;
}

.footer__subscribe p {
    color: #1E1E1E;
    font-size: 14px;
    margin-bottom: 10px;
}

.footer__subscribe form {
    display: flex;
    align-items: center;
}

.footer__subscribe input {
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px 0 0 6px;
    flex: 1;
}

.footer__subscribe button {
    padding: 10px;
    background-color: #226043;
    color: white;
    border: none;
    border-radius: 0 6px 6px 0;
    cursor: pointer;
}

.footer__bottom {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    color: #1E1E1E;
    font-size: 16px;
}

/* Animations */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes fadeInLeft {
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
}

@keyframes fadeInRight {
    from { opacity: 0; transform: translateX(20px); }
    to { opacity: 1; transform: translateX(0); }
}

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Responsive Styles */
@media (max-width: 768px) {
    .header__container {
        flex-direction: column;
        align-items: flex-start;
    }

    .nav ul {
        flex-direction: column;
        gap: 10px;
    }

    .hero__container {
        flex-direction: column;
    }

    .products__text, .products__image {
        max-width: 100%;
    }

    .carousel__controls {
        display: none;
    }

    .footer__container {
        flex-direction: column;
        align-items: flex-start;
    }

    .footer__bottom {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
}

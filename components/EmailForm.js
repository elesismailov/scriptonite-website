
export default function EmailForm() {

    return (
        <section className="email-form">
            <div className="wrapper">
                <div className="flex-wrapper">
                    <form onSubmit={handleSubmit}>
                        <h2>Отправить заявку</h2>
                        <input name='firstName'   placeholder='Имя'     type="text" />
                        <input name='lastName'    placeholder='Фамилия' type="text" />
                        <input name='phoneNumber' placeholder='Номер'   type="text" />
                        <input name='email'       placeholder='Почта'   type="email" />
                        <button type="submit" className="submit">ОТПРАВИТЬ</button>
                    </form>

                    <div className="preview">
                        <img src="/images/preview-3.png" alt="Scriptonite on a concert." />
                    </div>
                </div>
                <p className="terms">By clicking the button, you are agreeing to our</p>
                <p className="terms"><a href="#" className="terms-link">Terms and Services</a>  </p>
            </div>
            
        </section>
    )
}

function handleSubmit(event) {
    event.preventDefault();

    const firstName = event.target.firstName.value.trim();
    const lastName = event.target.lastName.value.trim();
    const phoneNumber = event.target.phoneNumber.value.trim();
    const email = event.target.email.value.trim();

    if (!firstName) {
        event.target.firstName.classList.add('error');
    } else {event.target.firstName.classList.remove('error');}
    if (!lastName) {
        event.target.lastName.classList.add('error');
    } else {event.target.lastName.classList.remove('error');}
    if (!email) {
        event.target.email.classList.add('error');
    } else {event.target.email.classList.remove('error');}
    if (!phoneNumber) {
        event.target.phoneNumber.classList.add('error');
    } else {event.target.phoneNumber.classList.remove('error');}
    console.log(phoneNumber)

    if (!phoneNumber) {
        event.target.phoneNumber.value = '';
        event.target.phoneNumber.placeholder = 'Пожалуйста введите номер';
        event.target.phoneNumber.classList.add('error');
    }
}
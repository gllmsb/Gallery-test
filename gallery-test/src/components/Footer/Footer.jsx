import style from './footer.module.scss';
export const Myfooter = () =>{
    return (
        <footer className={style.footer}>
            <section>
                <form id='myForm'>
                    <h1>SUBSCRIBE TO NEWSLETTER</h1>
                    <input type="text" placeholder="Full name"/>
                    <input type="email" placeholder="Email" />
                    <button type="submit">Sign up</button>
                </form>
            </section>
            <section>
                <div>
                    <h3>Quick links</h3>
                    <ul>
                        <li>Hjem</li>
                        <li>Om os</li>
                        <li>Pris list</li>
                        <li>Booking</li>
                        <li>Newsletter</li>
                        <li>Kontakt</li>
                    </ul>
                    <h3>Follow us</h3>
                    <div>
                        <div className={style.pans}></div>
                        <div className={style.pans}></div>
                        <div className={style.pans}></div>
                    </div>
                </div>
                <div>
                <h3>Find us</h3>
                <p>WhatsApp <br />
                +45 23 43 43 43</p>
                <p>Telefonnummer <br />
                +45 58 84 8484</p>
                <p>Addresse <br />
                Supergade 56 <br />
                Oslo, Norway</p>
                </div>  
            </section>
        </footer>
    )
}
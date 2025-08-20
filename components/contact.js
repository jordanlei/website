import Link from 'next/link';
import Image from 'next/image';
import {Row, Col} from 'reactstrap';

export default function Contact(){
    const items = [
        {logo: <Image src="/images/experience/linkedin.png" width={80} height={80} className="defaultImage"/>, link: "https://www.linkedin.com/in/jordan-lei-782890130/"},
        {logo: <Image src="/images/experience/instagram.png" width={80} height={80}  className="defaultImage"/>, link: "https://www.instagram.com/leijordanart/"},
        {logo: <Image src="/images/experience/twitter.png" width={80} height={80}  className="defaultImage"/>, link: "https://twitter.com/NeuroLei"},
        {logo: <Image src="/images/experience/medium.png" width={80} height={80} className="defaultImage"/>, link: "https://jordanlei.medium.com/"},
    ];
      
    const cards = items.map((item, index) => (
        <Col key={index} className="contact-icon">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.logo}
            </a>
        </Col>
    ));

    return(
        <section id="contact">
            <div className="banner">
                <h1>Contact</h1>
                <div className="frostedCard">
                    <p>
                        Let's get in touch! Email me at jordanlei dot work at gmail dot com. <br/><br/>
                    </p>
                    <Row>
                        {cards}
                    </Row>
                </div>
            </div>
        </section>
    );
}
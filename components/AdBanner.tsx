import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa'

const AdBanner = () => {
    return(
        <section>
            <div>
                <p>+234 807 265 8726</p>
                <p>+234 803 472 0852</p>
                <p>Fundapaints@yahoo.com</p>
            </div>
            <ul>
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaInstagram />
              </li>
            </ul>
        </section>
    )
}


export default AdBanner
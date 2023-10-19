import fb from '../../../images/fb-logo.png'
import ig from '../../../images/ig-logo.webp'
import twt from '../../../images/twitter-logo.png'
import ws from '../../../images/ws-logo.webp'

export const Contact = () => {
    return (
        <div id='socials' className="contactUs">
            <a href="https://www.facebook.com/profile.php?id=100095141936768" target='_blank'><img src={ fb } /></a>
            <a href="https://www.instagram.com/infinitybuga/" target='_blank'><img src={ ig } /></a>
            <a href=""><img src={ twt } /></a>
            <a href=""><img src={ ws } /></a>
        </div>
    )
}

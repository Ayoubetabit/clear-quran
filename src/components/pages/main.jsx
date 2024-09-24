import '../../css/main.css'
import read from '../../asset/images/icons/read-quran.png'
import listen from '../../asset/images/icons/quran-listen.png'
import video from '../../asset/images/icons/quran-video.png'
import Navbar from '../layouts/navbar'
import Quran from '../config/quran-surah'
export default function Main(){

    const cards = [
        {
            icon:read,
            content:'Usage of the Internet is becoming more common due to rapid advancement of technology',
            start: '#',
        },
        {
            icon:listen,
            content:'Usage of the Internet is becoming more common due to rapid advancement of technology',
            start: '#',
        },
        {
            icon:video,
            content:'Usage of the Internet is becoming more common due to rapid advancement of technology',
            start: '#',
        }
    ]

    return <div className="main">
        <div className="block-1">
            <div className='header'>
                <Navbar/>                
            </div>
            <div className='intro'>
                    <span>WE ENSURE BETTER EXPERIEN LISTEN  FOR A BETTER WORLD</span>
                    <p>In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telescope known as the Hubble.</p>
                    <a href="#" className='get-started'>GET STARTED</a>
            </div>

        </div>
        <div className="block-2">
            <div className="grp-cards">
                {
                    cards.map((item, index)=>(
                        <div className="card">
                            <img src={item.icon} className='icon' />
                            <p className='description'>
                                {item.content}
                            </p>
                            <a href={item.start}>START</a>
                        </div>
                        
                    ))
                }
            </div>
            <div className='quran-surat'>
                <Quran/>
            </div>
        </div>
        
    </div>
}
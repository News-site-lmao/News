import { Link } from 'react-router-dom';

function Article() {

    return(
        <div className = ''>
            {/* Article card here */}
            <Link to = {'https://www.kfcmongolia.com/index'}>
                <div className = 'bg-gray-400 rounded overflow-hidden cursor-pointer'  >
                    <img src = {'../img/kfc.jpg'} alt = 'kfc' className = 'w-full h-32 sm:h-48' /> {/* Need to provide props*/}
                    <div className = 'm-4' >
                        <span className = 'font-bold'>Recipe of KFC delicious!</span>
                         <span className = 'block text-gray-500 text-sm text-right'>by munkhtavilan</span>
                     </div>
                </div>
            </Link>  
        </div>
    );
}

export default Article;
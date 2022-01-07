import "./featured.scss"
import { InfoOutlined,PlayArrow } from "@mui/icons-material";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
export default function Featured({type}) {
    return (
        <div className="featured">
            { type&&(
                <div className="category">
                    <span>{type==="movie"?"Movies":"Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>

            )}
            <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg" alt="" />
            <div className="info">
                <img src="https://www.vhv.rs/dpng/f/210-2105390_keanu-reeves-png.png" 
                alt="" 
                />
                <span className="desc">Lorem, ipsum dolor sit amet consectetur
                 adipisicing elit. Neque itaque dolorem animi earum eos illum, 
                 accusantium possimus praesentium.Enim suscipit 
                 culpa id. Fuga numquam iure dicta,
                 corrupti soluta deleniti enim.
                 </span>
                 <div className="buttons">
                     <button className="play">
                         <PlayArrowRoundedIcon/>
                         <span><strong>Play</strong>  </span>
                     </button>
                     <button className="more">
                        <InfoOutlined/>
                        <span> <strong>More Info </strong ></span>
                       
                     </button>
                 </div>
            </div>
        </div>
    )
}

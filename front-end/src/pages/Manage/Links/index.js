import React from 'react';
import { Link } from 'react-router-dom';
import { Grid} from './styled'
import { FaTrash, FaEdit } from 'react-icons/fa'
import MenuLinks from '../../../components/MenuLinks'

const Links = () => {
    return (
        <>
            <MenuLinks/>
            <div id="container">
                <Grid>

                    <div className="add">
                        <h1>Links</h1>
                        <Link to="/manage/links/create">
                            <button>Add +</button>
                        </Link>
                    </div>

                    <div className="links">
                        <img src="https://via.placeholder.com/100" />
                        <div className="info">
                            <div>
                                <span>Item Labelt rtrt rretre tretretretretretre</span>
                                <span>Item Url ret retr fdgfdgfd fgdfgf fdgfdg</span>
                            </div>
                            <div className="buttons">
                                <Link><FaEdit color="#e8b23c" size={20} /></Link>
                                <Link><FaTrash color="#d10808" size={20} /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="links">
                        <img src="https://via.placeholder.com/100" />
                        <div className="info">
                            <div>
                                <span>Item Labelt rtrt rretre tretretretretretre</span>
                                <span>Item Url ret retr fdgfdgfd fgdfgf fdgfdg</span>
                            </div>
                            <div className="buttons">
                                <Link><FaEdit color="#e8b23c" size={20} /></Link>
                                <Link><FaTrash color="#d10808" size={20} /></Link>
                            </div>
                        </div>
                    </div>
                </Grid>
            </div>
        </>
    )
}

export default Links;
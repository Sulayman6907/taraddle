'use client'
import React from 'react';
import { useState } from 'react';

import PostContent from './components/PostContent';
import Poststyle from './Post.module.css';

const Post: React.FC = () => {
    const [show, setShow] = useState<Boolean>(false);
    return (
        <>
            <div className={Poststyle.container}>
                <div className={Poststyle.text}>
                    This is dummy text
                </div>
                <div className={Poststyle.button} onClick={() => setShow(!show)}>Posten</div>
            </div>
            {show ? <PostContent /> : null}
        </>
    )
}

export default Post;
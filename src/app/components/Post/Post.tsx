'use client'
import React from 'react';
import { useState } from 'react';

import PostContent from './components/PostContent';
import GenericButton from '../Buttons/Button';
import PostStyle from './Post.module.css';

const Post: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);
    return (
        <>
            <div className={PostStyle.post_container}>
                <div className={PostStyle.text}>
                    This is dummy text
                </div>
                <GenericButton onClick={() => setShow(!show)}>Posten</GenericButton>
            </div>
            {show ? <PostContent show={show} setShow={(x)=>setShow(x)} /> : null}
        </>
    )
}

export default Post;
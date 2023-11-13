import React, { useState, useEffect } from 'react';
import GenericButton from '../../Buttons/Button';
import PostContentStyle from '../styles/PostContent.module.css';

type PostContentProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const PostContent: React.FC<PostContentProps> = ({ show, setShow }) => {
  const [text, setText] = useState<string>('');
  const initialTag = 'aapl'; // The initial tag you want to add

  // Set the initial tag in the textarea content
  useEffect(() => {
    setText(initialTag);
  }, [initialTag]);

  return (
    <div className={PostContentStyle.postcontent_container}>
      <textarea
        onChange={(e) => setText(e.target.value)}
        value={text}
        className={PostContentStyle.textarea}
        placeholder="Type your content with tags..."
      ></textarea>
      <div className={PostContentStyle.bottom_container}>
        <div>
          <img src="dummy.svg" alt="SVG1" className='img' />
          <img src="dummy.svg" alt="SVG2" className='img' />
          <img src="dummy.svg" alt="SVG3" className='img'/>
        </div>
        <div className={PostContentStyle.button_container}>
          <GenericButton
            backgroundColor="#15171f"
            textColor="rgba(209, 211, 220, 0.6"
            margin="0px 4px"
            borderColor="#DCDCDD"
            onClick={() => setShow(!show)}
          >
            Cancel
          </GenericButton>
          <GenericButton>Posten</GenericButton>
        </div>
      </div>
    </div>
  );
};

export default PostContent;

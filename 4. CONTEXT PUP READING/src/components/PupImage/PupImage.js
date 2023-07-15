import speedy from '../../pups/speedy-pup.jpg';
import banana from '../../pups/banana-pup.jpg';
import sleepy from '../../pups/sleepy-pup.jpg';
import { useContext } from 'react';
import { usePuppyType } from '../../context/PupContext';

const PupImage = () => {
  const { puppyType } = usePuppyType();

  return (
    <img src={puppyType} alt="pup" />
  );
};

export default PupImage;

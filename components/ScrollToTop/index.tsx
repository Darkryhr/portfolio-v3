import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const ToggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', ToggleVisibility);

    return () => window.removeEventListener('scroll', ToggleVisibility);
  }, []);

  return (
    <>
      {/* 
      // @ts-ignore */}
      <AnimatePresence>
        {visible ? (
          <motion.div
            className='fixed z-50 bottom-2.5 right-2.5 m-4 w-16 h-16 p-6 flex rounded-full justify-center items-center cursor-pointer bg-amber-400 outline-2 outline-neutral-700 outline-solid '
            onClick={ScrollToTop}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.9,
            }}
            variants={variants}
            initial='hidden'
            animate='visible'
            exit='hidden'
          >
            <button type='button' className='[&>svg]:fill-neutral-800 shadow'>
              <FaArrowUp size={30} />
            </button>
          </motion.div>
        ) : (
          ''
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollToTop;

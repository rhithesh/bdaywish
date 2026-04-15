import { useEffect, useState } from "react";
import localFont from 'next/font/local';

const myFont = localFont({
  src: '../public/fonts/hi.ttf',
});


const text = `You are the most beautiful person in my life.
You're my everything
I can't imagine me without you
You know how much I love you but still I wanna say it to you
Again and again and again
I Love You So Much ❤️`;

export default function TypingText() {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 160); // speed control

    return () => clearInterval(interval);
  }, []);

  return (
 <p className={`${myFont.className} mt-6 text-lg md:text-2xl font-light whitespace-pre-line`}>
      {displayedText}
    </p>
  );
}
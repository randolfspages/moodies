import { Anton } from "next/font/google";

const anton = Anton({ subsets: ["latin"],
    weight: ['400']
  });

export default function Button(props) {
    const { text, dark, full, clickHandler } = props
  return (
    <button onClick={clickHandler} className={'rounded-full overflow-hidden duration-200 hover:opacity-60 border-2 border-solid border-indigo-600 ' + (dark ? ' text-white bg-indigo-600 ' : ' text-indigo-600 ') + (full ? ' grid place-items-center w-full ' : ' ')}>
            <p className={'px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 ' + anton.className}>{text}</p>
        </button>
  )
}


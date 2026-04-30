import React from 'react'

interface ButtonComponentProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  id?: string;
}
export const ButtonComponent = ({ children, onClick, id }: ButtonComponentProps) => {
  return (
    <button id={id} className="button-content bg-black text-white md:text-base text-sm pl-6 py-1 px-1 rounded-full flex  justify-center items-center" onClick={onClick}>
        {children}
        <span className="bg-white text-black flex justify-center items-center ml-5 p-3 button--skoll">
            <span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.37505 8.24995L12.0645 8.24995L8.68955 4.87495L9.75005 3.81445L14.9355 8.99995L9.75005 14.1855L8.68955 13.125L12.0645 9.74995L3.37505 9.74995V8.24995Z" fill="black"/>
                </svg>
            </span>
        </span>
    </button>
  )
}
import Link from 'next/link'
import React from 'react'
import {AiOutlineInstagram,AiFillGithub,AiFillPhone} from 'react-icons/ai'
import {BsTelegram,BsFacebook,BsDiscord} from 'react-icons/bs'
function Contactus() {

    const integrations = [
        {   id:1,
            title: "Instagram",
            desc: "My account",
            icon: <AiOutlineInstagram/>,
            color:'#c62e93',
            href:'https://www.instagram.com/murod_kuchkarov/'
    
        }, {
            id:2,
            title: "Github",
            desc: "GitHub account with some code",
            icon: <AiFillGithub/>,
            color:'#171515',
            href:'https://github.com/KuchkarovMurodbek'
    
        }, {
            id:3,
            title: "Discord",
            desc: "Globaly connection for",
            icon: <BsDiscord/>,
            color:'#7289da',
            href:''
    
    
        },
        { id:4,
            title: "Telegram",
            desc: "It is more convenient to connect for me",
            icon: <BsTelegram/>,
            color:'#0088cc',
            href:'https://t.me/murod_kuchkarov'
    
    
        },
       
        { id:5,
            title: "Facebook",
            desc: "It is also possible type",
            icon: <BsFacebook/>,
            color:'#3b5998',
            href:'https://www.facebook.com/murod.qochqarov.9?mibextid=ZbWKwL'
    
    
        },
        { id:6,
            title: "Phone",
            desc: "+9943125825",
            icon: <AiFillPhone/>,
            color:'#1ed760',
            href:''
    
    
        },
    ]

  return (
    <>
      <section className="pt-16  h-screen" style={{background:'#202124'}}>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="max-w-md">
                <h1 className="text-gray-100 text-xl font-extrabold sm:text-2xl">For integrations with me</h1>
                <p className="text-gray-200 mt-2">See and connect with me by these platforms below </p>
            </div>
            <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {
                    integrations.map((item) => (
                        <li key={item.id} className="border rounded-lg bg-white">
                            <div className="flex items-start justify-between p-4">
                                <div className="space-y-2">
                                    <span style={{color:`${item.color}`}} className='text-[20px]'>  {item.icon}</span>
                                    <h4 className="text-gray-800 font-semibold">{item.title}</h4>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                                <Link href={item.href} target='_blank' className="text-gray-700 text-sm border rounded-lg px-3 py-2 duration-150 hover:bg-gray-100">Connect</Link>
                            </div>
                            <div className="py-5 px-4 border-t text-right">
                                <button  className="text-indigo-600 hover:text-indigo-500 text-sm font-medium">
                                    For question 
                                </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    </section>
    
    
    </>
  )
}

export default Contactus
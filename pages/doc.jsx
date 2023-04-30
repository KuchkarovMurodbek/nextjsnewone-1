import Link from "next/link";
import React from "react";
import {AiOutlineCheck} from 'react-icons/ai'



function Doc() {
    
  return (
    <div className=" h-screen ">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="items-start justify-between py-4 border-b md:flex">
          <div>
            <h3 className=" text-2xl font-bold">The Contents of Website</h3>
          </div>
          <div className="items-center gap-x-3 mt-6 md:mt-0 sm:flex">
            <Link
              href={"/"}
              className="block px-4 py-2 mt-3 text-center text-gray-700 duration-150 font-medium rounded-lg border bg-white sm:mt-0 md:text-sm"
            >
              HOME
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 md:px-8 pt-4">
        <p>
          <code className="bg-gray-100 px-2 italic">home</code> - is landing
          page
        </p>
        <p>
          <code className="bg-gray-100 px-2 italic">doc</code> - is this page
          here
        </p>
        <p>
          <code className="bg-gray-100 px-2 italic">about us </code> - it is
          only about me
        </p>
        <p>
          <code className="bg-gray-100 px-2 italic">blogs </code> - it is blogs
        </p>
        <p>
          <code className="bg-gray-100 px-2 italic">contact us </code> - here
          you can contact me with social application or email
        </p>
        <p>
          <code className="bg-gray-100 px-2 italic">sign in </code> - it is path
          to access to dashboard page;{" "}
          <span className="bg-green-200 px-1">username:</span> admin and also{" "}
          <span className="bg-green-200 px-1">password:</span> admin{" "}
        </p>
        <p>
          <code className="bg-gray-100 px-2 italic">sign up </code> - it is not
          used if we have it , just style
        </p>
        <p>
          <code className="bg-gray-100 px-2 italic">dashboard </code> - it is
          only dashboard page
        </p>
        <p>
          <code className="bg-gray-100 px-2 italic">dashboard/users </code> - it
          is users page , you can use the functinalitu of add,delete, update,
          filter
        </p>
        <p>
          <code className="bg-gray-100 px-2 italic">dashboard/charts </code> -
          it is the collection of chart
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 pt-4">
        <p className="font-medium ">The list of used technologies:</p>
        <ul >

        {['Nextjs','Tailwind Css','Float UI', 'Emotion/React', 'React-Icons','React-awesome-reveal'].map((item)=><li key={item} className="flex  items-center  italic">{item}   <span className="px-1 text-green-500"> <AiOutlineCheck/></span></li>)}
        
        </ul>
      </div>
    </div>
  );
}

export default Doc;

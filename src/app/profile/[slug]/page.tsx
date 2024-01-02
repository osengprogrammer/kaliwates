import React from 'react';
import {pageDb} from "@/constant/pagedb"
import PageComponent from '@/components/PageComponent/PageComponent';

interface PageProps {
  params: {
    slug: string;
  };
}

function Page({ params }: PageProps) {
let myPage: {
  title: string;
  slug: string;
  content: string;
}[] = pageDb

let myEx = myPage.filter(x=>{

    return x.slug == params?.slug
    
  })

if(myEx[0]){
  console.log(myEx[0]?.title)
}

  return (
    <div>
      {myEx[0]&&<PageComponent 
      title ={myEx[0].title}
      content ={myEx[0].content}
      
      />}
      
    </div>
    
  );
}

export default Page;

import React from 'react';
import parse from 'html-react-parser';
const PageComponent = ({title,content}:{title:string,content:string}) => {
  return (
    <div className="bg-gray-100 font-sans container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">{title}</h1>
      <div>{parse(content)}</div>
    </div>
  );
}

export default PageComponent;

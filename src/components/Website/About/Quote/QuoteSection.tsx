import React from 'react';

interface QuoteSectionProps {
  title: string;
  content: string;
}

const QuoteSection: React.FC<QuoteSectionProps> = ({ title, content }) => {
  return (
    <section className="flex flex-col justify-center px-16 py-20 bg-white max-md:px-5">
      <div className="mt-8 max-md:mr-1 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <h2 className="text-4xl font-bold leading-10 text-black whitespace-nowrap max-md:mt-10 max-md:max-w-full">
              {title}
            </h2>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <p className="grow text-lg leading-7 text-black max-md:mt-10 max-md:max-w-full">
              {content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
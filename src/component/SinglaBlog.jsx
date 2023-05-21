import React from 'react';

const SinglaBlog = ({ blog }) => {
    return (
        <div className=" bg-red-200 mx-4 md:mx-2 p-5 rounded-xl">
			
			<h2 className="font-popins text-2xl font-bold mb-8 pt-8 md:px-5">
				{" "}
				{blog.question}{" "}
			</h2>
			<p className="font-popins font-medium text-sm leading-6 text-slate-900 md:px-5">
				{" "}
				{blog.answer}{" "}
			</p>
		</div>
    );
};

export default SinglaBlog;
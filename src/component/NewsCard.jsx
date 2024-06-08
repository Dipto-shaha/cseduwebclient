import { Button } from "antd";

const NewsCard = () => {
    return (
        <div className="px-5 py-2 shadow-lg">
            <img src="/public/Img/Newscotest.jpg" className="w-full h-[300px] rounded-lg"></img>
            <p>29 Jul 2024</p>
            <p className="text-2xl font-semibold">Freshers’ reception and Farewell 2023</p>
            <p>The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.</p>
            <button className="text-right">Read More</button>
        </div>
    );
};

export default NewsCard;
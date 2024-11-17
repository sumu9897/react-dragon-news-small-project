import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
    const {data: news} = useLoaderData();
    //console.log(news);
    return (
        <div>
            <h2 className="font-semibold mb-3">Dragon News Home</h2>
            <p className="text-gray-400 text-sm">{news.length} News Found on This Category</p>
            <div>
                {
                    news.map((newsItem) =>(
                        <NewsCard key={newsItem._id} news={newsItem}></NewsCard>
                    ))
                }
            </div>
        </div>
    );
};

export default CategoryNews;
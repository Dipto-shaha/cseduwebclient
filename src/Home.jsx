import CarouselHome from "./component/CarouselHome";
import NewsCard from "./component/NewsCard";
const Home = () => {
  return (
    <div>
      <CarouselHome></CarouselHome>
      <div className="flex mx-10 my-10">
        <div className="w-4/5">
          <p className="font-bold text-3xl py-4">Message From the Chairman</p>
          <p>
            The Department of Computer Science and Engineering (CSE) at
            University of Dhaka (also known as Dhaka University or DU) is a
            place where brightest of minds from all over the country assemble
            for a greater future. The department, popularly known as CSEDU, has
            been inspiring the best and brightest for more than twenty three
            years in fostering the frontiers of Computer Science and
            Engineering. We consider all members of the community as catalysts
            of evolution and inspire them to break away from traditional learn
            and apply mentality to create new knowledge and instigate others to
            do the same. Our credibility and efficacy of the methods of
            education is reflected by our alumni who have been performing with
            excellence in their respective fields; in the top ranking
            universities as teachers and researchers and in the top companies
            all around the world as software engineers and IT specialists. Our
            students are well equipped to take the challenge to stand out as the
            leaders of tomorrow. We welcome all in our community who are willing
            to take the challenge. Welcome to progress. Welcome to CSEDU.
          </p>
        </div>
        <div className="w-1/4 flex flex-col items-center justify-center">
            <img src="/Img/RazzaqueSir.jpg" className="w-3/4 h-60 rounded-xl"></img>
            <p>Dr. Md. Abdur Razzaque</p>
        </div>
      </div>
      <div className="my-10">
        <p className="text-center text-4xl font-bold my-4">Latest News </p>
        <div className="grid grid-cols-3 gap-10">
            <NewsCard></NewsCard>
            <NewsCard></NewsCard>
            <NewsCard></NewsCard>
        </div>
      </div>
    </div>
  );
};

export default Home;

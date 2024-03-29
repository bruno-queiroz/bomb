import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="flex justify-center flex-col gap-12 items-center pt-32">
      <div>
        <h1
          className="text-5xl text-white font-bold text-center"
          data-testid="home-title"
        >
          Watch out for the <span className="text-red-600">Bombs</span>
        </h1>
        <p className="text-gray-300 text-lg text-center mt-2">
          Feeling lucky today? <br /> Test your luck and try to not find the
          bomb
        </p>
      </div>

      <Link
        to="/game-mode"
        className="py-2 px-6 bg-green-500 w-[max-content] mx-auto rounded"
        data-testid="play-link"
      >
        Play
      </Link>
    </section>
  );
};

export default Home;

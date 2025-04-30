import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Hero from "../assets/Hero.png";

function Home() {
  const authStatus = useSelector((state) => state.auth.status);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  if (posts.length === 0) {
    return (
      <div
        className="w-full text-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Hero})`,
        }}
      >
        <Container>
          <div className="flex items-center justify-end h-screen">
            <div className="text-right">
              <h1 className="text-4xl font-bold text-white mb-4">
                Welcome to My Website
              </h1>
              <p className="text-[#793aca] text-lg mb-6">
                A place to read, write, and deepen your understanding
              </p>
              <Link
                to={!authStatus ? "/signup" : "/all-posts"}
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
              >
                Start reading
              </Link>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;

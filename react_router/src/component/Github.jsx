import React, { useEffect, useState } from "react";

export default function GithubCard() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/justwasif")
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          // GitHub API sends { message: "Not Found" } or rate-limit error
          setError(data.message);
        } else {
          setData(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch GitHub data 😢");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64 text-white text-xl bg-black">
        Loading profile...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64 text-red-400 text-lg font-semibold">
        ⚠️ {error}
      </div>
    );
  }

  return (
    <div className="relative bg-black backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl p-6 w-96 text-center mx-auto transition-transform hover:scale-105 hover:shadow-orange-500/30 ">
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-orange-500/20 to-white/5 blur-xl -z-10"></div>

      {/* Avatar */}
      <img
        src={data.avatar_url}
        alt={data.login}
        className="w-32 h-32 rounded-full mx-auto border-4 border-orange-400 shadow-lg"
      />

      {/* Name + Username */}
      <h2 className="mt-4 text-2xl font-bold text-white">
        {data.name || "wasif"}
      </h2>
      <p className="text-gray-300">@{data.login}</p>

      {/* Bio */}
      <p className="mt-3 text-gray-200 text-sm italic">
        {data.bio || "No bio available"}
      </p>

      {/* Stats */}
      <div className="mt-6 flex justify-around text-gray-200">
        <div className="hover:scale-110 transition-transform">
          <span className="block text-xl font-bold text-orange-400">
            {data.followers}
          </span>
          <span className="text-sm">Followers</span>
        </div>
        <div className="hover:scale-110 transition-transform">
          <span className="block text-xl font-bold text-orange-400">
            {data.following}
          </span>
          <span className="text-sm">Following</span>
        </div>
        <div className="hover:scale-110 transition-transform">
          <span className="block text-xl font-bold text-orange-400">
            {data.public_repos}
          </span>
          <span className="text-sm">Repos</span>
        </div>
      </div>

      {/* Profile Link */}
      <a
        href={data.html_url}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-block bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold py-2 px-6 rounded-lg transition-all shadow-lg"
      >
        View Profile
      </a>
    </div>
  );
}

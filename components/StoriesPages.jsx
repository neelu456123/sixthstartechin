"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';

import { InfiniteCarousels } from "./ui/apple-caro.jsx";

export function StoriesPages() {
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();  // Access the router object

  const { slug } = router.query;  // Destructure the slug from the URL

  useEffect(() => {
    if (!slug) return;  // Ensure slug exists before making the fetch request

    const fetchStory = async () => {
      try {
        setLoading(true);
        console.log("Fetching story with slug:", slug); // Debugging
        const response = await fetch(`/api/stories/${slug}`);  // Make sure this matches your route
        if (!response.ok) throw new Error("Failed to fetch the story");

        const data = await response.json();
        console.log("Fetched data:", data); // Check what data is returned
        if (data.error) {
          throw new Error(data.error); // Handle any API response error
        }
        setStory(data);  // Update state with the fetched story
      } catch (err) {
        console.error("Error:", err);
        setError(err.message);  // Set the error message
      } finally {
        setLoading(false);  // Stop loading indicator
      }
    };

    fetchStory();
  }, [slug]);  // Re-run when slug changes

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-red-500 font-semibold">Error: {error}</p>
      </div>
    );
  }

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-red-500 font-semibold">No story found for the given slug.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">{story.title}</h1>
      <p className="mb-4">{story.description}</p>
      {/* Render story content */}
    </div>
  );
}

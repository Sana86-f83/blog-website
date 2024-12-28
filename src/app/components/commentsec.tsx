"use client"

import React, { useState } from "react";

interface Comment {
  id: number;
  name: string;
  text: string;
  date: string;
  profileImage: string;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [gender, setGender] = useState("male"); // New state for gender
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  const handleAddComment = () => {
    if (name.trim() && text.trim()) {
      const profileImage =
        gender === "male"
          ? "https://via.placeholder.com/150/0000FF/FFFFFF/?text=Male"
          : "https://via.placeholder.com/150/FF69B4/FFFFFF/?text=Female";

      const newComment: Comment = {
        id: comments.length + 1,
        name,
        text,
        date: new Date().toLocaleString(),
        profileImage,
      };

      setComments([...comments, newComment]);
      setName("");
      setText("");
    }
  };

  const handleEdit = (id: number, currentText: string) => {
    setEditId(id);
    setEditText(currentText);
  };

  const handleSaveEdit = () => {
    setComments(
      comments.map((comment) =>
        comment.id === editId ? { ...comment, text: editText } : comment
      )
    );
    setEditId(null);
    setEditText("");
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setEditText("");
  };

  return (
    <div className="w-full mx-auto mt-[60px] bg-darkblue">
      <h2 className="text-3xl font-bold text-center pt-[10px] text-mywhite">Add Comments</h2>

      <div className="p-4 w-[80%] mx-auto mt-[20px] grid grid-cols-2">
        {/* Comment Input */}
        <div className="mb-4 ">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Your Comment"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <button
            onClick={handleAddComment}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Comment
          </button>
        </div>

        {/* Display Comments */}
        <div className="ml-[30px] text-mywhite">
          {comments.length === 0 ? (
            <p>No comments yet. Be the first to comment!</p>
          ) : (
            comments.map((comment) => (
              <div
                key={comment.id}
                className="mb-4 p-2 border border-gray-200 rounded flex gap-4 items-start"
              >
                {/* Profile Image */}
                <img
                  src={comment.profileImage}
                  alt={`${comment.name}'s Profile`}
                  className="w-12 h-12 rounded-full"
                />

                {/* Comment Details */}
                <div className="flex-grow">
                  <p className="font-bold ">{comment.name}</p>
                  <p className="text-sm text-orange">{comment.date}</p>

                  {editId === comment.id ? (
                    <div>
                      <textarea
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="w-full text-black p-2 border border-gray-300 rounded"
                      ></textarea>
                      <div className="flex mt-2">
                        <button
                          onClick={handleSaveEdit}
                          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-2"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-between">
                      <p className="mt-1">{comment.text}</p>
                      <button
                        onClick={() => handleEdit(comment.id, comment.text)}
                        className="ml-4 px-2 py-1 bg-lightblue text-white  rounded hover:bg-white hover:text-black"
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;

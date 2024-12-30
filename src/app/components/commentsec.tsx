"use client";

import React, { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";

interface Comment {
  id: number;
  name: string;
  text: string;
  date: string;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  const handleAddComment = () => {
    if (name.trim() && text.trim()) {
      const newComment: Comment = {
        id: comments.length + 1,
        name,
        text,
        date: new Date().toLocaleString(),
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
<div className="w-full mx-auto mt-[60px] bg-black/10">
  <h2 className="text-3xl font-bold text-center pt-[10px] text-mywhite">
    Add Comments
  </h2>

  <div className="p-4 w-[90%] lg:w-[80%] mx-auto mt-[20px] grid grid-cols-1 lg:grid-cols-2 gap-4">
    {/* Comment Input */}
    <div className="mb-4">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mb-2 p-2 border border-gray-300 rounded text-black"
      />
      <textarea
        placeholder="Your Comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded text-black"
      ></textarea>
      <button
        onClick={handleAddComment}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full sm:w-auto"
      >
        Add Comment
      </button>
    </div>

    {/* Display Comments */}
    <div className="text-mywhite ">
      {comments.length === 0 ? (
        <p>No comments yet. Be the first to comment!</p>
      ) : (
        comments.map((comment) => (
          <div
            key={comment.id}
            className="mb-4 p-2 border border-gray-200 rounded flex flex-col sm:flex-row gap-4 items-start"
          >
            {/* Profile Image */}
            <div className="w-12 h-12 rounded-full border bg-lightblue border-gray-300 flex items-center justify-center">
              <IoPersonSharp className="text-[32px]" />
            </div>

            {/* Comment Details */}
            <div className="flex-grow">
              <p className="font-bold">{comment.name}</p>
              <p className="text-sm text-orange">{comment.date}</p>

              {editId === comment.id ? (
                <div>
                  <textarea
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="w-full text-black p-2 border border-gray-300 rounded"
                  ></textarea>
                  <div className="flex mt-2 flex-wrap gap-2">
                    <button
                      onClick={handleSaveEdit}
                      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
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
                <div className="mt-1 flex flex-col justify-between">
                  <p>{comment.text}</p>
                  <button
                    onClick={() => handleEdit(comment.id, comment.text)}
                    className=" px-4 py-1 text-center bg-lightblue text-white rounded hover:bg-white hover:text-black"
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

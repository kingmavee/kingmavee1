"use client";

import { useEffect, useState } from "react";

export default function Message() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch("/api/contact");
        const data = await res.json();
        setMessages(data.data || []);
      } catch (error) {
        console.error("Failed to fetch messages", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">

            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <h3 className="text-center mb-4">Messages</h3>

                {loading && (
                  <p className="text-center">Loading messages...</p>
                )}

                {!loading && messages.length === 0 && (
                  <p className="text-center text-muted">
                    No messages yet
                  </p>
                )}

                {!loading &&
                  messages.map((msg) => (
                    <div
                      key={msg._id}
                      className="border rounded p-3 mb-3"
                    >
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-1">{msg.name}</h6>
                        <small className="text-muted">
                          {new Date(msg.createdAt).toLocaleString()}
                        </small>
                      </div>

                      <p className="mb-1 text-muted">{msg.email}</p>
                      <p className="mb-0">{msg.message}</p>
                    </div>
                  ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

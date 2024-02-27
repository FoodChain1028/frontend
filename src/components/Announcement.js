import React from 'react';
import { Link } from 'react-router-dom';

// Announcement Component
const Announcement = () => {
    return (
        <div className="fixed-top position-absolute top-0 start-0">
            <div className="p-3 my-2 border">
                {/* Your announcement content here */}
                <p>Important Announcement</p>
                <Link to="/announcement/123">Read more...</Link> {/* Example announcement link */}
            </div>
        </div>
    );
};

// Posts Component
const Posts = () => {
    return (
        <div className="fixed-bottom position-absolute bottom-0 start-0">
            <div className="p-3 my-2 border">
                {/* Your post content here */}
                <h3>Latest Posts</h3>
                <ul>
                    <li><Link to="/post/1">Interesting Post Title</Link></li>
                    {/* Add more post links */}
                </ul>
            </div>
        </div>
    );
};

export { Announcement, Posts };

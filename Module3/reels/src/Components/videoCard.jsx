import { useState } from "react";
import "./videoCard.css"

let VideoCard = () => {

    let [playing, setPlaying] = useState(false);
    let [commentBoxOpen, setCommentBoxOpen] = useState(false);

    return (
        <div className="video-card">
            <p className="video-card-username">Fake user</p>

            <span className="video-card-music">
                <span class="material-icons"> music_note</span>
                <marquee>some song</marquee>
            </span>

            <span onClick={(e)=>
                    { if(commentBoxOpen){
                          setCommentBoxOpen(false);
                        }
                      else{
                        setCommentBoxOpen(true);
                      }
                    }
                  }
              class="material-icons-outlined video-card-comment">chat
            </span>

            <span class="material-icons-outlined video-card-like">favorite_border</span>
            
            {commentBoxOpen ? 
                <div className="video-card-comment-box">
                    <div className="actual-comments">
                       <div className="post-user-comment">
                           <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"/>
                           <div>
                                <h5>user name</h5>
                                <p>this is user's comments</p>
                           </div>
                       </div>
                       
                    </div>
                    <div className="comment-form">
                        <input type="text"/>
                        <button>Post</button>
                    </div>
                </div> : ""
            }

            <video onClick={(e) => {
                if (playing) {
                    e.currentTarget.pause();
                    setPlaying(false);
                }
                else {
                    e.currentTarget.play();
                    setPlaying(true);
                }
              }
            }
            loop src="https://www.appsloveworld.com/wp-content/uploads/2018/10/640.mp4" className="video-card-video">
            </video>
        
        </div>
    );
}

export default VideoCard;
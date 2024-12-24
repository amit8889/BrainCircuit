import React, { useRef, useState, useEffect, useCallback } from "react";

const VideoCard = () => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const currentMediaStream = useRef(null);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(false);

  const handleEndCall = () => {
    alert("Call Ended");
  };

  const handleSwip = () => {};

  const handleToggleAudio = () => {
    setIsAudioMuted(!isAudioMuted);
  };

  const handleToggleVideo = () => {
    setIsVideoMuted(!isVideoMuted);
  };

  const getStream = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: !isVideoMuted,
        audio: !isAudioMuted,
      });
      currentMediaStream.current = stream;
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Error accessing media devices", err);
    }
  }, [isAudioMuted, isVideoMuted]);

  const eventHandler = useCallback(async () => {
    //sockeet event
    // const socket ={};
    // socket.on("join-room",()=>{})
    // socket.on("leave-room",()=>{})
    // socket.on("new-peer",()=>{})
  }, []);
  useEffect(() => {
    if (!isVideoMuted || !isAudioMuted) {
      getStream();
    } else {
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = null;
      }
    }

    return () => {
      if (currentMediaStream.current) {
        const tracks = currentMediaStream.current.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [isAudioMuted, isVideoMuted, getStream]);

  useEffect(() => {
    eventHandler();
  }, [eventHandler]);
  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-center min-h-full sm:min-h-auto bg-white pt-32 sm:pt-36">
      {/* Video Container */}
      <div className="relative w-full min-h-[400px] sm:w-[40rem] sm:h-[25rem] bg-black rounded-lg overflow-hidden m-4">
        {/* Remote Video */}
        <div className="relative w-full h-full">
          <div className="text-center">
            <video
              ref={remoteVideoRef}
              autoPlay
              className="w-full h-full object-cover"
            ></video>
            <div role="status" className="sm:-mt-40">
              <svg
                aria-hidden="true"
                className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Local Video (floating in the corner) */}
        <div className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 border-4 border-white rounded-full overflow-hidden shadow-lg">
          <video
            ref={localVideoRef}
            autoPlay
            muted
            className="w-full h-full object-cover"
          ></video>
        </div>

        {/* Control Buttons */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-8 z-10">
          {/* Video Button */}
          <button
            className={`bg-gray-800 hover:bg-gray-900 text-white rounded-full min-w-[60px] py-4 shadow-lg`}
            onClick={handleToggleVideo}
          >
            <i
              className={`fas ${isVideoMuted ? "fa-video-slash" : "fa-video"}`}
            ></i>
          </button>

          {/* Audio Button */}
          <button
            className={`bg-gray-800 hover:bg-gray-900 text-white rounded-full min-w-[60px] shadow-lg`}
            onClick={handleToggleAudio}
          >
            <i
              className={`fas ${
                isAudioMuted ? "fa-microphone-slash" : "fa-microphone"
              }`}
            ></i>
          </button>

          {/* Swipe Button */}
          <button
            onClick={handleSwip}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full min-w-[60px] shadow-lg flex items-center justify-center"
          >
            <i className="fas fa-arrow-right"></i>
          </button>

          {/* End Call Button */}
          <button
            className="bg-red-500 hover:bg-red-600 text-white rounded-full min-w-[60px] shadow-lg"
            onClick={handleEndCall}
          >
            <i className="fas fa-phone-slash"></i>
          </button>
        </div>
      </div>

      {/* Chat Component */}
      <div className="w-full min-h-[300px] sm:w-[40rem] sm:h-[25rem] p-4 bg-gray-100 rounded-lg shadow-lg mt-4 sm:mt-0">
        <div className="flex flex-col h-full">
          <div className="flex-grow overflow-y-auto mb-4">
            {/* Example chat messages */}
            <div className="flex items-start space-x-2">
              <div className="bg-blue-500 text-white rounded-lg p-2 max-w-xs">
                Hello!
              </div>
            </div>
            <div className="flex items-start justify-end space-x-2">
              <div className="bg-green-500 text-white rounded-lg p-2 max-w-xs">
                Hi, how are you?
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="flex items-center mt-4">
            <input
              type="text"
              placeholder="Type a message"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="ml-2 text-blue-500">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

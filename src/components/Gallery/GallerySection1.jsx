
import React, { useEffect, useRef, useState, useCallback } from "react";
import "./GallerySection1.css";

const videoItems = [
  { id: 1, title: "Mango Export Packing", category: "Export Operations" },
  { id: 2, title: "Nashik Onion Export", category: "Fresh Produce" },
  { id: 3, title: "Fresh Mango Collection", category: "Fresh Produce" },
  { id: 4, title: "Madhache Gaon Visit", category: "Farm Visit" },
  { id: 5, title: "Honey Village Inspection", category: "Farm Visit" },
  { id: 6, title: "Honey Quality Standards", category: "Quality Inspection" },
  ...Array.from({ length: 14 }, (_, index) => ({
    id: index + 7,
    title: `Export Video ${String(index + 7).padStart(2, "0")}`,
    category: "Export Collection",
  })),
].map((item) => ({
  ...item,
  src: `/images/gallery/video${item.id}.mp4`,
}));

const formatTime = (time) => {
  if (!Number.isFinite(time)) return "0:00";

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${String(seconds).padStart(2, "0")}`;
};

const VideoCard = ({ item, activeAudioId, onAudioChange }) => {
  const videoRef = useRef(null);
  const activeAudioRef = useRef(activeAudioId);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const isMuted = activeAudioId !== item.id;

  activeAudioRef.current = activeAudioId;

  // Load and autoplay videos only when they approach the screen.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!video.src) {
              video.src = item.src;
              video.load();
            }

            video.muted = activeAudioRef.current !== item.id;

            video.play()
              .then(() => setIsPlaying(true))
              .catch(() => setIsPlaying(false));
          } else {
            video.pause();
            setIsPlaying(false);

            if (activeAudioRef.current === item.id) {
              video.muted = true;
              onAudioChange(null);
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: "150px" }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [item.id, item.src, onAudioChange]);

  // Keep audio settings synchronized across all video cards.
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = isMuted;
    }
  }, [isMuted]);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!video.src) {
      video.src = item.src;
      video.load();
    }

    if (video.paused) {
      video.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleAudio = () => {
    const video = videoRef.current;
    if (!video) return;

    if (activeAudioId === item.id) {
      video.muted = true;
      onAudioChange(null);
    } else {
      // Mute other videos and enable sound for this one.
      video.muted = false;
      onAudioChange(item.id);

      if (video.paused) {
        video.play()
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }
  };

  const openFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitEnterFullscreen) {
      video.webkitEnterFullscreen();
    }
  };

  const handleSeek = (event) => {
    const video = videoRef.current;
    if (!video || !duration) return;

    const newTime = Number(event.target.value);
    video.currentTime = newTime;
    setCurrentTime(newTime);
    setProgress((newTime / duration) * 100);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    const current = video.currentTime || 0;
    const total = video.duration || 0;

    setCurrentTime(current);
    setDuration(total);
    setProgress(total ? (current / total) * 100 : 0);
  };

  return (
    <article className="gv-card">
      <div className="gv-video-frame">
        <video
          ref={videoRef}
          className="gv-video"
          muted
          loop
          playsInline
          preload="none"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onLoadedMetadata={() => {
            const video = videoRef.current;
            if (video) setDuration(video.duration || 0);
            setIsLoaded(true);
          }}
          onTimeUpdate={handleTimeUpdate}
        />

        {!isLoaded && (
          <div className="gv-loading">
            <span className="gv-loading-ring"></span>
            <span>Loading video</span>
          </div>
        )}

        <div className="gv-video-shade"></div>

        <span className="gv-number">
          {String(item.id).padStart(2, "0")}
        </span>

        <span className="gv-category">
          {item.category}
        </span>

        <button
          type="button"
          className="gv-center-play"
          onClick={togglePlayback}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          title={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? "Ⅱ" : "▶"}
        </button>

        <div className="gv-controls">
          <div className="gv-controls-top">
            <button
              type="button"
              className={`gv-control-btn ${!isMuted ? "gv-sound-active" : ""}`}
              onClick={toggleAudio}
              aria-label={isMuted ? "Turn sound on" : "Mute video"}
              title={isMuted ? "Turn sound on" : "Mute video"}
            >
              <span>{isMuted ? "♪" : "♫"}</span>
              {isMuted ? "Sound Off" : "Sound On"}
            </button>

            <button
              type="button"
              className="gv-control-btn gv-fullscreen-btn"
              onClick={openFullscreen}
              aria-label="View fullscreen"
              title="View fullscreen"
            >
              ⛶
            </button>
          </div>

          <div className="gv-timeline">
            <span>{formatTime(currentTime)}</span>

            <input
              type="range"
              min="0"
              max={duration || 0}
              step="0.1"
              value={Math.min(currentTime, duration || 0)}
              onChange={handleSeek}
              aria-label={`Seek ${item.title}`}
              style={{
                "--gv-progress": `${progress}%`,
              }}
            />

            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>

      <div className="gv-card-info">
        <div className="gv-card-title">
          <span className="gv-card-label">NEXTGEN GLOBAL EXIM</span>
          <h3>{item.title}</h3>
        </div>

        <button
          type="button"
          className="gv-card-play"
          onClick={togglePlayback}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? "Ⅱ" : "▶"}
        </button>
      </div>
    </article>
  );
};

const GallerySection1 = () => {
  const [activeAudioId, setActiveAudioId] = useState(null);

  const handleAudioChange = useCallback((id) => {
    setActiveAudioId(id);
  }, []);

  return (
    <section className="gallery-videos-section">
      <div className="gallery-videos-container">
        <div className="gv-top-line">
          <span></span>
          {/* <span>22 VIDEO MOMENTS</span> */}
          <span></span>
        </div>

        <div className="gallery-videos-grid">
          {videoItems.map((item) => (
            <VideoCard
              key={item.id}
              item={item}
              activeAudioId={activeAudioId}
              onAudioChange={handleAudioChange}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection1;

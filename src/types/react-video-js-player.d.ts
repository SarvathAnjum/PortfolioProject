declare module 'react-video-js-player' {
    import { Component } from 'react';

    interface VideoPlayerProps {
        src: string;
        poster?: string;
        width?: string | number;
        height?: string | number;
        controls?: boolean;
        onReady?: (player: any) => void;
        autoplay?: boolean;
        muted?: boolean;
        preload?: 'auto' | 'metadata' | 'none';
        className?: string;
    }

    class VideoPlayer extends Component<VideoPlayerProps> {}

    export default VideoPlayer;
}

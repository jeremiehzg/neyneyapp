import { useEffect, useState } from "react";

type VideoProps = {
    id: string
}

interface Video {
    id: { videoId: string };
    snippet: {
        title: string;
        thumbnails: { default: { url: string } };
    };
}

export const YoutubeVideo: React.FC<VideoProps> = ({ id }) => {
    const [videos, setVideos] = useState<Video[]>([]);

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDJ3Ls1CLTTT33T5bgDxQc9sqrH5JS8R3g&channelId=UCDbI0yII6YSbSt-mYvJLREg&part=snippet&order=date&maxResults=5`);
                if (!res.ok) {
                    throw new Error("Failed to fetch video");
                }
                const data = await res.json();
                setVideos(data.items)
            } catch (error) {
                console.error("Error fetching videos:", error);
            }
        };

        fetchVideo();
    }, []);

    return (
        <div>
            <h3 className="text-3xl font-extrabold text-center mt-20 mb-20">Youtube</h3>
            {/* <ul>
                {videos.map((video) => (
                    <li key={video.id.videoId}>
                        <a
                            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={video.snippet.thumbnails.default.url}
                                alt={video.snippet.title}
                            />
                            <p>{video.snippet.title}</p>
                        </a>
                    </li>
                ))}
            </ul> */}
            <ul className="gap-4 place-items-center my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <li className="col-span-1">
                    <a
                        href={`https://www.youtube.com/watch?v=ZA9B5YsyyPs&t=2s&ab_channel=xNeyNey`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="https://i.ytimg.com/vi/ZA9B5YsyyPs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRnLjo1ZsTAfcypeQlMF-Mc_uMzw" alt="" />
                        <p>Merci ! ❤️ (récap 2023)</p>
                    </a>
                </li>
                <li className="col-span-1">
                    <a
                        href={`https://www.youtube.com/watch?v=ZA9B5YsyyPs&t=2s&ab_channel=xNeyNey`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="https://i.ytimg.com/vi/ZA9B5YsyyPs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRnLjo1ZsTAfcypeQlMF-Mc_uMzw" alt="" />
                        <p>Merci ! ❤️ (récap 2023)</p>
                    </a>
                </li>
                <li className="col-span-1">
                    <a
                        href={`https://www.youtube.com/watch?v=ZA9B5YsyyPs&t=2s&ab_channel=xNeyNey`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="https://i.ytimg.com/vi/ZA9B5YsyyPs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRnLjo1ZsTAfcypeQlMF-Mc_uMzw" alt="" />
                        <p>Merci ! ❤️ (récap 2023)</p>
                    </a>
                </li>
                <li className="col-span-1">
                    <a
                        href={`https://www.youtube.com/watch?v=ZA9B5YsyyPs&t=2s&ab_channel=xNeyNey`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="https://i.ytimg.com/vi/ZA9B5YsyyPs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRnLjo1ZsTAfcypeQlMF-Mc_uMzw" alt="" />
                        <p>Merci ! ❤️ (récap 2023)</p>
                    </a>
                </li>
                <li className="col-span-1">
                    <a
                        href={`https://www.youtube.com/watch?v=ZA9B5YsyyPs&t=2s&ab_channel=xNeyNey`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="https://i.ytimg.com/vi/ZA9B5YsyyPs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRnLjo1ZsTAfcypeQlMF-Mc_uMzw" alt="" />
                        <p>Merci ! ❤️ (récap 2023)</p>
                    </a>
                </li>
                <li className="col-span-1">
                    <a
                        href={`https://www.youtube.com/watch?v=ZA9B5YsyyPs&t=2s&ab_channel=xNeyNey`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="https://i.ytimg.com/vi/ZA9B5YsyyPs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRnLjo1ZsTAfcypeQlMF-Mc_uMzw" alt="" />
                        <p>Merci ! ❤️ (récap 2023)</p>
                    </a>
                </li>
            </ul>
        </div>
    )
} 
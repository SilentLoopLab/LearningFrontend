import { useOutletContext } from "react-router-dom";
import type { IContext } from "../../../types/utility";
import { useRef } from "react";
import { Axios } from "../../../config/axios";
import { Search } from "./helpers/Search";
import { Image } from "./helpers/Image";
export const Profile = () => {
    const { user, setAccount } = useOutletContext<IContext>();
    const image = useRef<HTMLInputElement | null>(null);
    const handleUpload = () => {
        if (image.current) {
            const selectedFile = image.current?.files?.[0];
            if (selectedFile) {
                const form = new FormData();
                form.append("profile-pic", selectedFile);
                Axios.patch<{ picture: string }>("/account/avatar", form)
                    .then((response) => {
                        setAccount({ ...user, avatar: response.data.picture });
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        }
    };
    return (
        <div className="space-y-8">
            {/* Profile Header Card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-pink-500/20 border border-indigo-500/20 shadow-xl shadow-indigo-500/10">
                {/* Cover Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>

                <div className="relative p-8 md:p-12">
                    {/* Profile Avatar and Info */}
                    <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
                        {/* Avatar Container */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                            <div className="relative">
                                <Image 
                                    src={user.avatar}
                                    onClick={() => image.current?.click()}
                                    alt="Profile"
                                    className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-slate-800 shadow-2xl object-cover ring-4 ring-indigo-500/30 group-hover:ring-indigo-400/50 transition-all duration-300"
                                />
                                <input
                                    type="file"
                                    style={{ display: "none" }}
                                    ref={image}
                                    onChange={handleUpload}
                                />
                                <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-slate-800 shadow-lg"></div>
                            </div>
                        </div>

                        {/* User Info */}
                        <div className="flex-1 text-center md:text-left mb-4">
                            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent mb-2">
                                {user.firstName} {user.lastName}
                            </h1>
                            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mb-3">
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                                <span className="text-sm font-medium">
                                    @{user.firstName?.toLowerCase()}
                                    {user.lastName?.toLowerCase()}
                                </span>
                            </div>
                        </div>

                        {/* Stats - Desktop */}
                        <div className="hidden lg:flex gap-6">
                            <div className="text-center px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-indigo-500/20">
                                <div className="text-3xl font-bold text-indigo-400">
                                    {user.posts.length}
                                </div>
                                <div className="text-sm text-gray-400">
                                    Posts
                                </div>
                            </div>
                            <div className="text-center px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20">
                                <div className="text-3xl font-bold text-purple-400">
                                    {user.followers.length}
                                </div>
                                <div className="text-sm text-gray-400">
                                    Followers
                                </div>
                            </div>
                            <div className="text-center px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-pink-500/20">
                                <div className="text-3xl font-bold text-pink-400">
                                    {user.followings.length}
                                </div>
                                <div className="text-sm text-gray-400">
                                    Following
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats - Mobile */}
                    <div className="grid grid-cols-3 gap-4 lg:hidden mt-8">
                        <div className="text-center px-4 py-3 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-indigo-500/20">
                            <div className="text-2xl font-bold text-indigo-400">
                                {user.posts.length}
                            </div>
                            <div className="text-xs text-gray-400">Posts</div>
                        </div>
                        <div className="text-center px-4 py-3 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20">
                            <div className="text-2xl font-bold text-purple-400">
                                {user.followers.length}
                            </div>
                            <div className="text-xs text-gray-400">
                                Followers
                            </div>
                        </div>
                        <div className="text-center px-4 py-3 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-pink-500/20">
                            <div className="text-2xl font-bold text-pink-400">
                                {user.followings.length}
                            </div>
                            <div className="text-xs text-gray-400">
                                Following
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Search />

            {/* Bio Section */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-indigo-500/10 shadow-lg p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-indigo-500/20 rounded-lg">
                        <svg
                            className="w-6 h-6 text-indigo-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-white">About</h2>
                </div>

                {user.bio ? (
                    <p className="text-gray-300 text-lg leading-relaxed">
                        {user.bio}
                    </p>
                ) : (
                    <p className="text-gray-500 italic">
                        No bio added yet. Share something about yourself!
                    </p>
                )}
            </div>
        </div>
    );
};

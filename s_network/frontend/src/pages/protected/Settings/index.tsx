import { useNavigate, useOutletContext } from "react-router-dom";
import type { IContext } from "../../../types/utility";
import { Axios } from "../../../config/axios";
import { Image } from "../profile/helpers/Image";
import { useState } from "react";
import { BioAdd } from "./helpers/BioAdd";
export const Settings = () => {
    const [condition, setCondition] = useState<boolean>(false);
    const { user, setAccount } = useOutletContext<IContext>();
    const navigate = useNavigate();

    const onChangePrivacy = async () => {
        if (!user) return;
        try {
            await Axios.patch("/account/privacy");
            setAccount({ ...user, isAccountPrivate: !user.isAccountPrivate });
        } catch (err) {
            navigate("/signin");
        }
    };

    return (
        user && (
            <div className="max-w-3xl mx-auto">
                <div className="bg-slate-900/40 border border-slate-700/30 rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center gap-6">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 p-1">
                            <Image
                                src={user.avatar}
                                alt="avatar"
                                className="w-full h-full object-cover rounded-full bg-gray-800"
                            />
                        </div>

                        <div className="flex-1">
                            <h2 className="text-xl font-bold text-white">
                                {user.firstName} {user.lastName}
                            </h2>
                            <p className="text-sm text-slate-400">
                                @{user.username}
                            </p>
                            <p className="text-sm text-slate-400 mt-1">
                                {user.email}
                            </p>
                        </div>

                        <div className="flex flex-col items-end gap-3">
                            <button
                                onClick={onChangePrivacy}
                                className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:opacity-95 disabled:opacity-50 transition"
                            >
                                {user.isAccountPrivate
                                    ? "Make Public"
                                    : "Make Private"}
                            </button>

                            <button
                                onClick={() => {
                                    localStorage.removeItem("token");
                                    navigate("/signin");
                                }}
                                className="px-4 py-2 rounded-md bg-slate-800/60 text-slate-200 border border-slate-700 hover:bg-slate-700/60 transition"
                            >
                                Logout
                            </button>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg bg-slate-800/30 border border-slate-700/20">
                            <h3 className="text-sm text-slate-300 font-semibold">
                                Account privacy
                            </h3>
                            <p className="text-sm text-slate-400 mt-2">
                                Your account is currently{" "}
                                <span className="font-medium text-white">
                                    {user.isAccountPrivate
                                        ? "Private"
                                        : "Public"}
                                </span>
                                . When private, only followers can see your
                                posts.
                            </p>
                        </div>

                        <div className="p-4 rounded-lg bg-slate-800/30 border border-slate-700/20">
                            <h3 className="text-sm text-slate-300 font-semibold">
                                Profile
                            </h3>
                            <p className="text-sm text-slate-400 mt-2">
                                Edit your profile information from the profile
                                page. Your bio:{" "}
                            </p>
                            {user.bio ? (
                                <button
                                    onClick={() =>
                                        setCondition((prev) => !prev)
                                    }
                                >
                                    edit bio
                                </button>
                            ) : (
                                <button
                                    onClick={() =>
                                        setCondition((prev) => !prev)
                                    }
                                >
                                    add bio
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                {condition && <BioAdd/>}
            </div>
        )
    );
};

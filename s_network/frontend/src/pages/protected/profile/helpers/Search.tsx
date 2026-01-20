import { useEffect, useState } from "react";
import { Axios } from "../../../../config/axios";
import type { IAccount, IContext } from "../../../../types/utility";
import { Link, useOutletContext } from "react-router-dom";
import { Image } from "./Image";
import { useDebounce } from "../../../../helpers/useDebounce";
export const Search = () => {
    const [text, setText] = useState<string>("");
    const [users, setUsers] = useState<IAccount[]>();
    const delayedText = useDebounce<string>(text);
    const { user } = useOutletContext<IContext>();
    useEffect(() => {
        if (!delayedText.trim()) {
            return;
        }
        Axios.get<{ users: IAccount[] }>(`/account/search/${delayedText}`)
            .then((res) => {
                setUsers(res.data.users);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [delayedText]);
    return (
        <div className="w-full">
            <label className="sr-only">Search users</label>
            <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400"></span>

                <input
                    id="search"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Search for friends or posts"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
                />
            </div>
            {users && users.length > 0 && (
                <ul className="mt-3 w-full bg-slate-900/80 border border-slate-700 rounded-xl shadow-sm divide-y divide-slate-700 overflow-hidden">
                    {users.map((u) => (
                        <li
                            key={u.id}
                            className="flex items-center gap-3 p-3 hover:bg-slate-800/60 cursor-pointer"
                            onClick={() => setText(u.firstName)}
                        >
                            <Image
                                className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-medium text-white"
                                src={u.avatar}
                            />

                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                    <div className="truncate">
                                        <div className="text-sm font-semibold text-slate-100 truncate">
                                            {u.username}
                                        </div>
                                        <div className="text-xs text-slate-400 truncate">
                                            {u.firstName} {u.lastName}
                                        </div>
                                        {u.username !== user.username ? (
                                            <Link to={"/profile/" + u.username}>
                                                view profile
                                            </Link>
                                        ) : (
                                            <Link to={"/profile"}>
                                                view profile
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

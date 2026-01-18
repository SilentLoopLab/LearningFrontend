import { useEffect, useState } from "react";
import { Axios } from "../../../../config/axios";

export const Search = () => {
    const [text, setText] = useState<string>("");
    useEffect(() => {
        if(!text.trim()) {
            return;
        }
        Axios.get(`/account/search/${text}`)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [text]);
    return (
        <div className="w-full">
            <label className="sr-only">Search users</label>
            <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400"></span>

                <input
                    id="search"
                    type="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="Search for friends or posts"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
                />
            </div>
        </div>
    );
};

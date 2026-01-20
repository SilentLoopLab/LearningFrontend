import { useState } from "react";
import { Axios } from "../../../../config/axios";

export const BioAdd = () => {
    const [bio, setBio] = useState<string>("");
    const onChangeBio = (bio: string) => {
        if (!bio.trim()) {
            return;
        }
        Axios.patch("/account/bio", { bio: bio})
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <>
            <form onSubmit={() => onChangeBio(bio)}>
                <label htmlFor=""></label>
                <input
                    type="text"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Bio..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

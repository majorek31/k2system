import React, { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { useValidToken } from '../hooks/useValidToken'
import { useUserInfo } from '../hooks/useContext/useUserInfo'
import SingleMedia from './mediaPageContainers/SingleMedia'


export default function MediaPage() {
    const { doFetch: AddMedia } = useFetch()
    const { isPending, error, data, doFetch: GetMedia } = useFetch()
    const { getToken } = useValidToken()
    const { isAdmin } = useUserInfo()

    const [files, setFiles] = useState([]);

    const handleChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles(selectedFiles);
        console.log("Wybrane pliki:", selectedFiles);
    };

    const SendMedia = async () => {
        if (isAdmin && files.length > 0) {
            const token = await getToken();
            if (!token) return;

            const formData = new FormData();
            formData.append('file', files[0]);


            AddMedia("/media", {
                method: "POST",
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });
        }
    };

    useEffect(() => {
        const getMedia = async () => {
            const token = await getToken();
            if (!token) return;

            if (isAdmin) {
                GetMedia("/media", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
            }
        }
        getMedia()
    }, [isAdmin])

    console.log(data)

    return (
        <div className="mt-55 h-screen">
            <div className='bg-white rounded-xl m-5 p-5'>
                <div className='flex jsutify-between'>
                    <div className='flex flex-col w-2/3'>

                        <label class="block mb-2 text-sm font-medium text-black" for="file_input">Upload file</label>
                        <input onChange={handleChange} class="block w-full text-sm   border border-gray-300 rounded-lg cursor-pointer text-white p-5 bg-slate-700" aria-describedby="file_input_help" id="file_input" type="file" />
                        <p class="mt-1 text-sm text-black " id="file_input_help">WEBP, PNG, JPG, JPEG or PDF</p>
                    </div>
                    <div className=' w-1/3 flex justify-center items-center'>

                        <button
                            type="submit"
                            onClick={() => SendMedia()}
                            className=" rounded border-3 border-slate-700 bg-white font-bold p-2 pr-10 pl-10 text-lg text-slate-700 shadow-xl transition-all duration-300 hover:scale-120 hover:cursor-pointer hover:bg-slate-700 hover:text-white active:scale-140"
                        >
                            Dodaj Plik
                        </button>
                    </div>
                </div>
            </div>
            <div className="m-5 mt-1 flex h-fit min-h-screen w-[90vw] flex-wrap justify-center gap-5 rounded-xl p-5 lg:m-auto">
                {isPending && <p>Loading...</p>}
                {data && data.map((el, i) => (
                    <SingleMedia el={el} i={i} />
                ))}
            </div>
        </div>
    )
}

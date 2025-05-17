import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { useParams } from 'react-router';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const DonationDetails = () => {
    const { data } = useContext(AuthContext)
    const params = useParams()
    const desiredData = data.filter(dat => dat.id == params.id)

    console.log(desiredData[0]);
    const handleToast = (e) => {
        e.preventDefault()
        toast.success('Thank you ! We will reach your destination soon', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });

    }




    return (
        <div className='flex justify-center items-center py-30'>
            <form onSubmit={handleToast}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg  border p-4 py-12 flex flex-col items-center" style={{ backgroundImage: `url(${desiredData[0]?.image})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>

                    <label className="label text-white text-xl font-semibold ">Quantity of Items</label>
                    <input type="number" className="input" placeholder="Quantity of Items" />

                    <label className="label text-white text-xl font-semibold">Item Type</label>
                    <input type="text" className="input" placeholder="Item Type" />

                    <label className="label text-white text-xl font-semibold ">Pick Up Location</label>
                    <input type="text" className="input" placeholder="Pick Up Location" />
                    <label className="label text-white text-xl font-semibold ">Additional Notes</label>
                    <textarea cols={"36"} rows={"10"} className='text-black bg-white rounded-box p-4 text-sm' placeholder='Give Your Notes'></textarea>
                    <button className='btn bg-[#1b6659] text-white border-0 shadow-none'>Donate</button>
                </fieldset>
            </form>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default DonationDetails;
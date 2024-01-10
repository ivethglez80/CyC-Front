import React, { useState, useEffect } from "react";


const CopyTextToClipboard = ({ info, value }) => {

    const [toCopy, setToCopy] = useState(false);
    let timeOut = null;

    useEffect(() => {
        return () => {
            if (timeOut) {
                clearTimeout(timeOut);
            }
        };
    }, []);

    const copyToClipboard = (textToCopy) => {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                console.log(info + " copiado al portapapeles");
                toggleBtnTxt();
            })
            .catch(err => {
                console.error("error al copiar el texto", err);
            })
    };

    const toggleBtnTxt = () => {
        setToCopy(true);
        timeOut = setTimeout(() => {
            setToCopy(false);
        }, 3000);
    };


    return (
        <button onClick={() => copyToClipboard(value)}
            className="bg-musgo text-white px-1 rounded-lg text-sm"
        >
            {
                toCopy ? `${info} copiado` : `copiar ${info}`
            } 
        </button>
    )
};

const BankData = () =>{
    return(
        <>
         <div className="col-span-1 w-full flex flex-col items-center font-julius py-6">
                        <p className="font-bold pb-4">nombre de banco</p>

                        <div className="flex flex-row pb-4">
                            <p>CBU: 12345678912  <CopyTextToClipboard info="CBU" value="12345678912" /> </p>
                        </div>

                        <div className="flex flex-row">
                            <p>Alias: alias  <CopyTextToClipboard info="Alias" value="alias" /> </p>
                        </div>
    </div>
        </>
    )
}

export default BankData;
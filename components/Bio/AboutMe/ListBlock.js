import { useEffect, useState } from "react"
import { baseDarkText  } from "../../../styles/colors"


export default function ListBlock({ title,listProps, orientation }) {

    const [verticalStyleUl, setVerticalStyleUl] = useState()
    const [verticalStyleLi, setVerticalStyleLi] = useState()

    const checkOrientation = () =>{
        if (orientation === "vertical"){
            setVerticalStyleUl(`dark:${baseDarkText()} inline-block pr-3 align-top text-sm w-1/5`)
            setVerticalStyleLi("text-semibold pb-1")
        } else {
            setVerticalStyleUl(`dark:${baseDarkText()} inline-block inline-grid grid-cols-5 gap-2 text-sm pl-5 w-4/5`)
            setVerticalStyleLi("text-semibold col-span-full")
            
        }
    }

    useEffect(()=>{
        checkOrientation()

    },[])

      return (
                
           <ul className={verticalStyleUl}> 
          
       
                    <li className={verticalStyleLi}>{title}: </li>

                    {
                        listProps.map((item, idx) =>
                        
                            <li
                                key={idx}
                                className="img-li pl-5 list-inside"
                            >
                                {item}
                            </li>
                        )
                    }

                </ul>

    )
}
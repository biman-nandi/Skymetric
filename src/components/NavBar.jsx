import { FaSearch } from 'react-icons/fa';
import { MdWbSunny, MdDarkMode } from "react-icons/md";
import { useState } from "react"



export default function NavBar(props) {
    const [inputCity, setInputCity] = useState("")
    return(
        <header>
            <nav className="flex justify-between items-center">
                {
                    props.darkMode ?
                    <MdWbSunny 
                    onClick={() => props.setDarkMode(prev => !prev)}
                    className='text-gray-100 text-4xl cursor-pointer' 
                    />
                    :
                    <MdDarkMode 
                        onClick={() => props.setDarkMode(prev => !prev)}
                        className='text-gray-900 text-4xl cursor-pointer' 
                    /> 
                }

                <div className={`w-[50%] flex items-center p-2.5 border rounded-full gap-3 shadow-2xl shadow-black ${props.darkMode ? "bg-[#313030]" : "bg-[#D9D9D9]"} border-none`}>
                    <FaSearch className='text-gray-400 text-2xl' />
                    <input 
                        type="text" 
                        name="inputCity" 
                        id="inputCity" 
                        value={inputCity}
                        onChange={(e) => setInputCity(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key == 'Enter') {
                                props.setCity(inputCity);
                            }
                        }}
                        placeholder="Search for your preffered city...
                        " 
                        className="
                            w-full
                            bg-transparent
                            placeholder-gray-400
                            focus:outline-none
                        "
                    />
                </div>

                <div 
                    className='
                        py-2 
                        px-3
                        flex 
                        items-center 
                        text-white 
                        bg-[#4CBB17] 
                        rounded-full 
                        shadow-2xl
                        shadow-black
                        cursor-pointer
                        gap-1
                    '
                >
                    <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="35" height="35" fill="url(#pattern0_17_271)"/>
                    <defs>
                    <pattern id="pattern0_17_271" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_17_271" transform="scale(0.0151515)"/>
                    </pattern>
                    <image id="image0_17_271" width="60" height="60" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE9klEQVR4nO2ca4hVVRTHf3PnRnStCLO3VghCWJGG9CAfQ1GovSDpYUFlBkF96EFlD8QeSESR0of62ocKsgzCz5aIQilmamn2mDIa0zC8zURONTmxaW1YbPY9s/c599xzxnv+sGDmzt5rrb3O2Xuv1x2oUBrUhLoaS4BB4HfgHroUE4BhYFTI/NygCzFNGcGS+azrMK0yxP+oDCGoDNHthjgO6AOuCDDEZcBVQC/H0OLvANYATVnsigBDrJDfDwHvAIvGq1FOBB4G9nkWG2MITT8IT+N/jAvcBhzwLOQf4GPgmgBDXA18Aox4xuyXN6S0OBv4yKP45+I+T0xxWJ4K3Afs8IxdC5xJyTATGHAU3QosAHracGsYHjcA25zxPwMzKAkWAkNKuT+BxwMOt/M8hjCfJaEOPAUcUXMGxeCFYoHsfavUd8AFgXNN6L1Hzd2d8Pa4uBD43jl/zAMpBDPkaVhlPgVOj+QxGVgldE7k3DOALUr+kGzRjuIs50z4rKBrbYLItnoMiG4dw1olvF+eTlGYBHyj9FnXKcGLlFBzaE2neEx3DtBb8xbYEIfGClyWko85KOcCLwBvCT0PzM6Qv3xS6XVAvNvc8JAStk2us1hcC3zpuTot7VLeZwx6xXexfB5JwSNYkL6ybiQejwH/JhjB0kjKhSxUPH6UoC/Xs2FHxJ1vsRg4GmAES0dT7HWj03bF43ZywNtKwNLIuacAv7V48rtkq/gCrF+BkyNl3avmv0cO2+KQUt5cWTF4wrPITcD5asxUYLNn3KORsiYqb/dwu7fHbKXYxhTzNzqL+0UiSxfGwAedsSYcj8V6Nd9kxdqGS+WqXJaSsbu4NxLGvumMNdd1LOYqfWdRIvzhLG55wtjlzlgTzxTiu0+NoHMDbw/XbzAJnFZY54z9IoB/TXSJ0b2RVJAdjrjeLH0tUWQSXvdcjdd5xs33XLGvjcF7CrA3hd7DvsJzTSrSoynJhNFJ6PPM+QtYKQfxHOAl4G/POPP3JKzOoHfTdelrGQ0x1lMz2+erFHx3MjZWtdMQyGuSZmvsDkyqPJiC9wMBfCc7ma5QMtHq3a2YNnI6LA1OinzrmhERZE87D8tO4JUIQ7xMCTFLOSjzMvA5zcl4t6LBFG68xry8HKq+jC6vxsoAQ7yYUcaGvFzsugQwaYMuNxI9PMbZ4FbFYjBJBV3NPHISa5SyJtTNgmcTDPF0Rt735xmGI+V9K2B7isSMxgktKuX75G9p0SP5jVwTM3VJf1khWctsd3kMcWdGnjcrXj/llapD8ohW0NaMzRs9kpyx/DZnfMvqTpout+Qt4uDo3geTecoCk5x5VfyLLAekwTOdTOfbRhBd+S5DgediJzwwOnYEH5ao5GectG+LKPnZ7piyFIF1UWdAdOsoZjptAVtSvBlTJJ+wOiC5E9IWYHKrpWgU6QcuCpxbczJLeyIbRfrV3BFpLSoU8503Y1i8w3qHWoeGymAEi0ukscvtprupjc1k13uayfYXuR1awbT6fdAi3bbUE6iFthcukUz2qCcT3vGDMQa3OD0Ueh9viGg4Xe+cP5YO5hVD5IHjJR+4t40tyKZM+JyE8eMOvdJO8K6qhscYwuQT3pfIN7cAqgijzAEuDzDElbI9jpnFJ6Frv7jiojKEoDKEoDKEoDKEoOEkU45061eibeG5KdSyINstqFX/NoHy4D9e/P+0/AvEkwAAAABJRU5ErkJggg=="/>
                    </defs>
                    </svg>

                    <p className='font-bold'>Current Location</p>
                </div>
            </nav>
        </header>
    )
}


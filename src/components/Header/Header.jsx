import "./Header.css"



export default function Header(){
    return(
            <header className="flex aic padding-container pt32 jcsb fixed ">
                <img className="logo" src="./img/BonhommeRoby.svg" alt="Logo Roby" />
                <span className="fw900 nav-size" >
                    Menu.
                </span>
            </header>
    )
}
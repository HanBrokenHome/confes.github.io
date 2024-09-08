export default function LoginStatus({Nama, isLogin}) {
{
    if(isLogin){
        return(
            <div>
                <h1>Welcome {Nama}</h1>
            </div>
        )
    }
    else{
        return <h1>Ealah Karepmu</h1>
    }
}
}
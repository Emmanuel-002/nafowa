

const SubmitMessage = () => {
    return(
        <div style={{
            display:'flex',
            flexDirection:'column', 
            justifyContent:'center', 
            alignItems:'center', 
            height:'100vh',
            }}>
                <span
                    style={{
                        backgroundColor:'#1565c0',
                        color:'#fff',
                        padding:'10px',
                        borderRadius:'5px'
                    }}  
                >
                    Thank you for contacting NAFOWA
                </span><br />
                <a href="https://nafowa.onrender.com">Go back</a>

        </div>
    )
}

export default SubmitMessage
const styles = {
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: '100',
        padding: '20px'
    },
    appLogo: {
        height: '35px'
    },
    card: {
        height: '400px',
        width: '400px',
        backgroundRepeat: 'no-repeat',
        margin: 'auto',
        padding: '10px',
        position: 'relative',
        backgroundColor: '#fff',
        boxShadow: '0px 18px 53px 0px rgba(0,0,0,0.2)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '20px'
    },
    swipe: {
        position: 'absolute'
    },
    cardContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '5vh',
        width: '100%',
        height: '100%'
    },
    cardContent: {

    },
    cardName: {
        position: 'absolute',
        bottom: '0px',
        margin: '10px',
        color: "#fff"
    },
    footerActions: {
        position: 'fixed',
        display: 'flex',
        bottom: '5vh',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    replay:{
padding: '1vh',
color: '#f5b748'
    },
    star:{
        padding: '1vh',
        color: '#62b4f9'
    },
    flash:{
        padding: '1vh',
        color: '#f5b748'
    },
    close:{
        padding: '1vh',
        color: '#ec5e6f'
    },
    fav:{
        padding: '1vh',
        color: '#915dd1'
    }
}

export default styles;
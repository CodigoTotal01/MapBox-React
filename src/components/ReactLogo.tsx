import  moduleName from '../../public/vite.svg'

export const ReactLogo = () => {
    return (
        <img style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '30px'
        }} src={moduleName} alt="bvite Logo"/>
    )
}
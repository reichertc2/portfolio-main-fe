
interface IMainContainerProps {
    children: React.ReactNode
}

export const MainContainer: React.FC<IMainContainerProps> = ({ children }) => {

    const styles = {
        container: `m-auto w-3/4`
    }

    return (
        <>

            <main className={styles.container} >
                {children}
            </main>
        </>
    )
}

export default MainContainer;
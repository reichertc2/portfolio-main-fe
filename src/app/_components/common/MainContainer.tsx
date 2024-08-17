
interface IMainContainerProps {
    children: React.ReactNode
}

export const MainContainer: React.FC<IMainContainerProps> = ({ children }) => {

    const styles = {
        container: `snap-y snap-mandatory m-auto w-4/5`
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
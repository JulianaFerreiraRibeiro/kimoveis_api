import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(():void => {
    console.log('Server is running')

    const PORT: number = Number(process.env.PORT) ||  3000
    app.listen(PORT, () => console.log('Servidor executando'))
}).catch((err: unknown): void => {
    console.log('Error during Data Source initialization', err)
})